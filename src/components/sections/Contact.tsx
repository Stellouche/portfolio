import { pagePath, ui, type Language } from "@/data/language";
import { artwork } from "@/data/portfolio";
import Artwork from "@/components/ui/Artwork";
import Button from "@/components/ui/Button";

function SendIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13" />
    </svg>
  );
}

export default function Contact({ language }: { language: Language }) {
  const labels = ui[language];
  const contactLabel = <><SendIcon /> {labels.contact}</>;

  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-title" className="contact">
      <div className="contact-copy">
        <h2 id="contact-title">{labels.together}</h2>
        <p>{labels.invitation}</p>
      </div>
      <div className="contact-controls">
        <Artwork image={artwork.sakura} className="decoration contact-art" sizes="(max-width: 760px) 28px, 132px" />
        <Button href={pagePath(language, "contact")}>{contactLabel}</Button>
      </div>
    </section>
  );
}
