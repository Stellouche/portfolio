import type { Metadata } from "next";
import { pagePath, type Language, type LocalizedPage } from "./language";
import { portfolio } from "./portfolio";

function productionOrigin() {
  const configured = process.env.SITE_URL?.trim();
  const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const value = configured || (vercelDomain ? `https://${vercelDomain}` : undefined);

  if (!value) return undefined;

  const url = URL.parse(value);
  if (!url || !["https:", "http:"].includes(url.protocol) || url.username || url.password ||
      url.pathname !== "/" || url.search || url.hash) {
    throw new Error("SITE_URL must be an absolute HTTP(S) origin without a path, credentials, query or fragment.");
  }

  return new URL(url.origin);
}

const metadataBase = productionOrigin();

export const siteMetadata: Metadata = {
  metadataBase,
  applicationName: portfolio.title,
  icons: { icon: { url: "/images/decorations/sakura-mark.svg", type: "image/svg+xml" } },
};

export function pageMetadata({
  language, page, title, description, image,
}: {
  language: Language;
  page: LocalizedPage;
  title: string;
  description: string;
  image?: { url: string; width: number; height: number; alt: string };
}): Metadata {
  const canonical = pagePath(language, page);
  const socialImage = image ?? {
    url: "/images/experience-workspace.png",
    width: 1536,
    height: 1024,
    alt: language === "fr" ? "Bureau de développement sous les cerisiers" : "Developer workspace under cherry blossoms",
  };

  return {
    title,
    description,
    ...(metadataBase && {
      alternates: { canonical, languages: { en: pagePath("en", page), fr: pagePath("fr", page) } },
    }),
    openGraph: {
      title, description, type: "website", siteName: portfolio.title,
      locale: language === "fr" ? "fr_FR" : "en_US",
      alternateLocale: language === "fr" ? "en_US" : "fr_FR",
      ...(metadataBase && { url: canonical, images: [socialImage] }),
    },
  };
}
