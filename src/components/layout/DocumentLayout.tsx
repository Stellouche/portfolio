import type { ReactNode } from "react";
import type { Language } from "@/data/language";
import "@/app/globals.css";

const initializeTheme = `try {
  if (localStorage.getItem("midnight-sakura-theme") === "light") {
    document.documentElement.dataset.theme = "light";
  }
} catch {}`;

export default function DocumentLayout({ children, language }: { children: ReactNode; language: Language }) {
  return (
    <html lang={language} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
        {children}
      </body>
    </html>
  );
}
