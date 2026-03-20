import { siteConfig } from '../config';
import { Icon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CTA_IMAGE = 'https://images.unsplash.com/photo-1590552515252-3a5a1bce7bed?w=1600&q=80&fit=crop';

export function CTABanner() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="contact"
      className="fade-section relative py-32 lg:py-44 overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CTA_IMAGE}
          alt="Construction crew at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8">
          Ready to Build
          <br />
          <span style={{ color: siteConfig.colors.accent }}>Something Great?</span>
        </h2>

        <p className="text-white/50 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Get your free, no-obligation estimate. Our team is standing by to discuss your project.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:gap-5"
            style={{
              background: siteConfig.colors.accent,
              color: '#000',
            }}
          >
            {siteConfig.ctaText}
            <Icon name="arrowright" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-3 px-10 py-5 text-sm font-semibold tracking-wider uppercase text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
          >
            <Icon name="phone" className="w-4 h-4" />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
