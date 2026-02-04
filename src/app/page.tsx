
import React from 'react';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import ArticleCard from '@/components/article/ArticleCard';
import { articles } from '@/data/articles';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Activity, 
  ShieldAlert, 
  CarFront, 
  Briefcase, 
  Clock, 
  ThermometerSnowflake,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const featuredStories = articles.filter(a => a.type === 'story').slice(0, 3);

  const essentialPoints = [
    {
      title: "Kondisi Fisik & Aklimatisasi",
      icon: <Activity className="h-6 w-6 text-primary" />,
      content: "Dieng berada di ketinggian di atas 2.000 mdpl. Udara yang tipis bisa memicu Altitude Sickness (pusing/sesak napas). Disarankan istirahat cukup dan tidak memaksakan aktivitas berat di jam pertama kedatangan."
    },
    {
      title: "Etika & Larangan Budaya",
      icon: <ShieldAlert className="h-6 w-6 text-primary" />,
      content: "Gunakan masker di area kawah (Sikidang) karena gas belerang beracun. Berpakaian sopan di Candi Arjuna. Hormati anak rambut gimbal; jangan memegang kepala atau memotret mereka tanpa izin."
    },
    {
      title: "Persiapan Kendaraan",
      icon: <CarFront className="h-6 w-6 text-primary" />,
      content: "Jalur Dieng memiliki tanjakan curam 15%. Pastikan rem dan kopling prima. Driver lokal kami sangat direkomendasikan karena hafal medan ekstrem dan ahli dalam penggunaan engine brake."
    },
    {
      title: "Perlengkapan Pribadi",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      content: "Bawa obat anti-mabuk (jalan berkelok) dan obat asma. Gunakan sepatu anti-slip untuk trekking Sikunir yang licin. Siapkan uang tunai karena banyak warung kecil dan parkir belum menerima QRIS."
    },
    {
      title: "Manajemen Waktu",
      icon: <Clock className="h-6 w-6 text-primary" />,
      content: "Weekend sering macet total. Untuk mengejar sunrise Sikunir, sangat disarankan berangkat dari Wonosobo jam 02.30 pagi agar tidak terjebak kemacetan di jalur menanjak."
    },
    {
      title: "Cuaca & Suhu Ekstrem",
      icon: <ThermometerSnowflake className="h-6 w-6 text-primary" />,
      content: "Suhu bisa mencapai -5°C (Juli-Sept). Siapkan jaket down jacket, sarung tangan, dan kupluk. Kabut tebal sering membatasi pandangan hingga 5 meter; hafal lekuk jalan adalah kunci keselamatan."
    }
  ];

  const tourPackages = [
    {
      title: "Paket Keliling Zona 1 (Sunrise)",
      price: "Rp 650.000",
      description: "Mobil, BBM, Driver as Guide (05:00 - 15:00)",
      icon: <CarFront className="h-6 w-6" />,
      features: ["Pintu Langit", "Candi Arjuna", "Kawah Sikidang", "Batu Ratapan", "Bukit Scooter", "Telaga Warna"]
    },
    {
      title: "Paket Keliling Zona 2",
      price: "Rp 650.000",
      description: "Mobil, BBM, Driver as Guide (07:00 - 16:00)",
      icon: <CarFront className="h-6 w-6" />,
      features: ["Bukit Sikunir", "Air Terjun Sikarim", "Swiss Van Java", "Telaga Menjer", "Kahyangan Skyline", "Kebun Teh Panama"]
    },
    {
      title: "Rental Mobil + Guide",
      price: "Mulai Rp 500rb",
      description: "Avanza, Innova, Hiace. Driver = Guide Lokal.",
      icon: <CarFront className="h-6 w-6" />,
      features: ["BBM Termasuk", "Driver Berpengalaman", "Waktu Fleksibel", "Antar Jemput Hotel"]
    }
  ];

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Essential Information & Packages Section */}
      <section className="relative py-32 bg-white overflow-hidden border-b">
        <div className="absolute left-0 top-0 bottom-0 w-1/3 z-0 hidden lg:block opacity-[0.02]">
          <Image
            src={PlaceHolderImages.find(img => img.id === 'serayu-valley')?.imageUrl || 'https://picsum.photos/seed/river/1920/1080'}
            alt="Practical Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-12 md:px-32 relative z-10">
          {/* Header Part */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
            <div className="max-w-2xl">
              <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Plan Your Trip</h3>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Essential <br /> Information
              </h2>
            </div>
            <div className="max-w-sm space-y-6">
              <p className="text-sm font-medium tracking-wide text-muted-foreground leading-relaxed">
                Aspek-aspek krusial yang wajib dipersiapkan sebelum menapakkan kaki di negeri di atas awan.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-widest text-[10px] py-6 px-8 rounded-none h-auto" asChild>
                <Link href="/plan-your-trip">Lihat Detail Paket</Link>
              </Button>
            </div>
          </div>

          {/* Essential Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 mb-32">
            {essentialPoints.map((point, idx) => (
              <div key={idx} className="group space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary group-hover:bg-primary transition-colors duration-300">
                    {React.cloneElement(point.icon as React.ReactElement, { 
                      className: "h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" 
                    })}
                  </div>
                  <h4 className="font-bold uppercase text-xs tracking-widest">{point.title}</h4>
                </div>
                <p className="text-xs font-medium text-muted-foreground leading-loose tracking-wide border-l-2 border-transparent group-hover:border-primary pl-4 transition-all">
                  {point.content}
                </p>
              </div>
            ))}
          </div>

          {/* Tour Packages Section inside the same flow */}
          <div className="pt-24 border-t border-border">
            <div className="mb-16">
              <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Pilihan Terbaik</h3>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Paket Wisata <br /> Keliling Wonosobo</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tourPackages.map((pkg, idx) => (
                <div key={idx} className="bg-white border-2 border-border p-8 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {pkg.icon}
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Mulai Dari</span>
                      <span className="text-2xl font-black text-primary tracking-tighter">{pkg.price}</span>
                    </div>
                  </div>
                  
                  <div className="mb-8 flex-grow">
                    <h4 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                      {pkg.title}
                    </h4>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed mb-6">
                      {pkg.description}
                    </p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-foreground">
                          <CheckCircle2 className="h-3 w-3 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-black hover:bg-primary text-white font-bold uppercase tracking-widest py-6 text-[10px] rounded-none group/btn" asChild>
                    <a href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20pesan%20${encodeURIComponent(pkg.title)}`} target="_blank">
                      Pesan Sekarang <MessageCircle className="ml-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Services />
      
      {/* Featured Stories Section with Background */}
      <section className="relative py-32 overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 z-0">
          <Image
            src={PlaceHolderImages.find(img => img.id === 'misty-valley')?.imageUrl || 'https://picsum.photos/seed/valley/1920/1080'}
            alt="Stories Background"
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-12 md:px-32 relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-primary font-bold uppercase tracking-widest mb-4">Insider Stories</h3>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Town's Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredStories.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button size="lg" className="bg-primary text-white font-bold uppercase tracking-widest text-xs px-10 py-7 rounded-none" asChild>
              <Link href="/stories">View All Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA with Full Background */}
      <section className="relative py-48 bg-black text-white overflow-hidden text-center group">
        <div className="absolute inset-0 z-0">
          <Image
            src={PlaceHolderImages.find(img => img.id === 'lake-morning')?.imageUrl || 'https://picsum.photos/seed/cta/1920/1080'}
            alt="Final CTA Background"
            fill
            className="object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
        </div>
        <div className="container mx-auto px-12 md:px-32 relative z-10 max-w-4xl">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10">
            Start Your <br /> Journey
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Ready to discover the hidden gems of Central Java? Let our local experts craft your perfect escape.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest px-12 py-8 text-sm rounded-none shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]" asChild>
            <a href="https://wa.me/6281234567890" target="_blank">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
