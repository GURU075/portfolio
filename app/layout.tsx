import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
