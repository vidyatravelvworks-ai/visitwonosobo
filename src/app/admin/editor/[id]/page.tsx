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
import { cn } from '@/lib/utils';
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
    category: queryType === 'destination' ? 'Nature & Adventure' : 'History & Heritage',
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
        category: article.category || (article.type === 'destination' ? 'Nature & Adventure' : 'History & Heritage'),
        type: article.type || 'destination',
        date: article.date || getTodayFormatted(),
        author: article.author || 'Admin Lokal',
        focusKeyword: article.focusKeyword || ''
      });
    }
  }, [article]);

  const handleGenerateAI = async () => {
    if (!formData.title) {
      toast({ variant: 'destructive', title: 'Judul Kosong' });
      return;
    }
    setIsGenerating(true);
    try {
      const result = await generateArticle({ 
        title: formData.title, 
        focusKeyword: formData.focusKeyword 
      });
      
      if (result.error) {
        toast({ 
          variant: 'destructive', 
          title: result.error === 'QUOTA_EXCEEDED' ? 'AI Quota Exceeded' : 'Generation Failed',
          description: result.error === 'QUOTA_EXCEEDED' ? 'Harap tunggu 60 detik sebelum mencoba lagi.' : 'Terjadi kesalahan sistem.'
        });
        return;
      }

      if (result.data) {
        const data = result.data;
        let suggestedImg = formData.image;
        if (data.suggestedImageId) {
          const found = PlaceHolderImages.find(img => img.id === data.suggestedImageId);
          if (found) suggestedImg = found.imageUrl;
        }

        setFormData(prev => ({
          ...prev,
          content: data.content,
          metaTitle: data.metaTitle,
          excerpt: data.metaDescription,
          focusKeyword: data.focusKeywordSuggested || prev.focusKeyword,
          image: suggestedImg,
          slug: prev.slug || formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
        }));
        toast({ title: 'SEO 100% Generated' });
      }
    } catch (e) {
      toast({ variant: 'destructive', title: 'Connection Error' });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = async () => {
    if (!db) return;
    setIsSaving(true);
    try {
      const articleId = formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      await setDoc(doc(db, 'articles', articleId), {
        ...formData,
        id: articleId,
        updatedAt: serverTimestamp(),
      }, { merge: true });
      toast({ title: 'Saved Successfully' });
      router.push('/admin');
    } catch (error) {
      toast({ variant: 'destructive', title: 'Save Failed' });
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
          <DialogHeader className="p-4 border-b bg-secondary/10">
            <div className="flex items-center justify-between gap-4">
              <DialogTitle className="text-sm font-black uppercase">Asset Library</DialogTitle>
              <Input placeholder="Search Assets..." className="max-w-xs h-8 text-xs rounded-none" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
          </DialogHeader>
          <div className="flex-grow overflow-y-auto p-4 grid grid-cols-3 gap-2">
            {PlaceHolderImages.filter(img => img.description.toLowerCase().includes(searchTerm.toLowerCase())).map(img => (
              <div key={img.id} className="cursor-pointer border-2 hover:border-primary group transition-all" onClick={() => { setFormData({...formData, image: img.imageUrl}); setIsPickerOpen(false); }}>
                <img src={img.imageUrl} className="aspect-video object-cover w-full" />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <div className="sticky top-0 z-50 bg-white border-b px-8 py-3 flex justify-between items-center shadow-sm">
        <Button variant="ghost" asChild className="text-[10px] font-black uppercase tracking-widest px-0">
          <Link href="/admin"><ArrowLeft size={14} className="mr-2" /> Dashboard</Link>
        </Button>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-[8px] font-black uppercase text-muted-foreground">SEO Health Status</div>
            <div className={cn("text-xs font-black", seo.score === 100 ? "text-green-600" : "text-primary")}>{seo.score}% Health</div>
          </div>
          <Button onClick={handleSave} disabled={isSaving} className="bg-primary text-white rounded-none font-black uppercase text-[10px] h-10 px-8 hover:bg-black transition-colors">
            {isSaving ? 'Saving...' : 'Publish Article'}
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-3">
          <Card className="rounded-none border-2 shadow-sm bg-white">
            <CardContent className="p-6 space-y-3">
              <div className="space-y-1">
                <Label className="text-[10px] font-black uppercase flex justify-between">
                  <span>Featured Image URL</span>
                  <button onClick={() => setIsPickerOpen(true)} className="text-primary hover:underline text-[9px]">Open Asset Picker</button>
                </Label>
                <Input value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="rounded-none h-9 text-xs" />
              </div>

              <div className="space-y-1">
                <Label className="text-[10px] font-black uppercase">Article Title (Full Width)</Label>
                <Input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="rounded-none h-12 text-lg font-black uppercase w-full border-2" />
              </div>

              <div className="grid grid-cols-10 gap-3 items-end">
                <div className="col-span-6 space-y-1">
                  <Label className="text-[10px] font-black uppercase text-primary">Focus SEO Keyword</Label>
                  <Input value={formData.focusKeyword} onChange={e => setFormData({...formData, focusKeyword: e.target.value})} className="rounded-none h-12 text-xs border-primary/30" placeholder="e.g. Wisata Dieng" />
                </div>
                <div className="col-span-4">
                  <Button onClick={handleGenerateAI} disabled={isGenerating} className="w-full bg-black text-white h-12 rounded-none text-[10px] font-black uppercase gap-2 hover:bg-primary transition-all">
                    {isGenerating ? <Loader2 className="animate-spin h-4 w-4" /> : <Sparkles size={14} />} AI Write 100% SEO
                  </Button>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Textarea value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} className="min-h-[600px] rounded-none p-6 text-sm leading-loose focus-visible:ring-0 border-2" placeholder="Content Body (Markdown)..." />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="rounded-none border-2 bg-secondary/10 shadow-sm">
            <CardHeader className="p-4 border-b"><CardTitle className="text-[10px] font-black uppercase tracking-widest">SEO Live Checklist</CardTitle></CardHeader>
            <CardContent className="p-4 space-y-2">
              {seo.checks.map(c => (
                <div key={c.id} className="flex items-center justify-between text-[9px] font-bold uppercase">
                  <span>{c.label}</span>
                  {c.pass ? <CheckCircle2 size={12} className="text-green-500" /> : <AlertCircle size={12} className="text-gray-300" />}
                </div>
              ))}
              <div className="pt-2 border-t mt-2 text-[9px] font-bold uppercase flex justify-between">
                <span>Total Words Count</span>
                <span className={seo.words >= 1100 ? "text-green-500" : "text-muted-foreground"}>{seo.words}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-none border-2 bg-white shadow-sm">
            <CardHeader className="p-4 border-b"><CardTitle className="text-[10px] font-black uppercase tracking-widest">Metadata Sidebar</CardTitle></CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="space-y-1">
                <Label className="text-[9px] font-black uppercase">URL Slug</Label>
                <Input value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} className="h-8 text-[10px] rounded-none" />
              </div>
              <div className="space-y-1">
                <Label className="text-[9px] font-black uppercase">Meta SEO Title</Label>
                <Input value={formData.metaTitle} onChange={e => setFormData({...formData, metaTitle: e.target.value})} className="h-8 text-[10px] rounded-none" />
              </div>
              <div className="space-y-1">
                <Label className="text-[9px] font-black uppercase">Meta Description (Excerpt)</Label>
                <Textarea value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} className="h-20 text-[10px] rounded-none" />
              </div>
              <div className="space-y-1">
                <Label className="text-[9px] font-black uppercase">Publish Date</Label>
                <Input value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="h-8 text-[10px] rounded-none" />
              </div>
              <div className="space-y-1">
                <Label className="text-[9px] font-black uppercase">Author Name</Label>
                <Input value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} className="h-8 text-[10px] rounded-none" />
              </div>
              <div className="space-y-1">
                <Label className="text-[9px] font-black uppercase">Category</Label>
                <Select value={formData.category} onValueChange={v => setFormData({...formData, category: v})}>
                  <SelectTrigger className="h-8 text-[10px] rounded-none"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {formData.type === 'destination' ? (
                      <>
                        <SelectItem value="Nature & Adventure">Nature & Adventure</SelectItem>
                        <SelectItem value="Heritage & Culture">Heritage & Culture</SelectItem>
                        <SelectItem value="Food & Drink">Food & Drink</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="History & Heritage">History & Heritage</SelectItem>
                        <SelectItem value="People & Culture">People & Culture</SelectItem>
                        <SelectItem value="Geography & Landscape">Geography & Landscape</SelectItem>
                        <SelectItem value="Travel Tips">Travel Tips</SelectItem>
                      </>
                    )}
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