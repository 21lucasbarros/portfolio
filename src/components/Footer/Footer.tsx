import styles from "./Footer.module.scss";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

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
    <footer className={styles.rodape}>
      <div className={styles.rodape__conteudo}>
        <div className={styles.rodape__conteudo__grid}>
          <section className={styles.rodape__conteudo__brand}>
            <i className="ri-code-s-slash-fill" />
            <p className={styles.rodape__conteudo__descricao}>
              Desenvolvedor Full-Stack focado em criar experiências digitais
              únicas e funcionais
            </p>
          </section>

          <nav className={styles.rodape__conteudo__navegacao}>
            <h3 className={styles.rodape__conteudo__navegacao__titulo}>NAV</h3>
            <ul className={styles.rodape__conteudo__navegacao__links}>
              <li>
                <a
                  href="#inicio"
                  className={styles.rodape__conteudo__link}
                  onClick={scrollToElement}
                >
                  INÍCIO
                </a>
              </li>
              <li>
                <a
                  href="#formacao"
                  className={styles.rodape__conteudo__link}
                  onClick={scrollToElement}
                >
                  FORMAÇÕES
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className={styles.rodape__conteudo__link}
                  onClick={scrollToElement}
                >
                  PROJETOS
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className={styles.rodape__conteudo__link}
                  onClick={scrollToElement}
                >
                  CONTATO
                </a>
              </li>
            </ul>
          </nav>

          <section className={styles.rodape__conteudo__social}>
            <h3 className={styles.rodape__conteudo__social__titulo}>SOCIAL</h3>
            <ul className={styles.rodape__conteudo__social__links}>
              <li>
                <a
                  href="https://github.com/21lucasbarros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.rodape__conteudo__link}
                >
                  <i className="ri-github-fill" />
                  <span>GITHUB</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lucasbarrossimon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.rodape__conteudo__link}
                >
                  <i className="ri-linkedin-box-fill" />
                  <span>LINKEDIN</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/21lucasbarros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.rodape__conteudo__link}
                >
                  <i className="ri-instagram-fill" />
                  <span>INSTAGRAM</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/21lucasbarros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.rodape__conteudo__link}
                >
                  <i className="ri-behance-fill" />
                  <span>BEHANCE</span>
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className={styles.rodape__inferior}>
          <div className={styles.rodape__inferior__copyright}>
            © {anoAtual} LUCAS BARROS SIMON™. TODOS OS DIREITOS RESERVADOS.
          </div>
          <div className={styles.rodape__inferior__info}>
            <span>VER 1.0.0</span>
            <span className={styles.rodape__inferior__separador}></span>
            <span>MADE IN BRAZIL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
