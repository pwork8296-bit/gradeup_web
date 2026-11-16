'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, CheckCircle } from '@/components/admin/common/AdminIcons';
import { ADMIN_PRODUCTS_DATA, ADMIN_CATEGORIES_DATA } from '@/data/adminData';
import { AdminProductItem } from '@/types/adminTypes';

interface AdminProductFormProps {
  productId?: string | number;
  mode?: 'add' | 'edit';
}

export default function AdminProductForm({ productId, mode = 'add' }: AdminProductFormProps) {
  const router = useRouter();
  const isEdit = mode === 'edit' || Boolean(productId);

  const [formData, setFormData] = useState<Partial<AdminProductItem>>({
    title: '',
    slug: '',
    category: 'Performance Marketing',
    price: 3499,
    originalPrice: 6999,
    instructor: 'Umar Tazkeer',
    studentsCount: 0,
    status: 'published',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (productId) {
      const found = ADMIN_PRODUCTS_DATA.find((p) => String(p.id) === String(productId));
      if (found) {
        setFormData(found);
      }
    }
  }, [productId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => {
      router.push('/admin/products');
    }, 1200);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products"
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              {isEdit ? 'Edit Course Product' : 'Add New Course Product'}
            </h1>
            <p className="text-xs text-slate-500">
              {isEdit ? 'Update details, curriculum, and pricing' : 'Create and publish a new masterclass or bundle'}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {savedSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Course saved successfully! Redirecting to products list...</span>
        </div>
      )}

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Title */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Course Title *</label>
            <input
              type="text"
              required
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Complete Meta Ads Mastery 2026"
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">URL Slug *</label>
            <input
              type="text"
              required
              value={formData.slug || ''}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="meta-ads-mastery"
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>

          {/* Category */}
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

          {/* Price */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Selling Price (₹) *</label>
            <input
              type="number"
              required
              value={formData.price ?? 3499}
              onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>

          {/* Original Price */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Original / Strikethrough Price (₹)</label>
            <input
              type="number"
              value={formData.originalPrice ?? 7999}
              onChange={(e) => setFormData({ ...formData, originalPrice: Number(e.target.value) })}
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>

          {/* Instructor */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Lead Instructor *</label>
            <input
              type="text"
              required
              value={formData.instructor || ''}
              onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
              placeholder="e.g. Umar Tazkeer"
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Publish Status *</label>
            <select
              value={formData.status || 'published'}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as 'published' | 'draft' | 'archived',
                })
              }
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
            >
              <option value="published">Published (Visible in store)</option>
              <option value="draft">Draft (Hidden)</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          {/* Thumbnail Image URL */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Banner Image URL</label>
            <input
              type="url"
              value={formData.image || ''}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://..."
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
            {formData.image && (
              <div className="mt-3">
                <p className="text-[11px] text-slate-400 mb-1">Image Preview:</p>
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-48 h-28 rounded-lg object-cover ring-1 ring-slate-200"
                />
              </div>
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <Link
            href="/admin/products"
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-xs"
          >
            {isEdit ? 'Update Course' : 'Publish Course'}
          </button>
        </div>
      </form>
    </div>
  );
}
