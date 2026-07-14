import type { Metadata } from "next";
import { Sora, Geist_Mono } from "next/font/google";
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
const SITE_TITLE = "David Reyes Alés — Ingeniero de Software Backend";
const SITE_DESCRIPTION =
  "Portfolio de David Reyes Alés. Construyo plataformas en tiempo real y servicios backend para entornos operativos. MSc en UC3M.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "David Reyes Alés",
    "backend",
    "ingeniero de software",
    "sistemas distribuidos",
    "portfolio",
    "UC3M",
  ],
  authors: [{ name: "David Reyes Alés", url: SITE_URL }],
  creator: "David Reyes Alés",
  alternates: {
    canonical: "/",
    languages: {
      es: "/?lang=es",
      en: "/?lang=en",
    },
  },
  openGraph: {
    type: "website",
    siteName: "David Reyes Alés",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "es_ES",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/simple_logo_favicon.png",
    shortcut: "/simple_logo_favicon.png",
    apple: "/simple_logo_favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${sora.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}