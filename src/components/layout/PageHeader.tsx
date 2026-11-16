import React from 'react';
import Link from 'next/link';
import { PageHeaderProps } from '@/types/navigationTypes';

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs = [],
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-[#131b38] to-slate-950 text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800 shadow-inner">
      {/* Background ambient glow circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl text-center flex flex-col items-center">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2">
          {title}
        </h1>

        {/* Subtitle if provided */}
        {subtitle && (
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mb-4 font-normal">
            {subtitle}
          </p>
        )}

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-medium text-slate-300">
          {breadcrumbs.map((crumb, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (
              <span key={i} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-blue-400 font-semibold" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={crumb.href || '/'}
                      className="text-slate-300 hover:text-white transition-colors duration-150 no-underline"
                    >
                      {crumb.label}
                    </Link>
                    <span className="text-slate-500 select-none">/</span>
                  </>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
