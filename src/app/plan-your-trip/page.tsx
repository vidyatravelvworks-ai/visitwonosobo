
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Clock, MapPin, CheckCircle2, MessageCircle, Loader2 } from 'lucide-react';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { staticPackages } from '@/data/packages';

const PlanYourTripPage = () => {
  const db = useFirestore();
  
  const q = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'trip_packages'), orderBy('title', 'asc'));
  }, [db]);

  const { data: dbPackages, isLoading } = useCollection(q);

  const heroImage = PlaceHolderImages.find(img => img.id === 'car-rental');

  const packages = (dbPackages && dbPackages.length > 0) ? dbPackages : staticPackages;

  return (
    <div className="bg-white">
      {/* Mini Hero Section */}
      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
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

      {/* Services Section */}
      <section className="relative pt-4 pb-24 md:pt-6 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <Image
            src={PlaceHolderImages.find(img => img.id === 'tobacco-field')?.imageUrl || 'https://picsum.photos/seed/field/1920/1080'}
            alt="Section Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-12 md:px-32 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-primary">Paket Wisata Lokal</h2>
            <p className="text-muted-foreground font-medium">Nikmati perjalanan tanpa hambatan dengan pemandu lokal berpengalaman. Harga sudah termasuk armada nyaman dan bahan bakar.</p>
          </div>

          {isLoading ? (
            <div className="flex justify-center p-12">
              <Loader2 className="animate-spin h-12 w-12 text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {packages.map((pkg, idx) => (
                <Card key={idx} className={`border-2 ${pkg.borderColor} ${pkg.color} rounded-none overflow-hidden hover:shadow-2xl transition-all duration-500`}>
                  <CardHeader className="space-y-8 p-10 pb-0">
                    <div className="space-y-6">
                      <CardTitle className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                        {pkg.title}
                      </CardTitle>
                      
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
                        <Clock className="h-4 w-4 text-primary" />
                        {pkg.time}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground bg-white px-3 py-1 border shadow-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {pkg.description}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-10 space-y-8">
                    <div className="h-px bg-border w-full" />
                    <div className="space-y-6">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Rencana Destinasi:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                        {pkg.spots?.map((spot: string, i: number) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-bold tracking-tight uppercase group cursor-default">
                            <div className="h-1.5 w-1.5 bg-primary group-hover:scale-150 transition-transform" />
                            {spot}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-black hover:bg-primary text-white font-bold uppercase tracking-widest py-10 rounded-none group transition-all text-xs" asChild>
                      <a href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20pesan%20${encodeURIComponent(pkg.title)}`} target="_blank">
                        Ambil Paket Ini <MessageCircle className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Custom Plan CTA */}
          <section className="mt-24 relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image
                src={PlaceHolderImages.find(img => img.id === 'village-gathering')?.imageUrl || 'https://picsum.photos/seed/village/1920/1080'}
                alt="Consultation Background"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/75" />
            </div>
            <div className="relative z-10 p-16 md:p-32 text-center space-y-10">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-white">Butuh Rencana <br /> Perjalanan Kustom?</h3>
                <p className="text-white/70 max-w-2xl mx-auto font-medium text-lg">
                  Kami siap membantu menyusun jadwal sesuai keinginan Anda. Hubungi tim lokal kami untuk konsultasi gratis mengenai rute, durasi, dan budget perjalanan Anda.
                </p>
              </div>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black font-black uppercase tracking-widest rounded-none px-16 py-10 text-xs transition-all shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]" asChild>
                <a href="https://wa.me/6281234567890" target="_blank">Hubungi CS via WhatsApp</a>
              </Button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default PlanYourTripPage;
