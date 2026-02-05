
'use client';

import React from 'react';
import Image from 'next/image';
import { useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, query, where, doc } from 'firebase/firestore';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sunrise, Map, Utensils, ArrowRight, Loader2 } from 'lucide-react';
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

const SeeAndDoPage = () => {
  const db = useFirestore();
  
  // Queries
  const articlesQ = useMemoFirebase(() => db ? query(collection(db, 'articles'), where('type', '==', 'destination')) : null, [db]);
  const configRef = useMemoFirebase(() => db ? doc(db, 'config', 'website') : null, [db]);

  const { data: dbDestinations, isLoading } = useCollection(articlesQ);
  const { data: config } = useDoc(configRef);
  
  const destinations = (dbDestinations && dbDestinations.length > 0) ? dbDestinations : staticArticles.filter(a => a.type === 'destination');
  const heroImage = config?.heroImages?.seeAndDo || PlaceHolderImages.find(img => img.id === 'candi-arjuna')?.imageUrl;

  const categoryData = [
    { id: 'nature', title: 'Nature & Adventure', categoryName: 'Alam', icon: <Sunrise className="h-5 w-5" />, description: 'Witness the iconic Golden Sunrise at Sikunir.' },
    { id: 'culture', title: 'Heritage & Culture', categoryName: 'Budaya', icon: <Map className="h-5 w-5" />, description: 'Explore ancient Arjuna Temple and mystical rituals.' },
    { id: 'eat', title: 'Food & Drink', categoryName: 'Kuliner', icon: <Utensils className="h-5 w-5" />, description: 'Taste the legendary Mie Ongklok and Carica.' }
  ];

  const chunkIntoPairs = (arr: any[]) => {
    const pairs = [];
    for (let i = 0; i < arr.length; i += 2) pairs.push(arr.slice(i, i + 2));
    return pairs;
  };

  return (
    <div className="bg-white">
      {/* Dynamic Hero */}
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-12 md:px-32 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">See & Do</h1>
        </div>
      </section>

      {/* Dynamic Categories Grid */}
      <section className="pt-1 pb-24 md:pt-2 md:pb-32">
        <div className="container mx-auto px-12 md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {categoryData.map((cat) => (
              <div key={cat.id} className="group relative aspect-[4/5] overflow-hidden bg-black">
                <Image
                  src={config?.categoryImages?.[cat.categoryName] || PlaceHolderImages.find(img => img.id === `hero-${cat.id}`)?.imageUrl || 'https://picsum.photos/seed/cat/800/1000'}
                  alt={cat.title}
                  fill
                  className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                />
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <div className="mb-4 p-2 bg-primary w-fit">{cat.icon}</div>
                  <h3 className="text-3xl font-black uppercase mb-2 tracking-tight">{cat.title}</h3>
                  <Button variant="link" className="text-white p-0 w-fit font-bold uppercase tracking-widest text-xs hover:text-primary" asChild>
                    <a href={`#${cat.id}`}>Explore Now <ArrowRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="pb-32 container mx-auto px-12 md:px-32 space-y-32">
        {categoryData.map((cat) => {
          const filtered = destinations.filter(d => d.category === cat.categoryName);
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
                        {pair.map((article: any) => <ArticleCard key={article.id} article={article} />)}
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

export default SeeAndDoPage;
