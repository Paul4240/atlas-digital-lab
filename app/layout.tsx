import "./globals.css";

export const metadata = {
  title: "Atlas Digital Lab | Small Business Websites",
  description:
    "Professional websites for small businesses. Fast setup. Simple pricing. Ongoing support.",
  verification: {
  google: "BPZxE2KbWUULJy7rX",
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