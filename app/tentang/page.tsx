import AboutTimeline from '@/components/AboutTimeline';
import VisionMission from '@/components/VisionMission';
import Section from '@/components/Section';

const timelineItems = [
  {
    year: '2010',
    title: 'Berdirinya Ekstrakurikuler',
    desc: 'Dimulai dari sekelompok kecil mahasiswa pencinta alam.',
  },
  {
    year: '2015',
    title: 'Program Latihan Nasional',
    desc: 'Bekerja sama dengan TNI untuk pelatihan dasar bela negara.',
  },
  {
    year: '2020',
    title: 'Menjadi Wadah Pemuda',
    desc: 'Terdaftar resmi sebagai organisasi ekstrakurikuler tingkat nasional.',
  },
  {
    year: '2024',
    title: 'Ekspansi ke 20 Kota',
    desc: 'Hadir di berbagai daerah dengan ribuan anggota aktif.',
  },
];

const missions = [
  'Menyelenggarakan pelatihan kepemimpinan berbasis kedisiplinan.',
  'Menanamkan nilai-nilai bela negara dan cinta tanah air.',
  'Membangun jejaring kerjasama dengan institusi pendidikan dan pemerintah.',
  'Mengadakan kegiatan sosial yang berdampak langsung pada masyarakat.',
];

export default function Tentang() {
  return (
    <>
      <AboutTimeline items={timelineItems} />
      <VisionMission
        vision="Menjadi pusat pengembangan karakter pemuda Indonesia yang disiplin, tangguh, dan berjiwa pemimpin untuk mewujudkan bangsa yang berdaulat."
        missions={missions}
      />
      <Section title="Nilai-Nilai Utama">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Disiplin', 'Kepemimpinan', 'Kerja Sama', 'Patriotisme'].map(
            (val, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100"
              >
                <span className="text-4xl mb-2 block">
                  {['⏱️', '👥', '🤝', '🇮🇩'][i]}
                </span>
                <h4 className="font-semibold text-navy">{val}</h4>
              </div>
            )
          )}
        </div>
      </Section>
    </>
  );
}