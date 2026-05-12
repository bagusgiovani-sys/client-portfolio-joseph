This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<!-- DOKUMENTASI PEMBUATAN PORTOFOLIO WEB DEVELOPER -->

# Portfolio Website

Membangun aplikasi web modern menggunakan *Next.js*.

# Project Overview
Project ini merupakan implementasi desain dari Figma:
Portfolio 1 – REP 

Tujuan project:
- Mengubah desain Figma menjadi website responsive
- Menerapkan best practice frontend modern
- Deploy ke live environment

## 🎨 Design Reference

Figma File:
https://www.figma.com/design/St7L3UrO1MbNedzDFH4OCl/Portfolio-1---REP

Hal yang diperhatikan saat slicing:
- Layout consistency (grid & spacing)
- Typography scale
- Color system
- Responsive behavior
- Component reusability

## 🛠 Tech Stack

Project ini sudah menggunakan:
- *Next.js 20* 
- *Shadcn*
  - Add accordion
  - Add avatar
  - Add button
  - Add card
  - Add input
  - Add label
  - Add separator
  - Add textarea
- *TypeScript*
- *Tailwind CSS*


## 🛠 Error Handling
1. Untuk pengaturan posisi layout di mobile dan desktop terdapat perpindahan posisi dimana ketika desktop posisi gambar ditengah, tetapi ketika mobile di paling bawah untuk hero section. Solusinya dengan menggunakan "order" pada tailwind css. Hal ini terdapat juga pada bagian footer.

2. untuk accordion awalnya dibuat manual, mengingat agar codingan tampil lebih best practice maka saya menggunakan accordion versi shadecn.




## 🚀 Getting Started

1. *Install dependencies*
   bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   

2. *Jalankan development server*
   bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   

3. *Buka browser*
   
   http://localhost:3000
