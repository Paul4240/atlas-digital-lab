export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Atlas Digital Lab</title>
        <meta name="description" content="Atlas Digital Lab Website" />
      </head>
      <body>{children}</body>
    </html>
  );
}
