import { motion } from "framer-motion";
import { siteConfig } from "../config";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "James D.",
    role: "Founder & CEO",
    bio: "30+ years leading projects from concept to completion. Built the company from the ground up.",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
  },
  {
    name: "Maria L.",
    role: "Project Director",
    bio: "18 years of project management expertise. Known for delivering on time and under budget.",
    imageSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face",
  },
  {
    name: "Robert C.",
    role: "Lead Estimator",
    bio: "22 years in the industry. Provides accurate, transparent estimates every time.",
    imageSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function TeamCards() {
  return (
    <section
      className="py-28 lg:py-40"
      style={{ backgroundColor: siteConfig.colors.dark }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-16 max-w-2xl">
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
            style={{ color: siteConfig.colors.accent }}
          >
            The Team
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.05]">
            Meet Our Leaders
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="relative overflow-hidden group"
              variants={itemVariants}
              style={{ height: "480px" }}
            >
              <img
                src={member.imageSrc}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm text-white/50 mb-2">{member.bio}</p>
                <p className="font-bold text-lg">{member.name}</p>
                <p
                  className="text-sm"
                  style={{ color: siteConfig.colors.accent }}
                >
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
