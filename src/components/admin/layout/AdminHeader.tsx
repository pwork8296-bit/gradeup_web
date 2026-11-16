'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  Search,
  Bell,
  CheckCircle,
  User,
  LogOut,
  Settings,
  ChevronDown,
} from '@/components/admin/common/AdminIcons';
import { ADMIN_NOTIFICATIONS_DATA } from '@/data/adminData';

interface AdminHeaderProps {
  onToggleMobileSidebar: () => void;
}

export default function AdminHeader({ onToggleMobileSidebar }: AdminHeaderProps) {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 md:px-8 bg-white border-b border-slate-200 shadow-xs">
      {/* Left Area: Hamburger & Search */}
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={onToggleMobileSidebar}
          className="p-2 text-slate-600 rounded-lg md:hidden hover:bg-slate-100 focus:outline-hidden"
          aria-label="Toggle Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search courses, learners, transactions..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-500 focus:bg-white text-slate-800 transition"
          />
        </div>
      </div>

      {/* Right Area: Actions & Profile */}
      <div className="flex items-center gap-3">
        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setIsNotifOpen(!isNotifOpen);
              setIsProfileOpen(false);
            }}
            className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white" />
          </button>

          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1">
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-800">Notifications</span>
                <span className="text-[10px] bg-blue-50 text-blue-600 font-semibold px-2 py-0.5 rounded-full">
                  {ADMIN_NOTIFICATIONS_DATA.filter((n) => !n.read).length} New
                </span>
              </div>
              <div className="max-h-64 overflow-y-auto divide-y divide-slate-100">
                {ADMIN_NOTIFICATIONS_DATA.map((item) => (
                  <div key={item.id} className="p-3 hover:bg-slate-50 transition cursor-pointer">
                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-600 shrink-0" />
                      <div>
                        <p className="text-xs text-slate-700 leading-snug">{item.title}</p>
                        <span className="text-[10px] text-slate-400 mt-1 block">{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-2 border-t border-slate-100 text-center">
                <button
                  onClick={() => setIsNotifOpen(false)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  Mark all as read
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setIsProfileOpen(!isProfileOpen);
              setIsNotifOpen(false);
            }}
            className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-100 transition"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-blue-100">
              UT
            </div>
            <div className="hidden lg:block text-left text-xs">
              <p className="font-semibold text-slate-800 leading-tight">Umar Tazkeer</p>
              <p className="text-[10px] text-slate-400">Super Admin</p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden lg:block" />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
              <div className="px-4 py-2 border-b border-slate-100">
                <p className="text-xs font-semibold text-slate-800">Umar Tazkeer</p>
                <p className="text-[11px] text-slate-500">admin@umartazkeer.com</p>
              </div>

              <div className="py-1">
                <Link
                  href="/admin/users"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  <span>Admin Profile</span>
                </Link>
                <Link
                  href="/admin/settings"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                >
                  <Settings className="w-4 h-4 text-slate-400" />
                  <span>Settings</span>
                </Link>
              </div>

              <div className="pt-1 border-t border-slate-100">
                <Link
                  href="/admin/login"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-xs text-rose-600 hover:bg-rose-50"
                >
                  <LogOut className="w-4 h-4 text-rose-500" />
                  <span>Sign Out</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
