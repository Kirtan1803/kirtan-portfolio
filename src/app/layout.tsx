import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kirtan Tanti | Full Stack Developer",
    template: "%s | Kirtan Tanti",
  },
  description: "Full Stack Developer focused on building modern web applications using React, Django, Firebase, and REST APIs.",
  metadataBase: new URL("https://kirtan-portfolio-pi.vercel.app"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Kirtan Tanti",
    "Full Stack Developer",
    "React",
    "Django",
    "Firebase",
    "REST APIs",
    "MySQL",
    "Firestore",
    "Computer Engineering",
    "GTU",
    "Shree Swaminarayan Institute of Technology",
    "Adani Vidya Mandir",
    "Ahmedabad",
    "Gujarat",
    "Developer Portfolio",
  ],
  openGraph: {
    title: "Kirtan Tanti | Full Stack Developer",
    description: "Full Stack Developer focused on building modern web applications using React, Django, Firebase, and REST APIs.",
    url: "https://kirtan-portfolio-pi.vercel.app",
    siteName: "Kirtan Tanti Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kirtan Tanti Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirtan Tanti | Full Stack Developer",
    description: "Full Stack Developer focused on building modern web applications using React, Django, Firebase, and REST APIs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kirtan Tanti",
              "jobTitle": "Full Stack Developer",
              "url": "https://kirtan-portfolio-pi.vercel.app",
              "sameAs": [
                "https://github.com/Kirtan1803",
                "https://www.linkedin.com/in/kirtan-tanti-b43bb0255"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
