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
      titulo: "É Tudo Mentira™",
      descricao:
        "Micro SaaS de livros fictícios, com histórias e autores inventados. Feito em Next.js e Tailwind CSS para treinar habilidades. O projeto está em desenvolvimento, com planos de implementar criação de usuários, login, e integrar métodos de pagamento como Stripe e Mercado Pago.",
      imagem: "../imagem/projetos/e-tudo-mentira.png",
      tecnologias: [
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "React",
        "TypeScript",
        "Zod",
        "React Hook Form",
        "Lucide",
        "Date-fns",
        "Clsx",
      ],
      github: "https://github.com/21lucasbarros/e-tudo-mentira-saas",
      live: "https://e-tudo-mentira-saas.vercel.app/",
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
      titulo: "R&A Comunicação Visual",
      descricao:
        "Landing page desenvolvida para a mãe de um amigo, apresentando o trabalho dela na área de comunicação visual. O site destaca os serviços oferecidos, portfólio e informações sobre o projeto, com foco em design limpo, responsivo e navegação intuitiva.",
      imagem: "../imagem/projetos/ra-comunicacao.png",
      tecnologias: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "React Hook Form",
        "Zod",
      ],
      github: "https://github.com/21lucasbarros/projeto-ilha-outdoor",
      live: "https://projeto-ilha-outdoor.vercel.app/",
    },
    {
      titulo: "SNRK Sneaker Shop",
      descricao:
        "Landing page de E-commerce desenvolvida como desafio técnico, simulando uma página de produto de uma loja de sneakers. Conta com interface responsiva, seleção dinâmica de variantes (cor e tamanho), cálculo de frete via API do ViaCEP e salvamento dos dados do usuário por tempo limitado. Projeto inspirado em plataformas como Mercado Livre e Shopee.",
      imagem: "../imagem/projetos/snrk.png",
      tecnologias: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Zod",
        "Lucide React",
      ],
      github: "https://github.com/21lucasbarros/snrk",
      live: "https://snrk.vercel.app/",
    },
    {
      titulo: "My To-Do List",
      descricao:
        "Aplicação web full stack desenvolvida em um desafio acadêmico, com uma To-Do List funcional. O front-end foi feito em Angular, TypeScript e CSS, e o back-end em Express.js, MongoDB e Mongoose. Atualmente, o front-end segue online, mas o back-end está temporariamente inativo por conta do fim do semestre e dos créditos expirados na Railway.",
      imagem: "../../imagem/projetos/my-to-do-list.png",
      tecnologias: [
        "Angular",
        "CSS",
        "TypeScript",
        "JavaScript",
        "Express.js",
        "MongoDB",
        "Mongoose",
      ],
      github: "https://github.com/21lucasbarros/front-end-todo-app",
      live: "https://front-end-todo-app-three.vercel.app/",
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
