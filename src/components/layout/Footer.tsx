
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const pathname = usePathname();
  const [year, setYear] = useState<number>(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Hide Footer on Login and Admin pages
  const isExcludedPage = pathname === '/login' || pathname.startsWith('/admin');
  if (isExcludedPage) return null;

  return (
    <footer className="bg-white border-t py-20">
      <div className="container mx-auto px-12 md:px-32">
        {/* Grid 5 kolom untuk mencapai rasio 40% (2/5) dan 20% (1/5) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-20">
          {/* Kolom 1: 40% lebar (span 2 dari 5) */}
          <div className="col-span-1 md:col-span-2 space-y-6">
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

          {/* Kolom 2: 20% lebar (span 1 dari 5) */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-8">Experiences</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/see-and-do#nature" className="hover:text-primary transition-colors">Nature & Adventure</Link></li>
              <li><Link href="/see-and-do#culture" className="hover:text-primary transition-colors">Heritage & Culture</Link></li>
              <li><Link href="/see-and-do#eat" className="hover:text-primary transition-colors">Food & Drink</Link></li>
            </ul>
          </div>

          {/* Kolom 3: 20% lebar (span 1 dari 5) */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-8">Plan Your Trip</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/plan-your-trip" className="hover:text-primary transition-colors">Travel Essentials</Link></li>
              <li><Link href="/plan-your-trip" className="hover:text-primary transition-colors">Getting to Wonosobo</Link></li>
              <li><Link href="/stories" className="hover:text-primary transition-colors">Local Customs</Link></li>
              <li><Link href="/plan-your-trip" className="hover:text-primary transition-colors">Itineraries</Link></li>
            </ul>
          </div>

          {/* Kolom 4: 20% lebar (span 1 dari 5) */}
          <div className="col-span-1 md:col-span-1">
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
          <p>
            &copy; <span suppressHydrationWarning>{year}</span>{' '}
            <Link href="/login" className="hover:text-primary transition-colors">
              visitwonosobo
            </Link>
            . All Rights Reserved.
          </p>
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
