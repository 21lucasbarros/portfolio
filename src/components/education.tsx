import { GraduationCap, Book, Globe } from "lucide-react";
import { motion } from "motion/react";
import CertificateList from "./certificate-list";
import { useLanguage } from "../contexts/LanguageContext";

export function Education() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 px-8 bg-zinc-900" id="education">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-4 text-[#f7f7f7]">
            {t.education.title}
            <span className="text-xl align-super opacity-60">™</span>
          </h2>
          <div className="w-16 h-[1px] bg-blue-500 mt-4"></div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Academic + Languages */}
          <div className="lg:col-span-5 space-y-16">
            {/* Formação Acadêmica */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-l border-[#f7f7f7]/10 pl-6"
            >
              <div className="mb-6">
                <GraduationCap
                  className="w-5 h-5 text-[#f7f7f7] mb-3"
                  strokeWidth={1.5}
                />
                <h3 className="text-base font-mono uppercase tracking-[0.15em] text-[#f7f7f7]">
                  01 — {t.education.academic}
                </h3>
              </div>
              <h4 className="text-2xl font-semibold mb-3 leading-tight text-[#f7f7f7]">
                {t.education.degree}
              </h4>
              <p className="text-[#f7f7f7] text-base mb-4 font-light">
                {t.education.university}
                <br />
                {t.education.location}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-base font-mono text-[#f7f7f7]/50">
                  2023—ATUALMENTE • 5º SEMESTRE
                </span>
              </div>
            </motion.div>

            {/* Idiomas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-l border-[#f7f7f7]/10 pl-6"
            >
              <div className="mb-6">
                <Globe
                  className="w-5 h-5 text-[#f7f7f7] mb-3"
                  strokeWidth={1.5}
                />
                <h3 className="text-base font-mono uppercase tracking-[0.15em] text-[#f7f7f7]">
                  02 — {t.education.languages}
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-medium text-[#f7f7f7]">
                      Inglês
                    </span>
                    <span className="text-base font-mono text-blue-400">
                      PRÉ-INTERMEDIÁRIO
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-medium text-[#f7f7f7]">
                      Espanhol
                    </span>

                    <span className="text-base font-mono text-blue-400">
                      BÁSICO
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certificados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-7 border-l border-[#f7f7f7]/10 pl-6"
          >
            <div className="mb-6">
              <Book className="w-5 h-5 text-[#f7f7f7] mb-3" strokeWidth={1.5} />
              <h3 className="text-base font-mono uppercase tracking-[0.15em] text-[#f7f7f7]">
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
