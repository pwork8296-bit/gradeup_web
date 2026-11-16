'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, CheckCircle } from '@/components/admin/common/AdminIcons';
import { ADMIN_CLIENTS_DATA, ADMIN_PRODUCTS_DATA } from '@/data/adminData';
import { AdminClientItem } from '@/types/adminTypes';

interface AdminClientFormProps {
  clientId?: string | number;
  mode?: 'add' | 'edit';
}

export default function AdminClientForm({ clientId, mode = 'add' }: AdminClientFormProps) {
  const router = useRouter();
  const isEdit = mode === 'edit' || Boolean(clientId);

  const [formData, setFormData] = useState<Partial<AdminClientItem>>({
    name: '',
    email: '',
    phone: '',
    enrolledCourse: 'Advanced Performance Marketing & Growth Masterclass',
    amount: '₹ 4,999',
    status: 'active',
    date: '15 Mar 2026',
    avatar: 'https://images.unsplash.com/photo-1570612861542-284f4c12e75f?auto=format&fit=crop&w=120&q=80',
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (clientId) {
      const found = ADMIN_CLIENTS_DATA.find((c) => String(c.id) === String(clientId));
      if (found) {
        setFormData(found);
      }
    }
  }, [clientId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => {
      router.push('/admin/clients');
    }, 1200);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/clients"
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              {isEdit ? 'Edit Learner Profile' : 'Enroll New Learner'}
            </h1>
            <p className="text-xs text-slate-500">Manage student course access and payment status.</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition"
        >
          <Save className="w-4 h-4" />
          <span>Save Learner</span>
        </button>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Learner details saved successfully! Redirecting...</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address *</label>
            <input
              type="email"
              required
              value={formData.email || ''}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="rahul@example.com"
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
            <input
              type="text"
              value={formData.phone || ''}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Enrolled Course *</label>
            <select
              value={formData.enrolledCourse || ''}
              onChange={(e) => setFormData({ ...formData, enrolledCourse: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
            >
              {ADMIN_PRODUCTS_DATA.map((p) => (
                <option key={p.id} value={p.title}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Amount Paid *</label>
            <input
              type="text"
              required
              value={formData.amount || ''}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              placeholder="₹ 4,999"
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Enrollment Status</label>
            <select
              value={formData.status || 'active'}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as 'active' | 'completed' | 'pending' | 'cancelled',
                })
              }
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
            >
              <option value="active">Active (Access Granted)</option>
              <option value="completed">Completed (Certificate Issued)</option>
              <option value="pending">Pending Payment Verification</option>
              <option value="cancelled">Cancelled / Refunded</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <Link
            href="/admin/clients"
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-xs"
          >
            {isEdit ? 'Update Learner' : 'Save Learner'}
          </button>
        </div>
      </form>
    </div>
  );
}
