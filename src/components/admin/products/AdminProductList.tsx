'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PlusCircle, Search, Edit2, Trash2, Eye } from '@/components/admin/common/AdminIcons';
import { ADMIN_PRODUCTS_DATA } from '@/data/adminData';
import { AdminProductItem } from '@/types/adminTypes';

export default function AdminProductList() {
  const [products, setProducts] = useState<AdminProductItem[]>(ADMIN_PRODUCTS_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: string | number) => {
    if (confirm('Are you sure you want to delete this course product?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Courses & Products</h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage course curriculum, pricing, instructors, and publishing status.
          </p>
        </div>
        <Link
          href="/admin/product/add"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add New Course</span>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by course name or tutor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-500 focus:bg-white text-slate-800"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full sm:w-auto text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-hidden focus:border-blue-500"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Course Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead className="bg-slate-50/80 text-slate-600 font-semibold border-b border-slate-100 uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-5">Course</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Instructor</th>
                <th className="py-3 px-4">Learners</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-slate-400">
                    No courses match your search criteria.
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/60 transition">
                    <td className="py-3.5 px-5">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-10 h-10 rounded-lg object-cover ring-1 ring-slate-200 shrink-0"
                        />
                        <div className="max-w-[240px]">
                          <p className="font-semibold text-slate-900 truncate">{item.title}</p>
                          <p className="text-[11px] text-slate-400 truncate">/{item.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">{item.category}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      ₹{item.price}{' '}
                      {item.originalPrice && (
                        <span className="text-[11px] line-through font-normal text-slate-400 ml-1">
                          ₹{item.originalPrice}
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">{item.instructor}</td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">{item.studentsCount}</td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-full border capitalize ${
                          item.status === 'published'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/courses/${item.slug}`}
                          target="_blank"
                          className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-slate-100 rounded-md transition"
                          title="Preview live"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/admin/product/edit/${item.id}`}
                          className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-slate-100 rounded-md transition"
                          title="Edit course"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition"
                          title="Delete course"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
