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
  Image as ImageIcon, ExternalLink
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
      { id: 1, label: 'Keyword in Content', pass: formData.focusKeyword && contentLower.includes(keywordLower) },
      { id: 2, label: 'Meta Description (120-160 chars)', pass: formData.excerpt.length >= 120 && formData.excerpt.length <= 160 },
      { id: 3, label: 'High Content Density (>1100 words)', pass: wordCount >= 1100 },
      { id: 4, label: 'Optimized Meta Title (&lt;60 chars)', pass: !!formData.metaTitle && formData.metaTitle.length <= 60 && formData.metaTitle.length > 30 },
      { id: 5, label: 'Keyword in First Paragraph', pass: formData.focusKeyword && contentLower.split('\n')[0]?.includes(keywordLower) },
      { id: 6, label: 'Visual Media Ready (Featured Image)', pass: !!formData.image },
    ];
    
    const score = Math.round((checks.filter(c => c.pass).length / checks.length) * 100);
    return { checks, score, wordCount };
  };

  const seo = getSEOAnalysis();
  const readingTime = Math.ceil(seo.wordCount / 200);

  const handleSearchExternal = (platform: 'unsplash' | 'google') => {
    const query = encodeURIComponent(`${formData.focusKeyword || formData.title} wonosobo`);
    const urls = {
      unsplash: `https://unsplash.com/s/photos/${query}`,
      google: `https://www.google.com/search?tbm=isch&q=${query}`
    };
    window.open(urls[platform], '_blank');
  };

  if (isUserLoading || (isLoading && !isNew)) {
    return &lt;div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-xs"&gt;Loading Editor...&lt;/div&gt;;
  }

  return (
    &lt;div className="min-h-screen bg-secondary/10 flex flex-col"&gt;
      &lt;div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b px-8 py-4 flex justify-between items-center shadow-sm"&gt;
        &lt;Button variant="ghost" asChild className="rounded-none hover:bg-transparent pl-0 h-auto group"&gt;
          &lt;Link href="/admin" className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px]"&gt;
            &lt;ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /&gt;
            Dashboard
          &lt;/Link&gt;
        &lt;/Button&gt;
        &lt;div className="flex items-center gap-4"&gt;
          &lt;div className="flex flex-col items-end mr-4"&gt;
             &lt;span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground"&gt;SEO Health&lt;/span&gt;
             &lt;div className="flex items-center gap-2"&gt;
                &lt;div className="w-24 h-1.5 bg-gray-100 border rounded-full overflow-hidden"&gt;
                   &lt;div className={cn("h-full transition-all duration-500", seo.score > 80 ? "bg-green-500" : seo.score > 50 ? "bg-yellow-500" : "bg-red-500")} style={{ width: `${seo.score}%` }} /&gt;
                &lt;/div&gt;
                &lt;span className="text-[10px] font-black"&gt;{seo.score}%&lt;/span&gt;
             &lt;/div&gt;
          &lt;/div&gt;
          &lt;Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-10 gap-3 font-black uppercase tracking-widest text-[10px]"
          &gt;
            &lt;Save size={16} /&gt;
            {isSaving ? 'Saving...' : 'Publish Update'}
          &lt;/Button&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-black group"&gt;
        {formData.image && (
          &lt;a href={formData.image} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0"&gt;
            &lt;img src={formData.image} alt="Hero Preview" className="w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-40" /&gt;
            &lt;div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" /&gt;
            &lt;div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"&gt;
               &lt;div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 font-black uppercase tracking-widest text-[10px] flex items-center gap-2"&gt;
                 &lt;ExternalLink size={12} /&gt; Open Image Source
               &lt;/div&gt;
            &lt;/div&gt;
          &lt;/a&gt;
        )}
        &lt;div className="container mx-auto px-12 relative z-10 text-center space-y-4 max-w-4xl pointer-events-none"&gt;
          &lt;div className="flex items-center justify-center gap-4 text-[10px] font-bold text-white/70 uppercase tracking-[0.3em]"&gt;
            &lt;span className="flex items-center gap-2"&gt;
              &lt;Tag className="h-3 w-3 text-primary" /&gt; {formData.category}
            &lt;/span&gt;
            &lt;span className="h-1 w-1 rounded-full bg-white/40" /&gt;
            &lt;span className="flex items-center gap-2"&gt;
              &lt;Calendar className="h-3 w-3 text-primary" /&gt; {formData.date || 'Memuat...'}
            &lt;/span&gt;
          &lt;/div&gt;
          &lt;h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight"&gt;
            {formData.title || "Judul Artikel Anda"}
          &lt;/h1&gt;
          &lt;div className="flex items-center justify-center gap-6 pt-2"&gt;
             &lt;div className="flex items-center gap-2 text-[9px] font-bold text-white/50 uppercase tracking-widest"&gt;
                &lt;Clock size={12} className="text-primary" /&gt; {readingTime} Menit Baca
             &lt;/div&gt;
             &lt;div className="flex items-center gap-2 text-[9px] font-bold text-white/50 uppercase tracking-widest"&gt;
                &lt;FileText size={12} className="text-primary" /&gt; {seo.wordCount} Kata
             &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;div className="max-w-7xl mx-auto w-full p-8 md:p-12 -mt-20 relative z-20 space-y-8 pb-32"&gt;
        &lt;div className="grid grid-cols-1 lg:grid-cols-4 gap-8"&gt;
          &lt;div className="lg:col-span-3 space-y-8"&gt;
            &lt;Card className="rounded-none border-2 border-black/5 shadow-2xl bg-white"&gt;
              &lt;CardHeader className="border-b p-8"&gt;
                &lt;CardTitle className="text-xl font-black uppercase tracking-tight flex items-center gap-3"&gt;
                  &lt;FileText className="text-primary" size={20} /&gt;
                  Main Narration
                &lt;/CardTitle&gt;
              &lt;/CardHeader&gt;
              &lt;CardContent className="p-8 space-y-8"&gt;
                &lt;div className="grid grid-cols-1 md:grid-cols-2 gap-8"&gt;
                   &lt;div className="space-y-3"&gt;
                     &lt;Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2"&gt;
                       &lt;ImageIcon size={12} /&gt; Featured Image URL
                     &lt;/Label&gt;
                     &lt;Input 
                       value={formData.image}
                       onChange={(e) => setFormData({...formData, image: e.target.value})}
                       placeholder="Gunakan URL Unsplash/Picsum atau biarkan AI memilih"
                       className="rounded-none border-2 border-black/10 h-12 text-[11px] font-bold"
                     /&gt;
                     &lt;div className="flex gap-2"&gt;
                        &lt;Button 
                          type="button" 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleSearchExternal('unsplash')}
                          className="text-[9px] font-black uppercase tracking-widest h-8 rounded-none border-2 border-black/10 gap-2 flex-grow"
                        &gt;
                          &lt;ImageIcon size={10} /&gt; Search Unsplash
                        &lt;/Button&gt;
                        &lt;Button 
                          type="button" 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleSearchExternal('google')}
                          className="text-[9px] font-black uppercase tracking-widest h-8 rounded-none border-2 border-black/10 gap-2 flex-grow"
                        &gt;
                          &lt;Search size={10} /&gt; Search Google
                        &lt;/Button&gt;
                     &lt;/div&gt;
                   &lt;/div&gt;
                   &lt;div className="space-y-3"&gt;
                     &lt;Label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2"&gt;
                       &lt;Search size={12} /&gt; Focus Keyword (SEO)
                     &lt;/Label&gt;
                     &lt;Input 
                       value={formData.focusKeyword}
                       onChange={(e) => setFormData({...formData, focusKeyword: e.target.value})}
                       placeholder="AI akan menyarankan jika dikosongkan"
                       className="rounded-none border-2 border-primary/20 h-12 text-[11px] font-bold"
                     /&gt;
                   &lt;/div&gt;
                &lt;/div&gt;

                &lt;div className="space-y-4"&gt;
                  &lt;Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground"&gt;Article Title&lt;/Label&gt;
                  &lt;Input 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Masukkan judul artikel..."
                    className="rounded-none border-2 border-black/10 h-14 text-xl font-black uppercase tracking-tight"
                  /&gt;
                  &lt;Button
                    type="button"
                    onClick={handleGenerateAI}
                    disabled={isGenerating}
                    className="bg-black text-white hover:bg-primary rounded-none h-12 px-8 gap-3 font-bold uppercase tracking-widest text-[10px]"
                  &gt;
                    {isGenerating ? &lt;Loader2 className="animate-spin h-4 w-4" /&gt; : &lt;Sparkles className="h-4 w-4" /&gt;}
                    {isGenerating ? 'AI Sedang Menulis &amp; Memilih Gambar...' : 'Buat Artikel Instan'}
                  &lt;/Button&gt;
                &lt;/div&gt;

                &lt;div className="space-y-2"&gt;
                  &lt;Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground"&gt;Article Content (Markdown)&lt;/Label&gt;
                  &lt;Textarea 
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    placeholder="Konten akan muncul di sini..."
                    className="rounded-none border-2 border-black/10 min-h-[600px] font-medium leading-loose p-8 text-sm"
                  /&gt;
                &lt;/div&gt;
              &lt;/CardContent&gt;
            &lt;/Card&gt;
          &lt;/div&gt;

          &lt;div className="space-y-8"&gt;
            &lt;Card className="rounded-none border-2 border-black/5 shadow-xl bg-white"&gt;
              &lt;CardHeader className="border-b p-6 bg-secondary/10"&gt;
                &lt;CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2"&gt;
                  &lt;Activity className="text-primary" size={16} /&gt; SEO Health
                &lt;/CardTitle&gt;
              &lt;/CardHeader&gt;
              &lt;CardContent className="p-6 space-y-4"&gt;
                 &lt;div className="space-y-3"&gt;
                    {seo.checks.map(check => (
                       &lt;div key={check.id} className="flex items-center justify-between gap-3"&gt;
                          &lt;span className="text-[10px] font-bold text-muted-foreground uppercase"&gt;{check.label}&lt;/span&gt;
                          {check.pass ? &lt;CheckCircle2 className="text-green-500 h-4 w-4 shrink-0" /&gt; : &lt;AlertCircle className="text-gray-300 h-4 w-4 shrink-0" /&gt;}
                       &lt;/div&gt;
                    ))}
                 &lt;/div&gt;
                 &lt;div className="pt-4 border-t mt-4"&gt;
                    &lt;div className={cn("p-3 border-l-2", seo.score === 100 ? "bg-green-50 border-green-500" : "bg-secondary/20 border-primary")}&gt;
                       &lt;p className="text-[9px] font-bold text-muted-foreground leading-relaxed uppercase"&gt;
                          {seo.score === 100 ? "Luar biasa! Teroptimasi sempurna." : `Skor: ${seo.score}%. Lengkapi checklist untuk performa maksimal.`}
                       &lt;/p&gt;
                    &lt;/div&gt;
                 &lt;/div&gt;
              &lt;/CardContent&gt;
            &lt;/Card&gt;

            &lt;Card className="rounded-none border-2 border-black/5 shadow-xl bg-white sticky top-28"&gt;
              &lt;CardHeader className="border-b p-6"&gt;
                &lt;CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2"&gt;
                  &lt;Globe className="text-primary" size={16} /&gt; Classification
                &lt;/CardTitle&gt;
              &lt;/CardHeader&gt;
              &lt;CardContent className="p-6 space-y-6"&gt;
                &lt;div className="space-y-4 pb-6 border-b"&gt;
                  &lt;Label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2"&gt;
                    &lt;Layers size={14} /&gt; Organization
                  &lt;/Label&gt;
                  
                  &lt;div className="space-y-2"&gt;
                    &lt;Label className="text-[9px] font-bold uppercase"&gt;Tanggal Rilis (Auto-today)&lt;/Label&gt;
                    &lt;Input 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      placeholder="05 Feb 2026"
                      className="rounded-none border-2 text-[10px] h-10 font-bold bg-secondary/20"
                    /&gt;
                  &lt;/div&gt;

                  &lt;div className="space-y-2"&gt;
                    &lt;Label className="text-[9px] font-bold uppercase"&gt;Tipe Konten&lt;/Label&gt;
                    &lt;Select 
                      value={formData.type} 
                      onValueChange={(val: any) => setFormData({...formData, type: val, category: val === 'destination' ? 'Alam' : 'Sejarah'})}
                    &gt;
                      &lt;SelectTrigger className="rounded-none border-2 text-[10px] h-10 font-bold"&gt;
                        &lt;SelectValue /&gt;
                      &lt;/SelectTrigger&gt;
                      &lt;SelectContent&gt;
                        &lt;SelectItem value="destination"&gt;See &amp; Do (Wisata)&lt;/SelectItem&gt;
                        &lt;SelectItem value="story"&gt;Stories (Blog)&lt;/SelectItem&gt;
                      &lt;/SelectContent&gt;
                    &lt;/Select&gt;
                  &lt;/div&gt;

                  &lt;div className="space-y-2"&gt;
                    &lt;Label className="text-[9px] font-bold uppercase"&gt;Kategori&lt;/Label&gt;
                    &lt;Select 
                      value={formData.category} 
                      onValueChange={(val) => setFormData({...formData, category: val})}
                    &gt;
                      &lt;SelectTrigger className="rounded-none border-2 text-[10px] h-10 font-bold"&gt;
                        &lt;SelectValue /&gt;
                      &lt;/SelectTrigger&gt;
                      &lt;SelectContent&gt;
                        {formData.type === 'destination' ? (
                          &lt;&gt;
                            &lt;SelectItem value="Alam"&gt;Alam&lt;/SelectItem&gt;
                            &lt;SelectItem value="Budaya"&gt;Budaya&lt;/SelectItem&gt;
                            &lt;SelectItem value="Kuliner"&gt;Kuliner&lt;/SelectItem&gt;
                          &lt;&gt;
                        ) : (
                          &lt;&gt;
                            &lt;SelectItem value="Sejarah"&gt;Sejarah&lt;/SelectItem&gt;
                            &lt;SelectItem value="Sosial"&gt;Sosial&lt;/SelectItem&gt;
                            &lt;SelectItem value="Geografis"&gt;Geografis&lt;/SelectItem&gt;
                            &lt;SelectItem value="Tips"&gt;Tips&lt;/SelectItem&gt;
                          &lt;&gt;
                        )}
                      &lt;/SelectContent&gt;
                    &lt;/Select&gt;
                  &lt;/div&gt;
                &lt;/div&gt;

                &lt;div className="space-y-4 pt-6"&gt;
                  &lt;Label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2"&gt;
                    &lt;Search size={14} /&gt; SEO Meta Tags
                  &lt;/Label&gt;
                  &lt;div className="space-y-4"&gt;
                    &lt;div className="space-y-1"&gt;
                      &lt;Label className="text-[9px] font-bold uppercase"&gt;Slug URL&lt;/Label&gt;
                      &lt;Input 
                        value={formData.slug}
                        onChange={(e) => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})}
                        className="rounded-none border-2 text-[11px] font-bold h-10"
                      /&gt;
                    &lt;/div&gt;
                    &lt;div className="space-y-1"&gt;
                      &lt;Label className="text-[9px] font-bold uppercase"&gt;Meta Title (Max 60)&lt;/Label&gt;
                      &lt;Input value={formData.metaTitle} onChange={(e) => setFormData({...formData, metaTitle: e.target.value})} className="rounded-none text-[10px] h-9" /&gt;
                    &lt;/div&gt;
                    &lt;div className="space-y-1"&gt;
                      &lt;Label className="text-[9px] font-bold uppercase"&gt;Meta Description (120-160)&lt;/Label&gt;
                      &lt;Textarea value={formData.excerpt} onChange={(e) => setFormData({...formData, excerpt: e.target.value})} className="rounded-none text-[10px] h-24" /&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/CardContent&gt;
            &lt;/Card&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
};

export default ArticleEditorPage;
