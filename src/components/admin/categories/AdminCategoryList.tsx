'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PlusCircle, Search, Edit2, Trash2 } from '@/components/admin/common/AdminIcons';
import { ADMIN_CATEGORIES_DATA } from '@/data/adminData';
import { AdminCategoryItem } from '@/types/adminTypes';

export default function AdminCategoryList() {
  const [categories, setCategories] = useState<AdminCategoryItem[]>(ADMIN_CATEGORIES_DATA);
  const [search, setSearch] = useState('');

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string | number) => {
    if (confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Categories</h1>
          <p className="text-xs text-slate-500 mt-1">
            Organize academy masterclasses into specialized domains.
          </p>
        </div>
        <Link
          href="/admin/category/add"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add New Category</span>
        </Link>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-500 focus:bg-white text-slate-800"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead className="bg-slate-50/80 text-slate-600 font-semibold border-b border-slate-100 uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-5">Name</th>
                <th className="py-3 px-4">Slug</th>
                <th className="py-3 px-4">Description</th>
                <th className="py-3 px-4">Courses</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filtered.map((cat) => (
                <tr key={cat.id} className="hover:bg-slate-50/60 transition">
                  <td className="py-3.5 px-5 font-bold text-slate-900">{cat.name}</td>
                  <td className="py-3.5 px-4 text-slate-500 font-mono text-[11px]">/{cat.slug}</td>
                  <td className="py-3.5 px-4 text-slate-600 max-w-xs truncate">{cat.description}</td>
                  <td className="py-3.5 px-4 font-semibold text-blue-600">{cat.courseCount} courses</td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/category/edit/${cat.id}`}
                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-slate-100 rounded-md transition"
                        title="Edit category"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(cat.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition"
                        title="Delete category"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
