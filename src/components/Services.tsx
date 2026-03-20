import { siteConfig } from '../config';
import { Icon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

const serviceDescriptions: Record<string, string> = {
  'Commercial Construction': 'Large-scale commercial builds delivered on schedule and within spec.',
  'Residential Construction': 'Custom homes and additions built with craftsmanship and precision.',
  'Renovations & Remodeling': 'Transform existing spaces with expert renovation work.',
  'Project Management': 'End-to-end project oversight with transparent communication.',
  'Design-Build': 'Streamlined single-contract delivery from concept through construction.',
  'Concrete & Foundation': 'Structural foundations engineered for durability and performance.',
  'Roofing': 'Residential and commercial roofing using premium materials.',
  'Electrical': 'Full-service electrical contracting, code-compliant.',
  'Plumbing': 'New construction plumbing and service work by licensed professionals.',
  'HVAC': 'Heating, cooling, and ventilation designed for efficiency.',
};

function getDescription(name: string): string {
  const match = Object.keys(serviceDescriptions).find(
    (k) => name.toLowerCase().includes(k.toLowerCase().split(' ')[0].toLowerCase())
  );
  return match ? serviceDescriptions[match] : 'Professional services delivered with precision by our expert team.';
}

export function Services() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="services"
      className="fade-section py-28 lg:py-40"
      style={{ backgroundColor: siteConfig.colors.dark }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header — left-aligned, not centered */}
        <div className="mb-20 max-w-2xl">
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
            style={{ color: siteConfig.colors.accent }}
          >
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Our Services
          </h2>
        </div>

        {/* Services — clean numbered list, not card grid */}
        <div className="stagger-children visible space-y-0 border-t border-white/10">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.name}
              className="group relative flex items-start gap-6 sm:gap-10 py-8 border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.02] px-2 sm:px-4 overflow-hidden"
            >
              {/* Diagonal line accent — construction/architectural feel */}
              <div
                className="absolute right-0 top-0 h-full w-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              >
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <line x1="100%" y1="0" x2="0%" y2="100%" stroke={siteConfig.colors.accent} strokeWidth="0.5" strokeOpacity="0.3" />
                  <line x1="100%" y1="20%" x2="20%" y2="100%" stroke={siteConfig.colors.accent} strokeWidth="0.5" strokeOpacity="0.15" />
                </svg>
              </div>

              {/* Number */}
              <span className="text-white/15 font-black text-2xl tabular-nums pt-1 w-10 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                <Icon
                  name={service.icon}
                  className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform duration-300">
                  {service.name}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-lg">
                  {getDescription(service.name)}
                </p>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: siteConfig.colors.accent }}
                >
                  View Projects
                  <Icon name="arrowright" className="w-3 h-3" />
                </a>
              </div>

              {/* Arrow */}
              <Icon
                name="arrowright"
                className="w-4 h-4 text-white/10 group-hover:text-white/40 transition-all duration-300 group-hover:translate-x-1 shrink-0 mt-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
