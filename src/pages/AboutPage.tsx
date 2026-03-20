import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import { About } from '../components/About';
import { TeamCards } from '../components/TeamCards';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ABOUT_BANNER = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80&fit=crop';

const values = [
  { title: 'Quality', desc: 'We never cut corners. Every project is built to exceed industry standards.' },
  { title: 'Safety', desc: 'OSHA-certified teams follow rigorous safety protocols every day.' },
  { title: 'Integrity', desc: 'Transparent pricing, honest timelines, clear communication.' },
  { title: 'Innovation', desc: 'Modern methods, software-driven management, sustainable practices.' },
];

export function AboutPage() {
  const valuesRef = useScrollReveal<HTMLElement>();

  return (
    <main>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[320px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_BANNER} alt="Construction site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pb-16">
          <nav className="mb-4 flex items-center gap-2 text-xs text-white/30" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">About</span>
          </nav>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
            About Us
          </h1>
        </div>
      </section>

      <About />

      {/* Values */}
      <section ref={valuesRef} className="fade-section py-28 lg:py-40" style={{ backgroundColor: siteConfig.colors.dark }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-20 max-w-2xl">
            <p className="text-xs font-medium tracking-[0.25em] uppercase mb-4" style={{ color: siteConfig.colors.accent }}>
              What Drives Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.05]">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-white/10">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="py-10 px-6 border-b border-white/10 lg:border-b-0 lg:border-r last:border-r-0"
              >
                <span className="text-white/10 font-black text-4xl block mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-white font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamCards />
    </main>
  );
}
