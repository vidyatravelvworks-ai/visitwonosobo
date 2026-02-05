
'use client';

import React from 'react';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import { staticPackages as staticTripPackages } from '@/data/packages';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { 
  Activity, ShieldAlert, CarFront, 
  Clock, ThermometerSnowflake, CheckCircle2, XCircle, Loader2,
  Footprints, MapPin, ArrowRight
} from 'lucide-react';

export default function Home() {
  const db = useFirestore();

  // Queries
  const packagesQ = useMemoFirebase(() => db ? query(collection(db, 'trip_packages'), orderBy('title', 'asc'), limit(3)) : null, [db]);

  const { data: dbPackages, isLoading: isPkgsLoading } = useCollection(packagesQ);

  const tourPackages = (dbPackages && dbPackages.length > 0) ? dbPackages : staticTripPackages.slice(0, 3);

  const essentialPoints = [
    { 
      title: "Fisik & Aklimatisasi", 
      icon: <Activity />, 
      content: "Dieng berada di ketinggian >2.000 mdpl. Udara tipis dapat memicu Altitude Sickness. Istirahat cukup dan hindari aktivitas berat di jam pertama." 
    },
    { 
      title: "Etika & Budaya", 
      icon: <ShieldAlert />, 
      content: "Gunakan masker di kawah untuk hindari gas belerang. Hormati situs candi dan jangan menyentuh kepala anak rambut gimbal yang sakral." 
    },
    { 
      title: "Persiapan Kendaraan", 
      icon: <CarFront />, 
      content: "Jalur Dieng memiliki tanjakan ekstrem 15%. Pastikan rem dan kopling prima. Driver lokal kami ahli dalam teknik engine brake di medan ini." 
    },
    { 
      title: "Perlengkapan Khusus", 
      icon: <Footprints />, 
      content: "Bawa obat anti-mabuk jalanan berkelok, sepatu anti-slip untuk trekking Sikunir yang licin, dan uang tunai untuk transaksi di pelosok." 
    },
    { 
      title: "Manajemen Waktu", 
      icon: <Clock />, 
      content: "Weekend sering macet total. Berangkatlah lebih awal (misal 02.30 pagi untuk Sikunir) guna menghindari kerumunan dan kemacetan." 
    },
    { 
      title: "Cuaca & Suhu Ekstrem", 
      icon: <ThermometerSnowflake />, 
      content: "Suhu bisa -5°C (Embun Upas) pada Juli-Sept. Waspadai kabut tebal mendadak; keahlian driver lokal sangat krusial di kondisi ini." 
    }
  ];

  return (
    <div className="bg-white">
      <Hero />
      
      <section className="py-32 bg-white border-b">
        <div className="container mx-auto px-12 md:px-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
            <div className="max-w-2xl">
              <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Plan Your Trip</h3>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Essential Info</h2>
            </div>
            <Button variant="outline" className="border-primary text-primary rounded-none h-14 px-8 font-black uppercase text-[10px]" asChild>
              <Link href="/plan-your-trip">Lihat Detail Paket</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 mb-32">
            {essentialPoints.map((point, idx) => (
              <div key={idx} className="group space-y-4 border-l-2 border-primary/20 pl-6 hover:border-primary transition-all">
                <div className="p-3 bg-secondary w-fit text-primary group-hover:bg-primary group-hover:text-white transition-colors">{point.icon}</div>
                <h4 className="font-bold uppercase text-xs tracking-widest">{point.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{point.content}</p>
              </div>
            ))}
          </div>

          <div className="pt-24 border-t">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Paket Wisata</h2>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground border-l-2 border-primary pl-4">Layanan Guide & Rental Lokal Terbaik</p>
            </div>
            
            {isPkgsLoading ? (
              <div className="flex justify-center p-20"><Loader2 className="animate-spin text-primary h-10 w-10" /></div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tourPackages.map((pkg: any, idx: number) => (
                  <div 
                    key={idx} 
                    className="bg-white border-2 border-black/5 shadow-lg p-8 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full hover:border-primary/50"
                  >
                    <div className="flex justify-between items-start mb-10">
                      <div className="p-4 bg-primary text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"><CarFront size={24} /></div>
                      <div className="text-right">
                        <span className="block text-[8px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Harga Mulai</span>
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
                        <p className="text-[9px] font-black uppercase tracking-widest text-primary mb-3">Destinasi Utama</p>
                        <ul className="space-y-2">
                          {pkg.spots?.slice(0, 4).map((feature: string, i: number) => (
                            <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-tight">
                              <MapPin className="h-3 w-3 text-muted-foreground shrink-0" /> 
                              <span className="truncate">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-dashed">
                        <div>
                          <p className="text-[8px] font-black uppercase tracking-widest text-green-600 mb-2">Include</p>
                          <ul className="space-y-1">
                            {pkg.includes?.slice(0, 3).map((item: string, i: number) => (
                              <li key={i} className="flex items-center gap-1.5 text-[8px] font-bold uppercase text-muted-foreground">
                                <CheckCircle2 className="h-2 w-2 text-green-600 shrink-0" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[8px] font-black uppercase tracking-widest text-red-600 mb-2">Exclude</p>
                          <ul className="space-y-1">
                            {pkg.excludes?.slice(0, 3).map((item: string, i: number) => (
                              <li key={i} className="flex items-center gap-1.5 text-[8px] font-bold uppercase text-muted-foreground">
                                <XCircle className="h-2 w-2 text-red-600 shrink-0" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-black hover:bg-primary text-white rounded-none h-14 font-black uppercase tracking-[0.2em] text-[10px] gap-2 group/btn mt-8" asChild>
                      <a href={`https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20paket%20${encodeURIComponent(pkg.title)}`} target="_blank">
                        Booking Sekarang
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Services />
    </div>
  );
}
