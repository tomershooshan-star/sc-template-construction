import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteConfig } from '../config';

interface Project {
  image: string;
  name: string;
  type: string;
  location: string;
}

const projects: Project[] = [
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80&fit=crop',
    name: 'Meridian Office Tower',
    type: 'Commercial Office Build',
    location: 'Downtown District',
  },
  {
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&fit=crop',
    name: 'Riverside Residences',
    type: 'Residential Complex',
    location: 'West End',
  },
  {
    image: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=800&q=80&fit=crop',
    name: 'Harborview Renovation',
    type: 'Renovation',
    location: 'Harbor District',
  },
  {
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80&fit=crop',
    name: 'Northgate Warehouse',
    type: 'Industrial Warehouse',
    location: 'Industrial Park',
  },
];

export function ProjectShowcase() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="projects"
      className="fade-section py-28 lg:py-40"
      style={{ backgroundColor: siteConfig.colors.dark }}
      aria-label="Project portfolio"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
            style={{ color: siteConfig.colors.accent }}
          >
            Our Work
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Our Projects
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Static dark tint */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Hover overlay — slides up from bottom */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {/* Solid block behind text */}
                <div
                  className="px-6 py-7"
                  style={{ background: `${siteConfig.colors.dark}eb` }}
                >
                  {/* Type tag */}
                  <p
                    className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-2"
                    style={{ color: siteConfig.colors.accent }}
                  >
                    {project.type}
                  </p>

                  {/* Project name */}
                  <h3 className="text-white font-bold text-base leading-tight mb-1">
                    {project.name}
                  </h3>

                  {/* Location */}
                  <p className="text-white/40 text-xs tracking-wide">
                    {project.location}
                  </p>
                </div>
              </div>

              {/* Top-left type label (always visible, fades on hover) */}
              <div className="absolute top-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
                <span
                  className="text-[10px] font-semibold tracking-[0.15em] uppercase px-2 py-1"
                  style={{
                    background: 'rgba(5,5,5,0.7)',
                    color: siteConfig.colors.accent,
                  }}
                >
                  {project.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
