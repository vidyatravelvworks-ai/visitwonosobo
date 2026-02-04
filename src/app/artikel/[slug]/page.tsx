
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Calendar, Tag, ChevronLeft, Loader2 } from 'lucide-react';
import { useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { articles as staticArticles } from '@/data/articles';

const ArticleDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const db = useFirestore();

  const docRef = useMemoFirebase(() => {
    if (!db || !slug) return null;
    return doc(db, 'articles', slug);
  }, [db, slug]);

  const { data: dbArticle, isLoading } = useDoc(docRef);
  
  // Fallback ke data statis jika sedang loading atau tidak ada di DB
  const staticArticle = staticArticles.find((a) => a.slug === slug);
  const article = dbArticle || staticArticle;

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary h-12 w-12" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-black uppercase">Artikel Tidak Ditemukan</h1>
        <Button asChild variant="outline">
          <Link href="/">Kembali ke Beranda</Link>
        </Button>
      </div>
    );
  }

  return (
    <article className="bg-background pb-24">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        </div>
        
        <div className="container mx-auto px-12 md:px-32 relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4 text-xs font-bold text-white/80 uppercase tracking-[0.3em]">
              <span className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-primary" />
                {article.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                {article.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black font-headline text-white leading-tight uppercase tracking-tighter">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-12 md:px-32 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-2xl">
          {/* Back Link */}
          <Button variant="ghost" asChild className="mb-10 group pl-0 h-auto hover:bg-transparent">
            <Link href="/" className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-primary">
              <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </Link>
          </Button>

          {/* Excerpt */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed italic border-l-4 border-primary pl-8 font-medium">
              {article.excerpt}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-none text-foreground/80 leading-loose space-y-8 font-body">
            {article.content.split('\n').filter((p: string) => p.trim()).map((paragraph: string, idx: number) => (
              <p key={idx} className="text-sm font-medium tracking-wide">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {/* Footer Action */}
          <div className="mt-20 pt-16 border-t border-border flex flex-col items-center text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-black font-headline text-primary uppercase tracking-tight">Siap Menjelajah?</h3>
              <p className="text-muted-foreground max-w-lg font-medium">
                Wujudkan perjalanan impian Anda di Wonosobo sekarang juga bersama guide lokal terbaik kami.
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest px-12 py-8 text-xs rounded-none" asChild>
              <a href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20setelah%20membaca%20artikel%20${encodeURIComponent(article.title)}`} target="_blank">
                Tanya via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleDetailPage;
