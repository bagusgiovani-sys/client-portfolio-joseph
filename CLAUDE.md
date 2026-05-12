# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

Single-page portfolio website built with **Next.js 16 App Router**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. The React Compiler is enabled (`reactCompiler: true` in `next.config.ts`).

### Layout

- `app/page.tsx` — single page; composes all section components in order. Each section has a scroll anchor ID (`#home`, `#about`, `#skill`, `#projects`, `#faq`, `#contact`).
- `app/layout.tsx` — loads three Google Fonts and exposes them as CSS variables.
- `app/globals.css` — defines the theme via `@theme inline` (Tailwind v4) and CSS custom properties.

### Component structure

- `components/containers/` — one folder per page section (e.g. `heroSection/`, `navbar/`, `footer/`). All are Server Components **except** `form/form.tsx`, which is `"use client"` and handles the contact form state.
- `components/ui/` — shadcn/ui primitives (New York style). Add new ones with `npx shadcn add <component>`.
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge).

### Design tokens

Custom tokens are defined in `globals.css` and consumed via Tailwind utility classes:

| Token | Value | Usage |
|---|---|---|
| `primary-100..400` | pink/rose scale | Brand colors |
| `secondary` | `#f3b64c` (amber/gold) | Accent, CTAs |
| `font-heading` | Montserrat | Body text, headings |
| `font-script1` | Bonheur Royale | Decorative italic text |
| `font-script2` | Anton | Large display text |

Custom utility `.outline-text` in `globals.css` renders transparent text with a gold stroke.

### Responsive pattern

The primary breakpoint is `lg:`. Mobile-first with `order-*` utilities used to reposition elements between breakpoints (e.g., the hero image and footer columns).

### Contact form

`form/form.tsx` validates fields client-side and shows a custom `CustomModal` overlay (success/error). There is no backend — form submission is simulated.
