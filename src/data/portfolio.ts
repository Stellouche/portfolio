import heroImage from "../../public/images/hero/hero-desktop.png";
import portraitImage from "../../public/images/about/about-portrait.png";
import sakuraImage from "../../public/images/decorations/decoration-sakura.png";
import mapleImage from "../../public/images/decorations/decoration-maple.png";
import petalsImage from "../../public/images/decorations/decoration-petals.png";
import type { Artwork, PublicLink } from "@/types/portfolio";

export const portfolio = {
  title: "Developer Portfolio",
  name: "Stella P.",
  role: "Software Developer",
  introduction: "I develop and improve business applications, with a focus on scalable, reliable and user-friendly solutions.",
  heroIntroduction: "I build and improve software that solves real-world problems, simplifies everyday work and makes technology more useful for people.",
  about: [
    "I'm a full-stack software developer with over 3 years of experience building and improving business applications.",
    "My work goes beyond writing code. I develop new features, design and work with databases, solve technical problems and collaborate directly with users to turn business needs into practical solutions.",
    "I enjoy understanding how systems work, improving existing applications and adapting to new technologies and environments. My goal is to build software that is reliable, useful and makes people's work easier.",
  ],
};

export const portfolioFrench = {
  role: "Développeuse logiciel",
  heroIntroduction: "Je développe et améliore des logiciels qui répondent à des problèmes concrets, simplifient le travail quotidien et rendent la technologie plus utile.",
  about: [
    "Je suis développeuse logiciel full-stack et j’ai plus de trois ans d’expérience dans le développement et l’amélioration d’applications métier.",
    "Mon travail va au-delà du code. Je développe de nouvelles fonctionnalités, je conçois et exploite des bases de données, je résous des problèmes techniques et je collabore directement avec les utilisateurs pour transformer leurs besoins en solutions concrètes.",
    "J’aime comprendre le fonctionnement des systèmes, améliorer les applications existantes et m’adapter à de nouvelles technologies et à de nouveaux environnements. Mon objectif est de créer des logiciels fiables et utiles qui facilitent le travail au quotidien.",
  ],
};

export const frenchFocusAreas: Readonly<Record<string, string>> = {
  Development: "Développement",
  Databases: "Bases de données",
  "Business applications": "Applications métier",
  "Data & Reporting": "Données et reporting",
  Infrastructure: "Infrastructure",
};

export const contact: { email: string; profiles: readonly (PublicLink & { label: "GitHub" | "LinkedIn" })[]; resume?: string } = {
  email: "stellapetrescu6@gmail.com",
  profiles: [
    { label: "GitHub", href: "https://github.com/Stellouche" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/stella-petrescu-630209269/" },
  ],
};

export const artwork = {
  hero: { src: heroImage, alt: "Illustration of Stella at her laptop with her two dogs" },
  portrait: { src: portraitImage, alt: "Illustrated portrait of Stella wearing headphones amid cherry blossoms" },
  sakura: { src: sakuraImage, alt: "" },
  maple: { src: mapleImage, alt: "" },
  petals: { src: petalsImage, alt: "" },
} satisfies Record<string, Artwork>;

