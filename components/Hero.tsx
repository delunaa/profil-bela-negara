import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy/5 via-white to-red/5 pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-navy">
              Membentuk Generasi{' '}
              <span className="text-red">Disiplin, Tangguh</span>, dan Siap Memimpin.
            </h1>
            <p className="text-lg sm:text-xl text-slate max-w-lg mx-auto md:mx-0">
              Ekstrakurikuler Bela Negara menanamkan jiwa kepemimpinan, cinta tanah air,
              dan kedisiplinan melalui pelatihan nyata.
            </p>
            <Link
              href="/kontak"
              className="inline-block bg-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red/90 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 min-h-[44px] flex items-center justify-center"
            >
              Gabung Sekarang
            </Link>
          </div>

          {/* Right image */}
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/foto-bersama.jpg"
              alt="Foto Bersama Anggota Bela Negara"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}