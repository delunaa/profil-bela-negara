import Gallery from '@/components/Gallery';

const images = [
  { id: 1, src: '/images/galeri1.jpg', alt: 'Foto Bersama 1' },
  { id: 2, src: '/images/galeri2.jpg', alt: 'Foto Bersama 2' },
  { id: 3, src: '/images/galeri3.jpg', alt: 'Foto Bersama 3' },
  { id: 4, src: '/images/galeri4.jpg', alt: 'Foto Bersama 4' },
  { id: 5, src: '/images/galeri5.jpg', alt: 'Foto Bersama 5' },
  { id: 6, src: '/images/galeri6.jpg', alt: 'Foto Bersama 6' },
  { id: 7, src: '/images/galeri7.jpg', alt: 'Foto Bersama 7' },
  { id: 8, src: '/images/galeri8.jpg', alt: 'Foto Bersama 8' },
];

export default function GaleriPage() {
  return <Gallery images={images} />;
}