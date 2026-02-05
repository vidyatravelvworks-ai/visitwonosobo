'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useUser, useFirestore, useDoc } from '@/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Save, Globe, FileText, ArrowLeft, Link as LinkIcon, Sparkles, Loader2, Search, Tag, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useMemoFirebase } from '@/firebase';
import Link from 'next/link';
import { generateArticle } from '@/ai/flows/generate-article-flow';

interface PageProps {
  params: Promise<{ id: string }>;
}

const ArticleEditorPage = ({ params }: PageProps) => {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const isNew = id === 'new';
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const queryType = searchParams.get('type') as 'destination' | 'story' || 'destination';

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image: '',
    metaTitle: '',
    category: queryType === 'destination' ? 'Alam' : 'Sejarah',
    type: queryType,
    date: ''
  });

  useEffect(() => {
    if (isNew && !formData.date) {
      setFormData(prev => ({
        ...prev,
        date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
      }));
    }
  }, [isNew, formData.date]);

  const docRef = useMemoFirebase(() => {
    if (!db || isNew) return null;
    return doc(db, 'articles', id);
  }, [db, id, isNew]);

  const { data: article, isLoading } = useDoc(docRef);

  useEffect(() => {
    if (article) {
      setFormData({
        title: article.title || '',
        slug: article.slug || article.id || '',
        excerpt: article.excerpt || '',
        content: article.content || '',
        image: article.image || '',
        metaTitle: article.metaTitle || '',
        category: article.category || (article.type === 'destination' ? 'Alam' : 'Sejarah'),
        type: article.type || 'destination',
        date: article.date || formData.date
      });
    }
  }, [article, formData.date]);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const handleGenerateAI = async () => {
    if (!formData.title) {
      toast({
        variant: 'destructive',
        title: 'Judul Kosong',
        description: 'Silakan isi judul artikel terlebih dahulu sebelum generate konten.',
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateArticle({ title: formData.title });
      setFormData(prev => ({
        ...prev,
        content: result.content,
        metaTitle: result.metaTitle,
        excerpt: result.metaDescription
      }));
      toast({
        title: 'Berhasil',
        description: 'Artikel dan Meta Tags telah dihasilkan oleh AI.',
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Gagal',
        description: 'Terjadi kesalahan saat membuat artikel otomatis.',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    if (!formData.title || !formData.slug || !formData.content) {
      toast({ variant: 'destructive', title: 'Error', description: 'Judul, Slug, dan Konten wajib diisi.' });
      return;
    }

    setIsSaving(true);
    try {
      const articleId = formData.slug.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      const finalDocRef = doc(db, 'articles', articleId);
      
      await setDoc(finalDocRef, {
        ...formData,
        id: articleId,
        slug: articleId,
        updatedAt: serverTimestamp(),
      }, { merge: true });

      toast({ title: 'Berhasil', description: 'Artikel telah disimpan.' });
      router.push('/admin');
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: 'Gagal menyimpan artikel.' });
    } finally {
      setIsSaving(false);
    }
  };

  const destinationCategories = [
    { value: "Alam", label: "Nature & Adventure" },
    { value: "Budaya", label: "Heritage & Culture" },
    { value: "Kuliner", label: "Food & Drink" },
  ];

  const storyCategories = [
    { value: "Sejarah", label: "Sejarah & Warisan" },
    { value: "Sosial", label: "Masyarakat & Budaya" },
    { value: "Geografis", label: "Bentang Alam & Geografis" },
    { value: "Tips", label: "Tips & Panduan" },
  ];

  const currentCategories = formData.type === 'destination' ? destinationCategories : storyCategories;

  if (isUserLoading || (isLoading && !isNew)) {
    return <div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-xs">Loading Editor...</div>;
  }

  return (
    <div className="min-h-screen bg-secondary/10 flex flex-col">
      {/* Action Bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-8 py-4 flex justify-between items-center">
        <Button variant="ghost" asChild className="rounded-none hover:bg-transparent pl-0 h-auto group">
          <Link href="/admin" className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Dashboard
          </Link>
        </Button>
        <div className="flex gap-4">
          <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-10 gap-3 font-black uppercase tracking-widest text-[10px]"
          >
            <Save size={16} />
            {isSaving ? 'Saving...' : 'Publish Article'}
          </Button>
        </div>
      </div>

      {/* Hero Preview Section (Fixed at top half) */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-black">
        {formData.image && (
          <div className="absolute inset-0 z-0">
            <img
              src={formData.image}
              alt="Hero Preview"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
        )}
        <div className="container mx-auto px-12 relative z-10 text-center space-y-4 max-w-4xl">
          <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-white/70 uppercase tracking-[0.3em]">
            <span className="flex items-center gap-2">
              <Tag className="h-3 w-3 text-primary" />
              {formData.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-2">
              <Calendar className="h-3 w-3 text-primary" />
              {formData.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
            {formData.title || "Judul Artikel Anda"}
          </h1>
          <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] italic">
            Visual Preview (Sama dengan Tampilan Blog)
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto w-full p-8 md:p-12 -mt-20 relative z-20 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="rounded-none border-2 border-black/5 shadow-2xl bg-white">
              <CardHeader className="border-b p-8">
                <CardTitle className="text-xl font-black uppercase tracking-tight flex items-center gap-3">
                  <FileText className="text-primary" size={20} />
                  Main Content
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Image URL Input Moved Here */}
                <div className="space-y-2 p-6 bg-secondary/20 border-l-4 border-primary">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <LinkIcon size={12} /> Featured Image URL
                  </Label>
                  <Input 
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="Masukkan URL gambar dari Unsplash/Picsum..."
                    className="rounded-none border-2 border-black/10 focus:border-primary h-12 text-[11px] font-bold"
                  />
                  <p className="text-[9px] font-medium text-muted-foreground italic mt-1">
                    *Gambar akan langsung muncul sebagai latar belakang di atas secara real-time.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Article Title</Label>
                  <Input 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="E.g. Keajaiban Pagi di Bukit Sikunir"
                    className="rounded-none border-2 border-black/10 focus:border-primary h-14 text-xl font-black uppercase tracking-tight"
                  />
                  <div className="pt-4">
                    <Button
                      type="button"
                      onClick={handleGenerateAI}
                      disabled={isGenerating}
                      className="bg-black text-white hover:bg-primary rounded-none h-12 px-8 gap-3 font-bold uppercase tracking-widest text-[10px] shadow-lg transition-all"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="animate-spin h-4 w-4" />
                          Menulis Artikel...
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4" />
                          Buat Artikel Instan
                        </>
                      )}
                    </Button>
                    <p className="text-[9px] font-medium text-muted-foreground italic mt-2">
                      *AI akan menulis narasi ilmiah ~1000 kata dan Meta Tags otomatis.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Article Content (Markdown Support)</Label>
                  <Textarea 
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    placeholder="Tuliskan narasi mendalam di sini atau gunakan tombol AI di atas..."
                    className="rounded-none border-2 border-black/10 focus:border-primary min-h-[600px] font-medium leading-loose p-8 text-sm"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="rounded-none border-2 border-black/5 shadow-xl bg-white sticky top-28">
              <CardHeader className="border-b p-6">
                <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <Globe className="text-primary" size={16} />
                  Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">URL Slug</Label>
                  <Input 
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})}
                    className="rounded-none border-2 border-black/10 h-10 text-[11px] font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Category</Label>
                  <Select value={formData.category} onValueChange={(val) => setFormData({...formData, category: val})}>
                    <SelectTrigger className="rounded-none border-2 text-xs font-bold"><SelectValue /></SelectTrigger>
                    <SelectContent>{currentCategories.map(cat => <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>)}</SelectContent>
                  </Select>
                </div>

                <div className="h-px bg-black/5 w-full my-6" />

                <div className="space-y-4">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <Search size={14} /> SEO & Meta Tags
                  </Label>
                  <div className="space-y-4 p-4 bg-secondary/20">
                    <div className="space-y-1">
                      <Label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Meta Title</Label>
                      <Input 
                        value={formData.metaTitle}
                        onChange={(e) => setFormData({...formData, metaTitle: e.target.value})}
                        className="rounded-none border-2 text-[10px] h-9 font-bold"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Meta Description / Excerpt</Label>
                      <Textarea 
                        value={formData.excerpt}
                        onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                        className="rounded-none border-2 text-[10px] h-24 font-medium leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleEditorPage;