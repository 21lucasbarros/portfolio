export type Language = "pt" | "en" | "es";

export interface ProjectTranslation {
  title: string;
  description: string;
}

export interface Translations {
  header: {
    nav: {
      home: string;
      education: string;
      projects: string;
      contact: string;
    };
    language: {
      label: string;
      pt: string;
      en: string;
      es: string;
    };
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    roleTitle: string;
    description: string;
    downloadCV: string;
    scroll: string;
    available: string;
  };
  education: {
    title: string;
    academic: string;
    degree: string;
    university: string;
    location: string;
    period: string;
    languages: string;
    certifications: string;
  };
  projects: {
    title: string;
    viewProject: string;
    viewCode: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    requiredField: string;
    invalidEmail: string;
    minCharacters: string;
    getInTouch: string;
  };
  footer: {
    rights: string;
    description: string;
    navigation: string;
    connect: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    header: {
      nav: {
        home: "INÍCIO",
        education: "FORMAÇÕES",
        projects: "PROJETOS",
        contact: "CONTATO",
      },
      language: {
        label: "Idioma",
        pt: "Português",
        en: "Inglês",
        es: "Espanhol",
      },
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Lucas Barros",
      role: "Desenvolvedor Full Stack",
      roleTitle: "DESENVOLVEDOR\nFULL-STACK",
      description:
        "Criando experiências digitais que transcendem o código. Especializado em arquiteturas full-stack que unem design minimalista e engenharia de precisão para construir produtos extraordinários.",
      downloadCV: "BAIXAR CURRÍCULO",
      scroll: "SCROLL",
      available: "DISPONÍVEL PARA TRABALHO",
    },
    education: {
      title: "FORMAÇÕES",
      academic: "ACADÊMICO",
      degree: "Sistemas de Informação",
      university: "Universidade Santa Cecília (UNISANTA)",
      location: "Santos, São Paulo",
      period: "2023 — 2026",
      languages: "IDIOMAS",
      certifications: "CERTIFICAÇÕES",
    },
    projects: {
      title: "Projetos",
      viewProject: "Ver Projeto",
      viewCode: "Ver Código",
    },
    contact: {
      title: "Contato",
      subtitle:
        "Disponível para novos projetos, colaborações e oportunidades freelance. Entre em contato e vamos criar algo extraordinário juntos.",
      name: "Nome",
      namePlaceholder: "Seu nome completo",
      email: "E-mail",
      emailPlaceholder: "seu@email.com",
      message: "Mensagem",
      messagePlaceholder: "Escreva sua mensagem aqui...",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      successMessage: "Mensagem enviada com sucesso!",
      errorMessage: "Erro ao enviar mensagem. Tente novamente.",
      requiredField: "Campo obrigatório",
      invalidEmail: "Email inválido",
      minCharacters: "Mínimo 8 caracteres",
      getInTouch: "Entre em contato",
    },
    footer: {
      rights: "Todos os direitos reservados",
      description:
        "Desenvolvedor Full-Stack focado em criar experiências digitais únicas e funcionais. Transformando ideias em código.",
      navigation: "Navegação",
      connect: "Conecte-se",
    },
  },
  en: {
    header: {
      nav: {
        home: "HOME",
        education: "EDUCATION",
        projects: "PROJECTS",
        contact: "CONTACT",
      },
      language: {
        label: "Language",
        pt: "Portuguese",
        en: "English",
        es: "Spanish",
      },
    },
    hero: {
      greeting: "Hello, I am",
      name: "Lucas Barros",
      role: "Full Stack Developer",
      roleTitle: "FULL-STACK\nDEVELOPER",
      description:
        "Creating digital experiences that transcend code. Specialized in full-stack architectures that unite minimalist design and precision engineering to build extraordinary products.",
      downloadCV: "DOWNLOAD RESUME",
      scroll: "SCROLL",
      available: "AVAILABLE FOR WORK",
    },
    education: {
      title: "EDUCATION",
      academic: "ACADEMIC",
      degree: "Information Systems",
      university: "Santa Cecília University (UNISANTA)",
      location: "Santos, São Paulo",
      period: "2023 — 2026",
      languages: "LANGUAGES",
      certifications: "CERTIFICATIONS",
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
      viewCode: "View Code",
    },
    contact: {
      title: "Contact",
      subtitle:
        "Available for new projects, collaborations and freelance opportunities. Get in touch and let's create something extraordinary together.",
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "Write your message here...",
      send: "Send Message",
      sending: "Sending...",
      successMessage: "Message sent successfully!",
      errorMessage: "Error sending message. Please try again.",
      requiredField: "Required field",
      invalidEmail: "Invalid email",
      minCharacters: "Minimum 8 characters",
      getInTouch: "Get in touch",
    },
    footer: {
      rights: "All rights reserved",
      description:
        "Full-Stack Developer focused on creating unique and functional digital experiences. Transforming ideas into code.",
      navigation: "Navigation",
      connect: "Connect",
    },
  },
  es: {
    header: {
      nav: {
        home: "INICIO",
        education: "FORMACIÓN",
        projects: "PROYECTOS",
        contact: "CONTACTO",
      },
      language: {
        label: "Idioma",
        pt: "Portugués",
        en: "Inglés",
        es: "Español",
      },
    },
    hero: {
      greeting: "Hola, soy",
      name: "Lucas Barros",
      role: "Desarrollador Full Stack",
      roleTitle: "DESARROLLADOR\nFULL-STACK",
      description:
        "Creando experiencias digitales que trascienden el código. Especializado en arquitecturas full-stack que unen diseño minimalista e ingeniería de precisión para construir productos extraordinarios.",
      downloadCV: "DESCARGAR CV",
      scroll: "DESPLAZAR",
      available: "DISPONIBLE PARA TRABAJO",
    },
    education: {
      title: "FORMACIÓN",
      academic: "ACADÉMICO",
      degree: "Sistemas de Información",
      university: "Universidad Santa Cecília (UNISANTA)",
      location: "Santos, São Paulo",
      period: "2023 — 2026",
      languages: "IDIOMAS",
      certifications: "CERTIFICACIONES",
    },
    projects: {
      title: "Proyectos",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
    },
    contact: {
      title: "Contacto",
      subtitle:
        "Disponible para nuevos proyectos, colaboraciones y oportunidades freelance. Ponte en contacto y creemos algo extraordinario juntos.",
      name: "Nombre",
      namePlaceholder: "Tu nombre completo",
      email: "Correo electrónico",
      emailPlaceholder: "tu@email.com",
      message: "Mensaje",
      messagePlaceholder: "Escribe tu mensaje aquí...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      successMessage: "¡Mensaje enviado con éxito!",
      errorMessage: "Error al enviar mensaje. Inténtalo de nuevo.",
      requiredField: "Campo obligatorio",
      invalidEmail: "Email inválido",
      minCharacters: "Mínimo 8 caracteres",
      getInTouch: "Contacta",
    },
    footer: {
      rights: "Todos los derechos reservados",
      description:
        "Desarrollador Full-Stack enfocado en crear experiencias digitales únicas y funcionales. Transformando ideas en código.",
      navigation: "Navegación",
      connect: "Conectar",
    },
  },
};

export const projectTranslations: Record<
  Language,
  Record<string, ProjectTranslation>
> = {
  pt: {
    "validy-system": {
      title: "Validy - Sistema de Certificados Digitais",
      description:
        "Aplicação desktop para escritórios contábeis gerenciarem certificados digitais A1 e A3 com alertas de vencimento, gerenciamento seguro de senhas e sincronização em nuvem.",
    },
    "validy-api": {
      title: "Validy API",
      description:
        "API REST para gerenciamento de certificados digitais A1 e A3 com CRUD completo, validações, múltiplos e-mails de notificação e ordenação automática por vencimento.",
    },
    "e-tudo-mentira": {
      title: "É Tudo Mentira™",
      description:
        "Micro SaaS de livros fictícios com histórias e autores inventados. Projeto em desenvolvimento com planos de integrar autenticação e pagamentos Stripe/Mercado Pago.",
    },
    "cinema-database": {
      title: "Cinema Database",
      description:
        "Aplicação para buscar filmes e obter informações detalhadas usando a API da TMDb. Foco em usabilidade e experiência do usuário.",
    },
    "ra-comunicacao": {
      title: "R&A Comunicação Visual",
      description:
        "Landing page apresentando serviços de comunicação visual. Design limpo, responsivo e navegação intuitiva.",
    },
    "snrk-shop": {
      title: "SNRK Sneaker Shop",
      description:
        "E-commerce de sneakers com interface responsiva, seleção de variantes, cálculo de frete via ViaCEP e persistência de dados. Inspirado em Mercado Livre e Shopee.",
    },
    "my-todo-list": {
      title: "My To-Do List",
      description:
        "Aplicação full stack de To-Do List. Front-end em Angular e back-end em Express.js com MongoDB. Back-end temporariamente offline.",
    },
    "screen-sound": {
      title: "Screen Sound",
      description:
        "Aplicação em C# para gerenciar informações sobre bandas e artistas com interface intuitiva.",
    },
    calculator: {
      title: "Calculadora em Java",
      description:
        "Calculadora com interface Swing realizando operações básicas e avançadas. Boas práticas de POO.",
    },
  },
  en: {
    "validy-system": {
      title: "Validy - Digital Certificate System",
      description:
        "Desktop application for accounting offices to manage A1 and A3 digital certificates with expiration alerts, secure password management and cloud synchronization.",
    },
    "validy-api": {
      title: "Validy API",
      description:
        "REST API for managing A1 and A3 digital certificates with complete CRUD, validations, multiple notification emails and automatic expiration sorting.",
    },
    "e-tudo-mentira": {
      title: "É Tudo Mentira™",
      description:
        "Fictional books micro SaaS with invented stories and authors. Project in development with plans to integrate authentication and Stripe/Mercado Pago payments.",
    },
    "cinema-database": {
      title: "Cinema Database",
      description:
        "Application to search for movies and get detailed information using TMDb API. Focus on usability and user experience.",
    },
    "ra-comunicacao": {
      title: "R&A Visual Communication",
      description:
        "Landing page showcasing visual communication services. Clean design, responsive and intuitive navigation.",
    },
    "snrk-shop": {
      title: "SNRK Sneaker Shop",
      description:
        "Sneaker e-commerce with responsive interface, variant selection, shipping calculation via ViaCEP and data persistence. Inspired by Mercado Livre and Shopee.",
    },
    "my-todo-list": {
      title: "My To-Do List",
      description:
        "Full stack To-Do List application. Frontend in Angular and backend in Express.js with MongoDB. Backend temporarily offline.",
    },
    "screen-sound": {
      title: "Screen Sound",
      description:
        "C# application to manage information about bands and artists with intuitive interface.",
    },
    calculator: {
      title: "Java Calculator",
      description:
        "Calculator with Swing interface performing basic and advanced operations. Good OOP practices.",
    },
  },
  es: {
    "validy-system": {
      title: "Validy - Sistema de Certificados Digitales",
      description:
        "Aplicación de escritorio para oficinas contables gestionar certificados digitales A1 y A3 con alertas de vencimiento, gestión segura de contraseñas y sincronización en la nube.",
    },
    "validy-api": {
      title: "Validy API",
      description:
        "API REST para gestión de certificados digitales A1 y A3 con CRUD completo, validaciones, múltiples correos de notificación y ordenación automática por vencimiento.",
    },
    "e-tudo-mentira": {
      title: "É Tudo Mentira™",
      description:
        "Micro SaaS de libros ficticios con historias y autores inventados. Proyecto en desarrollo con planes de integrar autenticación y pagos Stripe/Mercado Pago.",
    },
    "cinema-database": {
      title: "Cinema Database",
      description:
        "Aplicación para buscar películas y obtener información detallada usando la API de TMDb. Enfoque en usabilidad y experiencia del usuario.",
    },
    "ra-comunicacao": {
      title: "R&A Comunicación Visual",
      description:
        "Landing page presentando servicios de comunicación visual. Diseño limpio, responsivo y navegación intuitiva.",
    },
    "snrk-shop": {
      title: "SNRK Sneaker Shop",
      description:
        "E-commerce de sneakers con interfaz responsiva, selección de variantes, cálculo de envío vía ViaCEP y persistencia de datos. Inspirado en Mercado Libre y Shopee.",
    },
    "my-todo-list": {
      title: "My To-Do List",
      description:
        "Aplicación full stack de lista de tareas. Frontend en Angular y backend en Express.js con MongoDB. Backend temporalmente fuera de línea.",
    },
    "screen-sound": {
      title: "Screen Sound",
      description:
        "Aplicación en C# para gestionar información sobre bandas y artistas con interfaz intuitiva.",
    },
    calculator: {
      title: "Calculadora en Java",
      description:
        "Calculadora con interfaz Swing realizando operaciones básicas y avanzadas. Buenas prácticas de POO.",
    },
  },
};
