import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: siteConfig.logo,
    shortcut: siteConfig.logo,
    apple: siteConfig.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={siteConfig.logo} type="image/avif" />
      </head>
      <body className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-slate-800">
        {children}
      </body>
    </html>
  );
}

