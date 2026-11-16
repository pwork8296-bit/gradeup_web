'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/data/navigationData';
import { HeaderProps } from '@/types/navigationTypes';

export default function Header({ cartItemCount = 0, logoSrc }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt="GradeUp Academy"
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <div className="flex items-center gap-2.5">
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-10 h-10 transition-transform group-hover:scale-105 duration-200"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="utGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00b4d8" />
                          <stop offset="50%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#d946ef" />
                        </linearGradient>
                        <linearGradient id="utGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#ec4899" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M32 6L54 18V44L32 56L10 44V18L32 6Z"
                        stroke="url(#utGrad1)"
                        strokeWidth="3.5"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M32 18L44 25V39L32 46L20 39V25L32 18Z"
                        stroke="url(#utGrad2)"
                        strokeWidth="3"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M26 27H38M32 27V41"
                        stroke="#2563eb"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-[11px] font-bold tracking-tight text-slate-800 leading-none mt-1">
                      UT DIGITAL
                    </span>
                  </div>
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium text-[15px] transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}

            {/* Shopping Cart Icon */}
            <Link
              href="#"
              aria-label="Shopping Cart"
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors duration-150 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 stroke-[1.8]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-blue-600 text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Login Button */}
            <Link
              href="/login"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] active:bg-[#1e40af] text-white font-medium text-[15px] px-8 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Link
              href="/cart"
              aria-label="Shopping Cart"
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 stroke-[1.8]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium text-base py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium text-base px-6 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
