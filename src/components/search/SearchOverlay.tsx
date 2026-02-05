
"use client";

import React, { useState, useEffect } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogHeader } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { articles as staticArticles, Article } from '@/data/articles';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import Link from 'next/link';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Article[]>([]);
  const db = useFirestore();

  // Fetch all articles from Firestore to search locally for better performance
  const articlesQ = useMemoFirebase(() => db ? query(collection(db, 'articles'), orderBy('updatedAt', 'desc')) : null, [db]);
  const { data: dbArticles, isLoading } = useCollection(articlesQ);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }

    // Combine Static + DB Articles
    const allArticles = dbArticles ? [...dbArticles, ...staticArticles] : staticArticles;
    
    // Simple filter logic
    const filtered = allArticles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 8);
    
    setResults(filtered);
  }, [searchTerm, dbArticles]);

  useEffect(() => {
    if (!isOpen) {
      setSearchTerm('');
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="fixed top-24 left-auto right-12 md:right-32 translate-x-0 translate-y-0 w-[calc(100%-6rem)] max-w-[320px] md:max-w-[400px] p-0 gap-0 bg-white border-none shadow-2xl rounded-none outline-none animate-in fade-in slide-in-from-top-4 duration-300">
        <DialogTitle className="sr-only">Pencarian Wonosobo</DialogTitle>
        
        <div className="flex justify-end p-4 border-b">
          <button onClick={onClose} className="hover:text-primary transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <DialogHeader className="p-6">
          <div className="flex items-center gap-4">
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin text-primary" /> : <Search className="h-5 w-5 text-primary shrink-0" />}
            <Input
              placeholder="Cari destinasi..."
              className="text-xl font-bold uppercase tracking-tight border-none focus-visible:ring-0 p-0 h-auto placeholder:text-gray-300 bg-transparent"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </DialogHeader>

        <div className="px-6 pb-6 bg-[#F8F9FA] max-h-[60vh] overflow-y-auto">
          {searchTerm.trim() === '' ? (
            <div className="pt-4 space-y-4">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Populer</h4>
              <div className="flex flex-wrap gap-2">
                {['Sikunir', 'Dieng', 'Mie Ongklok', 'Arjuna'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-4 py-2 bg-white border border-gray-100 text-[9px] font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="pt-4 space-y-6">
              {results.length > 0 ? (
                results.map((article) => (
                  <Link
                    key={article.slug || article.id}
                    href={`/artikel/${article.slug || article.id}`}
                    onClick={onClose}
                    className="group block"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-bold uppercase text-primary">{article.category}</span>
                        <span className="h-px w-4 bg-gray-200"></span>
                        <span className="text-[8px] font-bold uppercase text-muted-foreground">{article.date}</span>
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                        {article.title}
                      </h3>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-xs text-muted-foreground italic">Tidak ada hasil ditemukan.</p>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchOverlay;
