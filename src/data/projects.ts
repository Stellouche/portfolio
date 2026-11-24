import type { Project } from "@/types/portfolio";
import home from "../../public/images/projects/datalens/home.png";
import before from "../../public/images/projects/datalens/analysis-before.png";
import preview from "../../public/images/projects/datalens/cleaning-preview.png";
import after from "../../public/images/projects/datalens/analysis-after.png";
import dashboard from "../../public/images/projects/opsboard/dashboard.png";

export const opsBoard = {
  title: "OpsBoard",
  repository: "https://github.com/Stellouche/opsboard",
  demo: "https://opsboard-nu.vercel.app/",
  screenshot: dashboard,
  featuredTools: ["Vue 3", "TypeScript", "Vite", "IndexedDB"],
  copy: {
    en: {
      summary: "An operations management demo for tracking requests, assigning them to teams and monitoring workloads. The bilingual interface includes light and dark themes, and data is stored locally in the browser.",
      screenshotAlt: "OpsBoard dashboard in dark mode",
      demoLabel: "Live Demo",
    },
    fr: {
      summary: "Une application de démonstration pour suivre les demandes opérationnelles, les attribuer aux équipes et visualiser leur charge de travail. L’interface bilingue propose deux thèmes et conserve les données dans le navigateur.",
      screenshotAlt: "Tableau de bord OpsBoard en mode sombre",
      demoLabel: "Démo en ligne",
    },
  },
} as const;

export const projectLabels = {
  en: {
    selected: "Projects", back: "Back to projects", github: "View on GitHub",
    problem: "The problem", features: "Main features", userExperience: "User experience", screenshots: "Screenshots",
    galleryNote: "The analysis and cleaning screens use the fictional invoice dataset.",
    stack: "Technical stack", frontend: "Frontend", backend: "Backend", architecture: "Architecture",
  },
  fr: {
    selected: "Projets", back: "Retour aux projets", github: "Voir sur GitHub",
    problem: "Le problème", features: "Fonctionnalités principales", userExperience: "Expérience utilisateur", screenshots: "Captures d’écran",
    galleryNote: "Les écrans d’analyse et de nettoyage montrent le jeu de données fictif de factures.",
    stack: "Technologies", frontend: "Interface", backend: "API", architecture: "Architecture",
  },
} as const;

export const projects: readonly Project[] = [
  {
    slug: "datalens",
    title: "DataLens",
    repository: "https://github.com/Stellouche/DataLens",
    featuredTools: ["React", "TypeScript", "Python", "FastAPI"],
    frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lucide"],
    backend: ["Python", "FastAPI", "Pydantic", "openpyxl"],
    screenshots: [
      { image: home, caption: { en: "Home and file import", fr: "Accueil et import de fichiers" } },
      { image: before, caption: { en: "Analysis before cleaning", fr: "Analyse avant nettoyage" } },
      { image: preview, caption: { en: "Cleaning preview", fr: "Prévisualisation du nettoyage" } },
      { image: after, caption: { en: "Analysis after cleaning", fr: "Analyse après nettoyage" } },
    ],
    copy: {
      en: {
        summary: "Inspect, clean and export tabular data from CSV and Excel files.",
        introduction: "DataLens is a bilingual application for inspecting and cleaning tabular data. Import a CSV or select a worksheet from an XLSX file, review data quality issues, and export the corrected table.",
        problem: "Duplicates, missing values and inconsistent formats can get in the way of analysing a spreadsheet. DataLens brings those issues into one view and lets you see the impact of a correction before applying it.",
        features: [
          "Search and filter a paginated preview for duplicates, missing values or likely type inconsistencies. Review completeness and column statistics, or edit a cell directly.",
          "Preview corrections such as removing duplicates or empty rows and columns, trimming whitespace or filling missing values. Undo the last correction or restore the imported table.",
          "Export the working table as CSV or XLSX, or download a JSON report with statistics and correction counts.",
          "Try the workflow with one of three fictional datasets included in the application.",
        ],
        userExperience: [
          "DataLens was designed to make data cleaning accessible to everyone, including users without a technical background.",
          "The interface guides users through each step, from importing a file to identifying issues and applying corrections. Clear indicators, correction previews and confirmation steps help users understand what will change before taking action.",
          "The goal is simple: make working with data easier, without requiring technical knowledge.",
        ],
        architecture: "The React interface uses a typed API client and shared English and French dictionaries. In the local development setup, Vite proxies API requests to FastAPI. The API reads CSV with Python’s CSV module and XLSX with openpyxl, and keeps working sessions in memory. The processing layer applies corrections to immutable tables. Stable row and column IDs keep edits consistent, and revision checks reject changes based on outdated data.",
      },
      fr: {
        summary: "Analyser, nettoyer et exporter des données tabulaires issues de fichiers CSV et Excel.",
        introduction: "DataLens est une application bilingue d’analyse et de nettoyage de données tabulaires. Importez un CSV ou sélectionnez une feuille d’un fichier XLSX pour examiner la qualité des données, puis exporter le tableau corrigé.",
        problem: "Les doublons, les valeurs manquantes et les formats incohérents compliquent l’analyse d’un tableur. DataLens rassemble ces anomalies dans une même vue et permet de mesurer l’effet d’une correction avant de l’appliquer.",
        features: [
          "Rechercher et filtrer les doublons, les valeurs manquantes ou les incohérences de type probables dans un aperçu paginé. Consulter le taux de remplissage et les statistiques par colonne, ou modifier une cellule directement.",
          "Prévisualiser la suppression de doublons, de lignes ou de colonnes vides, le retrait d’espaces superflus ou le remplissage de cellules. Annuler la dernière correction ou restaurer le tableau importé.",
          "Exporter le tableau de travail en CSV ou XLSX, ou télécharger un rapport JSON avec les statistiques et le nombre de corrections.",
          "Essayer le parcours avec l’un des trois jeux de données fictifs inclus dans l’application.",
        ],
        userExperience: [
          "DataLens a été conçu pour rendre le nettoyage des données accessible à tous, y compris aux personnes sans formation technique.",
          "L’interface guide les utilisateurs à chaque étape, de l’importation d’un fichier au repérage des anomalies et à l’application des corrections. Des indicateurs clairs, des aperçus et des étapes de confirmation permettent de comprendre ce qui va changer avant d’agir.",
          "L’objectif est simple : faciliter le travail avec les données sans exiger de connaissances techniques.",
        ],
        architecture: "L’interface React utilise un client API typé et des dictionnaires partagés en français et en anglais. En développement local, Vite transmet les requêtes API à FastAPI. L’API lit les CSV avec le module CSV de Python et les XLSX avec openpyxl, puis conserve les sessions de travail en mémoire. Le traitement applique les corrections à des tableaux immuables. Des identifiants stables rattachent chaque édition à la bonne ligne et à la bonne colonne, et les contrôles de révision rejettent les modifications fondées sur un état périmé.",
      },
    },
  },
];

