"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Clock, Loader2, Grid, MapPin, 
  CarFront, Activity, ShieldAlert, Footprints, ThermometerSnowflake, X
} from 'lucide-react';
import { useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, doc } from 'firebase/firestore';
import { staticPackages } from '@/data/packages';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTitle, DialogHeader } from '@/components/ui/dialog';

const PlanYourTripPage = () => {
  const db = useFirestore();
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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

  const defaultGalleryItems = Array.from({ length: 14 }).map((_, i) => ({
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

  const essentialPoints = [
    { 
      title: "Fisik & Aklimatisasi", 
      icon: <Activity className="h-6 w-6" />, 
      content: "Dieng berada di ketinggian >2.000 mdpl. Udara tipis dapat memicu Altitude Sickness. Istirahat cukup dan hindari aktivitas berat di jam pertama." 
    },
    { 
      title: "Etika & Budaya", 
      icon: <ShieldAlert className="h-6 w-6" />, 
      content: "Gunakan masker di kawah untuk hindari gas belerang. Hormati situs candi dan jangan menyentuh kepala anak rambut gimbal yang sakral." 
    },
    { 
      title: "Persiapan Kendaraan", 
      icon: <CarFront className="h-6 w-6" />, 
      content: "Jalur Dieng memiliki tanjakan ekstrem 15%. Pastikan rem dan kopling prima. Driver lokal kami ahli dalam teknik engine brake di medan ini." 
    },
    { 
      title: "Perlengkapan Khusus", 
      icon: <Footprints className="h-6 w-6" />, 
      content: "Bawa obat anti-mabuk jalanan berkelok, sepatu anti-slip untuk trekking Sikunir yang licin, dan uang tunai untuk transaksi di pelosok." 
    },
    { 
      title: "Manajemen Waktu", 
      icon: <Clock className="h-6 w-6" />, 
      content: "Weekend sering macet total. Berangkatlah lebih awal (misal 02.30 pagi untuk Sikunir) guna menghindari kerumunan dan kemacetan." 
    },
    { 
      title: "Cuaca & Suhu Ekstrem", 
      icon: <ThermometerSnowflake className="h-6 w-6" />, 
      content: "Suhu bisa -5°C (Embun Upas) pada Juli-Sept. Waspadai kabut tebal mendadak; keahlian driver lokal sangat krusial di kondisi ini." 
    }
  ];

  const handleImageClick = (item: any) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white">
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl p-0 border-none bg-transparent shadow-none outline-none">
          <DialogTitle className="sr-only">Full Image Preview</DialogTitle>
          {selectedImage && (
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] flex items-center justify-center">
              <Image 
                src={selectedImage.url} 
                alt={selectedImage.caption || "Trip Preview"} 
                fill 
                className="object-contain"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-6 py-2 backdrop-blur-md">
                <p className="text-white text-[10px] font-black uppercase tracking-widest">{selectedImage.caption}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Hero Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-6 md:px-8 lg:px-32 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">Plan Your Journey</h1>
          <p className="text-white/80 font-medium text-xs mt-4 max-w-lg mx-auto">
            Pastikan perjalanan Anda aman dan berkesan dengan memilih layanan dan paket yang tepat sesuai kebutuhan Anda.
          </p>
        </div>
      </section>

      <section className="relative pt-24 pb-24 overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-32 relative z-10">
          <div className="flex flex-col md:flex-row-reverse md:items-center justify-between mb-20 gap-8">
            <div className="flex items-center gap-4 md:flex-row-reverse">
              <div className="p-2 bg-primary text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CarFront size={24} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter md:text-right">
                Paket Wisata Lokal
              </h2>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground border-r-2 border-primary pr-4 md:text-right max-w-xs leading-relaxed">
              Nikmati perjalanan tanpa hambatan dengan pemandu lokal berpengalaman.
            </p>
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
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary text-white"><Grid size={24} /></div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Trip Gallery</h2>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground border-l-2 border-primary pl-4 max-w-xs leading-relaxed">
                Kumpulan momen autentik dari perjalanan para penjelajah di Wonosobo.
              </p>
            </div>
            
            {isGalleryLoading ? (
              <div className="flex justify-center p-20"><Loader2 className="animate-spin h-10 w-10 text-primary" /></div>
            ) : (
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
                  <div className="grid grid-rows-3 grid-flow-col gap-1 h-[600px] md:h-[800px] shrink-0">
                    {galleryItems.map((item, idx) => {
                      const pattern = idx % 7;
                      let classNames = "relative overflow-hidden group bg-secondary/10 cursor-pointer";
                      
                      if (pattern === 0) classNames += " row-span-2 w-[300px] md:w-[450px]";
                      else if (pattern === 1) classNames += " row-span-1 w-[300px] md:w-[450px]";
                      else if (pattern === 2) classNames += " row-span-1 w-[250px] md:w-[350px]";
                      else if (pattern === 3) classNames += " row-span-2 w-[250px] md:w-[350px]";
                      else if (pattern === 4) classNames += " row-span-1 w-[280px] md:w-[400px]";
                      else if (pattern === 5) classNames += " row-span-1 w-[280px] md:w-[400px]";
                      else classNames += " row-span-1 w-[280px] md:w-[400px]";

                      return (
                        <div key={item.id} className={classNames} onClick={() => handleImageClick(item)}>
                          {item.url && (
                            <Image 
                              src={item.url} 
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
                  <div className="grid grid-rows-3 grid-flow-col gap-1 h-[600px] md:h-[800px] shrink-0 ml-1" aria-hidden="true">
                    {galleryItems.map((item, idx) => {
                      const pattern = idx % 7;
                      let classNames = "relative overflow-hidden group bg-secondary/10 cursor-pointer";
                      
                      if (pattern === 0) classNames += " row-span-2 w-[300px] md:w-[450px]";
                      else if (pattern === 1) classNames += " row-span-1 w-[300px] md:w-[450px]";
                      else if (pattern === 2) classNames += " row-span-1 w-[250px] md:w-[350px]";
                      else if (pattern === 3) classNames += " row-span-2 w-[250px] md:w-[350px]";
                      else if (pattern === 4) classNames += " row-span-1 w-[280px] md:w-[400px]";
                      else if (pattern === 5) classNames += " row-span-1 w-[280px] md:w-[400px]";
                      else classNames += " row-span-1 w-[280px] md:w-[400px]";

                      return (
                        <div key={`dup-${item.id}`} className={classNames} onClick={() => handleImageClick(item)}>
                          {item.url && (
                            <Image 
                              src={item.url} 
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
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-6 md:px-8 lg:px-32">
          <div className="max-w-2xl mb-12">
            <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Travel Essentials</h3>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Essential Information</h2>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-4 leading-relaxed">
              Pastikan perjalanan Anda aman dan berkesan dengan memperhatikan poin-poin krusial berikut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-12">
            {essentialPoints.map((point, idx) => (
              <div key={idx} className="group space-y-4 border-l border-primary/20 pl-6 hover:border-primary transition-all">
                <div className="p-3 bg-secondary w-fit text-primary group-hover:bg-primary group-hover:text-white transition-colors">{point.icon}</div>
                <h4 className="font-bold uppercase text-xs tracking-widest">{point.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{point.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 p-12 md:p-20 border border-white/10">
            <div className="max-w-2xl space-y-6">
              <h3 className="text-primary font-bold uppercase tracking-widest text-xs">Extra Services</h3>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Pemesanan Penginapan & Antar Jemput</h2>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                Butuh bantuan mencari homestay terbaik di Dieng atau transportasi dari luar kota? Kami melayani reservasi akomodasi dan antar jemput dari Bandara/Stasiun Yogyakarta, Semarang, Purwokerto, dan kota lainnya.
              </p>
            </div>
            <div className="shrink-0">
              <Button size="lg" className="bg-primary hover:bg-white hover:text-black text-white font-black uppercase px-12 py-10 rounded-none text-sm tracking-widest gap-3" asChild>
                <a href="https://wa.me/6281230939128?text=Halo%20saya%20butuh%20layanan%20penginapan%20/%20antar%20jemput%20luar%20kota" target="_blank">
                  Hubungi Admin
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanYourTripPage;