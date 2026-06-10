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
  description: "Building modern web applications with React, Django, Firebase, and modern APIs.",
  metadataBase: new URL("https://kirtantanti.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kirtan Tanti | Full Stack Developer",
    description: "Building modern web applications with React, Django, Firebase, and modern APIs.",
    url: "https://kirtantanti.dev",
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
    description: "Building modern web applications with React, Django, Firebase, and modern APIs.",
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
        {children}
      </body>
    </html>
  );
}
