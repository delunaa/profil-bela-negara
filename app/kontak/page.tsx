import Section from "@/components/Section";
import Link from "next/link";

export default function Kontak() {
  return (
    <Section title="Hubungi Kami" subtitle="Siap bergabung atau ingin tahu lebih lanjut?">
      <div className="max-w-3xl mx-auto">
        {/* Contact buttons */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20bergabung"
            target="_blank"
            rel="noopener"
            className="bg-green-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center group"
          >
            <span className="text-5xl mb-4">📱</span>
            <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
            <p className="text-green-100">+62 812 3456 7890</p>
            <span className="mt-4 text-sm bg-white/20 px-4 py-2 rounded-full group-hover:bg-white/30 transition">
              Kirim Pesan
            </span>
          </a>

          <a
            href="https://instagram.com/belanegara"
            target="_blank"
            rel="noopener"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center group"
          >
            <span className="text-5xl mb-4">📷</span>
            <h3 className="text-2xl font-bold mb-2">Instagram</h3>
            <p className="text-pink-100">@belanegara</p>
            <span className="mt-4 text-sm bg-white/20 px-4 py-2 rounded-full group-hover:bg-white/30 transition">
              Follow Kami
            </span>
          </a>
        </div>

        {/* CTA */}
        <div className="bg-navy/5 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Yuk, jadi bagian dari perubahan!</h2>
          <p className="text-slate mb-6">
            Daftarkan dirimu sekarang dan mulai perjalanan menjadi pemimpin masa depan.
          </p>
          <Link
            href="https://wa.me/6281234567890"
            className="inline-block bg-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red/90 transition shadow-lg"
          >
            Gabung Sekarang
          </Link>
        </div>

        {/* Map placeholder */}
        <div className="mt-12 bg-gray-200 rounded-2xl overflow-hidden h-64 relative">
          <div className="absolute inset-0 flex items-center justify-center text-slate">
            <span>📍 Markas Bela Negara (Peta interaktif)</span>
          </div>
        </div>
      </div>
    </Section>
  );
}