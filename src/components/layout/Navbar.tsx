
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Layanan', href: '/#services' },
    { name: 'Artikel', href: '/artikel' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary rounded-lg transition-transform group-hover:rotate-12">
            <Compass className="text-secondary h-6 w-6" />
          </div>
          <span className="text-xl font-bold font-headline tracking-tight text-primary">
            Wonosobo Explorer
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
            <a href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20paket" target="_blank">
              Hubungi Kami
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-lg font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full bg-primary" onClick={() => setIsOpen(false)}>
            <a href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20paket" target="_blank">
              Hubungi Kami
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
