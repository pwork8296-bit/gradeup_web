import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/config/siteConfig';

export default function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Header logoSrc={siteConfig.logo} />
      <main className="flex-1">{children}</main>
      <Footer copyright={`© ${siteConfig.name}. All rights reserved.`} />
    </div>
  );
}

