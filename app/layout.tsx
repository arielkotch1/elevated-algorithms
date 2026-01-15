import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://elevatedalgorithms.com");

const metaDescription =
  "Elevated Algorithms transforms AI-generated designs into production-ready products with real backends, auth, payments, and deployments.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elevated Algorithms | Production-ready AI websites",
    template: "%s | Elevated Algorithms",
  },
  description: metaDescription,
  keywords: [
    "Elevated Algorithms",
    "AI website development",
    "production-ready web apps",
    "Next.js engineer",
    "full-stack development",
    "web3 development",
    "app modernization",
    "Ariel Kotch",
  ],
  authors: [{ name: "Ariel Kotch" }],
  creator: "Ariel Kotch",
  publisher: "Elevated Algorithms",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Elevated Algorithms | Production-ready AI websites",
    description: metaDescription,
    url: "/",
    siteName: "Elevated Algorithms",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image?v=3",
        width: 1200,
        height: 630,
        alt: "Elevated Algorithms turning AI sites into production apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevated Algorithms | Production-ready AI websites",
    description: metaDescription,
    images: ["/opengraph-image?v=3"],
  },
  icons: {
    icon: [
      { url: "/icon?v=4", type: "image/png" },
      { url: "/favicon.svg?v=4", type: "image/svg+xml" },
      { url: "/icon.svg?v=4", type: "image/svg+xml" },
      { url: "/brand-icon.svg?v=4", type: "image/svg+xml" },
      { url: "/favicon.ico?v=4", type: "image/x-icon" },
    ],
    shortcut: [
      { url: "/icon?v=4", type: "image/png" },
      { url: "/favicon.svg?v=4", type: "image/svg+xml" },
      { url: "/icon.svg?v=4", type: "image/svg+xml" },
      { url: "/favicon.ico?v=4", type: "image/x-icon" },
    ],
    apple: [
      { url: "/icon?v=4", type: "image/png" },
      { url: "/favicon.svg?v=4", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
