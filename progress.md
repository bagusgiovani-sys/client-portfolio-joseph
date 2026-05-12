# Improvement Progress
> Initiated: 2026-05-12 | Last updated: 2026-05-12

## Status Legend
- [ ] Pending
- [~] In Progress
- [x] Done

---

## Milestone 1 — Critical Fixes (do first)

- [x] **[QUAL]** Fix placeholder site metadata (title + description) — `app/layout.tsx`
- [x] **[QUAL]** Replace placeholder FAQ content for all 4 wrong accordion items — `components/containers/accordion/accordion.tsx`
- [x] **[QUAL]** Fix non-functional "Contact Me" button (scroll to #contact) — `components/containers/heroSection/heroSection.tsx`
- [x] **[QUAL]** Fix non-functional "See All" button — `components/containers/designAccuracySection/designAccuracySection.tsx`
- [x] **[QUAL]** Fix footer social icons: replace `<div>` wrappers with `<a href>` links — `components/containers/footer/footer.tsx`

## Milestone 2 — Major Improvements

- [x] **[PERF]** Replace all raw `<img>` with Next.js `<Image>` — all section components
- [x] **[QUAL]** Remove dead `showModal` state — `components/containers/form/form.tsx`
- [x] **[QUAL]** Remove non-functional carousel arrows — `codeDesignSection.tsx`, `testimoni.tsx`
- [x] **[DX]** Rename all component functions to PascalCase — 9 components affected
- [x] **[QUAL]** Remove unnecessary `"use client"` from clearSection — `components/containers/clearSection/clearSection.tsx`

## Milestone 3 — Quality & Polish

- [x] **[QUAL]** Remove duplicate CSS rules in globals.css — `app/globals.css`
- [x] **[QUAL]** Remove duplicate `scroll-behavior: smooth` — `app/globals.css`
- [x] **[QUAL]** Fix wrong alt text on portfolio2 and portfolio3 images — `components/containers/designAccuracySection/designAccuracySection.tsx`
- [x] **[DX]** Update package name from "my-app" to "portofolio-joseph" — `package.json`
- [ ] **[CHORE]** Dark mode tokens and sidebar CSS are shadcn scaffold boilerplate — retained intentionally for future dark mode support

---

## Session Log
| Session | Date       | Token % at close | Summary                                   |
|---------|------------|-----------------|-------------------------------------------|
| 1       | 2026-05-12 | ~65%            | All 3 milestones complete. All findings from origin.md resolved or intentionally deferred. |
