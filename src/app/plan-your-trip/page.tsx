
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Clock, Loader2, Grid, MapPin, 
  CarFront
} from 'lucide-react';
import { useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, doc } from 'firebase/firestore';
import { staticPackages } from '@/data/packages';
import { cn } from '@/lib/utils';

const PlanYourTripPage = () => {
  const db = useFirestore();
  
  const packagesQ = useMemoFirebase(() => db ? query(collection(db, 'trip_packages'), orderBy('title', 'asc')) : null, [db]);
  const galleryQ = useMemoFirebase(() => db ? query(collection(db, 'gallery'), orderBy('order', 'asc')) : null, [db]);
  const configRef = useMemoFirebase(() => db ? doc(db, 'config', 'website') : null, [db]);

  const { data: dbPackages, isLoading: isPkgsLoading } = useCollection(packagesQ);
  const { data: dbGalleryItems, isLoading: isGalleryLoading } = useCollection(galleryQ);
  const { data: config } = useDoc(configRef);

  const storiesHero = config?.heroImages?.stories;
  const fallbackHero = PlaceHolderImages.find(img => img.id === 'mountain-prau')?.imageUrl || 'https://picsum.photos/seed/wonosobo/1200/800';
  const heroImage = (storiesHero && storiesHero.trim() !== "") ? storiesHero : fallbackHero;

  const packages = (dbPackages && dbPackages.length > 0) ? dbPackages : staticPackages;

  const defaultGalleryItems = Array.from({ length: 8 }).map((_, i) => ({
    id: `dummy-${i}`,
    url: `https://picsum.photos/seed/trip-${i + 20}/800/800`,
    caption: `Experience Wonosobo ${i + 1}`,
    order: i + 100 
  }));

  const rawGalleryItems = (dbGalleryItems && dbGalleryItems.length > 0) 
    ? [...dbGalleryItems, ...defaultGalleryItems]
    : defaultGalleryItems;

  const galleryItems = React.useMemo(() => {
    return rawGalleryItems.filter(item => item && item.url && item.url.trim() !== "");
  }, [rawGalleryItems]);

  return (
    <div className="bg-white">
      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Hero Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-6 md:px-8 lg:px-32 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">Plan Your <span className="text-primary">Journey</span></h1>
        </div>
      </section>

      <section className="relative pt-24 pb-24 overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-32 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-primary">Paket Wisata Lokal</h2>
            <p className="text-muted-foreground font-medium text-sm">Nikmati perjalanan tanpa hambatan dengan pemandu lokal berpengalaman.</p>
          </div>

          {isPkgsLoading ? (
            <div className="flex justify-center p-12"><Loader2 className="animate-spin h-12 w-12 text-primary" /></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg: any, idx: number) => (
                <div key={pkg.id || idx} className={cn("bg-white border-2 border-black/5 shadow-lg p-8 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full hover:border-primary/50", pkg.color || "bg-white", pkg.borderColor || "border-border")}>
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-4 bg-primary text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"><CarFront size={24} /></div>
                    <div className="text-right">
                      <span className="block text-[8px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Harga Mulai</span>
                      <div className="bg-black text-white px-3 py-1 font-black text-lg tracking-tight inline-block">{pkg.price}</div>
                    </div>
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors leading-none">{pkg.title}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2"><Clock size={12} className="text-primary" /> {pkg.time}</p>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-primary mb-3">Destinasi Rute</p>
                      <ul className="space-y-2">
                        {pkg.spots?.map((spot: string, i: number) => (
                          <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-tight">
                            <MapPin className="h-3 w-3 text-muted-foreground shrink-0" /> <span className="truncate">{spot}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full bg-primary text-white rounded-none h-14 font-black uppercase tracking-[0.2em] text-[10px] gap-2 group/btn mt-10" asChild>
                    <a href={`https://wa.me/6281230939128?text=Halo%20saya%20tertarik%20pesan%20${encodeURIComponent(pkg.title)}`} target="_blank">Booking Sekarang</a>
                  </Button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary text-white"><Grid size={24} /></div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Trip Gallery</h2>
              </div>
            </div>
            
            {isGalleryLoading ? (
              <div className="flex justify-center p-20"><Loader2 className="animate-spin h-10 w-10 text-primary" /></div>
            ) : (
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
                  <div className="grid grid-rows-2 grid-flow-col gap-4 h-[500px] md:h-[650px] shrink-0 pr-4">
                    {galleryItems.map((item, idx) => (
                      <div key={item.id} className="relative overflow-hidden group border-2 border-black/5 shadow-md w-[300px] md:w-[400px] h-full">
                        {item.url && (
                          <Image src={item.url} alt={item.caption || "Trip Photo"} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6"><p className="text-white text-[10px] font-black uppercase tracking-widest">{item.caption}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanYourTripPage;
