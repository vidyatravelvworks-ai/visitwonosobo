'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUser, useFirestore, useDoc } from '@/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Save, Globe, FileText, Layout, ArrowLeft, Link as LinkIcon, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useMemoFirebase } from '@/firebase';
import Link from 'next/link';

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

  const queryType = searchParams.get('type') as 'destination' | 'story' || 'destination';

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image: '',
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
    <div className="min-h-screen bg-secondary/20 p-8 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <Button variant="ghost" asChild className="rounded-none hover:bg-transparent pl-0 h-auto group">
            <Link href="/admin" className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Dashboard
            </Link>
          </Button>
          <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-10 gap-3 font-black uppercase tracking-widest text-[10px]"
          >
            <Save size={18} />
            {isSaving ? 'Saving...' : 'Publish Article'}
          </Button>
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
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Featured Image URL</Label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      placeholder="https://images.unsplash.com/..."
                      className="pl-10 rounded-none border-2 border-black/10 focus:border-primary h-12 text-[11px] font-bold"
                    />
                  </div>
                  <p className="text-[9px] font-medium text-muted-foreground italic">Gunakan URL dari Unsplash, Picsum, atau Cloudinary untuk hasil terbaik.</p>
                </div>

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
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Content Type</Label>
                  <div className="h-10 border-2 px-3 flex items-center text-xs font-bold bg-muted/20 uppercase">{formData.type}</div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Category</Label>
                  <Select value={formData.category} onValueChange={(val) => setFormData({...formData, category: val})}>
                    <SelectTrigger className="rounded-none border-2 text-xs font-bold"><SelectValue /></SelectTrigger>
                    <SelectContent>{currentCategories.map(cat => <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {formData.image && (
              <Card className="rounded-none border-2 border-black/5 shadow-xl bg-white overflow-hidden">
                <CardHeader className="border-b p-4 bg-secondary/10">
                  <CardTitle className="text-[9px] font-black uppercase tracking-widest">Image Preview</CardTitle>
                </CardHeader>
                <div className="aspect-video relative bg-muted">
                  <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleEditorPage;
