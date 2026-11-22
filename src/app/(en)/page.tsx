import { pageMetadata } from "@/data/metadata";
import { portfolio } from "@/data/portfolio";
import HomePage from "@/components/layout/HomePage";

export const metadata = pageMetadata({ language: "en", page: "home", title: "Stella Petrescu | Software Developer", description: portfolio.introduction });

export default function Page() {
  return <HomePage language="en" />;
}
