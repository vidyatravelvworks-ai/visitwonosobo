
import React from 'react';
import ArticleCard from '@/components/article/ArticleCard';
import { articles } from '@/data/articles';

export const metadata = {
  title: 'Artikel Wisata - Wonosobo Explorer',
  description: 'Temukan tips perjalanan, cerita budaya, dan rekomendasi kuliner terbaik di Wonosobo.',
};

const ArtikelPage = () => {
  return (
    <div className="py-16 md:py-32">
      <div className="container mx-auto px-10 md:px-20">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6 text-primary">Blog Wisata</h1>
          <p className="text-muted-foreground text-lg">
            Wawasan mendalam seputar destinasi, tradisi, dan ragam kuliner khas dari negeri di atas awan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtikelPage;
