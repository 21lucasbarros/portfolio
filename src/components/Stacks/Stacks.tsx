import style from "./Stacks.module.scss";

const techStacks = [
  // Front-end
  { name: "React", category: "front-end", icon: "ri-reactjs-line" },
  { name: "Next.js", category: "front-end", icon: "ri-nextjs-fill" },
  { name: "Angular", category: "front-end", icon: "ri-angularjs-fill" },
  { name: "HTML", category: "front-end", icon: "ri-html5-fill" },
  { name: "CSS", category: "front-end", icon: "ri-css3-fill" },
  { name: "SCSS", category: "front-end", icon: "ri-braces-fill" },
  { name: "JavaScript", category: "front-end", icon: "ri-javascript-fill" },
  { name: "TypeScript", category: "front-end", icon: "ri-code-s-slash-line" },
  { name: "Vue.js", category: "front-end", icon: "ri-vuejs-fill" },

  { name: "Tailwind", category: "front-end", icon: "ri-windy-line" },
  { name: "shadcn/ui", category: "front-end", icon: "ri-layout-grid-fill" },
  { name: "Axios", category: "front-end", icon: "ri-exchange-funds-fill" },

  // Back-end
  { name: "Node.js", category: "back-end", icon: "ri-nodejs-fill" },
  { name: "MongoDB", category: "back-end", icon: "ri-database-2-fill" },
  { name: "C#", category: "back-end", icon: "ri-code-box-fill" },
  { name: "Java", category: "back-end", icon: "ri-java-fill" },

  // Ferramentas
  { name: "Git", category: "ferramentas", icon: "ri-git-branch-fill" },
  { name: "GitHub", category: "ferramentas", icon: "ri-github-fill" },
  {
    name: "Visual Studio Code",
    category: "ferramentas",
    icon: "ri-code-s-fill",
  },
  { name: "Figma", category: "ferramentas", icon: "ri-figma-fill" },
  { name: "Postman", category: "ferramentas", icon: "ri-flask-fill" },
  { name: "Vercel", category: "ferramentas", icon: "ri-upload-cloud-2-fill" },
  {
    name: "GitHub Pages",
    category: "ferramentas",
    icon: "ri-pages-fill",
  },

  // Libs
  {
    name: "React Hook Form",
    category: "libs",
    icon: "ri-reactjs-fill",
  },
  {
    name: "Zod",
    category: "libs",
    icon: "ri-shield-check-fill",
  },
  {
    name: "Framer Motion",
    category: "libs",
    icon: "ri-run-fill",
  },
];

export default function Stacks() {
  return (
    <section className={style.stacks} id="stacks">
      <div className={style.stacks__conteudo}>
        <h2 className={style.stacks__conteudo__titulo}>STACKS™</h2>

        <div className={style.stacks__conteudo__grid}>
          {["front-end", "back-end", "libs", "ferramentas"].map((category) => (
            <div
              key={category}
              className={style.stacks__conteudo__grid__categoria}
            >
              <div className={style.stacks__conteudo__grid__categoria__header}>
                <i className="ri-brain-fill" />
                <h3
                  className={
                    style.stacks__conteudo__grid__categoria__header__titulo
                  }
                >
                  {category.toUpperCase()}
                </h3>
              </div>
              <div className={style.stacks__conteudo__grid__tech_list}>
                {techStacks
                  .filter((tech) => tech.category === category)
                  .map((tech, index) => (
                    <div
                      key={index}
                      className={style.stacks__conteudo__grid__tech_list__item}
                    >
                      <div
                        className={
                          style.stacks__conteudo__grid__tech_list__item__info
                        }
                      >
                        <i className={tech.icon}></i>
                        <span
                          className={
                            style.stacks__conteudo__grid__tech_list__item__info__titulo
                          }
                        >
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
