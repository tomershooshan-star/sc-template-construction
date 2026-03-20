import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { StatsBar } from '../components/StatsBar';
import { TrustBadges } from '../components/TrustBadges';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { CTABanner } from '../components/CTABanner';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <ProjectShowcase />
      <StatsBar />
      <TrustBadges />
      <About />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
