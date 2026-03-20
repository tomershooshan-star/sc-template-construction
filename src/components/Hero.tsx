import { siteConfig } from '../config';
import { Icon } from './Icons';

const HERO_IMAGE_DEFAULT = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80&fit=crop';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={siteConfig.heroImage || HERO_IMAGE_DEFAULT}
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Blueprint geometric overlay — diagonal lines, architectural feel */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="blueprint-lines"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="60" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-lines)" />
        </svg>
      </div>

      {/* Content — bottom-aligned like CreativeCut */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pb-24 pt-40">
        <div className="max-w-3xl">
          {/* Overline */}
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-6"
            style={{ color: siteConfig.colors.accent }}
          >
            {siteConfig.license}
          </p>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8">
            {siteConfig.companyName}
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-white/60 font-light leading-relaxed mb-12 max-w-xl">
            {siteConfig.tagline}
          </p>

          {/* CTA — single, clean */}
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:gap-5"
              style={{
                background: siteConfig.colors.accent,
                color: '#000',
              }}
            >
              {siteConfig.ctaText}
              <Icon name="arrowright" className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="text-white/50 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors duration-300"
            >
              Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-3 opacity-40">
        <span className="text-[10px] text-white tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-lr' }}>
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
