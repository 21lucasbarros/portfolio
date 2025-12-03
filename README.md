# 💼 Portfolio | Lucas Barros Simon

Meu portfólio pessoal desenvolvido com foco em design minimalista e experiência do usuário. Uma plataforma moderna e responsiva que apresenta meus projetos, formações acadêmicas e habilidades como desenvolvedor Full Stack.

## 🌐 Deploy

Acesse o portfólio em: [https://lucasbarrosdev.vercel.app/](https://lucasbarrosdev.vercel.app/)

## ✨ Características

- 🎨 **Design Minimalista**: Interface clean e moderna com foco na experiência do usuário
- 🌍 **Multilíngue**: Suporte completo para Português, Inglês e Espanhol
- 📱 **Responsivo**: Totalmente adaptável para desktop, tablet e mobile
- ⚡ **Performance**: Build otimizado com Vite para carregamento rápido
- 🎭 **Animações Suaves**: Micro-interações e transições fluidas com Framer Motion
- 🔍 **SEO Otimizado**: Meta tags completas para melhor indexação e compartilhamento
- 🎯 **Acessível**: Seguindo boas práticas de acessibilidade web

## 🛠️ Tecnologias

### Core

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first

### UI/UX

- **Framer Motion** - Biblioteca de animações para React
- **shadcn/ui** - Componentes de UI reutilizáveis e acessíveis
- **Lucide React** - Ícones modernos e consistentes

### Formulários & Validação

- **React Hook Form** - Gerenciamento de formulários performático
- **Zod** - Validação de schemas TypeScript-first

### Internacionalização

- **Context API** - Gerenciamento de estado para múltiplos idiomas
- Sistema de traduções customizado com suporte a pt-BR, en-US e es-ES

## 📂 Estrutura do Projeto

```
portfolio/
├── public/
│   ├── docs/              # Documentos (CV, certificados)
│   ├── imagem/
│   │   └── projetos/      # Imagens dos projetos
│   └── logo.svg           # Logo/Favicon
├── src/
│   ├── components/
│   │   ├── ui/            # Componentes base (shadcn/ui)
│   │   ├── certificate-list.tsx
│   │   ├── contact.tsx
│   │   ├── education.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── project-card.tsx
│   │   └── projects.tsx
│   ├── contexts/
│   │   └── LanguageContext.tsx    # Context de idiomas
│   ├── i18n/
│   │   └── translations.ts        # Traduções
│   ├── lib/
│   │   └── utils.ts               # Utilitários
│   ├── utils/
│   │   └── scrollToElement.ts     # Função de scroll suave
│   ├── app.tsx
│   ├── index.css
│   └── main.tsx
└── ...
```

## 🎯 Funcionalidades

### Seções

- **Hero**: Apresentação inicial com call-to-action para download de CV
- **Formações**: Educação acadêmica, idiomas e certificações
- **Projetos**: Showcase de projetos desenvolvidos com filtros e detalhes
- **Contato**: Formulário funcional com validação para contato direto

### Sistema de Idiomas

Troca dinâmica entre três idiomas sem reload da página, com persistência da preferência do usuário.

### Projetos em Destaque

- **Validy** - Sistema desktop de gestão de certificados digitais
- **Bricks E-commerce** - Plataforma de e-commerce completa
- **Cinema Database** - App de busca de filmes com API TMDb
- **SNRK Sneaker Shop** - E-commerce de sneakers
- E muito mais...

## 🎨 Design System

O projeto utiliza um design system consistente baseado em:

- Paleta de cores escuras (zinc-900, zinc-800)
- Tipografia moderna com hierarquia clara
- Espaçamentos e bordas arredondadas padronizadas
- Micro-animações para feedback visual
- Componentes reutilizáveis com variantes

## 📈 Performance

- Lighthouse Score: 90+ em todas as categorias
- Build size otimizado com code splitting
- Lazy loading de imagens
- Fonte system-ui para melhor performance

## 🔒 SEO

- Meta tags Open Graph para redes sociais
- Twitter Cards configuradas
- Sitemap e robots.txt
- URLs canônicas
- Structured data (JSON-LD)

## 📝 Licença

Este projeto é de uso pessoal. Todos os direitos reservados © 2025 Lucas Barros Simon.

---

<div align="center">
  <p>Desenvolvido por Lucas Barros Simon 🎯</p>
  <p>
    <a href="https://github.com/21lucasbarros">GitHub</a> •
    <a href="https://linkedin.com/in/lucas-barros-simon">LinkedIn</a> •
    <a href="mailto:lucasbarrossimon@gmail.com">Email</a>
  </p>
</div>
