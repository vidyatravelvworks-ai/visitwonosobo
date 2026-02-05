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
import { 
  Save, Globe, FileText, ArrowLeft, Sparkles, Loader2, 
  Search, Tag, Calendar, Layers, Activity, CheckCircle2, AlertCircle, Clock,
  Image as ImageIcon
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useMemoFirebase } from '@/firebase';
import Link from 'next/link';
import { generateArticle } from '@/ai/flows/generate-article-flow';
import { articles as staticArticles } from '@/data/articles';
import { cn } from '@/lib/utils';
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
    focusKeyword: ''
  });

  const getTodayFormatted = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    return `${day} ${month} ${year}`;
  };

  useEffect(() => {
    const today = getTodayFormatted();
    setFormData(prev => ({ ...prev, date: today }));
  }, []);

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
        date: getTodayFormatted(),
        focusKeyword: article.focusKeyword || ''
      });
    } else if (!isNew) {
      const staticArt = staticArticles.find(a => a.slug === id);
      if (staticArt) {
        setFormData({
          title: staticArt.title,
          slug: staticArt.slug,
          excerpt: staticArt.excerpt,
          content: staticArt.content,
          image: staticArt.image,
          metaTitle: staticArt.title,
          category: staticArt.category,
          type: staticArt.type,
          date: getTodayFormatted(),
          focusKeyword: ''
        });
      }
    }
  }, [article, isNew, id]);

  const handleGenerateAI = async () => {
    if (!formData.title) {
      toast({
        variant: 'destructive',
        title: 'Judul Kosong',
        description: 'Silakan isi judul artikel terlebih dahulu agar AI bisa bekerja.',
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateArticle({ 
        title: formData.title,
        focusKeyword: formData.focusKeyword 
      });
      
      // Cari gambar yang disarankan dari pustaka lokal
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
        image: suggestedImage
      }));

      toast({
        title: 'Berhasil',
        description: 'Artikel SEO 1100+ kata dan gambar relevan berhasil disiapkan.',
      });
    } catch (error) {
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
      const finalDate = getTodayFormatted();

      await setDoc(finalDocRef, {
        ...formData,
        date: finalDate,
        id: articleId,
        slug: articleId,
        updatedAt: serverTimestamp(),
      }, { merge: true });

      toast({ title: 'Berhasil', description: `Artikel telah dipublikasikan.` });
      router.push('/admin');
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: 'Gagal menyimpan artikel.' });
    } finally {
      setIsSaving(false);
    }
  };

  const getSEOAnalysis = () => {
    const wordCount = formData.content.trim() ? formData.content.split(/\s+/).length : 0;
    const contentLower = formData.content.toLowerCase();
    const keywordLower = formData.focusKeyword.toLowerCase();
    
    const checks = [
      { 
        id: 1, 
        label: 'Keyword in Content', 
        pass: formData.focusKeyword && contentLower.includes(keywordLower) 
      },
      { 
        id: 2, 
        label: 'Meta Description (120-160 chars)', 
        pass: formData.excerpt.length >= 120 && formData.excerpt.length <= 160 
      },
      { 
        id: 3, 
        label: 'High Content Density (>1100 words)', 
        pass: wordCount >= 1100 
      },
      { 
        id: 4, 
        label: 'Optimized Meta Title (<60 chars)', 
        pass: !!formData.metaTitle && formData.metaTitle.length <= 60 && formData.metaTitle.length > 30 
      },
      { 
        id: 5, 
        label: 'Keyword in First Paragraph', 
        pass: formData.focusKeyword && contentLower.split('\n')[0]?.includes(keywordLower) 
      },
      { 
        id: 6, 
        label: 'Visual Media Ready (Featured Image)', 
        pass: !!formData.image 
      },
    ];
    
    const score = Math.round((checks.filter(c => c.pass).length / checks.length) * 100);
    return { checks, score, wordCount };
  };

  const seo = getSEOAnalysis();
  const readingTime = Math.ceil(seo.wordCount / 200);

  if (isUserLoading || (isLoading && !isNew)) {
    return <div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-xs">Loading Editor...</div>;
  }

  return (
    <div className="min-h-screen bg-secondary/10 flex flex-col">
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b px-8 py-4 flex justify-between items-center shadow-sm">
        <Button variant="ghost" asChild className="rounded-none hover:bg-transparent pl-0 h-auto group">
          <Link href="/admin" className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Dashboard
          </Link>
        </Button>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end mr-4">
             <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">SEO Health</span>
             <div className="flex items-center gap-2">
                <div className="w-24 h-1.5 bg-gray-100 border rounded-full overflow-hidden">
                   <div className={cn("h-full transition-all duration-500", seo.score > 80 ? "bg-green-500" : seo.score > 50 ? "bg-yellow-500" : "bg-red-500")} style={{ width: `${seo.score}%` }} />
                </div>
                <span className="text-[10px] font-black">{seo.score}%</span>
             </div>
          </div>
          <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-10 gap-3 font-black uppercase tracking-widest text-[10px]"
          >
            <Save size={16} />
            {isSaving ? 'Saving...' : 'Publish Update'}
          </Button>
        </div>
      </div>

      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-black">
        {formData.image && (
          <div className="absolute inset-0 z-0">
            <img src={formData.image} alt="Hero" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
        )}
        <div className="container mx-auto px-12 relative z-10 text-center space-y-4 max-w-4xl">
          <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-white/70 uppercase tracking-[0.3em]">
            <span className="flex items-center gap-2">
              <Tag className="h-3 w-3 text-primary" /> {formData.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-2">
              <Calendar className="h-3 w-3 text-primary" /> {formData.date || 'Memuat...'}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
            {formData.title || "Judul Artikel Anda"}
          </h1>
          <div className="flex items-center justify-center gap-6 pt-2">
             <div className="flex items-center gap-2 text-[9px] font-bold text-white/50 uppercase tracking-widest">
                <Clock size={12} className="text-primary" /> {readingTime} Menit Baca
             </div>
             <div className="flex items-center gap-2 text-[9px] font-bold text-white/50 uppercase tracking-widest">
                <FileText size={12} className="text-primary" /> {seo.wordCount} Kata
             </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full p-8 md:p-12 -mt-20 relative z-20 space-y-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <Card className="rounded-none border-2 border-black/5 shadow-2xl bg-white">
              <CardHeader className="border-b p-8">
                <CardTitle className="text-xl font-black uppercase tracking-tight flex items-center gap-3">
                  <FileText className="text-primary" size={20} />
                  Main Narration
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                     <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                       <ImageIcon size={12} /> Featured Image URL
                     </Label>
                     <Input 
                       value={formData.image}
                       onChange={(e) => setFormData({...formData, image: e.target.value})}
                       placeholder="Gunakan URL Unsplash/Picsum atau biarkan AI memilih"
                       className="rounded-none border-2 border-black/10 h-12 text-[11px] font-bold"
                     />
                   </div>
                   <div className="space-y-2">
                     <Label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                       <Search size={12} /> Focus Keyword (SEO)
                     </Label>
                     <Input 
                       value={formData.focusKeyword}
                       onChange={(e) => setFormData({...formData, focusKeyword: e.target.value})}
                       placeholder="AI akan menyarankan jika dikosongkan"
                       className="rounded-none border-2 border-primary/20 h-12 text-[11px] font-bold"
                     />
                   </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Article Title</Label>
                  <Input 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Masukkan judul artikel..."
                    className="rounded-none border-2 border-black/10 h-14 text-xl font-black uppercase tracking-tight"
                  />
                  <Button
                    type="button"
                    onClick={handleGenerateAI}
                    disabled={isGenerating}
                    className="bg-black text-white hover:bg-primary rounded-none h-12 px-8 gap-3 font-bold uppercase tracking-widest text-[10px]"
                  >
                    {isGenerating ? <Loader2 className="animate-spin h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
                    {isGenerating ? 'AI Sedang Menulis & Memilih Gambar...' : 'Buat Artikel Instan'}
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Article Content (Markdown)</Label>
                  <Textarea 
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    placeholder="Konten akan muncul di sini..."
                    className="rounded-none border-2 border-black/10 min-h-[600px] font-medium leading-loose p-8 text-sm"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="rounded-none border-2 border-black/5 shadow-xl bg-white">
              <CardHeader className="border-b p-6 bg-secondary/10">
                <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <Activity className="text-primary" size={16} /> SEO Health
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                 <div className="space-y-3">
                    {seo.checks.map(check => (
                       <div key={check.id} className="flex items-center justify-between gap-3">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase">{check.label}</span>
                          {check.pass ? <CheckCircle2 className="text-green-500 h-4 w-4 shrink-0" /> : <AlertCircle className="text-gray-300 h-4 w-4 shrink-0" />}
                       </div>
                    ))}
                 </div>
                 <div className="pt-4 border-t mt-4">
                    <div className={cn("p-3 border-l-2", seo.score === 100 ? "bg-green-50 border-green-500" : "bg-secondary/20 border-primary")}>
                       <p className="text-[9px] font-bold text-muted-foreground leading-relaxed uppercase">
                          {seo.score === 100 ? "Luar biasa! Teroptimasi sempurna." : `Skor: ${seo.score}%. Lengkapi checklist untuk performa maksimal.`}
                       </p>
                    </div>
                 </div>
              </CardContent>
            </Card>

            <Card className="rounded-none border-2 border-black/5 shadow-xl bg-white sticky top-28">
              <CardHeader className="border-b p-6">
                <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <Globe className="text-primary" size={16} /> Classification
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4 pb-6 border-b">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <Layers size={14} /> Organization
                  </Label>
                  
                  <div className="space-y-2">
                    <Label className="text-[9px] font-bold uppercase">Tanggal Rilis (Auto-today)</Label>
                    <Input 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      placeholder="05 Feb 2026"
                      className="rounded-none border-2 text-[10px] h-10 font-bold bg-secondary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[9px] font-bold uppercase">Tipe Konten</Label>
                    <Select 
                      value={formData.type} 
                      onValueChange={(val: any) => setFormData({...formData, type: val, category: val === 'destination' ? 'Alam' : 'Sejarah'})}
                    >
                      <SelectTrigger className="rounded-none border-2 text-[10px] h-10 font-bold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="destination">See & Do (Wisata)</SelectItem>
                        <SelectItem value="story">Stories (Blog)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[9px] font-bold uppercase">Kategori</Label>
                    <Select 
                      value={formData.category} 
                      onValueChange={(val) => setFormData({...formData, category: val})}
                    >
                      <SelectTrigger className="rounded-none border-2 text-[10px] h-10 font-bold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {formData.type === 'destination' ? (
                          <>
                            <SelectItem value="Alam">Alam</SelectItem>
                            <SelectItem value="Budaya">Budaya</SelectItem>
                            <SelectItem value="Kuliner">Kuliner</SelectItem>
                          </>
                        ) : (
                          <>
                            <SelectItem value="Sejarah">Sejarah</SelectItem>
                            <SelectItem value="Sosial">Sosial</SelectItem>
                            <SelectItem value="Geografis">Geografis</SelectItem>
                            <SelectItem value="Tips">Tips</SelectItem>
                          </>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <Search size={14} /> SEO Meta Tags
                  </Label>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <Label className="text-[9px] font-bold uppercase">Slug URL</Label>
                      <Input 
                        value={formData.slug}
                        onChange={(e) => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})}
                        className="rounded-none border-2 text-[11px] font-bold h-10"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-[9px] font-bold uppercase">Meta Title (Max 60)</Label>
                      <Input value={formData.metaTitle} onChange={(e) => setFormData({...formData, metaTitle: e.target.value})} className="rounded-none text-[10px] h-9" />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-[9px] font-bold uppercase">Meta Description (120-160)</Label>
                      <Textarea value={formData.excerpt} onChange={(e) => setFormData({...formData, excerpt: e.target.value})} className="rounded-none text-[10px] h-24" />
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
