'use client';

import { useRef, useState } from 'react';
import Section from './Section';

// Komponen pembungkus dengan efek tilt
function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // posisi x dalam elemen
    const y = e.clientY - rect.top; // posisi y dalam elemen
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Rotasi maksimal 5 derajat
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        willChange: 'transform',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </div>
  );
}

interface VisionMissionProps {
  vision: string;
  missions: string[];
}

export default function VisionMission({ vision, missions }: VisionMissionProps) {
  return (
    <Section className="bg-gray-50" title="Visi & Misi">
      <div className="grid md:grid-cols-2 gap-12">
        <TiltCard>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red h-full">
            <h3 className="text-2xl font-bold text-navy mb-4">Visi</h3>
            <p className="text-lg text-slate">{vision}</p>
          </div>
        </TiltCard>
        <TiltCard>
          <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
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
        </TiltCard>
      </div>
    </Section>
  );
}