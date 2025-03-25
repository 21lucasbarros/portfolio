import style from "./Education.module.scss";

export default function Education() {
  const cursos = [
    {
      curso: "Imersão Python: Do Excel à Análise de Dados - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/15779",
    },
    {
      curso: "Imersão Inteligência Artificial 2ª Edição - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/28257",
    },
    {
      curso: "Imersão Dev com Google Gemini - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/40135",
    },
    {
      curso: "Imersão Dev Back-End - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/49679",
    },
    {
      curso: "C#: Aplicando a Orientação a Objetos - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/csharp-aplicando-orientacao-objetos/certificate",
    },
    {
      curso: "C#: Criando sua primeira Aplicação - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/csharp-criando-primeira-aplicacao/certificate",
    },
    {
      curso:
        "HTML e CSS: Ambientes de desenvolvimento, estrutura de arquivos e tags - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/html-css-ambiente-arquivos-tags/certificate",
    },
    {
      curso: "HTML e CSS: Classes, posicionamento e Flexbox - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/html-css-classes-posicionamento-flexbox/certificate",
    },
    {
      curso: "HTML e CSS: cabeçalho, footer e variáveis CSS - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/html-css-cabecalho-footer-variaveis-css/certificate",
    },
    {
      curso:
        "HTML e CSS: trabalhando com responsividade e publicação de projetos - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/html-css-responsividade-publicacao-projetos/certificate",
    },
    {
      curso:
        "Lógica de programação: mergulhe em programação com JavaScript - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/logica-programacao-mergulhe-programacao-javascript/certificate",
    },
    {
      curso: "Java: criando a sua primeira aplicação - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/java-criando-primeira-aplicacao/certificate",
    },
    {
      curso:
        "Git e GitHub: compartilhando e colaborando em projetos - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/git-github-compartilhando-colaborando-projetos/certificate",
    },
    {
      curso: "Java: aplicando a Orientação a Objetos - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/java-aplicando-orientacao-objetos/certificate",
    },
    {
      curso: "Imersão Front-End 2ª Edição - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/59520",
    },
    {
      curso: "React: escrevendo com Typescript - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/react-modernizando-escrever-typescript/certificate",
    },
  ];
  return (
    <>
      <section className={style.formacao} id="formacao">
        <div className={style.container}>
          <h2 className={style.titulo}>FORMAÇÕES™</h2>

          <div className={style.grid}>
            <div className={style.grau}>
              <div className={style.icone}>
                <i className="ri-graduation-cap-line" />
              </div>
              <h3 className={style.subtitulo}>FORMAÇÃO ACADÊMICA</h3>
              <p className={style.curso}>Sistemas de Informação</p>
              <p className={style.instituicao}>
                Universidade Santa Cecília (UNISANTA)
              </p>
              <p className={style.periodo}>2023 - presente • 4º Semestre</p>
            </div>

            <div className={style.certificados}>
              <div className={style.icone}>
                <i className="ri-book-line" />
              </div>
              <h3 className={style.subtitulo}>CURSOS E CERTIFICADOS</h3>
              <ul className={style.lista}>
                {cursos.map((curso, index) => (
                  <li key={index} className={style.item}>
                    <a
                      href={curso.certificado}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {curso.curso} com certificado
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={style.idiomas}>
              <div className={style.icone}>
                <i className="ri-global-line" />
              </div>
              <h3 className={style.subtitulo}>IDIOMAS</h3>
              <ul className={style.lista}>
                <li className={style.idioma}>Inglês - Pré-Intermediário</li>
                <li className={style.idioma}>Espanhol - Básico</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
