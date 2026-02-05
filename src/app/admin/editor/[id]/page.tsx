'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  Save, Globe, FileText, ArrowLeft, Sparkles, Loader2, 
  Search, Tag, Calendar, Layers, Activity, CheckCircle2, AlertCircle, Clock,
  Image as ImageIcon, ExternalLink, User as UserIcon
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { generateArticle } from '@/ai/flows/generate-article-flow';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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
    date: '', 
    author: 'Admin Lokal',
    focusKeyword: ''
  });

  const getTodayFormatted = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    return `${day} ${months[now.getMonth()]} ${now.getFullYear()}`;
  };

  useEffect(() => {
    if (isNew) setFormData(prev => ({ ...prev, date: getTodayFormatted() }));
  }, [isNew]);

  const docRef = useMemoFirebase(() => db && !isNew ? doc(db, 'articles', id) : null, [db, id, isNew]);
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
        category: article.category || 'Alam',
        type: article.type || 'destination',
        date: article.date || getTodayFormatted(),
        author: article.author || 'Admin Lokal',
        focusKeyword: article.focusKeyword || ''
      });
    }
  }, [article]);

  const handleGenerateAI = async () => {
    if (!formData.title) {
      toast({ variant: 'destructive', title: 'Judul Kosong', description: 'Masukkan judul terlebih dahulu.' });
      return;
    }
    setIsGenerating(true);
    try {
      const result = await generateArticle({ 
        title: formData.title, 
        focusKeyword: formData.focusKeyword 
      });
      
      let suggestedImage = formData.image;
      if (result.suggestedImageId) {
        const found = PlaceHolderImages.find(img => img.id === result.suggestedImageId);
        if (found) suggestedImage = found.imageUrl;
      }

      setFormData(prev => ({
        ...prev,
        content: result.content,
        metaTitle: result.metaTitle,
        excerpt: result.metaDescription,
        focusKeyword: result.focusKeywordSuggested || prev.focusKeyword,
        image: suggestedImage,
        slug: prev.slug || formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
      }));
      toast({ title: 'Berhasil', description: 'Artikel SEO 100% telah dibuat.' });
    } catch (error: any) {
      console.error(error);
      const isQuota = error.message?.includes('QUOTA_EXCEEDED') || error.message?.includes('429');
      toast({ 
        variant: 'destructive', 
        title: isQuota ? 'Kuota AI Habis' : 'Gagal', 
        description: isQuota 
          ? 'Batas penggunaan gratis tercapai. Mohon tunggu 60 detik sebelum mencoba lagi.' 
          : 'Terjadi kesalahan pada AI Write.' 
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = async () => {
    if (!db) return;
    setIsSaving(true);
    try {
      const articleId = formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-');
      await setDoc(doc(db, 'articles', articleId), {
        ...formData,
        id: articleId,
        updatedAt: serverTimestamp(),
      }, { merge: true });
      toast({ title: 'Berhasil', description: 'Artikel disimpan.' });
      router.push('/admin');
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error' });
    } finally {
      setIsSaving(false);
    }
  };

  const getSEO = () => {
    const words = formData.content.trim().split(/\s+/).filter(w => w.length > 0).length;
    const content = formData.content.toLowerCase();
    const keyword = formData.focusKeyword.toLowerCase();
    const checks = [
      { id: 1, label: 'Keyword in Content', pass: keyword && content.includes(keyword) },
      { id: 2, label: 'Meta Desc (140-160)', pass: formData.excerpt.length >= 140 && formData.excerpt.length <= 165 },
      { id: 3, label: 'Length (>1100 words)', pass: words >= 1100 },
      { id: 4, label: 'Meta Title (50-60)', pass: formData.metaTitle.length >= 50 && formData.metaTitle.length <= 65 },
      { id: 5, label: 'Keyword in Start', pass: keyword && content.split('\n')[0]?.includes(keyword) },
    ];
    const score = Math.round((checks.filter(c => c.pass).length / checks.length) * 100);
    return { checks, score, words };
  };

  const seo = getSEO();

  if (isUserLoading || (isLoading && !isNew)) return <div className="h-screen flex items-center justify-center font-black uppercase text-xs">Loading...</div>;

  return (
    <div className="min-h-screen bg-secondary/10 flex flex-col pb-20">
      <Dialog open={isPickerOpen} onOpenChange={setIsPickerOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col p-0 border-4 border-black rounded-none">
          <DialogHeader className="p-4 border-b">
            <div className="flex items-center justify-between gap-4">
              <DialogTitle className="text-sm font-black uppercase">Library</DialogTitle>
              <Input placeholder="Cari..." className="max-w-xs h-8 text-xs" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
          </DialogHeader>
          <div className="flex-grow overflow-y-auto p-4 grid grid-cols-3 gap-2">
            {PlaceHolderImages.filter(img => img.description.toLowerCase().includes(searchTerm.toLowerCase())).map(img => (
              <div key={img.id} className="cursor-pointer border-2 hover:border-primary group" onClick={() => { setFormData({...formData, image: img.imageUrl}); setIsPickerOpen(false); }}>
                <img src={img.imageUrl} className="aspect-video object-cover w-full" />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <div className="sticky top-0 z-50 bg-white border-b px-8 py-3 flex justify-between items-center">
        <Button variant="ghost" asChild className="text-[10px] font-black uppercase tracking-widest px-0">
          <Link href="/admin"><ArrowLeft size={14} className="mr-2" /> Dashboard</Link>
        </Button>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-[8px] font-black uppercase text-muted-foreground">SEO Health</div>
            <div className="text-xs font-black text-primary">{seo.score}%</div>
          </div>
          <Button onClick={handleSave} disabled={isSaving} className="bg-primary text-white rounded-none font-black uppercase text-[10px] h-10 px-8">
            {isSaving ? 'Saving...' : 'Publish'}
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-3">
          <Card className="rounded-none border-2 shadow-sm">
            <CardContent className="p-6 space-y-3">
              <div className="space-y-1">
                <Label className="text-[10px] font-black uppercase flex justify-between">
                  <span>Featured Image URL</span>
                  <button onClick={() => setIsPickerOpen(true)} className="text-primary hover:underline">Browse Library</button>
                </Label>
                <Input value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="rounded-none h-9 text-xs" />
              </div>

              <div className="space-y-1">
                <Label className="text-[10px] font-black uppercase">Article Title</Label>
                <Input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="rounded-none h-12 text-lg font-black uppercase w-full" />
              </div>

              <div className="grid grid-cols-10 gap-3 items-end">
                <div className="col-span-6 space-y-1">
                  <Label className="text-[10px] font-black uppercase text-primary">Focus Keyword</Label>
                  <Input value={formData.focusKeyword} onChange={e => setFormData({...formData, focusKeyword: e.target.value})} className="rounded-none h-12 text-xs border-primary/30" placeholder="e.g. Wisata Dieng" />
                </div>
                <div className="col-span-4">
                  <Button onClick={handleGenerateAI} disabled={isGenerating} className="w-full bg-black text-white h-12 rounded-none text-[10px] font-black uppercase gap-2 hover:bg-primary transition-colors">
                    {isGenerating ? <Loader2 className="animate-spin h-4 w-4" /> : <Sparkles size={14} />} Buat Artikel Instan
                  </Button>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Textarea value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} className="min-h-[600px] rounded-none p-6 text-sm leading-loose focus-visible:ring-0" placeholder="Content Markdown..." />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="rounded-none border-2 bg-secondary/10">
            <CardHeader className="p-4 border-b"><CardTitle className="text-[10px] font-black uppercase">SEO Analysis</CardTitle></CardHeader>
            <CardContent className="p-4 space-y-2">
              {seo.checks.map(c => (
                <div key={c.id} className="flex items-center justify-between text-[9px] font-bold uppercase">
                  <span>{c.label}</span>
                  {c.pass ? <CheckCircle2 size={12} className="text-green-500" /> : <AlertCircle size={12} className="text-gray-300" />}
                </div>
              ))}
              <div className="pt-2 border-t mt-2 text-[9px] font-bold uppercase flex justify-between">
                <span>Total Words</span>
                <span className={seo.words >= 1100 ? "text-green-500" : "text-muted-foreground"}>{seo.words}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-none border-2">
            <CardHeader className="p-4 border-b"><CardTitle className="text-[10px] font-black uppercase">Metadata</CardTitle></CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="space-y-1">
                <Label className="text-[9px] font-black uppercase">URL Slug</Label>
                <Input value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} className="h-8 text-[10px] rounded-none" />
              </div>
              <div className="space-y-1">
                <Label className="text-[9px] font-black uppercase">Meta Title</Label>
                <Input value={formData.metaTitle} onChange={e => setFormData({...formData, metaTitle: e.target.value})} className="h-8 text-[10px] rounded-none" />
              </div>
              <div className="space-y-1">
                <Label className="text-[9px] font-black uppercase">Meta Description</Label>
                <Textarea value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} className="h-20 text-[10px] rounded-none" />
              </div>
              <div className="space-y-1">
                <Label className="text-[9px] font-black uppercase">Tanggal</Label>
                <Input value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="h-8 text-[10px] rounded-none" />
              </div>
              <div className="space-y-1">
                <Label className="text-[9px] font-black uppercase">Penulis</Label>
                <Input value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} className="h-8 text-[10px] rounded-none" />
              </div>
              <div className="space-y-1">
                <Label className="text-[9px] font-black uppercase">Category</Label>
                <Select value={formData.category} onValueChange={v => setFormData({...formData, category: v})}>
                  <SelectTrigger className="h-8 text-[10px] rounded-none"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Alam">Alam</SelectItem>
                    <SelectItem value="Budaya">Budaya</SelectItem>
                    <SelectItem value="Kuliner">Kuliner</SelectItem>
                    <SelectItem value="Sejarah">Sejarah</SelectItem>
                    <SelectItem value="Sosial">Sosial</SelectItem>
                    <SelectItem value="Tips">Tips</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ArticleEditorPage;
