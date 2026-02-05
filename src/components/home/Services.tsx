'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Utensils, Sunrise, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';

const Services = () => {
  const db = useFirestore();
  const configRef = useMemoFirebase(() => db ? doc(db, 'config', 'website') : null, [db]);
  const { data: config } = useDoc(configRef);

  const categories = [
    {
      id: 'nature',
      title: 'Nature & Adventure',
      categoryName: 'Nature & Adventure',
      description: 'Witness the iconic Golden Sunrise at Sikunir.',
      image: config?.categoryImages?.['Nature & Adventure'] || PlaceHolderImages.find(img => img.id === 'hero-sikunir')?.imageUrl,
      icon: <Sunrise className="h-5 w-5" />
    },
    {
      id: 'culture',
      title: 'Heritage & Culture',
      categoryName: 'Heritage & Culture',
      description: 'Explore ancient Arjuna Temple and mystical rituals.',
      image: config?.categoryImages?.['Heritage & Culture'] || PlaceHolderImages.find(img => img.id === 'candi-arjuna')?.imageUrl,
      icon: <Map className="h-5 w-5" />
    },
    {
      id: 'eat',
      title: 'Food & Drink',
      categoryName: 'Food & Drink',
      description: 'Taste the legendary Mie Ongklok and Carica.',
      image: config?.categoryImages?.['Food & Drink'] || PlaceHolderImages.find(img => img.id === 'mie-ongklok')?.imageUrl,
      icon: <Utensils className="h-5 w-5" />
    }
  ];

  return (
    <section id="services" className="pt-16 pb-32 bg-white">
      <div className="container mx-auto px-4 md:px-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <h3 className="text-primary font-bold uppercase tracking-widest mb-4">See & Do</h3>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Discover New Experiences</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative aspect-[4/5] overflow-hidden bg-black">
              <Image
                src={cat.image || 'https://picsum.photos/seed/wonosobo/800/1000'}
                alt={cat.title}
                fill
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="mb-4 p-2 bg-primary w-fit">{cat.icon}</div>
                <h3 className="text-3xl font-black uppercase mb-2 tracking-tight">{cat.title}</h3>
                <p className="text-white/80 mb-6 text-sm leading-relaxed">{cat.description}</p>
                <Button variant="link" className="text-white p-0 w-fit font-bold uppercase tracking-widest text-xs hover:text-primary" asChild>
                  <a href="/see-and-do">Explore Now <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;