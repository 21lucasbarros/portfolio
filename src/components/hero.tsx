import { DownloadIcon } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <main className="w-full h-screen relative overflow-hidden" id="home">
      {/* grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#f7f7f7_1px,transparent_1px),linear-gradient(to_bottom,#f7f7f7_1px,transparent_1px)] bg-[length:37px_37px]"></div>
      </div>

      {/* efeito de lava lamp */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 150, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-blue-400/8 blur-[100px]"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "50%", right: "10%" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/6 blur-[130px]"
          animate={{
            x: [0, 80, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "5%", left: "30%" }}
        />
      </div>

      {/* Transição suave para próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900 pointer-events-none"></div>

      <section
        className="flex items-center px-4 md:px-6 lg:px-8 relative h-screen pt-24 md:pt-28"
        id="inicio"
      >
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-[clamp(2rem,6vw,6rem)] leading-[0.95] font-bold tracking-[-0.02em] mb-6 md:mb-8 whitespace-pre-line">
              {t.hero.roleTitle}
              <span className="text-[0.5em] align-super">™</span>
            </h1>
            <p className="text-[clamp(0.875rem,1.2vw,1rem)] max-w-[600px] opacity-70 mb-5 md:mb-6 leading-relaxed">
              {t.hero.description}
            </p>
            <a
              href="/docs/curriculo.pdf"
              download
              className="flex items-center text-xs md:text-sm border border-white/50 px-4 py-2.5 md:py-3 transition-colors hover:bg-white/10 no-underline group w-fit"
            >
              <DownloadIcon className="w-4 h-4 mr-2" />
              {t.hero.downloadCV}
            </a>
          </div>
          <div className="flex justify-between items-end pb-3 md:pb-4">
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-xs md:text-sm">{t.hero.scroll}</span>
              <motion.div
                className="w-[60px] h-[1px] bg-current"
                animate={{
                  scaleX: [1, 0.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
              <span className="text-xs">{t.hero.available}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
