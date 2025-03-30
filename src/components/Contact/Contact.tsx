import style from "./Contact.module.scss";

export default function Contact() {
  return (
    <>
      <section className={style.contato} id="contato">
        <div className={style.contato__conteudo}>
          <h2 className={style.contato__conteudo__titulo}>ENTRE EM CONTATO™</h2>
          <p className={style.contato__conteudo__descricao}>
            DISPONÍVEL PARA TRABALHOS, FREELANCE E COLABORAÇÕES
          </p>

          <div className={style.contato__conteudo__contato}>
            <div className={style.contato__conteudo__contato__info}>
              <a
                href="mailto:devlucasbarros@gmail.com"
                className={style.contato__conteudo__contato__info__email}
              >
                <i className="ri-mail-line" />
                devlucasbarros@gmail.com
              </a>

              <div className={style.contato__conteudo__contato__info__social}>
                <a
                  href="https://www.linkedin.com/in/lucasbarrossimon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    style.contato__conteudo__contato__info__social_link
                  }
                >
                  <i className="ri-linkedin-box-line" />
                </a>
                <a
                  href="https://github.com/21lucasbarros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    style.contato__conteudo__contato__info__social_link
                  }
                >
                  <i className="ri-github-line" />
                </a>
                <a
                  href="https://instagram.com/21lucasbarros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    style.contato__conteudo__contato__info__social_link
                  }
                >
                  <i className="ri-instagram-line" />
                </a>
                <a
                  href="https://www.behance.net/21lucasbarros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    style.contato__conteudo__contato__info__social_link
                  }
                >
                  <i className="ri-behance-fill" />
                </a>
              </div>
            </div>

            <form className={style.contato__conteudo__form}>
              <div className={style.contato__conteudo__form_form}>
                <input
                  type="text"
                  placeholder="NOME"
                  className={style.contato__conteudo__form_form__input}
                />
              </div>
              <div className={style.contato__conteudo__form_form}>
                <input
                  type="email"
                  placeholder="EMAIL"
                  className={style.contato__conteudo__form_form__input}
                />
              </div>
              <div className={style.contato__conteudo__form_form}>
                <textarea
                  placeholder="MENSAGEM"
                  className={style.contato__conteudo__form_form__textarea}
                ></textarea>
              </div>
              <button
                type="submit"
                className={style.contato__conteudo__form_form__botao}
              >
                ENVIAR MENSAGEM™
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
