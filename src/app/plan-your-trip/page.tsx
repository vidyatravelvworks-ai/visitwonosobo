
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Clock, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Plan Your Trip - visitwonosobo',
  description: 'Pilih paket wisata terbaik untuk petualangan Anda di Wonosobo dan Dieng.',
};

const PlanYourTripPage = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'car-rental');

  const packages = [
    {
      title: "Paket Keliling Zona 1 (Sunrise)",
      time: "05:00 - 15:00 (Opsional)",
      price: "Rp 650.000",
      description: "Mobil, BBM, Driver as Guide",
      spots: [
        "Pintu Langit",
        "Candi Arjuna",
        "Kawah Sikidang",
        "Batu Ratapan",
        "Bukit Scooter",
        "Telaga Warna"
      ],
      color: "bg-primary/5",
      borderColor: "border-primary/20"
    },
    {
      title: "Paket Keliling Zona 2",
      time: "07:00 - 16:00 (Opsional)",
      price: "Rp 650.000",
      description: "Mobil, BBM, Driver as Guide",
      spots: [
        "Bukit Sikunir",
        "Air Terjun Sikarim",
        "Swiss Van Java",
        "Telaga Menjer",
        "Kahyangan Skyline",
        "Kebun Teh Panama"
      ],
      color: "bg-secondary/50",
      borderColor: "border-border"
    }
  ];

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
          <p className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto font-medium tracking-wide">
            Pilih paket perjalanan yang telah kami susun dengan teliti untuk pengalaman Wonosobo yang tak terlupakan.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-12 md:px-32">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Paket Wisata Lokal</h2>
            <p className="text-muted-foreground">Nikmati perjalanan tanpa hambatan dengan pemandu lokal berpengalaman. Harga sudah termasuk armada nyaman dan bahan bakar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {packages.map((pkg, idx) => (
              <Card key={idx} className={`border-2 ${pkg.borderColor} ${pkg.color} rounded-none overflow-hidden hover:shadow-xl transition-shadow duration-500`}>
                <CardHeader className="space-y-4 p-8 pb-0">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-black uppercase tracking-tight max-w-[250px]">
                      {pkg.title}
                    </CardTitle>
                    <div className="text-right">
                      <span className="block text-primary font-black text-2xl">{pkg.price}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Per Armada</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-6 pt-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      {pkg.time}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {pkg.description}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="h-px bg-border w-full" />
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Destinasi Utama:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pkg.spots.map((spot, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium">
                          <MapPin className="h-4 w-4 text-primary shrink-0" />
                          {spot}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-black hover:bg-primary text-white font-bold uppercase tracking-widest py-8 rounded-none group transition-all" asChild>
                    <a href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20pesan%20${encodeURIComponent(pkg.title)}`} target="_blank">
                      Pesan Sekarang <MessageCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-24 p-12 bg-gray-50 border border-dashed border-gray-300 text-center space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-tight">Butuh Rencana Perjalanan Kustom?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami siap membantu menyusun jadwal sesuai keinginan Anda. Hubungi tim lokal kami untuk konsultasi gratis mengenai rute dan durasi perjalanan.
            </p>
            <Button variant="outline" className="border-black hover:bg-black hover:text-white font-bold uppercase tracking-widest rounded-none px-12 py-6" asChild>
              <a href="https://wa.me/6281234567890" target="_blank">Hubungi CS</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanYourTripPage;
