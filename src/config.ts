/**
 * Site configuration — all customizable fields.
 * This file gets auto-generated per lead from their Prospeo data.
 * To customize for a new lead, just replace the values below.
 */

export const siteConfig = {
  // Company Info
  companyName: "Apex Construction",
  tagline: "Building Excellence Since 1985",
  description: "Full-service general contractor specializing in commercial and residential construction across the greater metro area.",
  phone: "(555) 123-4567",
  email: "info@apexconstruction.com",
  address: "123 Builder Lane, Suite 100",
  city: "Denver",
  state: "CO",

  // Logo — auto-fetched from Clearbit
  logoUrl: "https://logo.clearbit.com/apexconstruction.com",

  // Hero image — custom photo URL; leave empty to use the default Unsplash image
  heroImage: "",

  // Colors — extracted from logo or set manually
  colors: {
    primary: "#1e40af",      // Main brand color
    primaryLight: "#3b82f6",  // Lighter variant
    accent: "#f59e0b",       // Accent/CTA color
    dark: "#050505",         // Dark backgrounds (true black)
    darkAlt: "#0a0a0a",      // Slightly lighter dark (alternating sections)
    light: "#f8fafc",        // Light backgrounds
    text: "#1e293b",         // Body text
    textLight: "#64748b",    // Muted text
  },

  // Services — from Prospeo keywords
  services: [
    { name: "Commercial Construction", icon: "building" },
    { name: "Residential Construction", icon: "home" },
    { name: "Renovations & Remodeling", icon: "hammer" },
    { name: "Project Management", icon: "clipboard" },
    { name: "Design-Build", icon: "pencil" },
    { name: "Concrete & Foundation", icon: "layers" },
  ],

  // Stats — generic but impressive
  stats: [
    { value: "500+", label: "Projects Completed" },
    { value: "35+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ],

  // Testimonials — placeholder
  testimonials: [
    {
      text: "Exceptional quality and professionalism from start to finish. They delivered on time and on budget.",
      author: "Project Owner",
      role: "Commercial Development",
    },
    {
      text: "The team went above and beyond our expectations. Highly recommend for any construction project.",
      author: "Property Manager",
      role: "Residential Complex",
    },
  ],

  // CTA
  ctaText: "Get Your Free Estimate",
  ctaUrl: "https://cal.com/scale-ify/clarity-call",

  // Footer
  license: "Licensed & Insured",
  certifications: ["OSHA Certified", "Licensed General Contractor", "Fully Insured & Bonded"],

  // SEO
  siteUrl: "https://demo.scaleify.co",
};
