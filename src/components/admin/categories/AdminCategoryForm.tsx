'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, CheckCircle } from '@/components/admin/common/AdminIcons';
import { ADMIN_CATEGORIES_DATA } from '@/data/adminData';
import { AdminCategoryItem } from '@/types/adminTypes';

interface AdminCategoryFormProps {
  categoryId?: string | number;
  mode?: 'add' | 'edit';
}

export default function AdminCategoryForm({ categoryId, mode = 'add' }: AdminCategoryFormProps) {
  const router = useRouter();
  const isEdit = mode === 'edit' || Boolean(categoryId);

  const [formData, setFormData] = useState<Partial<AdminCategoryItem>>({
    name: '',
    slug: '',
    description: '',
    courseCount: 0,
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (categoryId) {
      const found = ADMIN_CATEGORIES_DATA.find((c) => String(c.id) === String(categoryId));
      if (found) {
        setFormData(found);
      }
    }
  }, [categoryId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => {
      router.push('/admin/categories');
    }, 1200);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/categories"
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              {isEdit ? 'Edit Category' : 'Create New Category'}
            </h1>
            <p className="text-xs text-slate-500">
              Manage category taxonomy and student course groupings.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition"
        >
          <Save className="w-4 h-4" />
          <span>Save Category</span>
        </button>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Category saved! Redirecting to list...</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-6 space-y-5">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Category Name *</label>
          <input
            type="text"
            required
            value={formData.name || ''}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Performance Marketing"
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
            placeholder="performance-marketing"
            className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Description</label>
          <textarea
            rows={4}
            value={formData.description || ''}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Brief explanation of this topic track..."
            className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <Link
            href="/admin/categories"
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-xs"
          >
            {isEdit ? 'Update Category' : 'Create Category'}
          </button>
        </div>
      </form>
    </div>
  );
}
