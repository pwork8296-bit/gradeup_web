'use client';

import React from 'react';
import Link from 'next/link';
import {
  PlusCircle,
  FileText,
  Users,
  ArrowUpRight,
  TrendingUp,
} from '@/components/admin/common/AdminIcons';
import AdminStatCards from './AdminStatCards';
import AdminRecentOrdersTable from './AdminRecentOrdersTable';
import { ADMIN_PRODUCTS_DATA, ADMIN_BLOGS_DATA } from '@/data/adminData';

export default function DashboardClient() {
  return (
    <div className="space-y-6">
      {/* Top Banner / Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-2xl text-white shadow-sm">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-blue-400">
            Overview & Analytics
          </span>
          <h1 className="text-xl sm:text-2xl font-bold mt-1">
            Welcome Back, Umar Tazkeer
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Track your academy performance, live course enrollments, and learner analytics.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/product/add"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-xs text-white shadow-sm transition"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Course</span>
          </Link>
          <Link
            href="/admin/blog/add"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-xs text-slate-200 border border-slate-700 transition"
          >
            <FileText className="w-4 h-4" />
            <span>New Article</span>
          </Link>
        </div>
      </div>

      {/* Primary Stat Cards */}
      <AdminStatCards />

      {/* Grid: Recent Orders & Quick Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Enrollments (2 columns) */}
        <div className="lg:col-span-2">
          <AdminRecentOrdersTable />
        </div>

        {/* Popular Courses & Content (1 column) */}
        <div className="space-y-6">
          {/* Top Courses */}
          <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-3">
              <h3 className="font-bold text-slate-800 text-sm">Top Courses</h3>
              <Link
                href="/admin/products"
                className="text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                Manage
              </Link>
            </div>
            <div className="space-y-3">
              {ADMIN_PRODUCTS_DATA.slice(0, 3).map((prod) => (
                <div key={prod.id} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-9 h-9 rounded-lg object-cover shrink-0"
                    />
                    <div className="max-w-[140px] truncate">
                      <p className="font-semibold text-slate-900 truncate">{prod.title}</p>
                      <p className="text-[11px] text-slate-400">{prod.studentsCount} Students</p>
                    </div>
                  </div>
                  <span className="font-bold text-slate-800">₹{prod.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Insights Box */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider mb-2">
              <TrendingUp className="w-4 h-4" />
              <span>Academy Growth Tip</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Meta Ads course batch 4 is currently 85% full. Consider opening early-bird registrations
              for the upcoming Google Ads SEM masterclass.
            </p>
            <div className="mt-4 pt-3 border-t border-blue-200/60 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">Active Batches: 8</span>
              <Link
                href="/admin/products"
                className="font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1"
              >
                <span>View Batches</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
