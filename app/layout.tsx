import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bodyFont = localFont({
  src: "./fonts/dm-sans.woff2",
  variable: "--font-body",
  weight: "100 1000",
  display: "swap",
  fallback: ["Segoe UI", "Arial", "sans-serif"],
});

const headingFont = localFont({
  src: "./fonts/space-grotesk.woff2",
  variable: "--font-heading",
  weight: "300 700",
  display: "swap",
  fallback: ["Segoe UI", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guru075.github.io/portfolio/"),
  title: "Gururaj Yadav — Software Engineer",
  description:
    "Portfolio of Gururaj Yadav, a software engineer building dependable backend systems and thoughtful full-stack experiences.",
  openGraph: {
    title: "Gururaj Yadav — Software Engineer",
    description: "I build software that stays useful.",
    images: ["https://guru075.github.io/portfolio/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gururaj Yadav — Software Engineer",
    description: "I build software that stays useful.",
    images: ["https://guru075.github.io/portfolio/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
