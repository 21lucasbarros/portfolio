import style from "./Contact.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the form schema using Zod
const contactSchema = z.object({
  name: z.string().min(1, "NOME É OBRIGATÓRIO"),
  email: z.string().email("POR FAVOR, INSIRA UM EMAIL VÁLIDO"),
  message: z.string().min(8, "MENSAGEM DEVE TER NO MÍNIMO 8 CARACTERES"),
});

type FormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/devlucasbarros@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          reset();
        }, 3000);
      } else {
        throw new Error("Falha ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert(
        "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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

            <form
              onSubmit={handleSubmit(onSubmit)}
              className={style.contato__conteudo__form}
            >
              <div className={style.contato__conteudo__form_form}>
                <input
                  type="text"
                  placeholder="NOME"
                  className={`${style.contato__conteudo__form_form__input} ${
                    errors.name ? style.error : ""
                  }`}
                  {...register("name")}
                />
                {errors.name && (
                  <span className={style.errorMessage}>
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className={style.contato__conteudo__form_form}>
                <input
                  type="email"
                  placeholder="EMAIL"
                  className={`${style.contato__conteudo__form_form__input} ${
                    errors.email ? style.error : ""
                  }`}
                  {...register("email")}
                />
                {errors.email && (
                  <span className={style.errorMessage}>
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className={style.contato__conteudo__form_form}>
                <textarea
                  placeholder="MENSAGEM"
                  className={`${style.contato__conteudo__form_form__textarea} ${
                    errors.message ? style.error : ""
                  }`}
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <span className={style.errorMessage}>
                    {errors.message.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className={style.contato__conteudo__form_form__botao}
                disabled={isSubmitting}
              >
                {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAGEM™"}
              </button>

              {isSubmitted && (
                <div className={style.successMessage}>
                  MENSAGEM ENVIADA COM SUCESSO!
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
