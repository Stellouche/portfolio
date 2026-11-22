import { ui, type Language } from "@/data/language";
import type { Metadata } from "next";
import { pageMetadata } from "@/data/metadata";
import { Github, Linkedin, Send } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import CopyEmailButton from "@/components/ui/CopyEmailButton";
import { contact } from "@/data/portfolio";

export function contactMetadata(language: Language): Metadata {
  const title = "Contact | Stella Petrescu";
  const description = language === "fr"
    ? "Contactez la développeuse logiciel Stella Petrescu par e-mail, sur GitHub ou sur LinkedIn."
    : "Get in touch with software developer Stella Petrescu by email, on GitHub or on LinkedIn.";
  return pageMetadata({ language, page: "contact", title, description });
}

export default function ContactPage({ language }: { language: Language }) {
  const labels = ui[language];
  return (
    <div className="site-shell contact-page-shell" lang={language}>
      <a className="skip-link" href="#main-content">{labels.skip}</a>
      <Header language={language} page="contact" />
      <main id="main-content" className="contact-page" tabIndex={-1}>
        <div className="contact-page-layout">
          <div className="contact-page-heading">
            <h1>{labels.contactTitle}</h1>
            <p className="contact-page-intro">{labels.contactIntro}</p>
          </div>
          <div className="contact-page-card">
            <div className="contact-email">
              <div className="contact-email-address">
                <h2>{labels.email}</h2>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <CopyEmailButton email={contact.email} labels={{ copy: labels.copy, copied: labels.copied, failed: labels.copyFailed }} />
            </div>
            <div className="contact-page-actions">
              <Button href={`mailto:${contact.email}`}><Send size={17} aria-hidden="true" /> {labels.emailApp}</Button>
              {contact.profiles.map(({ label, href }) => {
                const Icon = label === "GitHub" ? Github : Linkedin;
                return (
                  <a key={href} className="button button--outline" href={href} target="_blank" rel="noopener noreferrer">
                    <Icon size={17} aria-hidden="true" /> {label}
                  </a>
                );
              })}
              {contact.resume && <Button href={contact.resume} variant="outline" download>{labels.resume}</Button>}
            </div>
          </div>
        </div>
      </main>
      <Footer language={language} />
    </div>
  );
}
