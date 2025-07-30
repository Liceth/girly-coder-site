import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liceth Ovalles",
  keywords: [
    "Liceth Ovalles",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Kawaii Design",
    "Web Development",
    "UI/UX Design",
    "Accessible Web Design",
    "Girly Coder",
  ],
  authors: [{ name: "Liceth Ovalles", url: "https://github.com  /liceth" }],
  creator: "Liceth Ovalles",
  openGraph: {
    title: "Liceth Ovalles - Frontend Developer",
    description: "Frontend developer passionate about creating beautiful, accessible, and magical experiences with React, TypeScript, and a love for details.",
    url: "https://licethovalles.dev",
    siteName: "Liceth Ovalles",
    images: [
      {
        url: "https://licethovalles.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Liceth Ovalles - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liceth Ovalles - Frontend Developer",
    description: "Frontend developer passionate about creating beautiful, accessible, and magical experiences with React, TypeScript, and a love for details.",
    images: ["https://licethovalles.dev/og-image.png"],
    creator: "@liloovalles",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/shortcut-icon.png",
  },
  manifest: "/site.webmanifest",

  metadataBase: new URL("https://licethovalles.dev"),
  alternates: {
    canonical: "https://licethovalles.dev",
    types: {
      "application/rss+xml": "/feed.xml",
      "application/atom+xml": "/feed.atom",
    },
    languages: {
      "en-US": "/en",
      "es-ES": "/es",
    },
  },
  verification: {
    google: "google-site-verification=your-verification-code",
    yandex: "yandex-verification: your-verification-code",
    me: "me-verification: your-verification-code",
    other: {
      "custom-verification": "custom-verification-code",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f2f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
    
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
