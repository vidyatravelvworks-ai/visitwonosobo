"use client";

import React from 'react';
import Image from 'next/image';
import { useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, query, where, doc } from 'firebase/firestore';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { History, Users, Globe, Info, ArrowRight, Loader2 } from 'lucide-react';
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
  
  const articlesQ = useMemoFirebase(() => db ? query(collection(db, 'articles'), where('type', '==', 'story')) : null, [db]);
  const configRef = useMemoFirebase(() => db ? doc(db, 'config', 'website') : null, [db]);

  const { data: dbStories, isLoading } = useCollection(articlesQ);
  const { data: config } = useDoc(configRef);
  
  const stories = React.useMemo(() => {
    const staticStories = staticArticles.filter(a => a.type === 'story');
    if (!dbStories || dbStories.length === 0) return staticStories;
    
    // Gabungkan, utamakan yang dari DB jika slug sama
    const dbSlugs = new Set(dbStories.map(s => s.slug));
    const uniqueStatic = staticStories.filter(s => !dbSlugs.has(s.slug));
    return [...dbStories, ...uniqueStatic];
  }, [dbStories]);
  
  const storiesConfigHero = config?.heroImages?.stories;
  const storiesPlaceholderHero = PlaceHolderImages.find(img => img.id === 'mountain-prau')?.imageUrl || 'https://picsum.photos/seed/wonosobo-stories/1200/600';
  const heroImage = (storiesConfigHero && storiesConfigHero.trim() !== "") ? storiesConfigHero : storiesPlaceholderHero;

  const categoryData = [
    { id: 'sejarah', title: 'History & Heritage', categoryName: 'History & Heritage', icon: <History className="h-5 w-5" /> },
    { id: 'sosial', title: 'People & Culture', categoryName: 'People & Culture', icon: <Users className="h-5 w-5" /> },
    { id: 'geografis', title: 'Geography & Landscape', categoryName: 'Geography & Landscape', icon: <Globe className="h-5 w-5" /> },
    { id: 'tips', title: 'Travel Tips', categoryName: 'Travel Tips', icon: <Info className="h-5 w-5" /> }
  ];

  const chunkIntoPairs = (arr: any[]) => {
    const pairs = [];
    for (let i = 0; i < arr.length; i += 2) pairs.push(arr.slice(i, i + 2));
    return pairs;
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary h-12 w-12" />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImage && (
            <Image src={heroImage} alt="Hero" fill className="object-cover" priority />
          )}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-6 md:px-32 relative z-10 text-center">
          <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white">Stories</h1>
        </div>
      </section>

      <section className="pt-2 pb-24 md:pb-32 container mx-auto px-6 md:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {categoryData.map((cat) => {
            // Cek di config admin (WebsiteConfig -> categoryImages)
            const catConfigImg = config?.categoryImages?.[cat.categoryName];
            
            // Fallback placeholder berdasarkan kategori
            let catPlaceholderId = 'mountain-prau';
            if (cat.id === 'sejarah') catPlaceholderId = 'candi-arjuna';
            if (cat.id === 'sosial') catPlaceholderId = 'ritual';
            if (cat.id === 'geografis') catPlaceholderId = 'misty-valley';
            
            const catPlaceholder = PlaceHolderImages.find(img => img.id === catPlaceholderId)?.imageUrl;
            const catImg = (catConfigImg && catConfigImg.trim() !== "") ? catConfigImg : (catPlaceholder || `https://picsum.photos/seed/${cat.id}/800/1000`);

            return (
              <div key={cat.id} className="group relative aspect-[4/5] overflow-hidden bg-black">
                {catImg && (
                  <Image
                    src={catImg}
                    alt={cat.title}
                    fill
                    className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30"
                  />
                )}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="mb-4 p-2 bg-primary w-fit">{cat.icon}</div>
                  <h3 className="text-2xl font-black uppercase mb-2 tracking-tight">{cat.title}</h3>
                  <Button variant="link" className="text-white p-0 w-fit font-bold uppercase tracking-widest text-[10px] hover:text-primary" asChild>
                    <a href={`#${cat.id}`}>Explore Stories <ArrowRight className="ml-2 h-3 w-3" /></a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="pb-32 container mx-auto px-6 md:px-32 space-y-32">
        {categoryData.map((cat) => {
          const filtered = stories.filter(s => s.category === cat.categoryName);
          if (filtered.length === 0) return null;
          const pairs = chunkIntoPairs(filtered);
          return (
            <div key={cat.id} id={cat.id} className="scroll-mt-32">
              <div className="flex items-center gap-6 mb-12">
                <div className="p-2 bg-primary text-white">{cat.icon}</div>
                <h2 className="text-3xl font-black uppercase tracking-tight">{cat.title}</h2>
              </div>
              <Carousel className="w-full relative">
                <CarouselContent className="-ml-12">
                  {pairs.map((pair, idx) => (
                    <CarouselItem key={idx} className="pl-12 basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="flex flex-col gap-12">
                        {pair.map((article: any) => (
                          <ArticleCard key={article.slug || article.id} article={article} />
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-end gap-2 mt-8 md:absolute md:-top-20 md:right-0">
                  <CarouselPrevious className="static translate-y-0 rounded-none border-black" />
                  <CarouselNext className="static translate-y-0 rounded-none border-black" />
                </div>
              </Carousel>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StoriesPage;
