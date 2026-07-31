import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://guru-engineering-portfolio-2026.gururajyadav-07.chatgpt.site",
  ),
  title: "Gururaj Yadav — Software Engineer",
  description:
    "Portfolio of Gururaj Yadav, a software engineer building dependable backend systems and thoughtful full-stack experiences.",
  openGraph: {
    title: "Gururaj Yadav — Software Engineer",
    description: "I build software that stays useful.",
    images: [
      "https://guru-engineering-portfolio-2026.gururajyadav-07.chatgpt.site/og.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gururaj Yadav — Software Engineer",
    description: "I build software that stays useful.",
    images: [
      "https://guru-engineering-portfolio-2026.gururajyadav-07.chatgpt.site/og.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
