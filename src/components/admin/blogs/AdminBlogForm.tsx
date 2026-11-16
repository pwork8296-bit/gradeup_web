'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, CheckCircle, Eye } from '@/components/admin/common/AdminIcons';
import { ADMIN_BLOGS_DATA, ADMIN_CATEGORIES_DATA } from '@/data/adminData';
import { AdminBlogItem } from '@/types/adminTypes';

interface AdminBlogFormProps {
  blogId?: string | number;
  mode?: 'add' | 'edit';
}

export default function AdminBlogForm({ blogId, mode = 'add' }: AdminBlogFormProps) {
  const router = useRouter();
  const isEdit = mode === 'edit' || Boolean(blogId);

  const [formData, setFormData] = useState<Partial<AdminBlogItem> & { content?: string }>({
    title: '',
    slug: '',
    category: 'Performance Marketing',
    author: 'Umar Tazkeer',
    publishedAt: '2026-03-15',
    status: 'published',
    views: 0,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    content:
      'Digital marketing is constantly evolving. In this comprehensive guide, we unpack the exact strategies and frameworks used by leading performance agencies to scale campaigns profitably in 2026.',
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (blogId) {
      const found = ADMIN_BLOGS_DATA.find((b) => String(b.id) === String(blogId));
      if (found) {
        setFormData((prev) => ({ ...prev, ...found }));
      }
    }
  }, [blogId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => {
      router.push('/admin/blogs');
    }, 1200);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs"
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              {isEdit ? 'Edit Article' : 'Write New Article'}
            </h1>
            <p className="text-xs text-slate-500">Draft, format, and publish blog content.</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isEdit && blogId && (
            <Link
              href={`/admin/blog/preview/${blogId}`}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition"
            >
              <Eye className="w-4 h-4 text-slate-400" />
              <span>Preview</span>
            </Link>
          )}
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition"
          >
            <Save className="w-4 h-4" />
            <span>Publish Article</span>
          </button>
        </div>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Article saved successfully! Redirecting...</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Article Title *</label>
            <input
              type="text"
              required
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. How to Scale Meta Ads to 10 Lakhs/Month in 2026"
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Slug *</label>
            <input
              type="text"
              required
              value={formData.slug || ''}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="how-to-scale-meta-ads-2026"
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Category *</label>
            <select
              value={formData.category || 'Performance Marketing'}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
            >
              {ADMIN_CATEGORIES_DATA.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Author</label>
            <input
              type="text"
              value={formData.author || 'Umar Tazkeer'}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Publish Status</label>
            <select
              value={formData.status || 'published'}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value as 'published' | 'draft' })
              }
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
            >
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Featured Image URL</label>
            <input
              type="url"
              value={formData.image || ''}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://images.unsplash.com/..."
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Article Body (Markdown / Text)</label>
            <textarea
              rows={8}
              value={formData.content || ''}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <Link
            href="/admin/blogs"
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-xs"
          >
            {isEdit ? 'Update Article' : 'Publish Article'}
          </button>
        </div>
      </form>
    </div>
  );
}
