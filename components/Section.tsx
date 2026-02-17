import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  title,
  subtitle,
  children,
  className = '',
  containerClassName = '',
}: SectionProps) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-navy">{title}</h2>}
            {subtitle && <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}