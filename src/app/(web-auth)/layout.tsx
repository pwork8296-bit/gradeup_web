'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';

export default function WebAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md text-center mb-6">
        <Link href="/" className="inline-flex items-center gap-2.5 no-underline text-slate-900 hover:opacity-90 transition">
          <img
            src={siteConfig.logo}
            alt={siteConfig.name}
            className="h-10 w-auto object-contain"
          />
          <span className="font-extrabold text-2xl tracking-tight text-blue-600">
            {siteConfig.name}
          </span>
        </Link>
      </div>

      <main className="flex-1 flex items-center justify-center">
        {children}
      </main>

      <footer className="mt-8 text-center text-xs text-slate-400">
        © 2026 {siteConfig.name}. All rights reserved.
      </footer>
    </div>
  );
}
