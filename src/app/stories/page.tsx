
"use client";

import React from 'react';
import Image from 'next/image';
import { useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, query, where, doc, orderBy, limit } from 'firebase/firestore';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { History, Users, Globe, Info, ArrowRight, Loader2, Bookmark, Sparkles } from 'lucide-react';
import ArticleCard from '@/components/article/ArticleCard';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { articles as staticArticles } from '@/data/articles';

const StoriesPage = () => {
  const db = useFirestore();
  
  // Query untuk semua artikel bertipe story
  const articlesQ = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'articles'), where('type', '==', 'story'));
  }, [db]);

  // Query untuk artikel terbaru (opsional, bisa fallback ke list utama jika gagal)
  const latestStoriesQ = useMemoFirebase(() => {
    if (!db) return null;
    // Gunakan query yang lebih sederhana jika orderBy menyebabkan masalah index saat awal
    return query(collection(db, 'articles'), where('type', '==', 'story'), limit(4));
  }, [db]);

  const configRef = useMemoFirebase(() => db ? doc(db, 'config', 'website') : null, [db]);

  const { data: dbStories, isLoading: isStoriesLoading, error: storiesError } = useCollection(articlesQ);
  const { data: latestStories, isLoading: isLatestLoading } = useCollection(latestStoriesQ);
  const { data: config } = useDoc(configRef);
  
  const allStories = React.useMemo(() => {
    const firestoreStories = dbStories || [];
    const dbSlugs = new Set(firestoreStories.map(s => s.slug || s.id));
    const filteredStatic = staticArticles.filter(a => a.type === 'story' && !dbSlugs.has(a.slug));
    return [...firestoreStories, ...filteredStatic];
  }, [dbStories]);
  
  const storiesConfigHero = config?.heroImages?.stories;
  const storiesPlaceholderHero = PlaceHolderImages.find(img => img.id === 'mountain-prau')?.imageUrl || 'https://picsum.photos/seed/wonosobo-stories/1200/600';
  const heroImage = (storiesConfigHero && storiesConfigHero.trim() !== "") ? storiesConfigHero : storiesPlaceholderHero;

  const categoryData = [
    { id: 'history', title: 'History & Heritage', categoryName: 'History & Heritage', icon: <History className="h-5 w-5" />, desc: 'Membuka tabir sejarah peradaban tertua di Tanah Jawa.' },
    { id: 'people', title: 'People & Culture', categoryName: 'People & Culture', icon: <Users className="h-5 w-5" />, desc: 'Kehangatan interaksi dan tradisi luhur masyarakat lokal.' },
    { id: 'geography', title: 'Geography & Landscape', categoryName: 'Geography & Landscape', icon: <Globe className="h-5 w-5" />, desc: 'Menjelajahi fenomena geologi unik di atap Jawa.' },
    { id: 'tips', title: 'Travel Tips', categoryName: 'Travel Tips', icon: <Info className="h-5 w-5" />, desc: 'Panduan praktis untuk petualangan yang tak terlupakan.' }
  ];

  const chunkIntoPairs = (arr: any[]) => {
    const pairs = [];
    for (let i = 0; i < arr.length; i += 2) pairs.push(arr.slice(i, i + 2));
    return pairs;
  };

  if (isStoriesLoading && !storiesError) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin text-primary h-12 w-12" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">Memuat Jurnal...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Cinematic Hero */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Hero" fill className="object-cover scale-105" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white" />
        </div>
        <div className="container mx-auto px-6 md:px-32 relative z-10 text-center">
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex justify-center items-center gap-4 mb-4">
              <span className="h-px w-12 bg-primary"></span>
              <span className="text-white text-xs font-black uppercase tracking-[0.5em]">Travel Journal</span>
              <span className="h-px w-12 bg-primary"></span>
            </div>
            <h1 className="text-6xl md:text-[120px] font-black uppercase tracking-tighter text-white leading-[0.85]">
              Stories <br /> <span className="text-primary italic">of Java</span>
            </h1>
            <p className="text-white/80 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed mt-10">
              Menyelami kedalaman budaya, sejarah, dan bentang alam Wonosobo melalui kacamata warga lokal.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Stories - Magazine Style */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 md:px-32">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 bg-black flex items-center justify-center text-white shrink-0">
                <Bookmark className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-primary font-black uppercase tracking-widest text-xs mb-2">Editor's Choice</h3>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Latest Updates</h2>
              </div>
            </div>
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest max-w-xs md:text-right">
              Kisah-kisah terbaru yang baru saja diterbitkan oleh kontributor lokal kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {(latestStories && latestStories.length > 0 ? latestStories : allStories.slice(0, 4)).map((story: any) => (
              <ArticleCard key={story.id || story.slug} article={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid - High Impact */}
      <section className="py-0">
        <div className="container mx-auto px-6 md:px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {categoryData.map((cat) => {
              const catConfigImg = config?.categoryImages?.[cat.categoryName];
              let catPlaceholderId = 'mountain-prau';
              if (cat.id === 'history') catPlaceholderId = 'candi-arjuna';
              if (cat.id === 'people') catPlaceholderId = 'ritual';
              if (cat.id === 'geography') catPlaceholderId = 'misty-valley';
              
              const catPlaceholder = PlaceHolderImages.find(img => img.id === catPlaceholderId)?.imageUrl;
              const catImg = (catConfigImg && catConfigImg.trim() !== "") ? catConfigImg : (catPlaceholder || `https://picsum.photos/seed/${cat.id}/800/1000`);

              return (
                <a key={cat.id} href={`#${cat.id}`} className="group relative aspect-[3/4] overflow-hidden bg-black">
                  <Image
                    src={catImg}
                    alt={cat.title}
                    fill
                    className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end text-white bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="mb-6 p-3 bg-primary w-fit group-hover:bg-white group-hover:text-primary transition-colors">{cat.icon}</div>
                    <h3 className="text-2xl font-black uppercase mb-3 tracking-tight leading-none">{cat.title}</h3>
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                      {cat.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categorized Carousels */}
      <div className="py-40 container mx-auto px-6 md:px-32 space-y-40">
        {categoryData.map((cat) => {
          const filtered = allStories.filter(s => s.category === cat.categoryName);
          if (filtered.length === 0) return null;
          const pairs = chunkIntoPairs(filtered);
          return (
            <div key={cat.id} id={cat.id} className="scroll-mt-32">
              <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 border-b-4 border-black pb-8">
                <div className="flex items-center gap-8">
                  <div className="p-4 bg-primary text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">{cat.icon}</div>
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">{cat.title}</h2>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-secondary/30 px-6 py-3">
                   {filtered.length} Stories Available
                </div>
              </div>
              
              <Carousel className="w-full relative group/carousel">
                <CarouselContent className="-ml-12">
                  {pairs.map((pair, idx) => (
                    <CarouselItem key={idx} className="pl-12 basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="flex flex-col gap-16">
                        {pair.map((article: any) => (
                          <ArticleCard key={article.slug || article.id} article={article} />
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-12 md:absolute md:-top-24 md:right-0">
                  <CarouselPrevious className="static translate-y-0 rounded-none border-2 border-black w-14 h-14 hover:bg-black hover:text-white transition-all" />
                  <CarouselNext className="static translate-y-0 rounded-none border-2 border-black w-14 h-14 hover:bg-black hover:text-white transition-all" />
                </div>
              </Carousel>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white px-6 text-center">
        <div className="container mx-auto">
          <Sparkles className="mx-auto h-12 w-12 text-primary mb-8" />
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8">Want to share your <span className="text-primary italic">own story?</span></h2>
          <p className="text-white/60 font-bold uppercase tracking-widest text-xs mb-12">Bergabunglah dengan komunitas penulis lokal kami.</p>
          <Button size="lg" className="bg-white text-black hover:bg-primary hover:text-white font-black uppercase px-16 py-10 rounded-none text-sm tracking-widest gap-3" asChild>
            <a href="https://wa.me/6281230939128?text=Halo%20saya%20tertarik%20menjadi%20kontributor%20cerita" target="_blank">Become a Contributor</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StoriesPage;
