import Section from "@/components/Section";

export default function Tentang() {
  return (
    <>
      {/* Sejarah - Timeline */}
      <Section title="Sejarah Kami" subtitle="Perjalanan panjang membangun karakter bangsa">
        <div className="relative border-l-4 border-red pl-8 ml-4 space-y-12">
          {[
            { year: '2010', title: 'Berdirinya Ekstrakurikuler', desc: 'Dimulai dari sekelompok kecil mahasiswa pencinta alam.' },
            { year: '2015', title: 'Program Latihan Nasional', desc: 'Bekerja sama dengan TNI untuk pelatihan dasar bela negara.' },
            { year: '2020', title: 'Menjadi Wadah Pemuda', desc: 'Terdaftar resmi sebagai organisasi ekstrakurikuler tingkat nasional.' },
            { year: '2024', title: 'Ekspansi ke 20 Kota', desc: 'Hadir di berbagai daerah dengan ribuan anggota aktif.' },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-12 top-1 w-8 h-8 bg-red rounded-full border-4 border-white shadow"></div>
              <span className="text-sm font-bold text-red">{item.year}</span>
              <h3 className="text-xl font-semibold text-navy mt-1">{item.title}</h3>
              <p className="text-slate mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Visi & Misi */}
      <Section className="bg-gray-50" title="Visi & Misi">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red">
            <h3 className="text-2xl font-bold text-navy mb-4">Visi</h3>
            <p className="text-lg text-slate">
              Menjadi pusat pengembangan karakter pemuda Indonesia yang disiplin, tangguh, dan berjiwa pemimpin untuk mewujudkan bangsa yang berdaulat.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-navy mb-4">Misi</h3>
            <ul className="space-y-3 text-slate">
              <li className="flex items-start gap-2">
                <span className="text-red font-bold">•</span>
                Menyelenggarakan pelatihan kepemimpinan berbasis kedisiplinan.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red font-bold">•</span>
                Menanamkan nilai-nilai bela negara dan cinta tanah air.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red font-bold">•</span>
                Membangun jejaring kerjasama dengan institusi pendidikan dan pemerintah.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red font-bold">•</span>
                Mengadakan kegiatan sosial yang berdampak langsung pada masyarakat.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Nilai-Nilai Utama */}
      <Section title="Nilai-Nilai Utama">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Disiplin', 'Kepemimpinan', 'Kerja Sama', 'Patriotisme'].map((val, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <span className="text-4xl mb-2 block">{['⏱️','👥','🤝','🇮🇩'][i]}</span>
              <h4 className="font-semibold text-navy">{val}</h4>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}