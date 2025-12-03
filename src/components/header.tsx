import { Code2 } from "lucide-react";
import { scrollToElement } from "../utils/scrollToElement";
import { useLanguage } from "../contexts/LanguageContext";
import type { Language } from "../i18n/translations";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.header.nav.home, href: "#home" },
    { label: t.header.nav.education, href: "#education" },
    { label: t.header.nav.projects, href: "#projects" },
    { label: t.header.nav.contact, href: "#contact" },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "pt", label: t.header.language.pt, flag: "🇧🇷" },
    { code: "en", label: t.header.language.en, flag: "🇺🇸" },
    { code: "es", label: t.header.language.es, flag: "🇪🇸" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <header className="fixed top-0 left-0 right-0 py-4 md:py-6 z-[1000] backdrop-blur-sm bg-zinc-900/80 border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <Code2 className="h-7 w-7 md:h-9 md:w-9 text-blue-500" />
            <span className="text-lg md:text-xl font-bold hidden sm:block">
              Portfolio
            </span>
          </div>

          <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
            <nav className="hidden md:flex gap-4 lg:gap-6">
              {navItems.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.href}
                    onClick={scrollToElement}
                    className="relative text-sm font-medium transition-colors hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700/50 hover:text-blue-400 transition-all"
                >
                  <span className="text-lg">{currentLanguage?.flag}</span>
                  <span className="hidden sm:inline">
                    {language.toUpperCase()}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-zinc-800/95 backdrop-blur-md border-zinc-700 z-[1100] min-w-[180px] p-1.5 overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                sideOffset={8}
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`cursor-pointer px-3 py-2.5 rounded-md transition-all flex items-center gap-3 ${
                      language === lang.code
                        ? "bg-blue-500/20 text-blue-400"
                        : "hover:bg-zinc-700/50 text-zinc-300 hover:text-white"
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-medium">{lang.label}</span>
                    {language === lang.code && (
                      <span className="ml-auto text-blue-400">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
