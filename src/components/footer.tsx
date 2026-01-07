import { scrollToElement } from "../utils/scrollToElement";
import { Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: t.header.nav.home, href: "#home" },
    { label: t.header.nav.education, href: "#education" },
    { label: t.header.nav.projects, href: "#projects" },
    { label: t.header.nav.contact, href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GITHUB",
      href: "https://github.com/21lucasbarros",
      icon: FaGithub,
    },
    {
      name: "LINKEDIN",
      href: "https://www.linkedin.com/in/lucasbarrossimon/",
      icon: FaLinkedin,
    },
    {
      name: "INSTAGRAM",
      href: "https://instagram.com/21lucasbarros",
      icon: FaInstagram,
    },
    {
      name: "BEHANCE",
      href: "https://www.behance.net/21lucasbarros",
      icon: SiBehance,
    },
  ];

  return (
    <footer className="relative bg-zinc-900 border-t border-white/10 px-4 md:px-6 lg:px-8 pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8 mt-16 md:mt-24 lg:mt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-10 md:mb-12 lg:mb-16">
          <section className="col-span-2 md:col-span-5 flex flex-col gap-4 md:gap-6">
            <div className="flex items-center gap-2 md:gap-3">
              <Code2 className="w-7 h-7 md:w-8 md:h-8 text-white" />
              <span className="text-lg md:text-xl font-bold text-white tracking-tight">
                Lucas Barros Simon
              </span>
            </div>
            <p className="font-mono text-xs md:text-sm text-white/60 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
          </section>

          <nav className="col-span-1 md:col-span-3">
            <h3 className="font-mono text-xs font-semibold text-white/40 tracking-wider mb-4 md:mb-5 lg:mb-6 uppercase">
              {t.footer.navigation}
            </h3>
            <ul className="flex flex-col gap-2.5 md:gap-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group font-mono text-sm text-white/70 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                    onClick={scrollToElement}
                  >
                    <span className="w-0 h-[1px] bg-white group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="col-span-1 md:col-span-4 text-right md:text-left">
            <h3 className="font-mono text-xs font-semibold text-white/40 tracking-wider mb-4 md:mb-5 lg:mb-6 uppercase">
              {t.footer.connect}
            </h3>
            <ul className="flex flex-col gap-2.5 md:gap-3 items-end md:items-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group font-mono text-sm text-white/70 hover:text-white transition-all duration-300 flex items-center gap-3 flex-row-reverse md:flex-row"
                    >
                      <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{social.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 md:mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="font-mono text-[10px] md:text-xs text-white/50 text-center md:text-left">
            © {currentYear} Lucas Barros Simon. {t.footer.rights}.
          </div>
          <div className="font-mono text-xs text-white/50 flex items-center gap-3">
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">
              v2.0.0
            </span>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>Made in 🇧🇷 Brazil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
