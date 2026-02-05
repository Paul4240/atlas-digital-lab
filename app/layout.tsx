import './globals.css';

export const metadata = {
  title: 'Atlas Digital Lab',
  description: 'Professional Websites & Social Media Services',
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
