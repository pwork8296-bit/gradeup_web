'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, ArrowRight, CheckCircle } from '@/components/admin/common/AdminIcons';

export default function AdminForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-slate-200/80">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-lg mb-3 shadow-md shadow-blue-500/20">
          UT
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Reset Password</h1>
        <p className="text-xs text-slate-500 mt-1">
          Enter your staff email to receive password recovery instructions.
        </p>
      </div>

      {sent ? (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs space-y-2 text-center">
          <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto" />
          <p className="font-bold">Reset Instructions Dispatched</p>
          <p className="text-slate-600">
            If an admin account exists for <span className="font-semibold">{email}</span>, a secure
            reset link has been sent.
          </p>
          <div className="pt-2">
            <Link
              href="/admin/login"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700"
            >
              Return to Login
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Registered Email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@umartazkeer.com"
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white text-slate-800"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-sm"
          >
            <span>Send Reset Link</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}

      <div className="mt-6 pt-5 border-t border-slate-100 text-center">
        <Link
          href="/admin/login"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Sign In</span>
        </Link>
      </div>
    </div>
  );
}
