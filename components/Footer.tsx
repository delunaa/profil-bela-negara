import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Bela Negara</h3>
            <p className="text-sm text-gray-300">
              Membentuk generasi muda Indonesia yang disiplin, tangguh, dan berjiwa pemimpin.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/tentang" className="hover:text-white transition">Tentang</Link></li>
              <li><Link href="/kegiatan" className="hover:text-white transition">Kegiatan</Link></li>
              <li><Link href="/galeri" className="hover:text-white transition">Galeri</Link></li>
              <li><Link href="/kontak" className="hover:text-white transition">Kontak</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-white transition">Instagram</a></li>
              <li><a href="https://wa.me/6281234567890" target="_blank" rel="noopener" className="hover:text-white transition">WhatsApp</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener" className="hover:text-white transition">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kantor</h4>
            <address className="not-italic text-sm text-gray-300">
              Jl. Merdeka No. 123<br />
              Jakarta, Indonesia<br />
              info@belanegara.id
            </address>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Bela Negara. All rights reserved.
        </div>
      </div>
    </footer>
  );
}