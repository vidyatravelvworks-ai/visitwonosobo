
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Tag, ChevronLeft } from 'lucide-react';
import { articles } from '@/data/articles';
import { Button } from '@/components/ui/button';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} - Wonosobo Explorer`,
    description: article.excerpt,
  };
}

const ArticleDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-10 md:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Button variant="ghost" asChild className="mb-10 group pl-0">
            <Link href="/artikel" className="flex items-center gap-2 font-bold text-primary">
              <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </Link>
          </Button>

          {/* Header */}
          <header className="mb-12 space-y-6">
            <div className="flex items-center gap-4 text-sm font-semibold text-secondary uppercase tracking-widest">
              <span className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-secondary pl-6">
              {article.excerpt}
            </p>
          </header>

          {/* Feature Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground/80 leading-loose space-y-8">
            {article.content.split('\n').filter(p => p.trim()).map((paragraph, idx) => (
              <p key={idx}>{paragraph.trim()}</p>
            ))}
          </div>

          {/* Footer Action */}
          <div className="mt-20 pt-12 border-t border-border flex flex-col items-center text-center space-y-6">
            <h3 className="text-2xl font-bold font-headline text-primary">Tertarik Mengunjungi Wonosobo?</h3>
            <p className="text-muted-foreground max-w-lg">
              Wujudkan perjalanan impian Anda sekarang juga. Hubungi guide lokal kami untuk konsultasi gratis.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-7" asChild>
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
