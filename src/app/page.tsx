import React from 'react';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import ArticleCard from '@/components/article/ArticleCard';
import { articles } from '@/data/articles';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Info } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const featuredStories = articles.filter(a => a.type === 'story').slice(0, 3);

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Practical Info Section with Side Background */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1/2 z-0 hidden lg:block opacity-[0.03]">
          <Image
            src={PlaceHolderImages.find(img => img.id === 'serayu-valley')?.imageUrl || 'https://picsum.photos/seed/river/1920/1080'}
            alt="Practical Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-12 md:px-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-primary font-bold uppercase tracking-widest">Plan Your Trip</h3>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Essential <br /> Information
              </h2>
              <p className="text-sm font-medium tracking-wide text-muted-foreground leading-relaxed">
                Everything you need to know before visiting the land above the clouds. From visa requirements to local transportation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary">
                    <Info className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm mb-2">Travel Tips</h4>
                    <p className="text-sm text-muted-foreground">Best time to visit and what to pack.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary">
                    <Info className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm mb-2">Getting Around</h4>
                    <p className="text-sm text-muted-foreground">Local transport and car rentals.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square bg-gray-100 overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1487621167305-5d248087c724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxmb2dneSUyMG1vdW50YWlufGVufDB8fHx8MTc3MDExNTY0M3ww&ixlib=rb-4.1.0&q=80&w=1080" 
                 alt="Dieng Mist"
                 className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>
        </div>
      </section>

      <Services />
      
      {/* Featured Stories Section with Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={PlaceHolderImages.find(img => img.id='misty-valley')?.imageUrl || 'https://picsum.photos/seed/valley/1920/1080'}
            alt="Stories Background"
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-12 md:px-32 relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-primary font-bold uppercase tracking-widest mb-4">Insider Stories</h3>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Town's Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredStories.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button size="lg" className="bg-primary text-white font-bold uppercase tracking-widest text-xs px-10 py-7 rounded-none" asChild>
              <Link href="/stories">View All Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA with Full Background */}
      <section className="relative py-48 bg-black text-white overflow-hidden text-center group">
        <div className="absolute inset-0 z-0">
          <Image
            src={PlaceHolderImages.find(img => img.id === 'lake-morning')?.imageUrl || 'https://picsum.photos/seed/cta/1920/1080'}
            alt="Final CTA Background"
            fill
            className="object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
        </div>
        <div className="container mx-auto px-12 md:px-32 relative z-10 max-w-4xl">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10">
            Start Your <br /> Journey
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Ready to discover the hidden gems of Central Java? Let our local experts craft your perfect escape.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest px-12 py-8 text-sm rounded-none shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]" asChild>
            <a href="https://wa.me/6281234567890" target="_blank">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}