'use client';

import React from 'react';
import Link from 'next/link';
import { BlogCardProps } from '@/types/blogTypes';

export default function BlogCard({ post }: BlogCardProps) {
  const { slug, title, excerpt, image, category, author, publishedAt, readTime } = post;
  const postUrl = `/blog-preview?slug=${slug}`;

  return (
    <article className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200">
      {/* Blog Thumbnail */}
      <Link href={postUrl} className="relative block aspect-[16/9] w-full overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
          {category}
        </span>
      </Link>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <span>{publishedAt}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          {/* Title */}
          <Link href={postUrl} className="no-underline">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-2">
              {title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
            {excerpt}
          </p>
        </div>

        {/* Author Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-7 h-7 rounded-full object-cover border border-slate-200"
            />
            <div>
              <span className="block text-xs font-semibold text-slate-800">{author.name}</span>
              {author.role && (
                <span className="block text-[10px] text-slate-400">{author.role}</span>
              )}
            </div>
          </div>

          <Link
            href={postUrl}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 no-underline"
          >
            <span>Read</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
