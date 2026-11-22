"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { pagePath, ui, type Language, type LocalizedPage } from "@/data/language";

export default function LanguageSwitcher({ language, page }: { language: Language; page: LocalizedPage }) {
  const router = useRouter();

  return (
    <div className="language-switcher" role="group" aria-label={ui[language].language}>
      {(["en", "fr"] as const).map((target) => (
        <Link key={target} href={pagePath(target, page)} lang={target} hrefLang={target}
          aria-label={target === "en" ? "English" : "Français"}
          aria-current={language === target ? "true" : undefined}
          onNavigate={(event) => {
            if (window.location.hash) {
              event.preventDefault();
              router.push(pagePath(target, page) + window.location.hash);
            }
          }}>
          {target.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
