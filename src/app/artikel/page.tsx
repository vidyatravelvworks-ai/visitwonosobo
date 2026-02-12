
'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { Loader2, Search, Filter, Calendar, Tag, ChevronRight, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { articles as staticArticles } from '@/data/articles';

const ArtikelPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const db = useFirestore();

  const articlesQ = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'articles'), orderBy('updatedAt', 'desc'));
  }, [db]);

  const { data: dbArticles, isLoading } = useCollection(articlesQ);

  const combinedArticles = useMemo(() => {
    const firestoreArticles = dbArticles || [];
    const dbSlugs = new Set(firestoreArticles.map(a => a.slug || a.id));
    const filteredStatic = staticArticles.filter(a => !dbSlugs.has(a.slug));
    return [...firestoreArticles, ...filteredStatic];
  }, [dbArticles]);

  const filteredArticles = useMemo(() => {
    return combinedArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [combinedArticles, searchTerm, selectedCategory]);

  const categories = useMemo(() => {
    const cats = new Set(combinedArticles.map(a => a.category));
    return Array.from(cats);
  }, [combinedArticles]);

  const heroImage = PlaceHolderImages.find(img => img.id === 'mountain-prau')?.imageUrl || 'https://picsum.photos/seed/index/1200/400';

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Mini Hero */}
      <section className="relative h-[30vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Index Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-6 md:px-32 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">Index Artikel</h1>
          <p className="text-white/70 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">Arsip Lengkap Penjelajahan Wonosobo</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b sticky top-16 bg-white/95 backdrop-blur-md z-30">
        <div className="container mx-auto px-6 md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Cari judul artikel..." 
                className="pl-10 h-12 rounded-none border-2 border-black/5 focus-visible:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12 rounded-none border-2 border-black/5 focus:ring-primary">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Semua Kategori" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Article List */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-32">
          {isLoading ? (
            <div className="flex justify-center p-20"><Loader2 className="animate-spin text-primary h-10 w-10" /></div>
          ) : filteredArticles.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground font-bold uppercase text-xs tracking-widest">Tidak ada artikel yang ditemukan.</div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-1">
              {filteredArticles.map((article: any) => (
                <Link 
                  key={article.slug || article.id} 
                  href={`/artikel/${article.slug || article.id}`}
                  className="group flex items-center gap-6 p-4 hover:bg-secondary/30 transition-colors border-b border-black/5"
                >
                  <div className="relative h-20 w-20 md:h-24 md:w-24 overflow-hidden bg-gray-100 shrink-0 border border-black/5">
                    <Image 
                      src={article.image || 'https://picsum.photos/seed/article/200/200'} 
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-grow min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                      <span className="text-primary">{article.category}</span>
                      <span className="flex items-center gap-1"><Calendar size={10} /> {article.date}</span>
                      {article.author && <span className="flex items-center gap-1"><User size={10} /> {article.author}</span>}
                    </div>
                    <h3 className="text-base md:text-xl font-black uppercase tracking-tight truncate group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <div className="shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <ChevronRight size={20} />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArtikelPage;
