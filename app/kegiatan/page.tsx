import ActivitiesGrid from '@/components/ActivitiesGrid';

const activities = [
  {
    title: 'Latihan Rutin',
    desc: 'Latihan rutin mingguan untuk membangun kedisiplinan dan kebugaran.',
    media: '/images/latihan-rutin.jpg',
  },
  {
    title: 'Diksartama',
    desc: 'Pendidikan dasar kemiliteran untuk menanamkan jiwa korsa dan kepemimpinan.',
    media: '/images/diksartama.jpg',
  },
  {
    title: 'Latihan Capaska',
    desc: 'Latihan gabungan Pasukan Khusus dengan materi kepemimpinan dan survival.',
    media: '/images/latihan-capaska.mp4',
  },
];

export default function Kegiatan() {
  return <ActivitiesGrid activities={activities} />;
}