
import React from 'react';
import ArticleCard from '@/components/article/ArticleCard';
import { articles } from '@/data/articles';

export const metadata = {
  title: 'See & Do - visitwonosobo',
  description: 'Temukan destinasi wisata alam, budaya, dan kuliner terbaik di Wonosobo.',
};

const SeeAndDoPage = () => {
  const destinations = articles.filter(a => a.type === 'destination');
  const categories = ['Alam', 'Budaya', 'Kuliner'];

  return (
    <div className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-10 md:px-20">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-primary">
            See & Do
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Eksplorasi setiap sudut Wonosobo. Dari puncak gunung yang berkabut hingga meja makan penuh cita rasa lokal.
          </p>
        </div>

        {categories.map((cat) => {
          const filtered = destinations.filter(d => d.category === cat);
          if (filtered.length === 0) return null;

          return (
            <div key={cat} className="mb-24">
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
  );
};

export default SeeAndDoPage;
