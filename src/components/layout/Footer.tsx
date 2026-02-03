
import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-20">
      <div className="container mx-auto px-12 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <span className="text-2xl font-black font-headline tracking-tighter uppercase text-primary">
              visitwonosobo
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kami adalah kolektif penjelajah lokal yang berdedikasi untuk menunjukkan keindahan dan budaya otentik Wonosobo kepada dunia.
            </p>
            <div className="flex gap-4 pt-4">
              <Instagram className="h-5 w-5 cursor-pointer hover:text-primary" />
              <Facebook className="h-5 w-5 cursor-pointer hover:text-primary" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-primary" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-primary" />
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-8">Experiences</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/see-and-do" className="hover:text-primary transition-colors">Nature & Adventure</Link></li>
              <li><Link href="/see-and-do" className="hover:text-primary transition-colors">Heritage & Culture</Link></li>
              <li><Link href="/stories" className="hover:text-primary transition-colors">Dining & Nightlife</Link></li>
              <li><Link href="/stories" className="hover:text-primary transition-colors">Festivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-8">Plan Your Trip</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/plan-your-trip" className="hover:text-primary transition-colors">Travel Essentials</Link></li>
              <li><Link href="/plan-your-trip" className="hover:text-primary transition-colors">Getting to Wonosobo</Link></li>
              <li><Link href="/stories" className="hover:text-primary transition-colors">Local Customs</Link></li>
              <li><Link href="/plan-your-trip" className="hover:text-primary transition-colors">Itineraries</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-8">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>Jl. Raya Dieng No. 123</li>
              <li>Wonosobo, Indonesia 56351</li>
              <li className="text-primary font-bold">+62 812 3456 7890</li>
              <li>hello@visitwonosobo.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Visit Wonosobo. All Rights Reserved.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-black">Privacy Policy</Link>
            <Link href="#" className="hover:text-black">Terms of Use</Link>
            <Link href="#" className="hover:text-black">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
