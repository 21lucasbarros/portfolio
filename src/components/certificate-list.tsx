import { ExternalLink, FileText } from "lucide-react";
import { motion } from "motion/react";

interface Curso {
  curso: string;
  certificado: string;
  tipo: "faculdade" | "alura";
}

const cursos: Curso[] = [
  {
    curso: "Certificado Intermediário Front-End - UNISANTA",
    certificado: "/docs/front-end.pdf",
    tipo: "faculdade",
  },
  {
    curso: "Certificado Intermediário Back-End - UNISANTA",
    certificado: "/docs/back-end.pdf",
    tipo: "faculdade",
  },
  {
    curso: "Imersão Python: Do Excel à Análise de Dados",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/15779",
    tipo: "alura",
  },
  {
    curso: "Imersão Inteligência Artificial 2ª Edição",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/28257",
    tipo: "alura",
  },
  {
    curso: "Imersão Dev com Google Gemini",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/40135",
    tipo: "alura",
  },
  {
    curso: "Imersão Dev Back-End",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/49679",
    tipo: "alura",
  },
  {
    curso: "C#: Aplicando a Orientação a Objetos",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/course/csharp-aplicando-orientacao-objetos/certificate",
    tipo: "alura",
  },
  {
    curso: "C#: Criando sua primeira Aplicação",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/course/csharp-criando-primeira-aplicacao/certificate",
    tipo: "alura",
  },
  {
    curso:
      "HTML e CSS: Ambientes de desenvolvimento, estrutura de arquivos e tags",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/course/html-css-ambiente-arquivos-tags/certificate",
    tipo: "alura",
  },
  {
    curso: "HTML e CSS: Classes, posicionamento e Flexbox",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/course/html-css-classes-posicionamento-flexbox/certificate",
    tipo: "alura",
  },
  {
    curso: "HTML e CSS: cabeçalho, footer e variáveis CSS",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/course/html-css-cabecalho-footer-variaveis-css/certificate",
    tipo: "alura",
  },
  {
    curso:
      "HTML e CSS: trabalhando com responsividade e publicação de projetos",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/course/html-css-responsividade-publicacao-projetos/certificate",
    tipo: "alura",
  },
  {
    curso: "Lógica de programação: mergulhe em programação com JavaScript",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/course/logica-programacao-mergulhe-programacao-javascript/certificate",
    tipo: "alura",
  },
  {
    curso: "Java: criando a sua primeira aplicação",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/course/java-criando-primeira-aplicacao/certificate",
    tipo: "alura",
  },
  {
    curso: "Git e GitHub: compartilhando e colaborando em projetos",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/course/git-github-compartilhando-colaborando-projetos/certificate",
    tipo: "alura",
  },
  {
    curso: "Java: aplicando a Orientação a Objetos",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/course/java-aplicando-orientacao-objetos/certificate",
    tipo: "alura",
  },
  {
    curso: "Imersão Front-End 2ª Edição",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/59520",
    tipo: "alura",
  },
  {
    curso: "React: escrevendo com Typescript",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/course/react-modernizando-escrever-typescript/certificate",
    tipo: "alura",
  },
  {
    curso: "Imersão Dev 9ª Edição",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/64560",
    tipo: "alura",
  },
  {
    curso:
      "Vue 3: entendendo componentes, diretivas e reatividade no framework",
    certificado:
      "https://cursos.alura.com.br/user/lucasweacked21/course/vue-3-componentes-diretivas-reatividade-framework/certificate",
    tipo: "alura",
  },
];

export default function CertificateList() {
  return (
    <>
      <p className="text-sm md:text-base font-mono text-[#f7f7f7] mb-4 md:mb-6">
        {cursos.length} ITENS
      </p>
      <div className="space-y-0 max-h-[350px] md:max-h-[450px] overflow-y-auto pr-2 md:pr-4 scrollbar-thin">
        {cursos.map((curso, index) => (
          <motion.a
            key={index}
            href={curso.certificado}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            viewport={{ once: true }}
            className="group flex items-start gap-2.5 md:gap-3 py-2.5 md:py-3 border-b border-[#f7f7f7]/5 hover:border-blue-400/30 transition-all duration-300"
          >
            {curso.tipo === "faculdade" ? (
              <FileText
                className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400/70 mt-0.5 flex-shrink-0"
                strokeWidth={1.5}
              />
            ) : (
              <div className="w-3.5 h-3.5 md:w-4 md:h-4 mt-1 flex-shrink-0 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#f7f7f7]/30 group-hover:bg-blue-400 transition-colors"></div>
              </div>
            )}
            <span className="text-sm md:text-base text-[#f7f7f7]/60 group-hover:text-[#f7f7f7]/90 transition-colors leading-relaxed flex-1">
              {curso.curso}
            </span>
            <ExternalLink
              className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#f7f7f7]/20 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-0.5"
              strokeWidth={1.5}
            />
          </motion.a>
        ))}
      </div>
    </>
  );
}
