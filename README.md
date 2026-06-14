# Workspace Admin (MFE Remote)

A high-performance Micro Front End built with **React 19**, **TypeScript**, and **Vite**.

This project is designed as a **Remote** module meant to be consumed by a Host application. It provides a full-featured admin dashboard layout with integrated routing.

## 🚀 Tech Stack
*   **Core:** React 19, TypeScript 5.9
*   **Routing:** React Router 7
*   **Styling:** Material UI (MUI) v6 & Tailwind CSS 3.4
*   **Build/Bundling:** Vite 5 + `@originjs/vite-plugin-federation`
*   **Quality:** ESLint, Husky Pre-commit hooks

## 📦 MFE Configuration
*   **Remote Name:** `workspace`
*   **Exposed Module:** `./App` (resolves to `src/App.tsx`)
*   **Default Port:** `3000`
*   **Deployment:** Configured for Vercel with CORS and SPA rewrites.

## 🛠️ Engineering Scripts
*   `npm run build`: Production build.
*   `npm run type-check`: Run TypeScript compiler diagnostics.
*   `npm run lint`: Run ESLint checks (strict: 0 warnings allowed).

## 🔗 Consumption Guide
The exposed `App` component accepts a `basename` prop. This is required so the remote's internal routing aligns with the path it is mounted on in the Host application.

### Host Example
```tsx
import { App } from 'workspace/App';

function HostDashboard() {
  return (
    <div>
      <h1>Host Portal</h1>
      {/* Mount the remote at a specific sub-path */}
      <App basename="/workspace-admin" />
    </div>
  );
}
```

## 🧪 Quality Control
This project uses **Husky** pre-commit hooks. Every commit is automatically verified for:
1.  Linting integrity.
2.  TypeScript type safety.
3.  Production build stability.

## 🌐 Hosting
Deployed on **Vercel**. The `vercel.json` ensures `Access-Control-Allow-Origin: *` headers are set, allowing the Host application to fetch the `workspace.js` and associated chunks without CORS issues.

---
**License:** ISC