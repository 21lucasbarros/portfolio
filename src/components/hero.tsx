import { DownloadIcon } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <main className="w-full min-h-[100dvh] relative overflow-hidden" id="home">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#f7f7f7_1px,transparent_1px),linear-gradient(to_bottom,#f7f7f7_1px,transparent_1px)] bg-[length:24px_24px] md:bg-[length:37px_37px]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-blue-500/10 blur-[80px] md:blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 75, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "10%", left: "5%" }}
        />
        <motion.div
          className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-blue-400/8 blur-[60px] md:blur-[100px]"
          animate={{
            x: [0, -75, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "50%", right: "5%" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-blue-600/6 blur-[80px] md:blur-[130px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "5%", left: "20%" }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-40 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900 pointer-events-none"></div>

      <section
        className="px-5 sm:px-6 md:px-8 lg:px-12 relative min-h-[100dvh] pt-20 md:pt-28"
        id="inicio"
      >
        <div className="max-w-7xl mx-auto w-full h-[calc(100dvh-5rem)] md:h-[calc(100dvh-7rem)] flex flex-col">
          <div className="flex-1 flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] leading-[0.95] font-bold tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8 whitespace-pre-line"
            >
              {t.hero.roleTitle}
              <span className="text-[0.4em] sm:text-[0.5em] align-super opacity-60">
                ™
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-sm sm:text-base md:text-lg max-w-[500px] md:max-w-[600px] opacity-70 mb-5 md:mb-8 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              href="/docs/curriculo.pdf"
              download
              className="flex items-center text-xs sm:text-sm border border-white/50 px-4 sm:px-5 py-3 sm:py-3.5 transition-colors hover:bg-white/10 active:bg-white/20 no-underline group w-fit"
            >
              <DownloadIcon className="w-4 h-4 mr-2" />
              {t.hero.downloadCV}
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-row justify-between items-center py-4 md:py-6"
          >
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <span className="text-xs sm:text-sm">{t.hero.scroll}</span>
              <motion.div
                className="w-10 sm:w-12 md:w-[60px] h-[1px] bg-current"
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
              <span className="text-[11px] sm:text-xs md:text-sm">
                {t.hero.available}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
