import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = {
  title: `Admin Authentication | ${siteConfig.name}`,
  description: `Sign in to the administrative portal for ${siteConfig.name}`,
  icons: {
    icon: siteConfig.logo,
  },
  icons: {
    icon: siteConfig.logo,
  },
};

export default function AdminAuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center p-4">
      <div className="w-full flex justify-center">{children}</div>
      <p className="mt-8 text-xs text-slate-500 text-center">
        &copy; 2026 {siteConfig.name}. Protected by enterprise security.
      </p>
    </div>
  );
}
