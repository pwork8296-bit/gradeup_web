'use client';

import React from 'react';

export default function AdminFooter() {
  return (
    <footer className="py-4 px-6 md:px-8 border-t border-slate-200 bg-white text-center text-xs text-slate-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto">
        <p>
          &copy; 2026{' '}
          <span className="font-semibold text-slate-700">Umar Tazkeer Academy</span>. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4 text-slate-400 text-[11px]">
          <span>Security: High</span>
          <span>•</span>
          <span>Role: Super Admin</span>
          <span>•</span>
          <span>API Connected</span>
        </div>
      </div>
    </footer>
  );
}
