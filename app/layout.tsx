export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Atlas Digital Lab</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
