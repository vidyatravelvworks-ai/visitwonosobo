'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag, ChevronLeft, Loader2, User } from 'lucide-react';
import { useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { articles as staticArticles } from '@/data/articles';
import ReactMarkdown from 'react-markdown';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const ArticleDetailPage = ({ params }: PageProps) => {
  const { slug } = use(params);
  const db = useFirestore();

  const docRef = useMemoFirebase(() => {
    if (!db || !slug) return null;
    return doc(db, 'articles', slug);
  }, [db, slug]);

  const { data: dbArticle, isLoading } = useDoc(docRef);
  const staticArticle = staticArticles.find((a) => a.slug === slug);
  const article = dbArticle || staticArticle;

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <Loader2 className="animate-spin text-primary h-12 w-12" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-black uppercase tracking-tighter">Artikel Tidak Ditemukan</h1>
        <Button asChild variant="outline">
          <Link href="/">Kembali ke Beranda</Link>
        </Button>
      </div>
    );
  }

  return (
    <article className="bg-background pb-24">
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        </div>
        
        <div className="container mx-auto px-6 md:px-32 relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-white/90 uppercase tracking-[0.3em]">
              <span className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-primary" />
                {article.category}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                {article.date}
              </span>
              {article.author && (
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  {article.author}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-32 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-2xl border-2 border-black/5">
          <Button variant="ghost" asChild className="mb-10 group pl-0 h-auto hover:bg-transparent">
            <Link href="/" className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-primary">
              <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Kembali Ke Eksplorasi
            </Link>
          </Button>

          <div className="mb-12">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed italic border-l-4 border-primary pl-8 font-bold uppercase tracking-tight">
              {article.excerpt}
            </p>
          </div>

          <div className="max-w-none text-foreground/80 leading-loose">
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-8 text-sm md:text-base font-medium tracking-wide leading-loose">{children}</p>,
                h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mt-16 mb-8 text-black border-b-2 border-primary w-fit pb-1">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mt-12 mb-6 text-black">{children}</h3>,
                strong: ({ children }) => <strong className="font-black text-black">{children}</strong>,
                em: ({ children }) => <em className="italic text-primary font-bold">{children}</em>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-8 space-y-4 pl-4">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-8 space-y-4 pl-4">{children}</ol>,
                li: ({ children }) => <li className="text-sm md:text-base font-medium">{children}</li>,
                blockquote: ({ children }) => <blockquote className="border-l-4 border-primary bg-secondary/30 p-8 my-10 italic font-medium text-lg text-black">{children}</blockquote>,
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleDetailPage;
