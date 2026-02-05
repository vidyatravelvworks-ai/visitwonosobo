
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isExcludedPage = pathname === '/login' || pathname.startsWith('/admin');
  if (isExcludedPage) return null;

  if (!mounted) return null;

  return (
    <footer className="bg-white border-t py-8 px-6">
      <div className="container mx-auto px-0 md:px-8 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-12">
          {/* Kolom 1: 40% lebar (span 2 dari 5) */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <span className="text-2xl font-black font-headline tracking-tighter uppercase text-primary">
              visitwonosobo
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kami adalah kolektif penjelajah lokal yang berdedikasi untuk menunjukkan keindahan dan budaya otentik Wonosobo kepada dunia.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Youtube" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Kolom 2: 20% */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-8">Destinations & Blogs</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/see-and-do#nature" className="hover:text-primary transition-colors">Nature & Adventure</Link></li>
              <li><Link href="/see-and-do#culture" className="hover:text-primary transition-colors">Heritage & Culture</Link></li>
              <li><Link href="/see-and-do#eat" className="hover:text-primary transition-colors">Food & Drink</Link></li>
              <li><Link href="/stories" className="hover:text-primary transition-colors">Stories (blog)</Link></li>
            </ul>
          </div>

          {/* Kolom 3: 20% */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-8">Plan Your Trip</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/plan-your-trip" className="hover:text-primary transition-colors">Paket Keliling</Link></li>
              <li><Link href="/plan-your-trip" className="hover:text-primary transition-colors">Galeri Trip</Link></li>
              <li><Link href="/plan-your-trip" className="hover:text-primary transition-colors">Travel Essential</Link></li>
              <li><Link href="/plan-your-trip" className="hover:text-primary transition-colors">Cari Penginapan</Link></li>
            </ul>
          </div>

          {/* Kolom 4: 20% */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-8">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                Co-working Space HIPMI Wonosobo<br />
                Jl. Sindoro No.921, Kab. Wonosobo, Jawa Tengah 56311
              </li>
              <li className="text-primary font-bold">0812-3093-9128</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <p className="text-center">
            &copy; 2026 <Link href="/admin" className="hover:text-primary transition-colors">visitwonosobo</Link>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
