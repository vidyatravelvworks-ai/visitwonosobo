
import React from 'react';
import Image from 'next/image';
import { articles } from '@/data/articles';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sunrise, Map, Car, ArrowRight } from 'lucide-react';
import ArticleCard from '@/components/article/ArticleCard';
import { Button } from '@/components/ui/button';

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
    icon: <Car className="h-5 w-5" />
  }
];

const SeeAndDoPage = () => {
  const destinations = articles.filter(a => a.type === 'destination');
  const heroImage = PlaceHolderImages.find(img => img.id === 'candi-arjuna');

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

      {/* Categories Visual Grid (Matching Home Page) */}
      <section className="py-24 md:py-32">
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
                  <p className="text-white/80 mb-6 line-clamp-3 text-sm">{cat.description}</p>
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

      {/* Article Listings by Category */}
      <div className="pb-32">
        <div className="container mx-auto px-12 md:px-32 space-y-32">
          {categoryData.map((cat) => {
            const filtered = destinations.filter(d => d.category === cat.categoryName);
            if (filtered.length === 0) return null;

            return (
              <div key={cat.id} id={cat.id} className="scroll-mt-32">
                <div className="flex items-center gap-6 mb-12">
                  <div className="p-2 bg-primary text-white">
                    {cat.icon}
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tight">{cat.title}</h2>
                  <div className="h-px flex-grow bg-border"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {filtered.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeeAndDoPage;
