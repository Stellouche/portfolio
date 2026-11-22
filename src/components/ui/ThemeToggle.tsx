"use client";

export default function ThemeToggle({ lightLabel, darkLabel }: { lightLabel: string; darkLabel: string }) {
  function toggleTheme() {
    const root = document.documentElement;
    const theme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = theme;
    try {
      localStorage.setItem("midnight-sakura-theme", theme);
    } catch {
      // The theme still works when browser storage is unavailable.
    }
  }

  return (
    <button className="icon-button theme-toggle" type="button" onClick={toggleTheme}>
      <span className="theme-dark"><span aria-hidden="true">☾</span><span className="sr-only">{lightLabel}</span></span>
      <span className="theme-light"><span aria-hidden="true">☀</span><span className="sr-only">{darkLabel}</span></span>
    </button>
  );
}

