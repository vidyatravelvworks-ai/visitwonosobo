
import React from 'react';
import Image from 'next/image';
import { Check, ArrowRight, Car, Sunrise, Map } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    id: 'sunrise',
    title: 'Paket Sunrise Sikunir',
    icon: <Sunrise className="h-6 w-6 text-secondary" />,
    image: PlaceHolderImages.find(img => img.id === 'hero-sikunir')?.imageUrl || '',
    features: ['Penjemputan 03.00 WIB', 'Guide Lokal Profesional', 'Dokumentasi Menarik', 'Teh/Kopi Hangat'],
    price: 'Mulai dari Rp 350rb',
    whatsappText: 'Halo%20saya%20mau%20pesan%20paket%20Sunrise'
  },
  {
    id: 'reguler',
    title: 'Paket Reguler Dieng',
    icon: <Map className="h-6 w-6 text-secondary" />,
    image: PlaceHolderImages.find(img => img.id === 'candi-arjuna')?.imageUrl || '',
    features: ['Candi Arjuna', 'Kawah Sikidang', 'Telaga Warna', 'Batu Pandang Ratapan Angin'],
    price: 'Mulai dari Rp 450rb',
    whatsappText: 'Halo%20saya%20mau%20pesan%20paket%20Reguler'
  },
  {
    id: 'car',
    title: 'Sewa Mobil & Guide',
    icon: <Car className="h-6 w-6 text-secondary" />,
    image: PlaceHolderImages.find(img => img.id === 'car-rental')?.imageUrl || '',
    features: ['Armada (Avanza, Innova, Hiace)', 'Driver = Guide Lokal', 'BBM & Parkir Termasuk', 'Fleksibel Rute'],
    price: 'Mulai dari Rp 600rb',
    whatsappText: 'Halo%20saya%20mau%20pesan%20paket%20Sewa%20Mobil'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 text-primary">Layanan Kami</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Kami menawarkan berbagai pilihan paket perjalanan yang dapat disesuaikan dengan kebutuhan dan budget Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group overflow-hidden border-none shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="relative aspect-video">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-2 bg-primary rounded-lg">
                  {service.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline text-primary">{service.title}</CardTitle>
                <p className="text-secondary font-bold">{service.price}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 group/btn">
                  <a href={`https://wa.me/6281234567890?text=${service.whatsappText}`} target="_blank">
                    Pesan Sekarang
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
