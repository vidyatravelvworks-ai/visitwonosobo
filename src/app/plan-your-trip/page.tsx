'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Clock, Loader2, Grid, MapPin, 
  CheckCircle2, XCircle, CarFront, ArrowRight 
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
  const { data: galleryItems, isLoading: isGalleryLoading } = useCollection(galleryQ);
  const { data: config } = useDoc(configRef);

  const storiesHero = config?.heroImages?.stories;
  const fallbackHero = PlaceHolderImages.find(img => img.id === 'mountain-prau')?.imageUrl || 'https://picsum.photos/seed/wonosobo/1200/800';
  const heroImage = (storiesHero && storiesHero.trim() !== "") ? storiesHero : fallbackHero;

  const packages = (dbPackages && dbPackages.length > 0) ? dbPackages : staticPackages;

  return (
    <div className="bg-white">
      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImage && (
            <Image 
              src={heroImage} 
              alt="Hero Background" 
              fill 
              className="object-cover" 
              priority 
            />
          )}
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

      <section className="relative pt-24 pb-24 overflow-hidden">
        <div className="container mx-auto px-12 md:px-32 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-primary">Paket Wisata Lokal</h2>
            <p className="text-muted-foreground font-medium text-sm">Nikmati perjalanan tanpa hambatan dengan pemandu lokal berpengalaman.</p>
          </div>

          {isPkgsLoading ? (
            <div className="flex justify-center p-12"><Loader2 className="animate-spin h-12 w-12 text-primary" /></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg: any, idx: number) => (
                <div 
                  key={pkg.id || idx} 
                  className={cn(
                    "bg-white border-2 border-black/5 shadow-lg p-8 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full hover:border-primary/50",
                    pkg.color,
                    pkg.borderColor
                  )}
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-4 bg-primary text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <CarFront size={24} />
                    </div>
                    <div className="text-right">
                      <span className="block text-[8px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Harga Perjalanan</span>
                      <div className="bg-black text-white px-3 py-1 font-black text-lg tracking-tight inline-block">
                        {pkg.price}
                      </div>
                    </div>
                  </div>

                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors leading-none">
                    {pkg.title}
                  </h4>
                  
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                    <Clock size={12} className="text-primary" /> {pkg.time}
                  </p>

                  <div className="h-px bg-black/10 w-full mb-6" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.1) 50%, transparent 50%)', backgroundSize: '10px 1px', backgroundRepeat: 'repeat-x', height: '1px' }} />
                  
                  <div className="space-y-6 flex-grow">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-primary mb-3">Destinasi Rute</p>
                      <ul className="space-y-2">
                        {pkg.spots?.map((spot: string, i: number) => (
                          <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-tight">
                            <MapPin className="h-3 w-3 text-muted-foreground shrink-0" /> 
                            <span className="truncate">{spot}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-dashed">
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-green-600 mb-2">Include</p>
                        <ul className="space-y-1.5">
                          {pkg.includes?.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-[9px] font-bold uppercase text-muted-foreground leading-tight">
                              <CheckCircle2 className="h-3 w-3 text-green-600 shrink-0 mt-0.5" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-red-600 mb-2">Exclude</p>
                        <ul className="space-y-1.5">
                          {pkg.excludes?.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-[9px] font-bold uppercase text-muted-foreground leading-tight">
                              <XCircle className="h-3 w-3 text-red-600 shrink-0 mt-0.5" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-black hover:bg-primary text-white rounded-none h-14 font-black uppercase tracking-[0.2em] text-[10px] gap-2 group/btn mt-10" asChild>
                    <a href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20pesan%20${encodeURIComponent(pkg.title)}`} target="_blank">
                      Pesan Sekarang
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          )}

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
                  const galleryImg = (item.url && item.url.trim() !== "") ? item.url : `https://picsum.photos/seed/${item.id}/800/800`;
                  return (
                    <div key={item.id} className={cn("relative overflow-hidden group", spans[idx % spans.length])}>
                      {galleryImg && (
                        <Image 
                          src={galleryImg} 
                          alt={item.caption || "Trip Photo"} 
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                      )}
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
