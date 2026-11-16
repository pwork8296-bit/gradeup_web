import React from 'react';
import Link from 'next/link';
import { FOOTER_LINKS } from '@/data/navigationData';
import { FooterProps } from '@/types/navigationTypes';

export default function Footer({
  copyright,
  links = FOOTER_LINKS,
}: FooterProps) {
  return (
    <footer className="w-full bg-[#05082e] border-t-[3px] border-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Optional Left content / Copyright */}
          {copyright ? (
            <p className="text-gray-400 text-sm font-normal">
              {copyright}
            </p>
          ) : (
            <div className="hidden sm:block" />
          )}

          {/* Policy & Information Links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 sm:gap-x-8 gap-y-3"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white hover:text-blue-400 text-[14px] sm:text-[15px] font-normal transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
