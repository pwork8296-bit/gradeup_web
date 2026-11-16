import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer copyright="© UT Digital. All rights reserved." />
    </div>
  );
}

