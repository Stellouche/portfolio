import Link from "next/link";
import { pagePath, ui, type Language } from "@/data/language";

export default function Footer({ language }: { language: Language }) {
  return (
    <footer className="site-footer">
      <span>© 2026 Stella Petrescu</span>
      <Link href={pagePath(language) + "#home"}>{ui[language].top} <span aria-hidden="true">↑</span></Link>
    </footer>
  );
}
