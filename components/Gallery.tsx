'use client';

import { useState } from 'react';
import Image from 'next/image';
import Section from './Section';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const images: GalleryItem[] = [
  { id: 1, src: 'https://picsum.photos/id/1018/600/600', alt: 'Latihan baris-berbaris' },
  { id: 2, src: 'https://picsum.photos/id/1019/600/600', alt: 'Pendidikan lapangan' },
  { id: 3, src: 'https://picsum.photos/id/1020/600/600', alt: 'Upacara bendera' },
  { id: 4, src: 'https://picsum.photos/id/1021/600/600', alt: 'Kegiatan sosial' },
  { id: 5, src: 'https://picsum.photos/id/1022/600/600', alt: 'Lomba ketangkasan' },
  { id: 6, src: 'https://picsum.photos/id/1023/600/600', alt: 'Outbound kebersamaan' },
  { id: 7, src: 'https://picsum.photos/id/1024/600/600', alt: 'Pembekalan materi' },
  { id: 8, src: 'https://picsum.photos/id/1025/600/600', alt: 'Simulasi kepemimpinan' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => setSelectedImage(item);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <>
      <Section title="Galeri Kegiatan" subtitle="Dokumentasi momen-momen inspiratif selama pelatihan">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => openLightbox(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium">{item.alt}</p>
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
        >
          <div className="relative max-w-4xl w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}