import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Authentication | Umar Tazkeer Academy',
  description: 'Sign in to the administrative portal for Umar Tazkeer Academy',
};

export default function AdminAuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center p-4">
      <div className="w-full flex justify-center">{children}</div>
      <p className="mt-8 text-xs text-slate-500 text-center">
        &copy; 2026 Umar Tazkeer Academy. Protected by enterprise security.
      </p>
    </div>
  );
}
