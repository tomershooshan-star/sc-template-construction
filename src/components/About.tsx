import { siteConfig } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80&fit=crop';

const pillars = [
  { title: 'Licensed & Insured', desc: 'Full coverage and licensing for your peace of mind.' },
  { title: 'On Time Delivery', desc: 'Strict schedule management on every project.' },
  { title: 'Transparent Pricing', desc: 'Detailed estimates upfront, no surprise costs.' },
  { title: 'Expert Team', desc: 'Seasoned tradespeople who take pride in their craft.' },
];

export function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      className="fade-section py-28 lg:py-40"
      style={{ backgroundColor: siteConfig.colors.darkAlt }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — Image */}
          <div className="relative">
            <div className="overflow-hidden aspect-[4/5]">
              <img
                src={ABOUT_IMAGE}
                alt="Construction project in progress"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <p
              className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
              style={{ color: siteConfig.colors.accent }}
            >
              About Us
            </p>

            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.05] mb-8">
              Built on Trust,{' '}
              <span className="text-white/40">Delivered with Excellence</span>
            </h2>

            <p className="text-white/40 text-base leading-relaxed mb-12">
              {siteConfig.description} Based in {siteConfig.city}, {siteConfig.state}, we've earned our reputation through consistent delivery, clear communication, and uncompromising quality.
            </p>

            {/* Pillars — minimal, no cards */}
            <div className="space-y-6">
              {pillars.map((item) => (
                <div key={item.title} className="border-l-2 border-white/10 pl-6">
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-white/30 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
