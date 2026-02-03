
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Hero = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-sikunir');

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold font-headline leading-tight animate-in slide-in-from-left duration-700">
            Eksplorasi Wonosobo dengan <span className="text-secondary">Lokal Guide</span> Terbaik
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-xl animate-in slide-in-from-left duration-1000">
            Nikmati keindahan sunrise Sikunir dan kearifan lokal Dieng bersama tim profesional kami yang lahir dan besar di sini.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom duration-1000">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 py-7" asChild>
              <a href="#services">Lihat Paket Wisata</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-7" asChild>
              <a href="/artikel">Baca Tips Perjalanan</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
