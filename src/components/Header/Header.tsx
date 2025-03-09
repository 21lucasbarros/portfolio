import React, { useState, useEffect } from "react";
import style from "./Header.module.scss";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToElement = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    if (!href) return;

    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`${style.cabecalho} ${
        isScrolled ? style.cabecalho__scroll : ""
      }`}
    >
      <nav className={style.cabecalho__nav}>
        <div className={style.cabecalho__nav__logo}>
          <a href="#inicio" onClick={scrollToElement}>
            <i className="ri-code-s-slash-fill" />
          </a>
        </div>
        <ul className={style.cabecalho__nav__links}>
          <li>
            <a href="#inicio" onClick={scrollToElement}>
              INICIO
            </a>
          </li>
          <li>
            <a href="#formacao" onClick={scrollToElement}>
              FORMAÇÕES
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={scrollToElement}>
              PROJETOS
            </a>
          </li>
          <li>
            <a href="#contato" onClick={scrollToElement}>
              CONTATO
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
