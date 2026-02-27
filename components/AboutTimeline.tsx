import Section from './Section';   // <-- add this line

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

interface AboutTimelineProps {
  items: TimelineItem[];
}

export default function AboutTimeline({ items }: AboutTimelineProps) {
  return (
    <Section title="Sejarah Kami" subtitle="Perjalanan panjang membangun karakter bangsa">
      <div className="relative border-l-4 border-red pl-8 ml-4 space-y-12">
        {items.map((item, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-12 top-1 w-8 h-8 bg-red rounded-full border-4 border-white shadow"></div>
            <span className="text-sm font-bold text-red">{item.year}</span>
            <h3 className="text-xl font-semibold text-navy mt-1">{item.title}</h3>
            <p className="text-slate mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}