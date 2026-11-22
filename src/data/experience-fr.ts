import type { ExperienceEntry } from "@/types/portfolio";

export const experienceFrench: Readonly<Record<string, Pick<ExperienceEntry, "title" | "location" | "introduction" | "responsibilities">>> = {
  "2025-09": {
    title: "Développeuse logiciel — Applications métier et ERP",
    location: "À distance · Roumanie",
    introduction: "Développement et amélioration continue d’un ERP en production utilisé par environ 5 000 personnes dans les domaines des ressources humaines, de la paie, de la planification, de la facturation, des achats, des opérations clients et de l’hôtellerie.",
    responsibilities: [
      "Livrer des fonctionnalités de bout en bout, du recueil des besoins et de la conception au développement, aux tests, au déploiement et à l’assistance aux utilisateurs.",
      "Développer des fonctionnalités en VB.NET, WinForms et SQL Server pour la gestion des accès, les processus métier, les notifications, les alertes par e-mail et les traitements automatisés.",
      "Concevoir des bases de données, développer des procédures stockées T-SQL, gérer l’historique des données et les intégrations, et optimiser les requêtes SQL.",
      "Analyser les transactions bloquantes, diagnostiquer les problèmes applicatifs et résoudre les incidents de production.",
      "Mettre en place un environnement de reporting Metabase et surveiller les services distants et les traitements planifiés.",
      "Intervenir auprès de plusieurs entités métier clientes et contribuer à des intégrations, notamment avec SAP Concur.",
    ],
  },
  "2023-08": {
    title: "Développeuse logiciel en alternance — ERP et applications métier",
    location: "France",
    introduction: "Alternance de deux ans en développement logiciel, consacrée à la maintenance et à l’amélioration d’un ERP interne en milieu professionnel.",
    responsibilities: [
      "Développer et maintenir des modules ERP en VB.NET et SQL Server en respectant l’architecture et les conventions de code de l’application.",
      "Contribuer au développement de fonctionnalités métier et à la maintenance corrective.",
      "Accompagner d’autres étudiants en BTS dans leurs projets et leur expliquer les concepts de programmation orientée objet dans différents langages et frameworks.",
    ],
  },
};
