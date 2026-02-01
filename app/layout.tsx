/* layout.tsx */

import './globals.css'

export const metadata = {
  title: 'Atlas Digital Lab',
  description: 'Atlas Digital Lab Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
