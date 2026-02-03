
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-sikunir');

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-white text-sm md:text-base font-bold uppercase tracking-[0.3em] animate-in fade-in slide-in-from-bottom-4 duration-700">
            Welcome to Wonosobo
          </h2>
          <h1 className="text-6xl md:text-9xl font-black text-white font-headline uppercase leading-none tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Passion Made <br /> <span className="text-white underline decoration-primary decoration-8 underline-offset-8">Possible</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
            Experience the mystical Dieng Plateau and the warmth of Wonosobo culture with our expert local guides.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-xs px-10 py-8" asChild>
              <a href="#services">Explore Experiences</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black font-bold uppercase tracking-widest text-xs px-10 py-8" asChild>
              <a href="/artikel">Travel Stories</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block">
        <ChevronDown className="h-8 w-8 opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
