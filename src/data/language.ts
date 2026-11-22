import type { PublicLink } from "@/types/portfolio";

export type Language = "en" | "fr";
export type LocalizedPage = "home" | "contact" | { project: string };

export function pagePath(language: Language, page: LocalizedPage = "home"): string {
  if (typeof page === "object") return `/projects/${page.project}${language === "fr" ? "/fr" : ""}`;
  if (page === "contact") return language === "fr" ? "/fr/contact" : "/contact";
  return language === "fr" ? "/fr" : "/";
}

const sections = [
  ["home", "Home", "Accueil"], ["about", "About", "À propos"], ["skills", "Skills", "Compétences"],
  ["experience", "Experience", "Expérience"], ["projects", "Projects", "Projets"],
] as const;

export function navigationLinks(language: Language): PublicLink[] {
  return [
    ...sections.map(([id, en, fr]) => ({ label: language === "fr" ? fr : en, href: `${pagePath(language)}#${id}` })),
    { label: "Contact", href: pagePath(language, "contact") },
  ];
}

export const ui = {
  en: {
    skip: "Skip to content", navigation: "Main navigation", openMenu: "Open navigation", closeMenu: "Close navigation",
    language: "Site language", light: "Switch to light theme", dark: "Switch to dark theme", top: "Back to top",
    contact: "Contact me", about: "About me", projects: "View my projects", skills: "Skills",
    technical: "Technical Skills", showSkills: "Show all technical skills", closeSkills: "Close technical skills",
    experience: "Experience", present: "Present", details: "View details", closeExperience: "Close experience details",
    responsibilities: "Key responsibilities", tools: "Technologies & tools",
    together: "Let’s work together.", invitation: "Have a project, an opportunity or a question? I’d love to hear from you.",
    contactTitle: "Let’s get in touch.",
    contactIntro: "If you’d like to discuss a project or a software development opportunity, I’d be happy to hear from you.",
    email: "Email", copy: "Copy email", copied: "Email address copied.",
    copyFailed: "Copying is unavailable. You can select and copy the address above.",
    emailApp: "Open email app", resume: "Download CV",
    social: "Social and email links", newTab: "opens in a new tab", emailStella: "Email Stella",
    openImage: "Enlarge screenshot", closeImage: "Close screenshot viewer", previousImage: "Previous screenshot",
    nextImage: "Next screenshot", gallery: "Screenshot viewer",
  },
  fr: {
    skip: "Aller au contenu", navigation: "Navigation principale", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu",
    language: "Langue du site", light: "Passer au thème clair", dark: "Passer au thème sombre", top: "Retour en haut",
    contact: "Me contacter", about: "À propos", projects: "Voir mes projets", skills: "Compétences",
    technical: "Compétences techniques", showSkills: "Voir toutes les compétences techniques", closeSkills: "Fermer les compétences techniques",
    experience: "Expérience", present: "Aujourd’hui", details: "Voir les détails", closeExperience: "Fermer les détails de l’expérience",
    responsibilities: "Principales responsabilités", tools: "Technologies et outils",
    together: "Travaillons ensemble.", invitation: "Un projet, une opportunité ou une question ? Écrivez-moi.",
    contactTitle: "Contactez-moi.",
    contactIntro: "Vous souhaitez parler d’un projet ou d’une opportunité en développement logiciel ? Je serais ravie d’en discuter avec vous.",
    email: "Adresse e-mail", copy: "Copier l’adresse", copied: "Adresse e-mail copiée.",
    copyFailed: "La copie automatique est indisponible. Vous pouvez sélectionner et copier l’adresse ci-dessus.",
    emailApp: "Ouvrir la messagerie", resume: "Télécharger le CV",
    social: "Réseaux sociaux et adresse e-mail", newTab: "s’ouvre dans un nouvel onglet", emailStella: "Écrire à Stella",
    openImage: "Agrandir la capture", closeImage: "Fermer la visionneuse", previousImage: "Capture précédente",
    nextImage: "Capture suivante", gallery: "Visionneuse de captures d’écran",
  },
} as const;
