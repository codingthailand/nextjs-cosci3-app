<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# nextjs-cosci3-app

E-commerce + course listing app (COSCI). Thai-language, MySQL/MariaDB backend.

## Commands

| Command | What it runs |
|---------|-------------|
| `npm run dev` | `next dev` — dev server on `localhost:3000` |
| `npm run build` | `next build` |
| `npm run start` | `next start` |
| `npm run lint` | `eslint` (flat config) |

No formatter, no test runner, no typecheck script.

## Architecture

- **Next.js 16.x** — App Router. Always check `node_modules/next/dist/docs/` for unfamiliar APIs.
- **Route groups**: `(auth)` → login/signup, `(front)` → main pages, `api/auth/[...all]` → better-auth handler.
- **Prisma** — `prisma/schema.prisma`, client generated to `generated/prisma/` (gitignored). Uses `@prisma/adapter-mariadb` (MariaDB driver). Run `npx prisma generate` after schema changes.
- **Auth** — better-auth with email/password. Config in `src/lib/auth.ts`, client in `src/lib/auth-client.ts`.
- **Cart** — Zustand store in `src/lib/cart-store.ts` persisted to localStorage under key `cosci-cart`.
- **Forms** — react-hook-form + zod.
- **CSS** — Tailwind v4 (`@import "tailwindcss"`, `@theme`, `@custom-variant`), shadcn/ui with `radix-luma` style.
- **Icons** — `@remixicon/react` (configured in `components.json` as icon library).
- **Fonts** — Roboto (variable `--font-sans`), Lora (variable `--font-heading`), Prompt (Thai).

## Conventions

- `@/` maps to `src/` — imports: `@/components/...`, `@/lib/...`, `@/app/...`.
- Components go in `src/components/`, UI primitives in `src/components/ui/`.
- Prisma Decimal values must be serialized to `Number()` before passing to client components (see `src/app/(front)/product/page.tsx:13`).
- Dynamic routes that access DB should call `await connection()` from `next/server` (see same file).
- Image remote patterns must be configured in `next.config.ts` (already has `www.fffuel.co`, `api.codingthailand.com`).

## .env

Requires `DATABASE_URL` (MySQL), `BETTER_AUTH_SECRET`, and `BETTER_AUTH_URL`.

## References

- `CLAUDE.md` just contains `@AGENTS.md` — this file is the canonical instruction source.
