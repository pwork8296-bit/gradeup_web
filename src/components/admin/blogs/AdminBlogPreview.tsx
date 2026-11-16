'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Edit2, Calendar, User, Eye, Tag } from '@/components/admin/common/AdminIcons';
import { ADMIN_BLOGS_DATA } from '@/data/adminData';

interface AdminBlogPreviewProps {
  blogId: string | number;
}

export default function AdminBlogPreview({ blogId }: AdminBlogPreviewProps) {
  const blog =
    ADMIN_BLOGS_DATA.find((b) => String(b.id) === String(blogId)) || ADMIN_BLOGS_DATA[0];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs"
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Article Preview</h1>
            <p className="text-xs text-slate-500">Preview how learners read this post</p>
          </div>
        </div>

        <Link
          href={`/admin/blog/edit/${blog.id}`}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition"
        >
          <Edit2 className="w-4 h-4" />
          <span>Edit Article</span>
        </Link>
      </div>

      {/* Article Article Body */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
        {blog.image && (
          <div className="w-full h-72 overflow-hidden bg-slate-100">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="p-6 md:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold text-[11px]">
              <Tag className="w-3 h-3" />
              <span>{blog.category}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>{blog.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{blog.publishedAt}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-slate-400" />
              <span>{blog.views.toLocaleString()} views</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            {blog.title}
          </h1>

          <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-4">
            <p>
              Digital marketing has transitioned into an automated, data-driven landscape. For
              practitioners aiming to stay ahead in 2026, understanding omnichannel conversion funnels
              and continuous attribution analysis is paramount.
            </p>
            <h2 className="text-lg font-bold text-slate-900 mt-6">
              1. First-Party Data & Server-Side Tracking
            </h2>
            <p>
              With third-party cookies phased out, relying on browser pixel events leads to signal
              loss exceeding 30%. Server-to-server CAPI (Conversions API) setups provide the resilience
              needed to train machine learning algorithms effectively.
            </p>
            <h2 className="text-lg font-bold text-slate-900 mt-6">
              2. Creative Velocity as the New Bidding Strategy
            </h2>
            <p>
              Modern ad algorithms determine delivery primarily through audience creative resonance.
              Testing 10–20 creative angles weekly separates stagnant campaigns from exponential 10x
              growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
