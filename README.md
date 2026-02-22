# Praava Legal

Praava Legal is a modern web application built with **Next.js** and **TypeScript** to digitize and streamline legal workflows. It provides a clean, responsive interface for managing clients, cases, and legal documents in one place.

---

## Features

- Case management views for tracking matter status, key dates, and parties.
- Centralized client information with quick access to related cases and documents.
- Document-focused UI for storing and organizing legal files.
- Responsive design for desktop and mobile usage.
- Built on the Next.js App Router with automatic font optimization using Geist.

---

## Tech Stack

- **Framework:** Next.js (App Router) with `create-next-app` scaffold.
- **Language:** TypeScript (primary), with some JavaScript and CSS.
- **Tooling:** ESLint, PostCSS, Next Font (Geist).
- **Package manager:** npm (with `package-lock.json`).

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm (or yarn / pnpm / bun)

### Installation

```bash
git clone https://github.com/MadanAyyanavara/Praava_legal.git
cd Praava_legal
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

### Run in development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open:

```text
http://localhost:3000
```

You can start editing the main page in:

```text
src/app/page.tsx
```

The page will auto-update as you edit.

### Build for production

```bash
npm run build
npm run start
```

This creates an optimized production build and starts the server.

---

## Project Structure

```text
Praava_legal/
  public/              # Static assets (logos, icons, etc.)
  src/
    app/              # App Router entrypoints, layouts, routes
    components/       # Reusable UI components (planned)
    lib/              # Utilities, helpers (planned)
    styles/           # Global styles (if configured)
  .gitignore
  eslint.config.mjs
  next.config.ts
  package.json
  package-lock.json
  postcss.config.mjs
  tsconfig.json
  README.md
```

---

## Scripts

Available npm scripts in `package.json`:

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Run production server
npm run lint     # Lint codebase
```

---

## Environment Variables

If you connect Praava Legal to external services (databases, auth providers, storage, etc.), document them here. Example:

```env
NEXT_PUBLIC_API_BASE_URL=...
DATABASE_URL=...
AUTH_SECRET=...
```

Create a `.env.local` file in the project root and add required variables. Do not commit this file.

---

## Deployment

The easiest way to deploy Praava Legal is on Vercel, which has first-class support for Next.js.

### Deploy on Vercel

1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/new) and import the repository.
3. Configure environment variables (if any).
4. Click **Deploy**.

For more details, see the official Next.js deployment documentation.

---

## Roadmap

- Implement full CRUD for clients and cases.
- Add authentication and role-based access control (RBAC).
- Integrate file storage for document upload and preview.
- Add analytics dashboard for case load and performance metrics.
- Improve UI theming for law firm branding.

---

## Contributing

Contributions, feature requests, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add amazing feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request on GitHub.

---

## License

MIT License

Copyright (c) 2026 Madan Ayyanavara

---

## Author

**Madan Ayyanavara**
- GitHub: [@MadanAyyanavara](https://github.com/MadanAyyanavara)
