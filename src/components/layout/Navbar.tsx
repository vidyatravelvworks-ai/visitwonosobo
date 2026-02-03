
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Compass, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'See & Do', href: '/#services' },
    { name: 'Stories', href: '/artikel' },
    { name: 'Plan Your Trip', href: '/#itinerary' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      scrolled ? "bg-white py-3 shadow-sm" : "bg-transparent py-5 border-transparent text-white"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className={cn(
            "text-2xl font-black font-headline tracking-tighter uppercase",
            scrolled ? "text-primary" : "text-white"
          )}>
            Wonosobo<span className="opacity-50">.</span>Explorer
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-6 border-l pl-10 ml-4">
            <Search className="h-5 w-5 cursor-pointer hover:opacity-70" />
            <Button asChild size="sm" className={cn(
              "font-bold uppercase text-[10px] tracking-widest px-6",
              scrolled ? "bg-primary text-white" : "bg-white text-black hover:bg-gray-200"
            )}>
              <a href="https://wa.me/6281234567890" target="_blank">Book Now</a>
            </Button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white text-black z-[60] flex flex-col p-10">
          <div className="flex justify-end mb-10">
            <X className="h-8 w-8 cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          <div className="space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-3xl font-black uppercase tracking-tighter"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="lg" className="w-full bg-primary text-white font-bold uppercase mt-10">
              <a href="https://wa.me/6281234567890" target="_blank">Book Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
