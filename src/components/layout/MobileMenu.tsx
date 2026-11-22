"use client";

import { useRef, useState } from "react";
import type { PublicLink } from "@/types/portfolio";

export default function MobileMenu({ navigation, labels }: { navigation: readonly PublicLink[]; labels: { open: string; close: string; navigation: string } }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);

  return (
    <div className="mobile-menu" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        trigger.current?.focus();
      }
    }}>
      <button ref={trigger} className="icon-button menu-toggle" type="button" aria-label={open ? labels.close : labels.open} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      <nav aria-label={labels.navigation} id="mobile-navigation" hidden={!open}>
        {navigation.map(({ label, href }) => (
          <a key={href} href={href} onClick={() => {
            setOpen(false);
            const [pathname, fragment] = href.split("#");
            if (fragment && pathname === location.pathname) {
              document.getElementById(fragment)?.focus({ preventScroll: true });
            }
          }}>{label}</a>
        ))}
      </nav>
    </div>
  );
}

