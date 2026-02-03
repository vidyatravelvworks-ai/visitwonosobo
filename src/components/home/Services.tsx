
import React from 'react';
import Image from 'next/image';
import { ArrowRight, Car, Sunrise, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const categories = [
  {
    id: 'nature',
    title: 'Nature & Adventure',
    description: 'Witness the iconic Golden Sunrise at Sikunir and the lush tea plantations.',
    image: PlaceHolderImages.find(img => img.id === 'hero-sikunir')?.imageUrl || '',
    link: '#',
    icon: <Sunrise className="h-5 w-5" />
  },
  {
    id: 'culture',
    title: 'Heritage & Culture',
    description: 'Explore ancient Arjuna Temple and the mystical ritual of Dieng.',
    image: PlaceHolderImages.find(img => img.id === 'candi-arjuna')?.imageUrl || '',
    link: '#',
    icon: <Map className="h-5 w-5" />
  },
  {
    id: 'eat',
    title: 'Food & Dining',
    description: 'Taste the legendary Mie Ongklok and the unique Carica fruit.',
    image: PlaceHolderImages.find(img => img.id === 'mie-ongklok')?.imageUrl || '',
    link: '#',
    icon: <Car className="h-5 w-5" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-10 md:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <h3 className="text-primary font-bold uppercase tracking-widest mb-4">See & Do</h3>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Discover New <br /> Experiences
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-muted-foreground text-sm font-medium tracking-wide leading-relaxed">
              From misty mountains to vibrant local markets, find your passion in every corner of Wonosobo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative aspect-[4/5] overflow-hidden bg-black">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="mb-4 p-2 bg-primary w-fit">
                  {cat.icon}
                </div>
                <h3 className="text-3xl font-black uppercase mb-2 tracking-tight">{cat.title}</h3>
                <p className="text-white/80 mb-6 line-clamp-2 text-sm">{cat.description}</p>
                <Button variant="link" className="text-white p-0 w-fit font-bold uppercase tracking-widest text-xs hover:text-primary">
                  Explore Now <ArrowRight className="ml-2 h-4 w-4" />
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
