import { Icon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteConfig } from '../config';

interface Badge {
  icon: string;
  text: string;
}

const badges: Badge[] = [
  { icon: 'shield', text: 'OSHA Certified' },
  { icon: 'check', text: 'Licensed General Contractor' },
  { icon: 'shield', text: 'Fully Insured & Bonded' },
  { icon: 'award', text: '500+ Projects Completed' },
];

export function TrustBadges() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="fade-section border-y border-white/5 py-6 sm:py-0"
      style={{ backgroundColor: siteConfig.colors.darkAlt }}
      aria-label="Certifications and trust indicators"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between divide-y sm:divide-y-0 sm:divide-x divide-white/8">
          {badges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-3 py-5 sm:py-6 px-6 sm:px-8 w-full sm:w-auto justify-center sm:justify-start"
            >
              <Icon
                name={badge.icon}
                className="w-4 h-4 shrink-0"
                style={{ color: siteConfig.colors.accent }}
              />
              <span className="text-white/50 text-xs font-medium tracking-[0.15em] uppercase whitespace-nowrap">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
