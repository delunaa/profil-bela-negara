'use client';

import { useState } from 'react';
import Link from 'next/link';
import Section from './Section';

interface ContactCardProps {
  whatsapp: string;
  instagram: string;
  location: string;
  mapsUrl: string;
}

export default function ContactCard({
  whatsapp,
  instagram,
  location,
  mapsUrl,
}: ContactCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Section title="Hubungi Kami" subtitle="Siap bergabung atau ingin tahu lebih lanjut?">
      <div className="max-w-3xl mx-auto">
        {/* Contact buttons */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20saya%20ingin%20bergabung`}
            target="_blank"
            rel="noopener"
            className="bg-green-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center group focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <span className="text-5xl mb-4" aria-hidden="true">
              📱
            </span>
            <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
            <p className="text-green-100">{whatsapp}</p>
            <span className="mt-4 text-sm bg-white/20 px-4 py-2 rounded-full group-hover:bg-white/30 transition">
              Kirim Pesan
            </span>
          </a>

          <a
            href={`https://instagram.com/${instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center group focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <span className="text-5xl mb-4" aria-hidden="true">
              📷
            </span>
            <h3 className="text-2xl font-bold mb-2">Instagram</h3>
            <p className="text-pink-100">@{instagram}</p>
            <span className="mt-4 text-sm bg-white/20 px-4 py-2 rounded-full group-hover:bg-white/30 transition">
              Follow Kami
            </span>
          </a>
        </div>

        {/* Location with copy feature */}
        <div className="bg-navy/5 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-navy mb-4 text-center">
            📍 Lokasi
          </h2>
          <p className="text-slate text-center mb-6">{location}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => copyToClipboard(location)}
              className="bg-navy text-white px-6 py-3 rounded-full font-semibold hover:bg-navy/90 transition shadow-md inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-navy"
              aria-label="Salin alamat"
            >
              <span>📋</span> Salin Alamat
            </button>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener"
              className="bg-navy text-white px-6 py-3 rounded-full font-semibold hover:bg-navy/90 transition shadow-md inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-navy"
            >
              <span>🗺️</span> Buka di Google Maps
            </a>
          </div>
          {copied && (
            <p className="text-green-600 text-center mt-4 text-sm">
              ✓ Alamat disalin!
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="bg-navy/5 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Yuk, jadi bagian dari perubahan!
          </h2>
          <p className="text-slate mb-6">
            Daftarkan dirimu sekarang dan mulai perjalanan menjadi pemimpin masa
            depan.
          </p>
          <Link
            href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`}
            className="inline-block bg-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red/90 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-red"
          >
            Gabung Sekarang
          </Link>
        </div>
      </div>
    </Section>
  );
}