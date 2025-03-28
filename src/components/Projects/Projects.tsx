import style from "./Projects.module.scss";

interface Projeto {
  titulo: string;
  descricao: string;
  imagem: string;
  tecnologias: string[];
  github?: string;
  live?: string;
}

export default function Projects() {
  const projetos: Projeto[] = [
    {
      titulo: "Site da Vivi da Inclusão",
      descricao:
        "Site responsivo, acessível e que reflete a identidade visual da Vivi, desenvolvido com HTML, CSS e JavaScript. Junto com dois amigos, tive a oportunidade de participar desse projeto, onde criamos uma interface clara e inclusiva para transmitir sua mensagem.",
      imagem: "../imagem/projetos/vivi.png",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      live: "https://vividainclusao.com.br",
    },
    {
      titulo: "Landing Page da MUBI",
      descricao:
        "Landing page desenvolvida em React, com design minimalista e uma experiência interativa que captura a essência da MUBI. O projeto está em desenvolvimento.",
      imagem: "../imagem/projetos/mubi-react.png",
      tecnologias: ["React", "CSS", "TypeScript"],
      github: "https://github.com/21lucasbarros/mubi-react",
      live: "https://mubi-react.vercel.app/",
    },
    {
      titulo: "Cinema Database",
      descricao:
        "Projeto em desenvolvimento que permite buscar filmes e obter informações detalhadas, como diretor, gênero, sinopse e onde assistir. Usa a API da TMDb e foca em usabilidade e experiência do usuário.",
      imagem: "../imagem/projetos/cinema-database.png",
      tecnologias: ["React", "TypeScript", "SCSS", "Axios", "TMDb API"],
      github: "https://github.com/21lucasbarros/cinema-db",
      live: "https://cinema-database.vercel.app/",
    },
    {
      titulo: "Calculadora em Java",
      descricao:
        "Calculadora desenvolvida em Java com interface Swing, realizando operações básicas e avançadas. A aplicação segue boas práticas de programação orientada a objetos.",
      imagem: "../imagem/projetos/calculator.png",
      tecnologias: ["Java"],
      github: "https://github.com/21lucasbarros/calculator",
    },
    {
      titulo: "Screen Sound",
      descricao:
        "Aplicação em C# para gerenciar informações sobre bandas e artistas, combinando lógica de programação, manipulação de dados e interface intuitiva.",
      imagem: "../imagem/projetos/screen-sound.png",
      tecnologias: ["C#"],
      github: "https://github.com/21lucasbarros/screen-sound",
    },
    {
      titulo: "API-Usuarios",
      descricao:
        "Desenvolvi minha primeira API de gerenciamento de usuários com Node.js, Express.js e Prisma. Ela permite criar, listar, atualizar e excluir usuários de forma simples e eficiente.",
      imagem: "../../imagem/projetos/api.png",
      tecnologias: ["Node.js", "Express.js", "JavaScript", "MongoDB", "Prisma"],
      github: "https://github.com/21lucasbarros/api-usuarios",
    },
  ];

  return (
    <>
      <section className={style.projetos} id="projetos">
        <div className={style.projetos__conteudo}>
          <div className={style.projetos__conteudo__titulo}>
            <h2 className={style.projetos__conteudo__titulo__titulo}>
              PROJETOS™
            </h2>
            <span className={style.projetos__conteudo__titulo__contagem}>
              / {projetos.length} PROJETOS
            </span>
          </div>
          <div className={style.projetos__conteudo__projetos}>
            {projetos.map((projeto, index) => (
              <article key={index} className={style.projeto}>
                <div className={style.projeto__imagemContainer}>
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    className={style.projeto__imagem}
                  />
                  <div className={style.projeto__overlay}>
                    <div className={style.projeto__links}>
                      {projeto.github && (
                        <a
                          href={projeto.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={style.projeto__link}
                        >
                          <i className="ri-github-line" />
                        </a>
                      )}
                      {projeto.live && (
                        <a
                          href={projeto.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={style.projeto__link}
                        >
                          <i className="ri-external-link-fill"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className={style.projeto__conteudo}>
                  <h3 className={style.projeto__titulo}>{projeto.titulo}</h3>
                  <p className={style.projeto__descricao}>
                    {projeto.descricao}
                  </p>
                  <div className={style.projeto__tecnologias}>
                    {projeto.tecnologias.map((tech, i) => (
                      <span key={i} className={style.projeto__tecnologia}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
