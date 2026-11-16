import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UT Digital - Courses & Digital Products',
  description: 'Learn Advanced Google Analytics 4, Digital Marketing, and more with live courses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-slate-800">
        {children}
      </body>
    </html>
  );
}

