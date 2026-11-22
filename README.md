# Developer Portfolio

Personal bilingual portfolio showcasing my experience, technical skills and software development projects.

## Stack and prerequisites

Next.js App Router, React, TypeScript, Tailwind CSS and Lucide icons. Use Node.js 24 LTS with npm, the same Node.js major version recommended for Vercel. The portfolio requires no database, backend credentials or external asset storage.

## Local development

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run build
npx tsc --noEmit --incremental false
npm start
```

Run the build before the standalone TypeScript check on a clean checkout, since Next.js generates route types during the build. Use `npm start` to preview the production build.

## Project structure

- `src/app/` defines the routes and the EN/FR document layouts.
- `src/components/` contains the shared page sections, navigation and interactive components.
- `src/data/` contains portfolio copy, translations and metadata configuration.
- `public/images/` contains illustrations, skill logos and the original DataLens screenshots.

| Page | English | Français |
| --- | --- | --- |
| Home | `/` | `/fr` |
| Contact | `/contact` | `/fr/contact` |
| DataLens | `/projects/datalens` | `/projects/datalens/fr` |

The header switcher selects the equivalent route in the other language and preserves the current section anchor. Each page declares its language in the initial HTML.

## Deployment on Vercel

Import the Git repository with the Next.js preset, select Node.js 24.x and keep the default install and build commands. Vercel runs this as a Next.js project with image optimization.

Set `SITE_URL` to the public origin, including `https://` and without a path, when the final domain is known. If omitted, the portfolio uses `VERCEL_PROJECT_PRODUCTION_URL` when Vercel exposes it. Without either value, the site still builds and omits domain-dependent canonical, alternate and Open Graph URLs. Rebuild after changing the public origin.
