'use client';

import React, { useState, useMemo } from 'react';
import BlogCard from './BlogCard';
import { BlogsGridSectionProps } from '@/types/blogTypes';
import { BLOG_POSTS_DATA } from '@/data/blogData';

export default function BlogsGridSection({
  posts = BLOG_POSTS_DATA,
}: BlogsGridSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map((p) => p.category)));
    return ['All', ...unique];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchCategory =
        !selectedCategory ||
        selectedCategory === 'All' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.author.name.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Search and Category Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        {/* Search */}
        <div className="w-full sm:w-80">
          <div className="relative">
            <input
              type="search"
              placeholder="Search articles, guides, strategies..."
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-2 pl-3.5 pr-9 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-blue-600 focus:outline-hidden"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute right-3 top-2.5 text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {categories.map((cat) => {
            const isSelected =
              (cat === 'All' && !selectedCategory) ||
              selectedCategory.toLowerCase() === cat.toLowerCase();

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat === 'All' ? '' : cat)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Articles */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">No Articles Found</h3>
          <p className="text-sm text-slate-500 mb-6">
            We couldn&apos;t find any articles matching your search. Try resetting the filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('');
              setSearchQuery('');
            }}
            className="rounded-lg bg-blue-600 px-5 py-2 text-xs font-bold text-white hover:bg-blue-700 transition cursor-pointer border-0"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
