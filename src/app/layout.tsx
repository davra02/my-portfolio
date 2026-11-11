import type { Metadata } from "next";
import { headers } from "next/headers";
import { Sora, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.davidreyesales.com";

// Language-specific fields (title, description, openGraph, twitter, alternates.canonical)
// are set per-request in page.tsx's generateMetadata, based on ?lang=. Next.js merges
// this root metadata with the page's, so only what doesn't depend on `lang` lives here.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: "David Reyes Alés", url: SITE_URL }],
  creator: "David Reyes Alés",
  icons: {
    icon: "/simple_logo_favicon.png",
    shortcut: "/simple_logo_favicon.png",
    apple: "/simple_logo_favicon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Set by src/middleware.ts from ?lang=, so <html lang> matches the content.
  const lang = (await headers()).get("x-lang") === "en" ? "en" : "es";

  return (
    <html lang={lang}>
      <body
        className={`${sora.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}