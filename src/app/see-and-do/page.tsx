
import React from 'react';
import Image from 'next/image';
import ArticleCard from '@/components/article/ArticleCard';
import { articles } from '@/data/articles';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata = {
  title: 'See & Do - visitwonosobo',
  description: 'Temukan destinasi wisata alam, budaya, dan kuliner terbaik di Wonosobo.',
};

const SeeAndDoPage = () => {
  const destinations = articles.filter(a => a.type === 'destination');
  const categories = ['Alam', 'Budaya', 'Kuliner'];
  const heroImage = PlaceHolderImages.find(img => img.id === 'candi-arjuna');

  return (
    <div className="bg-white">
      {/* Small Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-4">
            See & Do
          </h1>
          <p className="text-white/80 text-sm max-w-2xl mx-auto font-medium tracking-wide">
            Eksplorasi setiap sudut Wonosobo. Dari puncak gunung yang berkabut hingga meja makan penuh cita rasa lokal.
          </p>
        </div>
      </section>

      <div className="py-24 md:py-32">
        <div className="container mx-auto px-12 md:px-32">
          {categories.map((cat) => {
            const filtered = destinations.filter(d => d.category === cat);
            if (filtered.length === 0) return null;

            return (
              <div key={cat} className="mb-24 last:mb-0">
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-3xl font-black uppercase tracking-tight">{cat}</h2>
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
