"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navbar
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "nav.resume": "Currículo",

    // Hero
    "hero.greeting": "Olá, meu nome é",
    "hero.name": "Luís Daniel.",
    "hero.tagline": "Sou Desenvolvedor Full Stack.",
    "hero.description": "Apaixonado por criar soluções web impactantes e eficientes. Sempre buscando aprender novas tecnologias e contribuir para projetos que fazem a diferença.",
    "hero.viewWork": "Ver Meu Trabalho",
    "hero.downloadCV": "Download CV",

    // About
    "about.title": "Sobre",
    "about.titleHighlight": "Mim",
    "about.intro": "Sou um desenvolvedor Full Stack apaixonado por tecnologia e com uma base sólida em desenvolvimento front-end e back-end. Minha jornada na programação é impulsionada pelo desejo de aprender, inovar e contribuir.",
    "about.description": "Estou sempre animado para enfrentar novos desafios. Acredito que a tecnologia tem o poder de transformar vidas e estou comprometido em criar soluções que impactem positivamente as pessoas.",
    "about.education": "Educação",
    "about.edu1.institution": "Universidade Estadual de Ponta Grossa - UEPG",
    "about.edu1.degree": "Bacharelado em Engenharia da Computação",
    "about.edu1.period": "2023 – 2027",

    // Skills
    "skills.title": "Meu",
    "skills.titleHighlight": "Arsenal",
    "skills.titleSuffix": "Técnico",
    "skills.languages": "Linguagens",
    "skills.frameworks": "Frameworks & Bibliotecas",
    "skills.tools": "Ferramentas & Plataformas",
    "skills.soft": "Competências",
    "skills.problemSolving": "Resolução de Problemas",
    "skills.teamwork": "Trabalho em Equipe",
    "skills.agile": "Metodologias Ágeis",
    "skills.cleanCode": "Clean Code",

    // Projects
    "projects.title": "Minhas",
    "projects.titleHighlight": "Criações",
    "projects.ecommerce.title": "Stock Master",
    "projects.ecommerce.description": "Um aplataforma de gerenciamento de estoque, com classificação de produtos e dashboard interativo baseado nos produtos e valores cadastrados.",
    "projects.pokedex.title": "Pokédex Interativa",
    "projects.pokedex.description": "Aplicação Web interativa para consulta de informações sobre Pokémon, utilizando uma API pública chamada PokeAPI.",
    "projects.deppi.title": "Protótipo DEPPI",
    "projects.deppi.description": "Landing Page para Departamento de Extensão do Instituto Federal do Ceará",
    "projects.portfolio.title": "Portfolio Website",
    "projects.portfolio.description": "Portfolio responsivo e moderno com animações suaves, modo escuro e otimização para SEO.",
    "projects.estrutura.title": "Estrutura de Dados Visual",
    "projects.estrutura.description": "Aplicação para visualização e manipulação de estruturas de dados como listas, pilhas e filas, com animações interativas.",
    "projects.neurovida.title": "Website (NeuroVida)",
    "projects.neurovida.description": "Website para clínica de neuropsicopedagogia focada em acessibilidade e design responsivo.",

    // Contact
    "contact.title": "Entre em",
    "contact.titleHighlight": "Contato",
    "contact.description": "Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!",
    "contact.email": "Email",
    "contact.phone": "Telefone",
    "contact.location": "Localização",
    "contact.locationValue": "Ponta Grossa, Brasil",
    "contact.sendMessage": "Enviar Mensagem",
    "contact.downloadCV": "Baixar CV",

    // Footer
    "footer.madeWith": "Feito",
    "footer.by": "por Luís Daniel",
    "footer.rights": "© 2026 Todos os direitos reservados",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    // Hero
    "hero.greeting": "Hi, my name is",
    "hero.name": "Luís Daniel.",
    "hero.tagline": "I'm Full Stack Developer",
    "hero.description": "Passionate about creating impactful and efficient web solutions. Always seeking to learn new technologies and contribute to projects that make a difference.",
    "hero.viewWork": "View My Work",
    "hero.downloadCV": "Download CV",

    // About
    "about.title": "About",
    "about.titleHighlight": "Me",
    "about.intro": "I'm a Full Stack developer passionate about technology with a solid foundation in front and back-end development. My programming journey is driven by the desire to learn, innovate, and contribute to projects that make a difference.",
    "about.description": "I'm always excited to take on new challenges. I believe that technology has the power to transform lives and I am committed to creating solutions that positively impact people.",
    "about.education": "Education",
    "about.edu1.institution": "State University of Ponta Grossa - UEPG",
    "about.edu1.degree": "Bachelor's in Computer Enginner",
    "about.edu1.period": "2023 – 2027",

    // Skills
    "skills.title": "My",
    "skills.titleHighlight": "Technical",
    "skills.titleSuffix": "Arsenal",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks & Libraries",
    "skills.tools": "Tools & Platforms",
    "skills.soft": "Soft Skills",
    "skills.problemSolving": "Problem Solving",
    "skills.teamwork": "Teamwork",
    "skills.agile": "Agile Methodologies",
    "skills.cleanCode": "Clean Code",

    // Projects
    "projects.title": "My",
    "projects.titleHighlight": "Creations",
    "projects.ecommerce.title": "Stock Master ",
    "projects.ecommerce.description": "A complete stock platform with shopping cart and admin panel for product management.",
    "projects.pokedex.title": "Interactive Pokédex",
    "projects.pokedex.description": "A interactive Pokédex with all the pokémon and their respective status, using a pokéAPI.",
    "projects.deppi.title": "Deppi Landing Page",
    "projects.deppi.description": "Landing Page for the Extension Department of the Federal Institute of Ceará",
    "projects.portfolio.title": "Portfolio Website",
    "projects.portfolio.description": "Responsive and modern portfolio website with smooth animations, dark mode, and SEO optimization.",
    "projects.estrutura.title": "Visual Data Structures",
    "projects.estrutura.description": "Application for visualizing and manipulating data structures such as lists, stacks, and queues, with interactive animations.",
     "projects.neurovida.title": "Website (NeuroVida)",
    "projects.neurovida.description": "Website for a Neuro-psychopedagogist and all the services it covers.",

    // Contact
    "contact.title": "Get in",
    "contact.titleHighlight": "Touch",
    "contact.description": "I'm always open to new opportunities and collaborations. Feel free to reach out!",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.locationValue": "Ponta Grossa, Brazil",
    "contact.sendMessage": "Send Message",
    "contact.downloadCV": "Download CV",

    // Footer
    "footer.madeWith": "Made",
    "footer.by": "by Luís Daniel",
    "footer.rights": "© 2026 All rights reserved",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("erro de provedor.");
  }
  return context;
};
