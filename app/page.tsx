import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Nilai-Nilai Utama */}
      <Section title="Nilai-Nilai Utama" subtitle="Karakter yang kami bangun dalam setiap kegiatan">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Disiplin', desc: 'Menanamkan ketepatan waktu dan kepatuhan pada aturan', icon: '⏱️' },
            { title: 'Kepemimpinan', desc: 'Melatih kemampuan memimpin dan mengambil keputusan', icon: '👥' },
            { title: 'Kerja Sama', desc: 'Membangun solidaritas dan kekompakan tim', icon: '🤝' },
            { title: 'Cinta Tanah Air', desc: 'Menumbuhkan rasa bangga dan tanggung jawab pada bangsa', icon: '🇮🇩' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col items-center text-center group"
            >
              <span className="text-5xl mb-4">{item.icon}</span>
              <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
              <p className="text-slate">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-navy/5">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Siap Bergabung?</h2>
          <p className="text-lg text-slate mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari generasi pemimpin masa depan. Daftarkan dirimu sekarang!
          </p>
          <Link
            href="/kontak"
            className="inline-block bg-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red/90 transition shadow-lg"
          >
            Hubungi Kami
          </Link>
        </div>
      </Section>
    </>
  );
}