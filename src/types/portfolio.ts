import type { StaticImageData } from "next/image";
import type { Language } from "@/data/language";

export type Artwork = { src: string | StaticImageData; alt: string };

export type PublicLink = { label: string; href: string };

export type ExperienceEntry = {
  title: string;
  company: string;
  engagement: "Freelance" | "Apprenticeship";
  start: { label: string; date: string };
  end?: { label: string; date: string };
  location: string;
  introduction: string;
  responsibilities: readonly string[];
  tools: readonly string[];
};

export type Project = {
  slug: string;
  title: string;
  repository: string;
  featuredTools: readonly string[];
  frontend: readonly string[];
  backend: readonly string[];
  screenshots: readonly [{ image: StaticImageData; caption: Record<Language, string> }, ...{ image: StaticImageData; caption: Record<Language, string> }[]];
  copy: Record<Language, {
    summary: string;
    introduction: string;
    problem: string;
    features: readonly string[];
    userExperience?: readonly string[];
    architecture: string;
  }>;
};
