import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas Digital Lab | Professional Websites for Small Businesses",
  description:
    "Atlas Digital Lab builds modern, mobile-friendly websites for local businesses. Fast setup. Simple pricing. Ongoing support.",
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