import ContactPage, { contactMetadata } from "@/components/sections/ContactPage";

export const metadata = contactMetadata("fr");

export default function Page() {
  return <ContactPage language="fr" />;
}
