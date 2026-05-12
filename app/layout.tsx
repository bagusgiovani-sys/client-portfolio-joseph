import type { Metadata, Viewport } from "next";
import { Montserrat, Bonheur_Royale, Anton } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const bonheurRoyale = Bonheur_Royale({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bonheur-royale",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edwin Anderson — Frontend Developer",
  description:
    "Portfolio of Edwin Anderson, a frontend developer specializing in React, Next.js, and pixel-perfect UI implementation.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
    ${montserrat.variable}
    ${bonheurRoyale.variable}
    ${anton.variable}
    antialiased
  `}
      >
        {children}
      </body>
    </html>
  );
}
