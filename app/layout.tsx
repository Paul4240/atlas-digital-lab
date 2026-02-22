import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas Digital Lab | Professional Websites for Small Businesses",
  description:
    "Atlas Digital Lab builds modern, mobile-friendly websites for local businesses. Fast setup, simple pricing, and monthly support.",
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
      <body>{children}</body>
    </html>
  );
}