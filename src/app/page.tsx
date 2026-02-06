
"use client";

import React from 'react';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import { staticPackages as staticTripPackages } from '@/data/packages';
import { articles as staticArticles } from '@/data/articles';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, limit, where, doc } from 'firebase/firestore';
import { 
  Activity, ShieldAlert, CarFront, 
  Clock, ThermometerSnowflake, Loader2,
  Footprints, MapPin, ArrowRight, MessageCircle,
  History, Users, Globe, Info
} from 'lucide-react';
import ArticleCard from '@/components/article/ArticleCard';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const db = useFirestore();

  const packagesQ = useMemoFirebase(() => db ? query(collection(db, 'trip_packages'), orderBy('title', 'asc'), limit(3)) : null, [db]);
  const storiesQ = useMemoFirebase(() => db ? query(collection(db, 'articles'), where('type', '==', 'story'), limit(3)) : null, [db]);
  const configRef = useMemoFirebase(() => db ? doc(db, 'config', 'website') : null, [db]);

  const { data: dbPackages, isLoading: isPkgsLoading } = useCollection(packagesQ);
  const { data: dbStories, isLoading: isStoriesLoading } = useCollection(storiesQ);
  const { data: config, isLoading: isConfigLoading } = useDoc(configRef);

  const tourPackages = (dbPackages && dbPackages.length > 0) ? dbPackages : staticTripPackages.slice(0, 3);
  
  const latestStories = React.useMemo(() => {
    if (!dbStories || dbStories.length === 0) {
      return [];
    }
    return dbStories;
  }, [dbStories]);

  const configHomeHero = config?.heroImages?.home;
  const placeholderHomeHero = PlaceHolderImages.find(img => img.id === 'hero-sikunir')?.imageUrl || 'https://picsum.photos/seed/wonosobo-home/1200/800';
  const heroImage = (configHomeHero && configHomeHero.trim() !== "") ? configHomeHero : placeholderHomeHero;

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

  return (
    <div className="bg-white">
      <Hero config={config} isLoading={isConfigLoading} />
      
      <Services />

      <section className="py-16 bg-secondary/20 px-6">
        <div className="container mx-auto px-0 md:px-8 lg:px-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-10">
            <div className="max-w-2xl">
              <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Discover More</h3>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Town Stories</h2>
            </div>
            <Button variant="link" className="text-primary font-black uppercase text-[10px] tracking-widest p-0 flex items-center gap-2 group" asChild>
              <Link href="/stories">
                Lihat Semua Cerita <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {isStoriesLoading ? (
            <div className="flex justify-center p-20"><Loader2 className="animate-spin text-primary h-10 w-10" /></div>
          ) : (latestStories.length === 0) ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
              {[
                { id: 'history', title: 'History & Heritage', icon: <History className="h-5 w-5" /> },
                { id: 'people', title: 'People & Culture', icon: <Users className="h-5 w-5" /> },
                { id: 'geography', title: 'Geography & Landscape', icon: <Globe className="h-5 w-5" /> },
                { id: 'tips', title: 'Travel Tips', icon: <Info className="h-5 w-5" /> }
              ].map((cat) => {
                const catConfigImg = config?.categoryImages?.[cat.title];
                let catPlaceholderId = 'mountain-prau';
                if (cat.id === 'history') catPlaceholderId = 'candi-arjuna';
                if (cat.id === 'people') catPlaceholderId = 'ritual';
                if (cat.id === 'geography') catPlaceholderId = 'misty-valley';
                
                const catPlaceholder = PlaceHolderImages.find(img => img.id === catPlaceholderId)?.imageUrl;
                const catImg = (catConfigImg && catConfigImg.trim() !== "") ? catConfigImg : (catPlaceholder || `https://picsum.photos/seed/${cat.id}/800/1000`);

                return (
                  <Link key={cat.id} href={`/stories#${cat.id}`} className="group relative aspect-[4/5] overflow-hidden bg-black">
                    <Image
                      src={catImg}
                      alt={cat.title}
                      fill
                      className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30"
                    />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                      <div className="mb-4 p-2 bg-primary w-fit">{cat.icon}</div>
                      <h3 className="text-xl font-black uppercase mb-2 tracking-tight text-white">{cat.title}</h3>
                      <div className="text-white p-0 w-fit font-bold uppercase tracking-widest text-[10px] group-hover:text-primary flex items-center gap-2 transition-colors">
                        Explore <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {latestStories.map((story: any) => (
                <ArticleCard key={story.id || story.slug} article={story} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white border-b px-6">
        <div className="container mx-auto px-0 md:px-8 lg:px-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-8">
            <div className="max-w-2xl">
              <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Plan Your Trip</h3>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Essential Information</h2>
            </div>
            <Button variant="outline" className="border-primary text-primary rounded-none h-14 px-8 font-black uppercase text-[10px]" asChild>
              <Link href="/plan-your-trip">Lihat Detail Paket</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-12 mb-10">
            {essentialPoints.map((point, idx) => (
              <div key={idx} className="group space-y-4 border-l border-primary/20 pl-6 hover:border-primary transition-all">
                <div className="p-3 bg-secondary w-fit text-primary group-hover:bg-primary group-hover:text-white transition-colors">{point.icon}</div>
                <h4 className="font-bold uppercase text-xs tracking-widest">{point.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{point.content}</p>
              </div>
            ))}
          </div>

          <div className="pt-10 border-t">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Paket Wisata</h2>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground border-l-2 border-primary pl-4">Layanan Guide & Rental Lokal Terbaik</p>
            </div>
            
            {isPkgsLoading ? (
              <div className="flex justify-center p-20"><Loader2 className="animate-spin text-primary h-10 w-10" /></div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tourPackages.map((pkg: any, idx: number) => (
                  <div key={pkg.id || idx} className={cn("bg-white border-2 border-black/5 shadow-lg p-8 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full hover:border-primary/50", pkg.color, pkg.borderColor)}>
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
                        <p className="text-[9px] font-black uppercase tracking-widest text-primary mb-3">Destinasi Utama</p>
                        <ul className="space-y-2">
                          {pkg.spots?.slice(0, 4).map((feature: string, i: number) => (
                            <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-tight">
                              <MapPin className="h-3 w-3 text-muted-foreground shrink-0" /> <span className="truncate">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Button className="w-full bg-black hover:bg-primary text-white rounded-none h-14 font-black uppercase tracking-[0.2em] text-[10px] gap-2 group/btn mt-8" asChild>
                      <a href={`https://wa.me/6281230939128?text=Halo%20saya%20mau%20pesan%20paket%20${encodeURIComponent(pkg.title)}`} target="_blank">Booking Sekarang</a>
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden px-6 text-center">
        <div className="absolute inset-0 opacity-30">
          {!isConfigLoading && heroImage && <img src={heroImage} alt="CTA" className="w-full h-full object-cover" />}
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase leading-none tracking-tighter mb-8">Ready to <span className="text-primary">Explore?</span></h2>
          <Button size="lg" className="bg-primary hover:bg-white hover:text-black text-white font-black uppercase px-16 py-10 rounded-none text-sm tracking-widest gap-3" asChild>
            <a href="https://wa.me/6281230939128" target="_blank"><MessageCircle size={20} /> Hubungi Kami</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
