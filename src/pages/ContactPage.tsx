import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import { Icon } from '../components/Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CONTACT_BANNER = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80&fit=crop';

const businessHours = [
  { day: 'Monday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Tuesday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Wednesday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Thursday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Friday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useScrollReveal<HTMLElement>();

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    'w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-white/20 outline-none transition-all duration-300 focus:border-white/30';

  return (
    <main>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[320px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={CONTACT_BANNER} alt="Construction site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pb-16">
          <nav className="mb-4 flex items-center gap-2 text-xs text-white/30" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Contact</span>
          </nav>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section ref={formRef} className="fade-section py-28 lg:py-40" style={{ backgroundColor: siteConfig.colors.dark }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Form */}
            <div className="lg:col-span-3">
              <p className="text-xs font-medium tracking-[0.25em] uppercase mb-4" style={{ color: siteConfig.colors.accent }}>
                Get In Touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
                Let's Talk About Your Project
              </h2>
              <p className="text-white/30 text-sm leading-relaxed mb-10">
                Fill out the form and our team will get back to you within one business day.
              </p>

              {submitted ? (
                <div className="py-16 text-center border border-white/10">
                  <h3 className="text-white font-bold text-xl mb-2">Message Received</h3>
                  <p className="text-white/30 text-sm">We'll contact you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-white/40 tracking-wider uppercase mb-2">Name</label>
                      <input id="name" name="name" type="text" required placeholder="John Smith" value={formState.name} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-white/40 tracking-wider uppercase mb-2">Email</label>
                      <input id="email" name="email" type="email" required placeholder="john@company.com" value={formState.email} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="phone" className="block text-xs font-medium text-white/40 tracking-wider uppercase mb-2">Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" value={formState.phone} onChange={handleChange} className={inputClass} />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-xs font-medium text-white/40 tracking-wider uppercase mb-2">Message</label>
                    <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project..." value={formState.message} onChange={handleChange} className={`${inputClass} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:gap-5"
                    style={{ background: siteConfig.colors.accent, color: '#000' }}
                  >
                    Send Message
                    <Icon name="arrowright" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-white font-bold text-sm mb-6">Contact Information</h3>
                <ul className="space-y-5">
                  <li>
                    <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-white/30 hover:text-white transition-colors text-sm">
                      <Icon name="phone" className="w-4 h-4 shrink-0" />
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-white/30 hover:text-white transition-colors text-sm break-all">
                      <Icon name="mail" className="w-4 h-4 shrink-0" />
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-3 text-white/30 text-sm">
                      <Icon name="mappin" className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{siteConfig.address}<br />{siteConfig.city}, {siteConfig.state}</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="border-t border-white/10 pt-8">
                <h3 className="text-white font-bold text-sm mb-6">Business Hours</h3>
                <ul className="space-y-3">
                  {businessHours.map(({ day, hours }) => (
                    <li key={day} className="flex items-center justify-between">
                      <span className="text-white/20 text-sm">{day}</span>
                      <span className={`text-sm ${hours === 'Closed' ? 'text-white/10' : 'text-white/40'}`}>{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
