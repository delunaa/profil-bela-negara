import Section from "@/components/Section";
import Image from "next/image";

const activities = [
  {
    title: 'Latihan Rutin',
    desc: 'Latihan fisik dan mental setiap akhir pekan untuk membangun kedisiplinan.',
    img: 'https://picsum.photos/id/100/600/400',
  },
  {
    title: 'Pendidikan Lapangan',
    desc: 'Kegiatan survival, navigasi, dan kerja tim di alam terbuka.',
    img: 'https://picsum.photos/id/1015/600/400',
  },
  {
    title: 'Upacara Bendera',
    desc: 'Menanamkan rasa hormat dan cinta tanah air melalui upacara rutin.',
    img: 'https://picsum.photos/id/1018/600/400',
  },
  {
    title: 'Lomba Ketangkasan',
    desc: 'Kompetisi antar anggota dalam berbagai cabang ketrampilan.',
    img: 'https://picsum.photos/id/102/600/400',
  },
  {
    title: 'Kegiatan Sosial',
    desc: 'Bakti sosial, donor darah, dan bantuan bencana.',
    img: 'https://picsum.photos/id/1043/600/400',
  },
  {
    title: 'Outbound Kepemimpinan',
    desc: 'Simulasi kepemimpinan dan pemecahan masalah dalam tim.',
    img: 'https://picsum.photos/id/106/600/400',
  },
];

export default function Kegiatan() {
  return (
    <Section title="Kegiatan Kami" subtitle="Berbagai program unggulan untuk membentuk karakter">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((act, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 group"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={act.img}
                alt={act.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-navy mb-2">{act.title}</h3>
              <p className="text-slate">{act.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}