'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header2Props } from '@/types/navigationTypes';
import {
  HEADER2_LEFT_LINKS,
  HEADER2_RIGHT_LINKS,
  DEFAULT_USER,
} from '@/data/navigationData';

export default function Header2({
  user = DEFAULT_USER,
  cartItemCount = 0,
  notificationCount = 0,
  onSearch,
  logoHref = '/',
}: Header2Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-t-[3px] border-[#a435f0] border-b border-gray-200 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px] gap-2 md:gap-4 lg:gap-6">

          {/* Left: Mobile Menu Toggle & Logo & Left Links */}
          <div className="flex items-center gap-3 md:gap-4 lg:gap-6 flex-shrink-0">
            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>

            {/* Udemy Logo */}
            <Link href={logoHref} className="flex items-center flex-shrink-0 group">
              <div className="flex items-center">
                {/* Udemy Stylized Logo SVG */}
                <svg
                  className="h-8 w-auto text-black"
                  viewBox="0 0 91 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Purple Accent above u */}
                  <path
                    d="M10.8 1.2L18.4 8.8L16.2 11L10.8 5.6L5.4 11L3.2 8.8L10.8 1.2Z"
                    fill="#a435f0"
                  />
                  {/* "udemy" lettering */}
                  <text
                    x="0"
                    y="29"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize="24"
                    fontWeight="800"
                    fill="#1c1d1f"
                    letterSpacing="-0.8px"
                  >
                    ûdemy
                  </text>
                </svg>
              </div>
            </Link>

            {/* Desktop Left Links: Explore, Subscribe */}
            <nav className="hidden lg:flex items-center gap-5">
              {HEADER2_LEFT_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#2d2f31] hover:text-[#a435f0] text-[14px] font-normal transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center: Search Bar (Desktop) */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-2xl mx-2 lg:mx-4"
          >
            <div className="relative w-full flex items-center">
              <span className="absolute left-4 text-gray-500 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 stroke-[2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for anything"
                className="w-full h-11 pl-11 pr-4 bg-[#f7f9fa] hover:bg-white focus:bg-white text-gray-900 placeholder-gray-500 text-[14px] rounded-full border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
              />
            </div>
          </form>

          {/* Right: Actions & Profile */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 flex-shrink-0">
            {/* Mobile Search Button */}
            <button
              type="button"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>

            {/* Desktop Right Links */}
            <div className="hidden xl:flex items-center gap-5">
              {HEADER2_RIGHT_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#2d2f31] hover:text-[#a435f0] text-[14px] font-normal whitespace-nowrap transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Wishlist Heart Icon */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="p-1.5 text-[#2d2f31] hover:text-[#a435f0] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 stroke-[1.7]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </Link>

            {/* Shopping Cart Icon */}
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative p-1.5 text-[#2d2f31] hover:text-[#a435f0] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 stroke-[1.7]"
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
                <span className="absolute -top-0.5 -right-0.5 bg-[#a435f0] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Notification Bell Icon */}
            <Link
              href="/notifications"
              aria-label="Notifications"
              className="relative p-1.5 text-[#2d2f31] hover:text-[#a435f0] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 stroke-[1.7]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {notificationCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#a435f0] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </Link>

            {/* User Profile Avatar */}
            <Link
              href="/user/profile"
              aria-label="User Profile"
              className="w-8 h-8 rounded-full bg-[#1c1d1f] hover:bg-[#2d2f31] text-white font-bold text-xs flex items-center justify-center transition-colors shadow-sm select-none"
            >
              {user?.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name || 'User'}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span>{user?.initials || 'PK'}</span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Search Input dropdown */}
        {isMobileSearchOpen && (
          <div className="md:hidden pb-3">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <span className="absolute left-4 top-3 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 stroke-[2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for anything"
                className="w-full h-10 pl-11 pr-4 bg-[#f7f9fa] text-gray-900 placeholder-gray-500 text-[14px] rounded-full border border-gray-300 focus:border-gray-900 focus:outline-none"
                autoFocus
              />
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2">
              Navigation
            </span>
            {[...HEADER2_LEFT_LINKS, ...HEADER2_RIGHT_LINKS].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2d2f31] hover:text-[#a435f0] text-sm font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
