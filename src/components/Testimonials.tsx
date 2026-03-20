import { siteConfig } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Testimonials() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="testimonials"
      className="fade-section py-28 lg:py-40"
      style={{ backgroundColor: siteConfig.colors.dark }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
            style={{ color: siteConfig.colors.accent }}
          >
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            What Our Clients Say
          </h2>
        </div>

        {/* Quotes — big, editorial style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {siteConfig.testimonials.map((t, i) => (
            <div key={i} className="border-l-2 border-white/10 pl-8">
              <blockquote className="text-xl sm:text-2xl text-white/70 font-light leading-relaxed mb-8">
                "{t.text}"
              </blockquote>
              <div>
                <div className="text-white font-semibold text-sm">{t.author}</div>
                <div className="text-white/30 text-xs tracking-wide mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
