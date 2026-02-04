
'use client';

import React from 'react';
import Image from 'next/image';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
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

const categoryData = [
  {
    id: 'sejarah',
    title: 'Sejarah & Warisan',
    categoryName: 'Sejarah',
    description: 'Menelusuri jejak peradaban kuno dan kolonial yang membentuk jati diri Wonosobo.',
    image: PlaceHolderImages.find(img => img.id === 'temple-detail')?.imageUrl || '',
    icon: <History className="h-5 w-5" />
  },
  {
    id: 'sosial',
    title: 'Masyarakat & Budaya',
    categoryName: 'Sosial',
    description: 'Melihat lebih dekat kehidupan sehari-hari dan nilai-nilai luhur masyarakat lokal.',
    image: PlaceHolderImages.find(img => img.id === 'ritual')?.imageUrl || '',
    icon: <Users className="h-5 w-5" />
  },
  {
    id: 'geografis',
    title: 'Bentang Alam & Geografis',
    categoryName: 'Geografis',
    description: 'Memahami keunikan geologi dan fenomena alam di negeri di atas awan.',
    image: PlaceHolderImages.find(img => img.id === 'mountain-prau')?.imageUrl || '',
    icon: <Globe className="h-5 w-5" />
  },
  {
    id: 'tips',
    title: 'Tips & Panduan',
    categoryName: 'Tips',
    description: 'Panduan praktis dan rahasia lokal untuk perjalanan yang lebih bermakna.',
    image: PlaceHolderImages.find(img => img.id === 'coffee')?.imageUrl || '',
    icon: <Info className="h-5 w-5" />
  }
];

const StoriesPage = () => {
  const db = useFirestore();
  
  const q = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'articles'), where('type', '==', 'story'));
  }, [db]);

  const { data: dbStories, isLoading } = useCollection(q);
  
  // Fallback ke data statis
  const stories = (dbStories && dbStories.length > 0) 
    ? dbStories 
    : staticArticles.filter(a => a.type === 'story');

  const heroImage = PlaceHolderImages.find(img => img.id === 'mountain-prau');

  const chunkIntoPairs = (arr: any[]) => {
    const pairs = [];
    for (let i = 0; i < arr.length; i += 2) {
      pairs.push(arr.slice(i, i + 2));
    }
    return pairs;
  };

  return (
    <div className="bg-white">
      {/* Mini Hero Section */}
      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-12 md:px-32 relative z-10 text-center">
          <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white mb-4">
            Stories
          </h1>
          <p className="text-white/80 text-sm max-w-2xl mx-auto font-medium tracking-wide">
            Eksplorasi narasi mendalam tentang sejarah, masyarakat, dan keajaiban alam Wonosobo.
          </p>
        </div>
      </section>

      {/* Categories Visual Grid */}
      <section className="pt-2 pb-24 md:pb-32">
        <div className="container mx-auto px-12 md:px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {categoryData.map((cat) => (
              <div key={cat.id} className="group relative aspect-[4/5] overflow-hidden bg-black">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="mb-4 p-2 bg-primary w-fit">
                    {cat.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-2 tracking-tight">{cat.title}</h3>
                  <Button variant="link" className="text-white p-0 w-fit font-bold uppercase tracking-widest text-[10px] hover:text-primary" asChild>
                    <a href={`#${cat.id}`}>
                      Explore Stories <ArrowRight className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isLoading && (
        <div className="flex justify-center p-12">
          <Loader2 className="animate-spin text-primary h-8 w-8" />
        </div>
      )}

      {/* Article Listings by Category with 2-Row Carousel */}
      <div className="pb-32">
        <div className="container mx-auto px-12 md:px-32 space-y-32">
          {categoryData.map((cat) => {
            const filtered = stories.filter(s => s.category === cat.categoryName);
            if (filtered.length === 0) return null;

            const pairs = chunkIntoPairs(filtered);

            return (
              <div key={cat.id} id={cat.id} className="scroll-mt-32">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-6">
                    <div className="p-2 bg-primary text-white">
                      {cat.icon}
                    </div>
                    <h2 className="text-3xl font-black uppercase tracking-tight">{cat.title}</h2>
                  </div>
                </div>

                <Carousel
                  opts={{
                    align: "start",
                    loop: false,
                  }}
                  className="w-full relative"
                >
                  <CarouselContent className="-ml-12">
                    {pairs.map((pair, idx) => (
                      <CarouselItem key={idx} className="pl-12 basis-full md:basis-1/2 lg:basis-1/3">
                        <div className="flex flex-col gap-12">
                          {pair.map((article: any) => (
                            <div key={article.slug || article.id} className="min-h-fit">
                              <ArticleCard article={article} />
                            </div>
                          ))}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-end gap-2 mt-8 md:absolute md:-top-20 md:right-0">
                    <CarouselPrevious className="static translate-y-0 rounded-none border-black hover:bg-black hover:text-white" />
                    <CarouselNext className="static translate-y-0 rounded-none border-black hover:bg-black hover:text-white" />
                  </div>
                </Carousel>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;
