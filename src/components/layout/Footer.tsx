
import React from 'react';
import Link from 'next/link';
import { Compass, Instagram, Facebook, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Compass className="text-secondary h-6 w-6" />
            <span className="text-xl font-bold font-headline tracking-tight">Wonosobo Explorer</span>
          </Link>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Penyedia layanan wisata terbaik di Wonosobo. Kami membantu Anda mengeksplorasi keindahan Dieng dan sekitarnya dengan pemandu lokal berpengalaman.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-secondary">Tautan Cepat</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/" className="hover:text-secondary transition-colors">Beranda</Link></li>
            <li><Link href="/#services" className="hover:text-secondary transition-colors">Paket Wisata</Link></li>
            <li><Link href="/artikel" className="hover:text-secondary transition-colors">Blog Wisata</Link></li>
            <li><Link href="#" className="hover:text-secondary transition-colors">Tentang Kami</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-secondary">Hubungi Kami</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-secondary" />
              <span>+62 812-3456-7890</span>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="h-4 w-4 text-secondary" />
              <span>@wonosoboexplorer</span>
            </li>
            <li className="flex items-center gap-3">
              <Facebook className="h-4 w-4 text-secondary" />
              <span>Wonosobo Explorer</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-secondary">Alamat</h4>
          <p className="text-sm text-primary-foreground/80">
            Jl. Raya Dieng No. 123,<br />
            Wonosobo, Jawa Tengah<br />
            Indonesia 56351
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/60">
        &copy; {new Date().getFullYear()} Wonosobo Explorer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
