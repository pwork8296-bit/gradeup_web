'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { BLOG_POSTS_DATA } from '@/data/blogData';

export default function BlogDetailClient() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  const post =
    BLOG_POSTS_DATA.find((p) => p.slug === slug) || BLOG_POSTS_DATA[0];

  const relatedPosts = BLOG_POSTS_DATA.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Category & Date */}
      <div className="flex items-center gap-3 mb-4">
        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
          {post.category}
        </span>
        <span className="text-xs text-slate-500 font-medium">
          {post.publishedAt} • {post.readTime}
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
        {post.title}
      </h1>

      {/* Author Card */}
      <div className="flex items-center gap-3 pb-6 border-b border-slate-200 mb-8">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-12 h-12 rounded-full object-cover border border-slate-200"
        />
        <div>
          <h4 className="text-sm font-bold text-slate-900">{post.author.name}</h4>
          <p className="text-xs text-slate-500">{post.author.role}</p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 mb-8 shadow-sm">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Body */}
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
        <p className="text-lg font-medium text-slate-800 leading-relaxed">
          {post.excerpt}
        </p>

        {post.content ? (
          <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed">
            {post.content}
          </div>
        ) : (
          <p>Full case study content coming soon.</p>
        )}
      </div>

      {/* Tags */}
      {post.tags && (
        <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-slate-200">
          <span className="text-xs font-bold text-slate-500">Related Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Related Posts */}
      <div className="mt-14 pt-10 border-t border-slate-200">
        <h3 className="text-xl font-bold text-slate-900 mb-6">More Recommended Guides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedPosts.map((r) => (
            <Link
              key={r.id}
              href={`/blog-preview?slug=${r.slug}`}
              className="group flex gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-colors no-underline"
            >
              <img
                src={r.image}
                alt={r.title}
                className="w-24 h-20 rounded-lg object-cover flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold text-blue-600 uppercase">
                  {r.category}
                </span>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mt-1">
                  {r.title}
                </h4>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  {r.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
