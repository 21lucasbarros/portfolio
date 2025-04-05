import style from "./stacks.module.scss";

const techStacks = [
  {
    name: "Angular",
    category: "front-end",
    icon: "ri-angularjs-fill",
    proficiency: 25,
  },
  {
    name: "HTML",
    category: "front-end",
    icon: "ri-html5-fill",
    proficiency: 75,
  },
  {
    name: "CSS",
    category: "front-end",
    icon: "ri-css3-fill",
    proficiency: 71,
  },
  {
    name: "JavaScript",
    category: "front-end",
    icon: "ri-javascript-fill",
    proficiency: 50,
  },
  {
    name: "React",
    category: "front-end",
    icon: "ri-reactjs-fill",
    proficiency: 42,
  },
  {
    name: "TypeScript",
    category: "front-end",
    icon: "ri-reactjs-fill",
    proficiency: 40,
  },
  {
    name: "React Router",
    category: "front-end",
    icon: "ri-route-fill",
    proficiency: 38,
  },
  {
    name: "Next.js",
    category: "front-end",
    icon: "ri-nextjs-fill",
    proficiency: 32,
  },
  {
    name: "C#",
    category: "back-end",
    icon: "ri-terminal-box-fill",
    proficiency: 35,
  },
  {
    name: "Java",
    category: "back-end",
    icon: "ri-java-fill",
    proficiency: 28,
  },

  {
    name: "Git",
    category: "ferramentas",
    icon: "ri-git-branch-fill",
    proficiency: 25,
  },
  {
    name: "GitHub",
    category: "ferramentas",
    icon: "ri-github-fill",
    proficiency: 47,
  },
  {
    name: "Canva",
    category: "ferramentas",
    icon: "ri-palette-fill",
    proficiency: 78,
  },
  {
    name: "Photoshop",
    category: "ferramentas",
    icon: "ri-image-edit-fill",
    proficiency: 50,
  },
  {
    name: "Figma",
    category: "ferramentas",
    icon: "ri-figma-fill",
    proficiency: 41,
  },
];

export default function Stacks() {
  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return "#15803d"; // Verde escuro (expert)
    if (proficiency >= 80) return "#22c55e"; // Verde (avançado)
    if (proficiency >= 70) return "#4ade80"; // Verde claro (competente)
    if (proficiency >= 60) return "#eab308"; // Amarelo (intermediário alto)
    if (proficiency >= 50) return "#f97316"; // Laranja (intermediário)
    if (proficiency >= 30) return "#ef4444"; // Vermelho (iniciante)
    return "#dc2626"; // Vermelho escuro (básico)
  };
  return (
    <>
      <section className={style.stacks}>
        <div className={style.stacks__conteudo}>
          <h2 className={style.stacks__conteudo__titulo}>STACKS™</h2>

          <div className={style.stacks__conteudo__grid}>
            {["front-end", "back-end", "ferramentas"].map((category) => (
              <div
                key={category}
                className={style.stacks__conteudo__grid__categoria}
              >
                <div
                  className={style.stacks__conteudo__grid__categoria__header}
                >
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
                        className={
                          style.stacks__conteudo__grid__tech_list__item
                        }
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
                        <span
                          className={
                            style.stacks__conteudo__grid__tech_list__item__nivel
                          }
                          style={{
                            color: getProficiencyColor(tech.proficiency),
                          }}
                        >
                          {tech.proficiency}%
                        </span>
                        <div
                          className={
                            style.stacks__conteudo__grid__tech_list__item__nivel__barra
                          }
                        >
                          <div
                            className={
                              style.stacks__conteudo__grid__tech_list__item__nivel__barra__fill
                            }
                            style={{
                              width: `${tech.proficiency}%`,
                              backgroundColor: getProficiencyColor(
                                tech.proficiency
                              ),
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
