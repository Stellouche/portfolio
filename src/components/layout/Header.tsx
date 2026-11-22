import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { navigationLinks, pagePath, ui, type Language, type LocalizedPage } from "@/data/language";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ language, page }: { language: Language; page: LocalizedPage }) {
  const labels = ui[language];
  const navigation = navigationLinks(language);
  return (
    <header className="site-header">
      <Link className="wordmark" href={pagePath(language) + "#home"}><Image src="/images/decorations/sakura-mark.svg" width={30} height={30} alt="" unoptimized />{portfolio.name}</Link>
      <nav className="desktop-nav" aria-label={labels.navigation}>
        {navigation.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <LanguageSwitcher language={language} page={page} />
        <ThemeToggle lightLabel={labels.light} darkLabel={labels.dark} />
        <div className="header-contact"><Button href={pagePath(language, "contact")}>{labels.contact} <span aria-hidden="true">↗</span></Button></div>
        <MobileMenu navigation={navigation} labels={{ open: labels.openMenu, close: labels.closeMenu, navigation: labels.navigation }} />
      </div>
    </header>
  );
}
