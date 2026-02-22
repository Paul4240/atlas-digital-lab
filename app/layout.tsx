import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas Digital Lab | Professional Websites for Small Businesses",
  description:
    "Atlas Digital Lab builds modern, mobile-friendly websites for local businesses. Fast setup, simple pricing, and monthly support available.",
  keywords: [
    "website design",
    "small business websites",
    "Houston web design",
    "SEO setup",
    "mobile friendly websites",
  ],
  authors: [{ name: "Atlas Digital Lab" }],
  creator: "Atlas Digital Lab",
  openGraph: {
    title: "Atlas Digital Lab",
    description:
      "Professional websites for small businesses. Simple pricing. Fast delivery.",
    url: "https://atlasdigitallab.com",
    siteName: "Atlas Digital Lab",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}