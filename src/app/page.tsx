
'use client';

import React from 'react';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import ArticleCard from '@/components/article/ArticleCard';
import { articles as staticArticlesList } from '@/data/articles';
import { staticPackages as staticTripPackages } from '@/data/packages';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, limit, doc } from 'firebase/firestore';
import { 
  ArrowRight, Activity, ShieldAlert, CarFront, Briefcase, 
  Clock, ThermometerSnowflake, CheckCircle2, MessageCircle, Loader2 
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function Home() {
  const db = useFirestore();

  // Queries
  const packagesQ = useMemoFirebase(() => db ? query(collection(db, 'trip_packages'), orderBy('title', 'asc'), limit(3)) : null, [db]);
  const configRef = useMemoFirebase(() => db ? doc(db, 'config', 'website') : null, [db]);

  const { data: dbPackages, isLoading: isPkgsLoading } = useCollection(packagesQ);
  const { data: config } = useDoc(configRef);

  const tourPackages = (dbPackages && dbPackages.length > 0) ? dbPackages : staticTripPackages.slice(0, 3);
  const featuredStories = staticArticlesList.filter(a => a.type === 'story').slice(0, 3);

  const essentialPoints = [
    { title: "Kondisi Fisik", icon: <Activity />, content: "Dieng berada di ketinggian >2.000 mdpl. Waspadai Altitude Sickness." },
    { title: "Etika Budaya", icon: <ShieldAlert />, content: "Gunakan masker di kawah. Hormati ritual anak rambut gimbal." },
    { title: "Persiapan Mobil", icon: <CarFront />, content: "Jalur Dieng memiliki tanjakan 15%. Cek rem dan kopling." },
    { title: "Pakaian Hangat", icon: <ThermometerSnowflake />, content: "Suhu bisa mencapai 0°C. Siapkan jaket tebal, sarung tangan, dan kupluk." },
    { title: "Uang Tunai", icon: <Briefcase />, content: "ATM sangat terbatas di area atas Dieng. Siapkan uang tunai sebelum berangkat." },
    { title: "Waktu Terbaik", icon: <Clock />, content: "Juli - Agustus adalah waktu terbaik untuk melihat embun es (upas) yang langka." }
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
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16">Paket Wisata</h2>
            {isPkgsLoading ? (
              <div className="flex justify-center p-20"><Loader2 className="animate-spin text-primary h-10 w-10" /></div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tourPackages.map((pkg: any, idx: number) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "bg-white border-2 p-8 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full",
                      config?.packageDesign?.cardBorder || pkg.borderColor,
                      config?.packageDesign?.cardColor || pkg.color
                    )}
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-4 bg-secondary text-primary group-hover:bg-primary group-hover:text-white"><CarFront /></div>
                      <div className="text-right">
                        <span className="block text-[10px] font-bold uppercase text-muted-foreground">Mulai</span>
                        <span className="text-2xl font-black text-primary">{pkg.price}</span>
                      </div>
                    </div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-3">{pkg.title}</h4>
                    <p className="text-xs text-muted-foreground mb-6 line-clamp-2">{pkg.description}</p>
                    <ul className="space-y-2 mb-8 flex-grow">
                      {pkg.spots?.slice(0, 4).map((feature: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase"><CheckCircle2 className="h-3 w-3 text-primary" /> {feature}</li>
                      ))}
                    </ul>
                    <Button className="w-full bg-black hover:bg-primary text-white rounded-none" asChild>
                      <a href={`https://wa.me/6281234567890?text=Pesan%20${pkg.title}`} target="_blank">Pesan Sekarang</a>
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
