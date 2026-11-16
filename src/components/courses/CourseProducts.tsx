'use client';

import React from 'react';
import ProductCard from '@/components/products/ProductCard';
import { CourseProductsProps } from '@/types/courseTypes';

export default function CourseProducts({
  courses = [],
  filterCategory = '',
  filterInstructor = '',
  searchQuery = '',
  sortBy = '',
  onClearFilters,
}: CourseProductsProps) {
  // 1. Filter by category
  let filtered = filterCategory
    ? courses.filter(
        (c) => (c.category || '').toLowerCase() === filterCategory.toLowerCase()
      )
    : courses;

  // 2. Filter by instructor
  if (filterInstructor) {
    const instQuery = filterInstructor.toLowerCase().trim();
    filtered = filtered.filter((c) =>
      (c.instructor || '').toLowerCase().includes(instQuery)
    );
  }

  // 3. Filter by search query
  if (searchQuery && searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(
      (c) =>
        (c.title || '').toLowerCase().includes(q) ||
        (c.instructor || '').toLowerCase().includes(q) ||
        (c.category || '').toLowerCase().includes(q) ||
        (c.slug || '').toLowerCase().includes(q)
    );
  }

  // 4. Sort
  if (sortBy === 'low-to-high') {
    filtered = [...filtered].sort(
      (a, b) => (a.discountedPrice || 0) - (b.discountedPrice || 0)
    );
  } else if (sortBy === 'high-to-low') {
    filtered = [...filtered].sort(
      (a, b) => (b.discountedPrice || 0) - (a.discountedPrice || 0)
    );
  } else if (sortBy === 'bestseller') {
    filtered = [...filtered].sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  return (
    <div className="w-full lg:w-3/4 order-1 lg:order-2">
      {/* Course Count Summary */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs sm:text-sm font-medium text-slate-500">
          Showing <span className="font-bold text-slate-900">{filtered.length}</span>{' '}
          {filtered.length === 1 ? 'course' : 'courses'}
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <ProductCard
              key={course.id}
              product={{
                id: course.id,
                title: course.title,
                slug: course.slug,
                image: course.image,
                thumbnail: course.image,
                instructor: course.instructor,
                rating: course.rating,
                ratingsCount: course.ratingsCount,
                originalPrice: course.originalPrice,
                discountedPrice: course.discountedPrice,
                isBestseller: course.isBestseller,
                ctaLink: course.ctaLink || `/courses/${course.slug}`,
              }}
              showRating={true}
              showActionBtn={true}
              actionBtnText="View Details"
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12 sm:p-16 rounded-2xl border border-slate-200 bg-white text-center shadow-xs">
          <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            No courses found matching your criteria
          </h3>
          <p className="text-sm text-slate-500 mb-6 max-w-md">
            Try adjusting your search terms, changing the category filter, or resetting all filters to see all available programs.
          </p>
          {onClearFilters && (
            <button
              type="button"
              onClick={onClearFilters}
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-blue-700 transition cursor-pointer shadow-sm border-0"
            >
              Reset All Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
