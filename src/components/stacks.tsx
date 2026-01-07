"use client";

import { motion } from "motion/react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiAngular,
  SiVuedotjs,
  SiSvelte,
  SiTauri,
  SiNodedotjs,
  SiBun,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const stacks = {
  frontend: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "SCSS", icon: SiSass, color: "#CC6699" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "Svelte", icon: SiSvelte, color: "#FF3E00" },
    { name: "Tauri", icon: SiTauri, color: "#FFC131" },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Bun", icon: SiBun, color: "#FBF0DF" },
    { name: "Elysia", icon: Sparkles, color: "#A855F7" },
    { name: "C# (.NET)", icon: SiDotnet, color: "#512BD4" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
  ],
  database: [
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  ],
};

const allStacks = [...stacks.frontend, ...stacks.backend, ...stacks.database];

export function Stacks() {
  const { t } = useLanguage();

  return (
    <section
      id="stacks"
      className="py-16 sm:py-24 px-4 sm:px-8 lg:px-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-tight mb-2 md:mb-4 text-[#f7f7f7]">
            {t.stacks.title}
            <span className="text-base md:text-xl align-super opacity-60">
              ™
            </span>
          </h2>
          <div className="w-10 md:w-16 h-[1px] bg-blue-500 mt-2 md:mt-4"></div>
        </motion.div>

        <div className="relative mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <div
              className="flex gap-8 py-4 animate-scroll"
              style={{
                animation: "scroll 30s linear infinite",
              }}
            >
              {[...allStacks, ...allStacks, ...allStacks].map(
                (stack, index) => (
                  <div
                    key={`${stack.name}-${index}`}
                    className="flex items-center gap-3 px-5 py-3 bg-[#f7f7f7]/5 border border-[#f7f7f7]/10 rounded-full whitespace-nowrap hover:border-[#f7f7f7]/20 transition-colors"
                  >
                    <stack.icon
                      className="w-5 h-5 shrink-0"
                      style={{ color: stack.color }}
                    />
                    <span className="text-[#f7f7f7]/70 text-sm font-medium">
                      {stack.name}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-[#f7f7f7]/5 border border-[#f7f7f7]/10 rounded-xl hover:border-blue-500/20 transition-colors"
          >
            <h3 className="text-[#f7f7f7] font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              {t.stacks.frontend}
            </h3>
            <div className="flex flex-wrap gap-2">
              {stacks.frontend.map((stack) => (
                <div
                  key={stack.name}
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] rounded-lg"
                >
                  <stack.icon
                    className="w-4 h-4"
                    style={{ color: stack.color }}
                  />
                  <span className="text-[#f7f7f7]/60 text-xs">
                    {stack.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="p-6 bg-[#f7f7f7]/5 border border-[#f7f7f7]/10 rounded-xl hover:border-blue-500/20 transition-colors"
          >
            <h3 className="text-[#f7f7f7] font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              {t.stacks.backend}
            </h3>
            <div className="flex flex-wrap gap-2">
              {stacks.backend.map((stack) => (
                <div
                  key={stack.name}
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] rounded-lg"
                >
                  <stack.icon
                    className="w-4 h-4"
                    style={{ color: stack.color }}
                  />
                  <span className="text-[#f7f7f7]/60 text-xs">
                    {stack.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-[#f7f7f7]/5 border border-[#f7f7f7]/10 rounded-xl hover:border-blue-500/20 transition-colors"
          >
            <h3 className="text-[#f7f7f7] font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full" />
              {t.stacks.database}
            </h3>
            <div className="flex flex-wrap gap-2">
              {stacks.database.map((stack) => (
                <div
                  key={stack.name}
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] rounded-lg"
                >
                  <stack.icon
                    className="w-4 h-4"
                    style={{ color: stack.color }}
                  />
                  <span className="text-[#f7f7f7]/60 text-xs">
                    {stack.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
