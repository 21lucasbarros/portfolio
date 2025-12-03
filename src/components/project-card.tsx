import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github?: string;
    live?: string;
    year: string;
    category: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-zinc-800 border border-[#f7f7f7]/10 mb-4 md:mb-5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-50"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75"
              aria-label="Ver código no GitHub"
            >
              <div className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-zinc-900 transition-all duration-200 hover:scale-110">
                <FaGithub className="w-5 h-5" />
              </div>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"
              aria-label="Ver projeto ao vivo"
            >
              <div className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-zinc-900 transition-all duration-200 hover:scale-110">
                <ExternalLink className="w-5 h-5" strokeWidth={1.5} />
              </div>
            </a>
          )}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-blue-500 text-white text-[10px] font-mono uppercase tracking-wider">
          {project.category}
        </div>

        {/* Year badge */}
        <div className="absolute bottom-3 left-3 px-2 py-1 bg-zinc-900/90 backdrop-blur-sm text-[#f7f7f7] text-xs font-mono border border-[#f7f7f7]/20">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2.5 md:space-y-3">
        {/* Index and Title */}
        <div className="space-y-1.5 md:space-y-2">
          <span className="text-xs font-mono text-blue-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg md:text-xl font-semibold text-[#f7f7f7] leading-tight group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-[#f7f7f7]/60 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, i) => (
            <Badge
              key={i}
              variant="outline"
              className="border-[#f7f7f7]/20 bg-zinc-800/50 text-[#f7f7f7]/70 font-mono text-xs px-2.5 py-1 hover:border-blue-500 hover:text-blue-400 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
