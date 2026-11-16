'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PlusCircle, Search, Edit2, Trash2, Eye } from '@/components/admin/common/AdminIcons';
import { ADMIN_BLOGS_DATA } from '@/data/adminData';
import { AdminBlogItem } from '@/types/adminTypes';

export default function AdminBlogList() {
  const [blogs, setBlogs] = useState<AdminBlogItem[]>(ADMIN_BLOGS_DATA);
  const [search, setSearch] = useState('');

  const filtered = blogs.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string | number) => {
    if (confirm('Are you sure you want to delete this article?')) {
      setBlogs(blogs.filter((b) => b.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Articles & Blog CMS</h1>
          <p className="text-xs text-slate-500 mt-1">
            Publish educational articles, marketing breakdowns, and industry updates.
          </p>
        </div>
        <Link
          href="/admin/blog/add"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition"
        >
          <PlusCircle className="w-4 h-4" />
          <span>New Article</span>
        </Link>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search blogs by title..."
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
                <th className="py-3 px-5">Title</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Author</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Views</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/60 transition">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-10 h-10 rounded-lg object-cover ring-1 ring-slate-200 shrink-0"
                      />
                      <div className="max-w-[280px]">
                        <p className="font-semibold text-slate-900 truncate">{item.title}</p>
                        <p className="text-[11px] text-slate-400 truncate">/{item.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{item.category}</td>
                  <td className="py-3.5 px-4 text-slate-600">{item.author}</td>
                  <td className="py-3.5 px-4 text-slate-500">{item.publishedAt}</td>
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
                  <td className="py-3.5 px-4 font-semibold text-slate-800">{item.views.toLocaleString()}</td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/blog/preview/${item.id}`}
                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-slate-100 rounded-md transition"
                        title="Preview article"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/admin/blog/edit/${item.id}`}
                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-slate-100 rounded-md transition"
                        title="Edit article"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition"
                        title="Delete article"
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
