import { siteConfig } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function StatsBar() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="fade-section py-20 border-y border-white/5"
      style={{ backgroundColor: siteConfig.colors.darkAlt }}
      aria-label="Company statistics"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x lg:divide-white/10">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="text-center px-6">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="block text-white/30 text-xs font-medium tracking-[0.2em] uppercase mt-3">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
