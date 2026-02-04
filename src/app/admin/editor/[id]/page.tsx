'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useUser, useFirestore, useDoc } from '@/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, Save, Globe, Image as ImageIcon, FileText, Layout, ArrowLeft, Link as LinkIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useMemoFirebase } from '@/firebase';
import Link from 'next/link';

const ArticleEditorPage = () => {
  const params = useParams();
  const id = params.id as string;
  const isNew = id === 'new';
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image: '',
    category: 'Alam',
    type: 'destination' as 'destination' | 'story',
    date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
  });

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
        category: article.category || 'Alam',
        type: article.type || 'destination',
        date: article.date || formData.date
      });
    }
  }, [article]);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

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

      toast({ title: 'Berhasil', description: 'Artikel telah disimpan dan dipublikasikan.' });
      if (isNew) {
        router.push(`/admin/editor/${articleId}`);
      }
    } catch (error) {
      console.error(error);
      toast({ variant: 'destructive', title: 'Error', description: 'Gagal menyimpan artikel. Periksa izin database Anda.' });
    } finally {
      setIsSaving(false);
    }
  };

  if (isUserLoading || (isLoading && !isNew)) {
    return <div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-xs">Loading Editor...</div>;
  }

  return (
    <div className="min-h-screen bg-secondary/20 p-8 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
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
              className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-10 gap-3 font-black uppercase tracking-widest text-[10px]"
            >
              <Save size={18} />
              {isSaving ? 'Saving...' : 'Publish Article'}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="rounded-none border-2 border-black/5 shadow-xl">
              <CardHeader className="border-b p-8 bg-white">
                <CardTitle className="text-xl font-black uppercase tracking-tight flex items-center gap-3">
                  <FileText className="text-primary" size={20} />
                  Main Content
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Article Title</Label>
                  <Input 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="E.g. Keajaiban Pagi di Bukit Sikunir"
                    className="rounded-none border-2 border-black/10 focus:border-primary h-14 text-xl font-black uppercase tracking-tight"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Article Content</Label>
                  <Textarea 
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    placeholder="Tuliskan narasi mendalam di sini..."
                    className="rounded-none border-2 border-black/10 focus:border-primary min-h-[500px] font-medium leading-relaxed"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="rounded-none border-2 border-black/5 shadow-xl bg-white">
              <CardHeader className="border-b p-6">
                <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <Globe className="text-primary" size={16} />
                  SEO & URL Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">URL Slug</Label>
                  <div className="flex">
                    <div className="bg-secondary flex items-center px-3 border-2 border-r-0 border-black/10 text-[9px] font-bold text-muted-foreground">/artikel/</div>
                    <Input 
                      value={formData.slug}
                      onChange={(e) => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})}
                      placeholder="url-artikel-anda"
                      className="rounded-none border-2 border-black/10 focus:border-primary h-10 text-[11px] font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Meta Excerpt (SEO Description)</Label>
                  <Textarea 
                    value={formData.excerpt}
                    onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                    placeholder="Ringkasan pendek..."
                    className="rounded-none border-2 border-black/10 focus:border-primary h-24 text-[11px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-none border-2 border-black/5 shadow-xl bg-white">
              <CardHeader className="border-b p-6">
                <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <Layout className="text-primary" size={16} />
                  Media & Category
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Article Image URL (Imgur/External)</Label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      placeholder="https://i.imgur.com/your-image.jpg"
                      className="pl-10 rounded-none border-2 border-black/10 focus:border-primary h-10 text-[11px] font-bold"
                    />
                  </div>
                  {formData.image && (
                    <div className="mt-4 aspect-video relative border-2 border-black/10 overflow-hidden bg-gray-100">
                      <img src={formData.image} alt="Preview" className="object-cover w-full h-full" />
                    </div>
                  )}
                  <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-tight mt-2">Paste URL gambar dari Imgur atau sumber lainnya di sini.</p>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Category</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(val) => setFormData({...formData, category: val})}
                  >
                    <SelectTrigger className="rounded-none border-2 border-black/10 h-10 font-bold text-xs">
                      <SelectValue placeholder="Pilih Kategori" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-2">
                      <SelectItem value="Alam">Alam & Petualangan</SelectItem>
                      <SelectItem value="Budaya">Budaya & Warisan</SelectItem>
                      <SelectItem value="Kuliner">Kuliner & Minuman</SelectItem>
                      <SelectItem value="Sejarah">Sejarah</SelectItem>
                      <SelectItem value="Sosial">Masyarakat & Sosial</SelectItem>
                      <SelectItem value="Geografis">Geografi & Geologi</SelectItem>
                      <SelectItem value="Tips">Tips & Panduan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Content Type</Label>
                  <Select 
                    value={formData.type} 
                    onValueChange={(val: any) => setFormData({...formData, type: val})}
                  >
                    <SelectTrigger className="rounded-none border-2 border-black/10 h-10 font-bold text-xs">
                      <SelectValue placeholder="Pilih Tipe" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-2">
                      <SelectItem value="destination">Destination (See & Do)</SelectItem>
                      <SelectItem value="story">Story (Blog)</SelectItem>
                    </SelectContent>
                  </Select>
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