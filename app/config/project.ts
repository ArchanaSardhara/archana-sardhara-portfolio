export const projects = [
  {
    title: "Salary Management Platform",
    description:
      "A secure web application that centralizes employee and compensation records for HR managers, replacing Excel-based workflows with structured data management, salary history tracking, and compensation analytics across 10,000+ employees in multiple countries.",
    role: "Lead Full Stack Engineer",
    roleDescription:
      "Led end-to-end architecture and development of a production-grade compensation management system. Designed a NestJS + PostgreSQL backend with Prisma ORM, JWT authentication, and a single-layer RBAC-ready permission model. Implemented effective-dated salary history with atomic writes ensuring audit and salary records never drift. Built optimistic concurrency control to safely handle concurrent HR edits. Developed a paginated, searchable, filterable employee directory with server-side aggregation performing under 500ms at 10k records. Delivered a per-country compensation analytics dashboard with currency-safe grouping (never averaging across currencies). Wrote deterministic seed tooling generating 10,000 synthetic employees with realistic salary distributions, and covered all domain logic with fast, isolated unit tests.",
    image:
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzYzNjcyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Nest.js",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Recharts",
      "shadcn/ui",
      "Tailwind CSS",
      "JWT",
    ],
    github: "https://github.com/ArchanaSardhara/salary-management-platform",
    url: "https://salary-management-platform-git-master-archanas-projects.vercel.app/",
  },
  {
    title: "LMS Platform (Stuck in Sat)",
    description:
      "A full-stack Learning Management System for SAT exam preparation, enabling students to access courses with Vimeo-hosted video lessons, an ebook reader, and practice resources, while admins manage content, enrollments, and subscriptions through a dedicated dashboard.",
    role: "Lead Full Stack Engineer",
    roleDescription:
      "Led end-to-end architecture and development of a production LMS. Designed a NestJS + MariaDB backend with Prisma ORM, implementing CASL-based RBAC so that permission checks are consistent across every route. Built JWT authentication with both local and Google OAuth 2.0 flows. Integrated Razorpay for subscription payments with webhook-based enrollment activation. Embedded Vimeo for course video delivery. Added a Google Generative AI feature for AI-assisted learning. Built a React + Vite SPA with Radix UI components, TanStack Query for server state, and a full admin panel covering course creation, user management, enrollments, resources, and ebook management. Delivered an ebook reader with download tracking and a student dashboard with course progress.",
    image:
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzYzNjcyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Nest.js",
      "MariaDB",
      "Prisma",
      "TypeScript",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "CASL",
      "Razorpay",
      "Vimeo",
      "Google OAuth",
      "Google Generative AI",
      "Radix UI",
      "Tailwind CSS",
    ],
    github: "https://github.com/ArchanaSardhara/tacky-sat",
    url: null,
  },
  {
    title: "Property Management System",
    description:
      "Property Management System for buy-to-let properties with wallet system, accounting system, investment system, and more.",
    role: "Lead Frontend Engineer",
    roleDescription:
      "Led frontend modernization with Vite + SSR, improving performance, SEO, and Core Web Vitals. Built a reusable internal UI component library and strengthened CI/CD pipelines with CircleCI, reducing deployment failures and improving release reliability. Introduced automated testing with Jest and RTL to improve stability and reduce regressions across critical user flows.",
    image:
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzYzNjcyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: [
      "React",
      "Golang",
      "Remix",
      "TypeScript",
      "Custom npm package",
      "Stripe",
      "Hubspot",
      "React Query",
      "Chart.js",
      "Storybook",
      "CircleCI",
      "Jest",
      "RTL",
    ],
    github: null,
    url: null,
  },
  {
    title: "Multi-Tenant Veterinary Clinic Management System",
    description:
      "Veterinary Clinic Management System for managing patients, appointments, prescriptions, and admin dashboard. It has a patient portal for patients to book appointments, view prescriptions, generate reports, invoices, and payments.",
    role: "Senior Full Stack Engineer",
    roleDescription:
      "Developed a multi-tenant Veterinary Clinic Management System with a focus on scalability, performance, and maintainability. Implemented a modular architecture with reusable components and services to support multiple clinics. Created a responsive and user-friendly patient portal with features like appointment scheduling, prescription generation, and report generation. Implemented a live updating module for surgery update with websocket integration. Developed an admin dashboard with features like clinic management, timezone and facility management.",
    image:
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzYzNjcyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: [
      "React",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "WebSocket",
      "Chart.js",
    ],
    github: null,
    url: null,
  },
  {
    title: "E-commerce Platform (Medical products)",
    description:
      "E-commerce platform for buying medical products with payment processing, reporting and inventory management.",
    role: "Supporting Full Stack Engineer",
    roleDescription:
      "Supported the development of a scalable E-commerce platform, owning frontend, backend, and production deployment. Architected a secure NodeJS + PostgreSQL backend with RBAC and integrated Stripe payments with webhook-based subscription management. Built a type-safe NextJS + TypeScript UI with reusable components, authentication (JWT + refresh tokens), and accessibility-compliant design.",
    image:
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzYzNjcyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Stripe",
      "Tailwind CSS",
    ],
    github: null,
    url: null,
  },
];
