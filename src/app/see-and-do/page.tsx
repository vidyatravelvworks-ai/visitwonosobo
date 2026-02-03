
import React from 'react';
import Image from 'next/image';
import { articles, Article } from '@/data/articles';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sunrise, Map, Utensils, ArrowRight } from 'lucide-react';
import ArticleCard from '@/components/article/ArticleCard';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata = {
  title: 'See & Do - visitwonosobo',
  description: 'Temukan destinasi wisata alam, budaya, dan kuliner terbaik di Wonosobo.',
};

const categoryData = [
  {
    id: 'nature',
    title: 'Nature & Adventure',
    categoryName: 'Alam',
    description: 'Witness the iconic Golden Sunrise at Sikunir and the lush tea plantations.',
    image: PlaceHolderImages.find(img => img.id === 'hero-sikunir')?.imageUrl || '',
    icon: <Sunrise className="h-5 w-5" />
  },
  {
    id: 'culture',
    title: 'Heritage & Culture',
    categoryName: 'Budaya',
    description: 'Explore ancient Arjuna Temple and the mystical ritual of Dieng.',
    image: PlaceHolderImages.find(img => img.id === 'candi-arjuna')?.imageUrl || '',
    icon: <Map className="h-5 w-5" />
  },
  {
    id: 'eat',
    title: 'Food & Dining',
    categoryName: 'Kuliner',
    description: 'Taste the legendary Mie Ongklok and the unique Carica fruit.',
    image: PlaceHolderImages.find(img => img.id === 'mie-ongklok')?.imageUrl || '',
    icon: <Utensils className="h-5 w-5" />
  }
];

const SeeAndDoPage = () => {
  const destinations = articles.filter(a => a.type === 'destination');
  const heroImage = PlaceHolderImages.find(img => img.id === 'candi-arjuna');

  // Helper to chunk articles into pairs for 2-row layout
  const chunkIntoPairs = (arr: Article[]) => {
    const pairs = [];
    for (let i = 0; i < arr.length; i += 2) {
      pairs.push(arr.slice(i, i + 2));
    }
    return pairs;
  };

  return (
    <div className="bg-white">
      {/* Mini Hero Section */}
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-12 md:px-32 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
            See & Do
          </h1>
          <p className="text-white/80 text-sm max-w-2xl mx-auto font-medium tracking-wide">
            Eksplorasi setiap sudut Wonosobo. Dari puncak gunung yang berkabut hingga meja makan penuh cita rasa lokal.
          </p>
        </div>
      </section>

      {/* Categories Visual Grid */}
      <section className="pt-1 pb-24 md:pt-2 md:pb-32">
        <div className="container mx-auto px-12 md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {categoryData.map((cat) => (
              <div key={cat.id} className="group relative aspect-[4/5] overflow-hidden bg-black">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                />
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <div className="mb-4 p-2 bg-primary w-fit">
                    {cat.icon}
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-2 tracking-tight">{cat.title}</h3>
                  <p className="text-white/80 mb-6 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                  <Button variant="link" className="text-white p-0 w-fit font-bold uppercase tracking-widest text-xs hover:text-primary" asChild>
                    <a href={`#${cat.id}`}>
                      Explore Now <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Listings by Category with 2-Row Carousel */}
      <div className="pb-32">
        <div className="container mx-auto px-12 md:px-32 space-y-32">
          {categoryData.map((cat) => {
            const filtered = destinations.filter(d => d.category === cat.categoryName);
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
                  <div className="hidden md:flex gap-4">
                    {/* Navigation buttons will be handled by Carousel internal logic if we use absolute positioning */}
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
                          {pair.map((article) => (
                            <div key={article.slug} className="min-h-fit">
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

export default SeeAndDoPage;
