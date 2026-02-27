import Section from './Section';   // <-- add this line

interface VisionMissionProps {
  vision: string;
  missions: string[];
}

export default function VisionMission({ vision, missions }: VisionMissionProps) {
  return (
    <Section className="bg-gray-50" title="Visi & Misi">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red">
          <h3 className="text-2xl font-bold text-navy mb-4">Visi</h3>
          <p className="text-lg text-slate">{vision}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-navy mb-4">Misi</h3>
          <ul className="space-y-3 text-slate">
            {missions.map((mission, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-red font-bold text-lg leading-5">•</span>
                <span>{mission}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}