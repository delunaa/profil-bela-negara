'use client';

import { useState } from 'react';
import Image from 'next/image';
import Section from './Section';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryItem[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => setSelectedImage(item);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <>
      <Section title="Galeri Kegiatan" subtitle="Dokumentasi momen-momen inspiratif selama pelatihan">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => openLightbox(item)}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(item)}
              role="button"
              tabIndex={0}
              aria-label={`Buka gambar ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium text-sm sm:text-base">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={(e) => e.key === 'Escape' && closeLightbox()}
          role="button"
          tabIndex={-1}
          aria-label="Tutup lightbox"
        >
          <div
            className="relative max-w-4xl w-full h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={closeLightbox}
              aria-label="Tutup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}