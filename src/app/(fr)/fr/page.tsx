import { pageMetadata } from "@/data/metadata";
import HomePage from "@/components/layout/HomePage";

const title = "Stella Petrescu | Développeuse logiciel";
const description = "Je développe et améliore des applications métier évolutives, fiables et faciles à utiliser.";

export const metadata = pageMetadata({ language: "fr", page: "home", title, description });

export default function Page() {
  return <HomePage language="fr" />;
}
