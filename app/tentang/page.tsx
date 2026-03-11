import VisionMission from '@/components/VisionMission';
import Section from '@/components/Section';
import OrganizationalChart from '@/components/OrganizationalChart';
import Link from 'next/link';

export default function Tentang() {
  return (
    <>
      {/* Visi & Misi */}
      <VisionMission
        vision="Menjadikan kesatuan yang unggul, berkarakter, modern, dan nasionalisme."
        missions={[
          'Membentuk generasi disiplin, berkarakter, kuat, modern, dan siap memimpin.',
        ]}
      />

      {/* Susunan Pengurus */}
      <Section title="Susunan Pengurus" subtitle="Struktur organisasi Satuan Garuda Merah Putih">
        <OrganizationalChart />
      </Section>

      {/* Informasi Latihan */}
      <Section title="Informasi Latihan" subtitle="Waktu dan kontak untuk bergabung">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⏰</span>
              <div>
                <h3 className="font-semibold text-navy">Jam Latihan Rutin</h3>
                <p className="text-slate">Setiap hari? (Jika ada hari tertentu, sebutkan) — 08:00 - 10:00 WIB</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <h3 className="font-semibold text-navy">Informasi Lebih Lanjut</h3>
                <p className="text-slate">
                  Hubungi{' '}
                  <a
                    href="https://wa.me/6285850117601"
                    target="_blank"
                    rel="noopener"
                    className="text-red hover:underline font-medium"
                  >
                    +62 858-5011-7601
                  </a>{' '}
                  (WhatsApp)
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/kontak"
              className="inline-block bg-red text-white px-6 py-3 rounded-full font-semibold hover:bg-red/90 transition shadow-md"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </Section>

      {/* Nilai-Nilai Utama */}
      <Section title="Nilai-Nilai Utama">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Disiplin', 'Kepemimpinan', 'Kerja Sama', 'Patriotisme'].map((val, i) => (
            <div
              key={i}
              className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100"
            >
              <span className="text-4xl mb-2 block">{['⏱️', '👥', '🤝', '🇮🇩'][i]}</span>
              <h4 className="font-semibold text-navy">{val}</h4>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}