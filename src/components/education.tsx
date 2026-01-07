import { GraduationCap, Book, Globe } from "lucide-react";
import { motion } from "motion/react";
import CertificateList from "./certificate-list";
import { useLanguage } from "../contexts/LanguageContext";

export function Education() {
  const { t } = useLanguage();

  return (
    <section
      className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-zinc-900"
      id="education"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16 lg:mb-20 text-right"
        >
          <h2 className="text-3xl md:text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-tight mb-2 md:mb-4 text-[#f7f7f7]">
            {t.education.title}
            <span className="text-base md:text-xl align-super opacity-60">
              ™
            </span>
          </h2>
          <div className="w-10 md:w-16 h-[1px] bg-blue-500 mt-2 md:mt-4 ml-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-8 md:space-y-14 lg:space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-l border-[#f7f7f7]/8 pl-4 md:pl-6"
            >
              <div className="mb-5">
                <GraduationCap
                  className="w-5 h-5 text-[#f7f7f7] mb-2"
                  strokeWidth={1.5}
                />
                <h3 className="text-sm md:text-base font-mono uppercase tracking-[0.12em] md:tracking-[0.15em] text-[#f7f7f7]/70">
                  01 — {t.education.academic}
                </h3>
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 leading-tight text-[#f7f7f7]">
                {t.education.degree}
              </h4>
              <p className="text-[#f7f7f7]/85 text-sm md:text-base mb-3 md:mb-4 font-light">
                {t.education.university}
                <br />
                {t.education.location}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-sm md:text-base font-mono text-[#f7f7f7]/50">
                  {t.education.currentPeriod}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-l border-[#f7f7f7]/8 pl-4 md:pl-6"
            >
              <div className="mb-5">
                <Globe
                  className="w-5 h-5 text-[#f7f7f7] mb-2"
                  strokeWidth={1.5}
                />
                <h3 className="text-sm md:text-base font-mono uppercase tracking-[0.12em] md:tracking-[0.15em] text-[#f7f7f7]/70">
                  02 — {t.education.languages}
                </h3>
              </div>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm md:text-base font-medium text-[#f7f7f7]">
                      {t.education.languageNames.portuguese}
                    </span>
                    <span className="text-sm md:text-base font-mono text-blue-400">
                      {t.education.languageLevels.native}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm md:text-base font-medium text-[#f7f7f7]">
                      {t.education.languageNames.english}
                    </span>
                    <span className="text-sm md:text-base font-mono text-blue-400">
                      {t.education.languageLevels.preIntermediate}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm md:text-base font-medium text-[#f7f7f7]">
                      {t.education.languageNames.spanish}
                    </span>
                    <span className="text-sm md:text-base font-mono text-blue-400">
                      {t.education.languageLevels.basic}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-7 border-l border-[#f7f7f7]/8 pl-4 md:pl-6"
          >
            <div className="mb-5">
              <Book className="w-5 h-5 text-[#f7f7f7] mb-2" strokeWidth={1.5} />
              <h3 className="text-sm md:text-base font-mono uppercase tracking-[0.12em] md:tracking-[0.15em] text-[#f7f7f7]/70">
                03 — {t.education.certifications}
              </h3>
            </div>
            <CertificateList />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
