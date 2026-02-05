"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronDown } from 'lucide-react';
import { useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';

interface HeroProps {
  config?: any;
  isLoading?: boolean;
}

const Hero = ({ config: externalConfig, isLoading: externalLoading }: HeroProps) => {
  const db = useFirestore();
  const configRef = useMemoFirebase(() => db ? doc(db, 'config', 'website') : null, [db]);
  const { data: internalConfig, isLoading: internalLoading } = useDoc(configRef);

  // Menggabungkan status loading dari props atau internal hook
  const isLoading = externalLoading !== undefined ? externalLoading : internalLoading;
  const config = externalConfig !== undefined ? externalConfig : internalConfig;

  const configHomeHero = config?.heroImages?.home;
  const placeholderHomeHero = PlaceHolderImages.find(img => img.id === 'hero-sikunir')?.imageUrl || 'https://picsum.photos/seed/wonosobo-home/1200/800';
  
  // Gambar yang akan ditampilkan: Utamakan dari config, jika config sudah terisi namun kosong baru gunakan placeholder
  const heroImage = (configHomeHero && configHomeHero.trim() !== "") ? configHomeHero : placeholderHomeHero;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* 
        Sangat Ketat: Hanya tampilkan gambar jika isLoading sudah FALSE.
        Karena isLoading dimulai dengan TRUE di hook, maka pada render pertama 
        sebelum data siap, bagian ini akan dilewati dan hanya menampilkan bg-black.
      */}
      {!isLoading && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Home Hero"
            fill
            className="object-cover animate-in fade-in duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
        </div>
      )}

      <div className="container mx-auto px-2 md:px-8 lg:px-32 relative z-10 text-center pt-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-white text-sm font-bold uppercase tracking-[0.4em]">Welcome to Wonosobo</h2>
          <h1 className="text-5xl md:text-9xl font-black text-white uppercase leading-none tracking-tighter">
            The Soul <br /> <span className="text-white underline decoration-primary decoration-[12px] underline-offset-[16px]">of Java</span>
          </h1>
          <div className="pt-10 flex flex-col sm:flex-row justify-center gap-6 max-w-[220px] sm:max-w-none mx-auto">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase px-12 py-8 rounded-none" asChild>
              <a href="#services">Explore Experiences</a>
            </Button>
            <Button size="lg" variant="outline" className="text-primary border-white hover:bg-white hover:text-black font-bold uppercase px-12 py-8 rounded-none" asChild>
              <a href="/stories">Travel Stories</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block">
        <ChevronDown className="h-8 w-8 opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
