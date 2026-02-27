'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Tentang', href: '/tentang' },
  { name: 'Kegiatan', href: '/kegiatan' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      aria-label="Utama"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo dan teks */}
          <Link href="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-red rounded">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/images/logopbn.jpg"
                alt="Logo Bela Negara"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-navy">Bela Negara</span>
          </Link>

          {/* Navigasi desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate hover:text-navy transition focus:outline-none focus:ring-2 focus:ring-red rounded px-2 py-1"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontak"
              className="bg-navy text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-navy/90 transition shadow-md focus:outline-none focus:ring-2 focus:ring-red min-h-[44px] flex items-center"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Tombol menu mobile */}
          <button
            className="md:hidden p-2 rounded-md text-slate hover:text-navy focus:outline-none focus:ring-2 focus:ring-red min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Panel menu mobile */}
      <div
        className={`md:hidden fixed inset-x-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'top-16 opacity-100 visible' : '-top-96 opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-base font-medium text-slate hover:text-navy transition px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/kontak"
            className="block bg-navy text-white px-5 py-2 rounded-full text-center text-sm font-medium hover:bg-navy/90 transition shadow-md focus:outline-none focus:ring-2 focus:ring-red min-h-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}