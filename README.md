# archana-sardhara-portfolio

A software engineering portfolio showcasing my experience, projects, and technical expertise, with a focus on scalable systems, frontend architecture, and production-quality development.

Built with [Next.js](https://nextjs.org) (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Features

- **Single-page layout** — Hero, About, Skills, Projects, Experience, and Contact sections with smooth in-page navigation
- **Dark / light theme** — System-aware theme toggle via `next-themes`
- **Content-driven** — Profile, projects, skills, and work history live in typed config files for easy updates
- **Responsive design** — Mobile-first layout with Tailwind CSS

## Tech stack

| Layer        | Technologies                          |
| ------------ | ------------------------------------- |
| Framework    | Next.js 16, React 19                  |
| Language     | TypeScript                            |
| Styling      | Tailwind CSS v4                       |
| Icons        | Lucide React, custom SVG icons        |
| Theming      | next-themes                           |

## Project structure

```
app/
├── components/       # UI sections (Hero, About, Skills, Projects, etc.)
├── config/
│   ├── consts.ts     # Name, email, GitHub, LinkedIn
│   ├── experience.ts # Work history
│   ├── project.ts    # Featured projects
│   └── skills.ts     # Skill categories
├── layout.tsx        # Root layout and metadata
└── page.tsx          # Main page composition
styles/
└── index.css         # Global styles and Tailwind imports
```

## Customizing content

Edit the files under `app/config/`:

- **`consts.ts`** — Display name, email, and social profile URLs
- **`experience.ts`** — Roles, companies, dates, and highlights
- **`project.ts`** — Project titles, descriptions, tech stack, and links
- **`skills.ts`** — Skill groups and items

No environment variables are required for local development.

## Getting started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Changes to components and config files hot-reload automatically.

### Other scripts

```bash
npm run build   # Production build
npm run start   # Serve production build locally
npm run lint    # Run ESLint
```

## Deployment

### GitHub Pages (automated)

Pushes and merges to `master` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds a static export (`out/`) and publishes to the `gh-pages` branch.

**One-time setup:** In the repo on GitHub, go to **Settings → Pages** and set the source to the **`gh-pages`** branch, folder **`/ (root)`**.

**Live URL:** [https://archanasardhara.github.io/archana-sardhara-portfolio/](https://archanasardhara.github.io/archana-sardhara-portfolio/)

Static export settings (`output: 'export'`, `basePath`, `assetPrefix`) live in `next.config.ts` and must match the repository name on GitHub.

### Other hosts

The app can also be deployed on [Vercel](https://vercel.com) or any host that supports Next.js. For Vercel, remove or adjust `basePath` / `assetPrefix` / `output: 'export'` in `next.config.ts` so the default Next.js build is used.

## License

Private — personal portfolio project.
