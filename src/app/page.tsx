
import React from 'react';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import ArticleCard from '@/components/article/ArticleCard';
import { articles } from '@/data/articles';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      
      {/* Blog Preview Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 text-primary">Inspirasi Perjalanan</h2>
              <p className="text-muted-foreground">
                Pelajari lebih dalam tentang kekayaan budaya, alam, dan kuliner yang membuat Wonosobo begitu istimewa.
              </p>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <Link href="/artikel">Lihat Semua Artikel</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">Siap Merencanakan Liburan Anda?</h2>
          <p className="text-white/80 text-lg mb-10">
            Tim kami siap membantu menyusun rencana perjalanan yang tak terlupakan di Wonosobo. Hubungi kami sekarang melalui WhatsApp.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-10 py-7 text-lg" asChild>
            <a href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20konsultasi%20wisata" target="_blank">
              Chat Sekarang di WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
