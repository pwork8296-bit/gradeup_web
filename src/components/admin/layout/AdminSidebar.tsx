'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  GraduationCap,
  FolderTree,
  FileText,
  Users,
  ShieldCheck,
  Settings,
  ExternalLink,
  PlusCircle,
} from '@/components/admin/common/AdminIcons';

interface AdminSidebarProps {
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export default function AdminSidebar({ isMobileOpen, onCloseMobile }: AdminSidebarProps) {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Courses & Products',
      href: '/admin/products',
      icon: GraduationCap,
    },
    {
      name: 'Categories',
      href: '/admin/categories',
      icon: FolderTree,
    },
    {
      name: 'Articles & Blogs',
      href: '/admin/blogs',
      icon: FileText,
    },
    {
      name: 'Learners & Clients',
      href: '/admin/clients',
      icon: Users,
    },
    {
      name: 'Admins & Staff',
      href: '/admin/users',
      icon: ShieldCheck,
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: Settings,
    },
  ];

  const sidebarContent = (isMobile: boolean = false) => (
    <div className="flex flex-col h-full bg-slate-900 text-slate-300 select-none">
      {/* Brand Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
        <Link
          href="/admin/dashboard"
          onClick={isMobile ? onCloseMobile : undefined}
          className="flex items-center gap-2.5 font-bold text-white tracking-wide"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-base shadow-sm">
            UT
          </div>
          <div>
            <span className="block text-sm font-bold text-white leading-tight">Umar Tazkeer</span>
            <span className="block text-[11px] font-medium text-slate-400">Admin Control</span>
          </div>
        </Link>
      </div>

      {/* Quick Action Button */}
      <div className="px-5 pt-5 pb-2">
        <Link
          href="/admin/product/add"
          onClick={isMobile ? onCloseMobile : undefined}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          <span>New Course</span>
        </Link>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Management
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname?.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={isMobile ? onCloseMobile : undefined}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                isActive
                  ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}

        <div className="pt-6 px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Live Store
        </div>
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-400 hover:bg-slate-800/60 hover:text-white transition-colors"
        >
          <span className="flex items-center gap-3">
            <ExternalLink className="w-4 h-4 text-slate-400" />
            <span>View Public Site</span>
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">Live</span>
        </Link>
      </nav>

      {/* Footer Info */}
      <div className="p-4 border-t border-slate-800 text-center">
        <p className="text-[11px] text-slate-500">Admin Portal v2.4</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-slate-800/80 bg-slate-900 shrink-0 h-screen sticky top-0">
        {sidebarContent(false)}
      </aside>

      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 transform transition-transform duration-200 ease-in-out md:hidden ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent(true)}
      </aside>
    </>
  );
}
