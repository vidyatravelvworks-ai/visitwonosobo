
"use client";

import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { articles, Article } from '@/data/articles';
import Link from 'next/link';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      article.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
    setResults(filtered);
  }, [query]);

  // Reset query when closed
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[800px] p-0 gap-0 bg-white border-none shadow-2xl rounded-none outline-none">
        <DialogHeader className="p-8 md:p-12 border-b">
          <DialogTitle className="sr-only">Pencarian Destinasi dan Cerita Wonosobo</DialogTitle>
          <div className="flex items-center gap-6">
            <Search className="h-8 w-8 text-primary shrink-0" />
            <Input
              placeholder="Cari destinasi atau cerita..."
              className="text-3xl md:text-5xl font-black uppercase tracking-tighter border-none focus-visible:ring-0 p-0 h-auto placeholder:text-gray-200 bg-transparent"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </DialogHeader>
        <div className="p-8 md:p-12 bg-[#F8F9FA] min-h-[400px]">
          {query.trim() === '' ? (
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Pencarian Populer</h4>
              <div className="flex flex-wrap gap-4">
                {['Sikunir', 'Mie Ongklok', 'Dieng', 'Candi Arjuna', 'Tips Cuaca'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-8 py-4 bg-white border border-gray-200 text-[10px] font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {results.length > 0 ? `Ditemukan ${results.length} hasil` : 'Tidak ada hasil ditemukan'}
                </h4>
              </div>
              <div className="space-y-8">
                {results.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/artikel/${article.slug}`}
                    onClick={onClose}
                    className="group block"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{article.category}</span>
                        <span className="h-px w-8 bg-gray-300"></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{article.date}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-none">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1 italic">{article.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchOverlay;
