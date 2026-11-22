import type { ExperienceEntry } from "@/types/portfolio";

export const experienceHighlight = "3.5+ years of experience";

export const experience: readonly ExperienceEntry[] = [
  {
    title: "Software Developer — Business Applications & ERP",
    company: "LOGIN_FRANCE",
    engagement: "Freelance",
    start: { label: "September 2025", date: "2025-09" },
    location: "Remote · Romania",
    introduction: "Development and continuous improvement of a production ERP system used by approximately 5,000 people across HR, payroll, scheduling, billing, purchasing, customer operations and hospitality.",
    responsibilities: [
      "Deliver software features end to end, from business requirements and solution design to development, testing, deployment and user support.",
      "Develop VB.NET / WinForms and SQL Server features, including access management, business workflows, notifications, email alerts and automated processes.",
      "Design databases, develop T-SQL stored procedures, manage data history and integrations, and optimize SQL queries.",
      "Investigate blocking database transactions, troubleshoot application issues and resolve production incidents.",
      "Set up a Metabase reporting environment and monitor remote services and scheduled processes.",
      "Work across multiple client business units and contribute to business integrations, including SAP Concur.",
    ],
    tools: ["VB.NET", ".NET Framework", "WinForms", "SQL Server", "T-SQL", "SSMS", "Visual Studio", "Metabase", "Git"],
  },
  {
    title: "Software Developer Apprentice — ERP & Business Applications",
    company: "LOGIN_FRANCE",
    engagement: "Apprenticeship",
    start: { label: "August 2023", date: "2023-08" },
    end: { label: "August 2025", date: "2025-08" },
    location: "France",
    introduction: "Two-year software development apprenticeship focused on maintaining and improving an internal ERP system in a professional environment.",
    responsibilities: [
      "Develop and maintain VB.NET and SQL Server ERP modules while following the application's architecture and coding standards.",
      "Contribute to the development of business application features and corrective maintenance.",
      "Provide technical tutoring to fellow BTS students, supporting their projects and explaining object-oriented programming concepts across different languages and frameworks.",
    ],
    tools: ["VB.NET", ".NET Framework", "WinForms", "SQL Server", "T-SQL", "Visual Studio"],
  },
];
