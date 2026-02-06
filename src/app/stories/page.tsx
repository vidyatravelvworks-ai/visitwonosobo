"use client";

import React from 'react';
import Image from 'next/image';
import { useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, query, where, doc } from 'firebase/firestore';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Hourglass, Users, Globe, Info, ArrowRight, Loader2 } from 'lucide-react';
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
    { id: 'history', title: 'History & Heritage', categoryName: 'History & Heritage', icon: <Hourglass className="h-6 w-6" />, description: 'Membuka tabir sejarah peradaban tertua di Tanah Jawa.' },
    { id: 'people', title: 'People & Culture', categoryName: 'People & Culture', icon: <Users className="h-6 w-6" />, description: 'Kehangatan interaksi dan tradisi luhur masyarakat lokal.' },
    { id: 'geography', title: 'Geography & Landscape', categoryName: 'Geography & Landscape', icon: <Globe className="h-6 w-6" />, description: 'Menjelajahi fenomena geologi unik di atap Jawa.' },
    { id: 'tips', title: 'Travel Tips', categoryName: 'Travel Tips', icon: <Info className="h-6 w-6" />, description: 'Panduan praktis untuk petualangan yang tak terlupakan.' }
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
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-6 md:px-32 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">Stories</h1>
          <p className="text-white/80 font-medium text-sm md:text-base mt-4 max-w-lg mx-auto">
            Temukan wawasan terdalam mengenai Wonosobo melalui kacamata warga lokal.
          </p>
        </div>
      </section>

      <section className="pt-1 pb-24 md:pt-2 md:pb-32">
        <div className="container mx-auto px-6 md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {categoryData.map((cat) => {
              const catConfigImg = config?.categoryImages?.[cat.categoryName];
              let catPlaceholderId = 'mountain-prau';
              if (cat.id === 'history') catPlaceholderId = 'candi-arjuna';
              if (cat.id === 'people') catPlaceholderId = 'ritual';
              if (cat.id === 'geography') catPlaceholderId = 'misty-valley';
              
              const catPlaceholder = PlaceHolderImages.find(img => img.id === catPlaceholderId)?.imageUrl;
              const catImg = (catConfigImg && catConfigImg.trim() !== "") ? catConfigImg : (catPlaceholder || `https://picsum.photos/seed/${cat.id}/800/1000`);

              return (
                <div key={cat.id} className="group relative aspect-square overflow-hidden bg-black">
                  <Image
                    src={catImg}
                    alt={cat.title}
                    fill
                    className="object-cover opacity-100 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-90"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-[5]" />

                  <div className="absolute top-0 left-8 p-6 bg-primary text-white z-20">
                    {cat.icon}
                  </div>

                  <div className="absolute inset-0 p-8 pt-32 flex flex-col justify-end text-white z-10">
                    <h3 className="text-2xl font-black uppercase mb-2 tracking-tight leading-tight">{cat.title}</h3>
                    <Button variant="link" className="text-white p-0 w-fit font-bold uppercase tracking-widest text-xs hover:text-primary" asChild>
                      <a href={`#${cat.id}`}>Explore Now <ArrowRight className="ml-2 h-4 w-4" /></a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="pb-32 container mx-auto px-6 md:px-32 space-y-32">
        {categoryData.map((cat) => {
          const filtered = allStories.filter(s => s.category === cat.categoryName);
          if (filtered.length === 0) return null;
          const pairs = chunkIntoPairs(filtered);
          return (
            <div key={cat.id} id={cat.id} className="scroll-mt-32">
              <div className="flex items-center gap-6 mb-12">
                <div className="p-4 bg-primary text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">{cat.icon}</div>
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
