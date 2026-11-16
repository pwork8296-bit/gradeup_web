'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight, ShieldCheck } from '@/components/admin/common/AdminIcons';

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@umartazkeer.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (email && password) {
        router.push('/admin/dashboard');
      } else {
        setError('Please enter valid administrator credentials.');
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-slate-200/80">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-lg mb-3 shadow-md shadow-blue-500/20">
          UT
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Admin Control Center</h1>
        <p className="text-xs text-slate-500 mt-1">
          Authorized personnel only. Enter your credentials.
        </p>
      </div>

      {error && (
        <div className="p-3 mb-5 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Staff Email</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white text-slate-800"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-bold text-slate-700">Password</label>
            <Link
              href="/admin/forget-password"
              className="text-[11px] font-semibold text-blue-600 hover:text-blue-700"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white text-slate-800"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 transition shadow-sm"
        >
          <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Need staff access?</span>
        <Link href="/admin/register" className="font-semibold text-blue-600 hover:text-blue-700">
          Request Account
        </Link>
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>256-bit SSL Protected Portal</span>
      </div>
    </div>
  );
}
