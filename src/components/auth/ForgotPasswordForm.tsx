'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        {/* Header */}
        <div className="text-center mb-6">
          <img
            src={siteConfig.logo}
            alt={siteConfig.name}
            className="inline-block w-12 h-12 rounded-xl object-contain mb-3"
          />
          <h2 className="text-2xl font-extrabold text-slate-900">Reset Password</h2>
          <p className="text-xs text-slate-500 mt-1">
            Enter your registered email address and we will send you a password recovery link
          </p>
        </div>

        {submitted ? (
          <div className="text-center space-y-4">
            <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-xs text-green-800 font-medium">
              A password reset link has been dispatched to <strong>{email}</strong>. Please check your inbox and spam folder.
            </div>
            <Link
              href="/login"
              className="inline-block rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-blue-700 transition no-underline"
            >
              Back to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-blue-600 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-700 shadow-md hover:shadow-lg disabled:opacity-60 cursor-pointer border-0"
            >
              {isSubmitting ? 'Sending Reset Link...' : 'Send Reset Link'}
            </button>

            <div className="pt-2 text-center">
              <Link href="/login" className="text-xs font-semibold text-blue-600 hover:text-blue-800 no-underline">
                &larr; Back to Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
