
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Clock, MapPin, CheckCircle2, MessageCircle, Loader2, Grid } from 'lucide-react';
import { useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, doc } from 'firebase/firestore';
import { staticPackages } from '@/data/packages';
import { cn } from '@/lib/utils';

const PlanYourTripPage = () => {
  const db = useFirestore();
  
  // Queries
  const packagesQ = useMemoFirebase(() => db ? query(collection(db, 'trip_packages'), orderBy('title', 'asc')) : null, [db]);
  const galleryQ = useMemoFirebase(() => db ? query(collection(db, 'gallery'), orderBy('order', 'asc')) : null, [db]);
  const configRef = useMemoFirebase(() => db ? doc(db, 'config', 'website') : null, [db]);

  const { data: dbPackages, isLoading: isPkgsLoading } = useCollection(packagesQ);
  const { data: galleryItems, isLoading: isGalleryLoading } = useCollection(galleryQ);
  const { data: config } = useDoc(configRef);

  // Ensure hero image is never an empty string
  const storiesHero = config?.heroImages?.stories;
  const fallbackHero = PlaceHolderImages.find(img => img.id === 'mountain-prau')?.imageUrl || 'https://picsum.photos/seed/wonosobo/1200/800';
  const heroImage = (storiesHero && storiesHero.trim() !== "") ? storiesHero : fallbackHero;

  const packages = (dbPackages && dbPackages.length > 0) ? dbPackages : staticPackages;

  return (
    <div className="bg-white">
      {/* Mini Hero Section */}
      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-12 md:px-32 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
            Plan Your <span className="text-primary">Journey</span>
          </h1>
          <p className="text-white/80 text-sm max-w-2xl mx-auto font-medium tracking-wide">
            Pilih paket perjalanan yang telah kami susun dengan teliti untuk pengalaman Wonosobo yang tak terlupakan.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="relative pt-4 pb-24 md:pt-6 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-12 md:px-32 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-primary">Paket Wisata Lokal</h2>
            <p className="text-muted-foreground font-medium">Nikmati perjalanan tanpa hambatan dengan pemandu lokal berpengalaman.</p>
          </div>

          {isPkgsLoading ? (
            <div className="flex justify-center p-12"><Loader2 className="animate-spin h-12 w-12 text-primary" /></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {packages.map((pkg: any, idx: number) => (
                <Card 
                  key={idx} 
                  className={cn(
                    "border-2 rounded-none overflow-hidden hover:shadow-2xl transition-all duration-500",
                    config?.packageDesign?.cardBorder || pkg.borderColor,
                    config?.packageDesign?.cardColor || pkg.color
                  )}
                >
                  <CardHeader className="space-y-8 p-10 pb-0">
                    <div className="space-y-6">
                      <CardTitle className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">{pkg.title}</CardTitle>
                      <div className="flex items-center">
                        <div className="bg-primary px-8 py-5 text-white relative shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] border-l-8 border-black">
                          <span className="block text-[10px] font-bold uppercase tracking-[0.2em] mb-1 text-white/80">Harga Perjalanan</span>
                          <div className="flex items-baseline gap-3">
                            <span className="font-black text-4xl tracking-tighter">{pkg.price}</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">/ Per Armada</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-6 pt-4">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground bg-white px-3 py-1 border shadow-sm">
                        <Clock className="h-4 w-4 text-primary" /> {pkg.time}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-10 space-y-8">
                    <div className="h-px bg-border w-full" />
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {pkg.spots?.map((spot: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold tracking-tight uppercase">
                          <div className="h-1.5 w-1.5 bg-primary" /> {spot}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-black hover:bg-primary text-white font-bold uppercase tracking-widest py-10 rounded-none text-xs" asChild>
                      <a href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20pesan%20${encodeURIComponent(pkg.title)}`} target="_blank">
                        Ambil Paket Ini <MessageCircle className="ml-3 h-5 w-5" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* UNIQUE TRIP GALLERY GRID */}
          <div className="mt-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-2 bg-primary text-white"><Grid size={24} /></div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Trip Gallery</h2>
            </div>
            
            {isGalleryLoading ? (
              <div className="flex justify-center p-20"><Loader2 className="animate-spin h-10 w-10 text-primary" /></div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-[1200px] md:h-[800px]">
                {galleryItems?.slice(0, 8).map((item, idx) => {
                  const spans = [
                    "col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-2",
                    "col-span-1 row-span-1", "col-span-2 row-span-1", "col-span-1 row-span-2",
                    "col-span-1 row-span-1", "col-span-1 row-span-1"
                  ];
                  return (
                    <div key={item.id} className={cn("relative overflow-hidden group", spans[idx % spans.length])}>
                      <img 
                        src={item.url && item.url.trim() !== "" ? item.url : `https://picsum.photos/seed/${item.id}/800/800`} 
                        alt={item.caption} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <p className="text-white text-[10px] font-black uppercase tracking-widest">{item.caption}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanYourTripPage;
