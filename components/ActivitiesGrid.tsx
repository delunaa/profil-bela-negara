import Image from 'next/image';
import Section from './Section';   // <-- add this line

interface Activity {
  title: string;
  desc: string;
  media: string; // image path or video path
}

interface ActivitiesGridProps {
  activities: Activity[];
}

export default function ActivitiesGrid({ activities }: ActivitiesGridProps) {
  return (
    <Section title="Kegiatan Kami" subtitle="Program unggulan pembentukan karakter">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {activities.map((act, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 group"
          >
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-100">
              {act.media.endsWith('.mp4') ? (
                <video
                  src={act.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={act.media}
                  alt={act.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">
                {act.title}
              </h3>
              <p className="text-sm sm:text-base text-slate">{act.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}