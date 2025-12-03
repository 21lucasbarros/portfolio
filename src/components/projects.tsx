import { motion } from "motion/react";
import ProjectCard from "./project-card";
import { useLanguage } from "../contexts/LanguageContext";
import { projectTranslations } from "../i18n/translations";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  year: string;
  category: string;
}

export function Projects() {
  const { t, language } = useLanguage();

  const projectsData: Project[] = [
    // 2025 - Projetos mais recentes
    {
      id: "validy-system",
      title: "Validy - Sistema de Certificados Digitais",
      description:
        "Aplicação desktop para escritórios contábeis gerenciarem certificados digitais A1 e A3 com alertas de vencimento, gerenciamento seguro de senhas e sincronização em nuvem.",
      image: "../imagem/projetos/validy.png",
      technologies: [
        "Tauri",
        "React",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "Zod",
      ],
      year: "2025",
      category: "DESKTOP APP",
    },
    {
      id: "validy-api",
      title: "Validy API",
      description:
        "API REST para gerenciamento de certificados digitais A1 e A3 com CRUD completo, validações, múltiplos e-mails de notificação e ordenação automática por vencimento.",
      image: "../../imagem/projetos/api.png",
      technologies: [
        "Elysia",
        "TypeScript",
        "Bun",
        "Prisma",
        "PostgreSQL",
        "Zod",
      ],
      github: "https://github.com/21lucasbarros/validy-api",
      year: "2025",
      category: "BACKEND",
    },
    {
      id: "e-tudo-mentira",
      title: "É Tudo Mentira™",
      description:
        "Micro SaaS de livros fictícios com histórias e autores inventados. Projeto em desenvolvimento com planos de integrar autenticação e pagamentos Stripe/Mercado Pago.",
      image: "../imagem/projetos/e-tudo-mentira.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "React",
        "TypeScript",
        "Zod",
        "React Hook Form",
        "Lucide",
        "Date-fns",
        "Clsx",
      ],
      github: "https://github.com/21lucasbarros/e-tudo-mentira-saas",
      live: "https://e-tudo-mentira-saas.vercel.app/",
      year: "2025",
      category: "SAAS",
    },
    {
      id: "cinema-database",
      title: "Cinema Database",
      description:
        "Aplicação para buscar filmes e obter informações detalhadas usando a API da TMDb. Foco em usabilidade e experiência do usuário.",
      image: "../imagem/projetos/cinema-database.png",
      technologies: ["React", "TypeScript", "SCSS", "Axios", "TMDb API"],
      github: "https://github.com/21lucasbarros/cinema-db",
      live: "https://cinema-database.vercel.app/",
      year: "2025",
      category: "API PROJECT",
    },
    {
      id: "ra-comunicacao",
      title: "R&A Comunicação Visual",
      description:
        "Landing page apresentando serviços de comunicação visual. Design limpo, responsivo e navegação intuitiva.",
      image: "../imagem/projetos/ra-comunicacao.png",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "React Hook Form",
        "Zod",
      ],
      github: "https://github.com/21lucasbarros/projeto-ilha-outdoor",
      live: "https://projeto-ilha-outdoor.vercel.app/",
      year: "2025",
      category: "LANDING PAGE",
    },
    {
      id: "snrk-shop",
      title: "SNRK Sneaker Shop",
      description:
        "E-commerce de sneakers com interface responsiva, seleção de variantes, cálculo de frete via ViaCEP e persistência de dados. Inspirado em Mercado Livre e Shopee.",
      image: "../imagem/projetos/snrk.png",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Zod",
        "Lucide React",
      ],
      github: "https://github.com/21lucasbarros/snrk",
      live: "https://snrk.vercel.app/",
      year: "2025",
      category: "E-COMMERCE",
    },
    {
      id: "my-todo-list",
      title: "My To-Do List",
      description:
        "Aplicação full stack de To-Do List. Front-end em Angular e back-end em Express.js com MongoDB. Back-end temporariamente offline.",
      image: "../../imagem/projetos/my-to-do-list.png",
      technologies: [
        "Angular",
        "CSS",
        "TypeScript",
        "JavaScript",
        "Express.js",
        "MongoDB",
        "Mongoose",
      ],
      github: "https://github.com/21lucasbarros/front-end-todo-app",
      live: "https://front-end-todo-app-three.vercel.app/",
      year: "2025",
      category: "FULL STACK",
    },
    // 2024
    {
      id: "screen-sound",
      title: "Screen Sound",
      description:
        "Aplicação em C# para gerenciar informações sobre bandas e artistas com interface intuitiva.",
      image: "../imagem/projetos/screen-sound.png",
      technologies: ["C#"],
      github: "https://github.com/21lucasbarros/screen-sound",
      year: "2024",
      category: "DESKTOP APP",
    },
    // 2023
    {
      id: "calculator",
      title: "Calculadora em Java",
      description:
        "Calculadora com interface Swing realizando operações básicas e avançadas. Boas práticas de POO.",
      image: "../imagem/projetos/calculator.png",
      technologies: ["Java"],
      github: "https://github.com/21lucasbarros/calculator",
      year: "2023",
      category: "DESKTOP APP",
    },
  ];

  // Aplicar traduções aos projetos
  const projects = projectsData.map((project) => ({
    ...project,
    title: projectTranslations[language][project.id]?.title || project.title,
    description:
      projectTranslations[language][project.id]?.description ||
      project.description,
  }));

  return (
    <section id="projects" className="relative py-32 px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-end justify-end mb-4">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-[#f7f7f7]">
              {t.projects.title.toUpperCase()}
              <span className="text-xl align-super opacity-60">™</span>
            </h2>
          </div>
          <div className="flex items-center justify-end gap-4">
            <span className="text-sm font-mono text-[#f7f7f7]/50 uppercase tracking-wider">
              {projects.length} WORKS
            </span>
            <div className="w-16 h-[1px] bg-blue-500"></div>
          </div>
        </motion.div>

        {/* Projects Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
