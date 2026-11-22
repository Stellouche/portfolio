export const featuredSkills = [
  "VB.NET", ".NET", "SQL Server", "Metabase", "Next.js", "TypeScript", "React", "Tailwind CSS",
] as const;

type SkillGroup = {
  id: "languages" | "databases" | "tools" | "practices";
  title: string;
  items: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "languages",
    title: "Languages & Frameworks",
    items: [
      "VB.NET", ".NET Framework", "WinForms", "C#", "Python", "JavaScript", "TypeScript", "React",
      "Vue.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Java", "PHP", "JavaFX",
    ],
  },
  {
    id: "databases",
    title: "Databases & APIs",
    items: [
      "SQL Server", "T-SQL", "MySQL", "database design", "schema design", "stored procedures",
      "SQL optimization", "transactions", "data imports/exports", "REST APIs",
    ],
  },
  {
    id: "tools",
    title: "Tools & Systems",
    items: [
      "Visual Studio", "VS Code", "SSMS", "Git", "GitHub", "GitLab", "Metabase", "mRemoteNG",
      "TeamViewer", "FileZilla", "phpMyAdmin", "Windows", "Linux", "IntelliJ IDEA", "Eclipse", "Figma",
    ],
  },
  {
    id: "practices",
    title: "Working Practices",
    items: [
      "Requirements analysis", "object-oriented programming", "code review", "debugging",
      "incident resolution", "user training and technical support",
    ],
  },
];

export const skillLogos: Readonly<Partial<Record<string, string>>> = {
  "VB.NET": "visualbasic",
  ".NET": "dotnetcore",
  ".NET Framework": "dot-net",
  WinForms: "dot-net",
  "C#": "csharp",
  Python: "python",
  JavaScript: "javascript",
  TypeScript: "typescript",
  React: "react",
  "Vue.js": "vuejs",
  "Next.js": "nextjs",
  "Tailwind CSS": "tailwindcss",
  HTML5: "html5",
  CSS3: "css3",
  Java: "java",
  PHP: "php",
  "SQL Server": "microsoftsqlserver",
  MySQL: "mysql",
  "Visual Studio": "visualstudio",
  "VS Code": "vscode",
  Git: "git",
  GitHub: "github",
  GitLab: "gitlab",
  Metabase: "metabase",
  TeamViewer: "teamviewer",
  FileZilla: "filezilla",
  phpMyAdmin: "phpmyadmin",
  Windows: "windows11",
  Linux: "linux",
  "IntelliJ IDEA": "intellij",
  Eclipse: "eclipse",
  Figma: "figma",
};

export const focusAreas: readonly { label: string; symbol: string }[] = [
  { label: "Development", symbol: "‹/›" },
  { label: "Databases", symbol: "▤" },
  { label: "Business applications", symbol: "▱" },
  { label: "Data & Reporting", symbol: "▥" },
  { label: "Infrastructure", symbol: "⚙" },
];


export const frenchSkillGroups = {
  languages: "Langages et frameworks",
  databases: "Bases de données et API",
  tools: "Outils et systèmes",
  practices: "Pratiques professionnelles",
};

export const frenchSkills: Readonly<Record<string, string>> = {
  "database design": "Conception de bases de données", "schema design": "Conception de schémas",
  "stored procedures": "Procédures stockées", "SQL optimization": "Optimisation SQL",
  "data imports/exports": "Import et export de données", "REST APIs": "API REST",
  "Requirements analysis": "Analyse des besoins", "object-oriented programming": "Programmation orientée objet",
  "code review": "Revue de code", debugging: "Débogage", "incident resolution": "Résolution d’incidents",
  "user training and technical support": "Formation des utilisateurs et assistance technique",
};
