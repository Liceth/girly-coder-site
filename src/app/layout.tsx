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
  metadataBase: new URL("https://licethovalles.com"),
  
  title: {
    default: "Liceth Ovalles | Senior Frontend Developer | React & TypeScript Expert",
    template: "%s | Liceth Ovalles",
  },
  
  description: "Senior Frontend Developer with 6+ years of experience specializing in React, TypeScript, Next.js, and accessible UI development. Building beautiful, performant web applications at Kinesso.",
  
  keywords: [
    // Core Identity
    "Liceth Ovalles",
    "Frontend Developer",
    "Senior Frontend Engineer",
    "UI Engineer",
    
    // Technologies
    "React Developer",
    "TypeScript Expert",
    "Next.js Developer",
    "Tailwind CSS",
    "JavaScript ES6+",
    "Framer Motion",
    
    // Skills
    "Web Development",
    "UI/UX Design",
    "Accessible Web Design",
    "WCAG Compliance",
    "Design Systems",
    "Component Libraries",
    "Performance Optimization",
    
    // Specializations
    "Frontend Architecture",
    "Micro Frontends",
    "Progressive Web Apps",
    "Responsive Design",
    "Data Visualization",
    
    // Testing & Tools
    "Jest Testing",
    "React Testing Library",
    "Cypress",
    "Git",
    "CI/CD",
    "Docker",
    "GitHub Actions",
    
    // Location & Language
    "Bogotá Developer",
    "Remote Frontend Developer",
    "Bilingual Developer",
    "English Spanish Developer",
    
    // Companies & Experience
    "Kinesso Engineer",
    "Google Projects Developer",
    "Huge Inc Frontend",
    "Globant Developer",
  ],
  
  authors: [
    { name: "Liceth Ovalles", url: "https://github.com/liceth" }
  ],
  
  creator: "Liceth Ovalles",
  publisher: "Liceth Ovalles",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://licethovalles.com",
    siteName: "Liceth Ovalles - Frontend Developer Portfolio",
    title: "Liceth Ovalles | Senior Frontend Developer | React & TypeScript Expert",
    description: "Senior Frontend Developer with 6+ years of experience. Specializing in React, TypeScript, Next.js, and accessible UI development. View my portfolio, projects, and technical blog.",
    images: [
      {
        url: "https://licethovalles.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Liceth Ovalles - Frontend Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@liloovalles",
    creator: "@liloovalles",
    title: "Liceth Ovalles | Senior Frontend Developer",
    description: "Senior Frontend Developer specializing in React, TypeScript, and accessible UI. Building beautiful, performant web applications.",
    images: ["https://licethovalles.com/og-image.png"],
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  
  manifest: "/site.webmanifest",
  
  alternates: {
    canonical: "https://licethovalles.com",
    languages: {
      "en-US": "https://licethovalles.com",
      "es-ES": "https://licethovalles.com/es",
    },
  },
  
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf2f8" },
    { media: "(prefers-color-scheme: dark)", color: "#831843" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://licethovalles.com/#person",
              name: "Liceth Ovalles",
              url: "https://licethovalles.com",
              image: "https://licethovalles.com/KawaiiCoder.png",
              jobTitle: "Senior Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Kinesso",
              },
              knowsAbout: [
                "React.js",
                "TypeScript",
                "Next.js",
                "JavaScript",
                "Frontend Development",
                "UI Engineering",
                "Web Accessibility",
                "Design Systems",
                "Performance Optimization",
              ],
              sameAs: [
                "https://github.com/liceth",
                "https://www.linkedin.com/in/liceth-ovalles-44897591/",
                "https://twitter.com/liloovalles",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bogotá",
                addressCountry: "CO",
              },
              email: "licethovallesrodriguez@gmail.com",
              knowsLanguage: ["English", "Spanish"],
            }),
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://licethovalles.com/#website",
              url: "https://licethovalles.com",
              name: "Liceth Ovalles - Frontend Developer Portfolio",
              description: "Senior Frontend Developer portfolio showcasing React, TypeScript, and Next.js projects",
              inLanguage: "en-US",
              author: {
                "@id": "https://licethovalles.com/#person",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://licethovalles.com/blog?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
