'use client';

import React from 'react';
import ArticleCard from '@/components/article/ArticleCard';
import { articles as staticArticles } from '@/data/articles';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';

const ArtikelPage = () => {
  const db = useFirestore();

  const articlesQ = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'articles'), orderBy('updatedAt', 'desc'));
  }, [db]);

  const { data: dbArticles, isLoading } = useCollection(articlesQ);

  // Gabungkan data DB dengan data statis, utamakan DB jika slug sama
  const combinedArticles = React.useMemo(() => {
    if (!dbArticles) return staticArticles;
    
    const dbSlugs = new Set(dbArticles.map(a => a.slug));
    const filteredStatic = staticArticles.filter(a => !dbSlugs.has(a.slug));
    
    return [...dbArticles, ...filteredStatic];
  }, [dbArticles]);

  return (
    <div className="py-16 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-black">Travel <span className="text-primary">Journal</span></h1>
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">
            Temukan wawasan terdalam mengenai Wonosobo melalui kacamata warga lokal.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center p-20"><Loader2 className="animate-spin text-primary h-12 w-12" /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {combinedArticles.map((article: any) => (
              <ArticleCard key={article.slug || article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtikelPage;
