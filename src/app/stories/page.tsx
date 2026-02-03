
import React from 'react';
import ArticleCard from '@/components/article/ArticleCard';
import { articles } from '@/data/articles';

export const metadata = {
  title: 'Stories - visitwonosobo',
  description: 'Wawasan mendalam seputar sejarah, budaya, dan tips perjalanan di Wonosobo.',
};

const StoriesPage = () => {
  const stories = articles.filter(a => a.type === 'story');
  const categories = ['Sejarah', 'Sosial', 'Geografis', 'Tips'];

  return (
    <div className="py-24 md:py-32 bg-[#F1F3F5]">
      <div className="container mx-auto px-10 md:px-20">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">
            Stories
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Mengenal Wonosobo lebih dalam melalui narasi tentang sejarah, masyarakat, dan keajaiban geografisnya.
          </p>
        </div>

        {categories.map((cat) => {
          const filtered = stories.filter(s => s.category === cat);
          if (filtered.length === 0) return null;

          return (
            <div key={cat} className="mb-24">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-3xl font-black uppercase tracking-tight text-primary">{cat}</h2>
                <div className="h-px flex-grow bg-gray-300"></div>
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

export default StoriesPage;
