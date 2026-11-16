'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import CourseSidebar from './CourseSidebar';
import CourseProducts from './CourseProducts';
import {
  CoursesSectionProps,
  CourseCategoryItem,
  CourseInstructorItem,
} from '@/types/courseTypes';
import { ALL_COURSES_DATA, FEATURED_COURSES_SIDEBAR_DATA } from '@/data/courseData';

export default function CoursesSection({
  courses = ALL_COURSES_DATA,
}: CoursesSectionProps) {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get('category') || '';
  const urlInstructor = searchParams.get('instructor') || '';
  const urlQuery = searchParams.get('q') || '';

  const [localCategory, setLocalCategory] = useState<string | null>(null);
  const [localInstructor, setLocalInstructor] = useState<string | null>(null);
  const [localQuery, setLocalQuery] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('');

  const selectedCategory = localCategory !== null ? localCategory : urlCategory;
  const selectedInstructor = localInstructor !== null ? localInstructor : urlInstructor;
  const searchQuery = localQuery !== null ? localQuery : urlQuery;

  // Extract dynamic category counts
  const categoriesList: CourseCategoryItem[] = useMemo(() => {
    const totalCount = courses.length;
    const catItems: CourseCategoryItem[] = [
      { label: 'All Courses', count: totalCount, value: '' },
    ];

    const rawCategories = Array.from(
      new Set(courses.map((c) => c.category || '').filter(Boolean))
    );

    rawCategories.forEach((cat) => {
      catItems.push({
        label: cat,
        value: cat,
        count: courses.filter(
          (c) => (c.category || '').toLowerCase() === cat.toLowerCase()
        ).length,
      });
    });

    return catItems;
  }, [courses]);

  // Extract dynamic instructors list
  const instructorsList: CourseInstructorItem[] = useMemo(() => {
    const rawInstructors = [
      'Umar Tazkeer',
      'Sahil Sir',
      'Ankur Sir',
      'Shiva Sir',
      'Aditya',
    ];

    return rawInstructors
      .map((inst) => ({
        label: inst,
        value: inst,
        count: courses.filter((c) =>
          (c.instructor || '').toLowerCase().includes(inst.toLowerCase())
        ).length,
      }))
      .filter((inst) => inst.count > 0);
  }, [courses]);

  const handleSelectCategory = (category: string) => {
    setLocalCategory((prev) => {
      const current = prev !== null ? prev : urlCategory;
      return current.toLowerCase() === category.toLowerCase() ? '' : category;
    });
  };

  const handleSelectInstructor = (instructor: string) => {
    setLocalInstructor((prev) => {
      const current = prev !== null ? prev : urlInstructor;
      return current.toLowerCase() === instructor.toLowerCase() ? '' : instructor;
    });
  };

  const handleClearAllFilters = () => {
    setLocalCategory('');
    setLocalInstructor('');
    setLocalQuery('');
    setSortBy('');
  };

  const hasActiveFilters = Boolean(
    selectedCategory || selectedInstructor || searchQuery
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        {/* Search Input */}
        <div className="w-full sm:w-80">
          <div className="relative">
            <input
              type="search"
              placeholder="Search courses, mentors, tools..."
              className="w-full rounded-lg border border-slate-300 bg-slate-50/50 py-2 pl-3.5 pr-9 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-blue-600 focus:outline-hidden transition-colors"
              value={searchQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
            />
            <span className="absolute right-3 top-2.5 text-slate-400">
              <svg
                className="w-4 h-4"
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
            </span>
          </div>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end text-xs sm:text-sm font-semibold text-slate-700">
          <label htmlFor="course-sort">Sort by:</label>
          <select
            id="course-sort"
            className="rounded-lg border border-slate-300 bg-white py-1.5 px-3 text-xs sm:text-sm font-medium text-slate-800 focus:border-blue-600 focus:outline-hidden cursor-pointer"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Featured Programs</option>
            <option value="bestseller">Top Selling / Bestseller</option>
            <option value="rating">Highest Rated</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Active Filter Badges Bar */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 mb-6 bg-blue-50/50 p-3.5 rounded-xl border border-blue-100 shadow-2xs">
          <span className="text-xs font-bold text-slate-700">Active Filters:</span>

          {selectedCategory && (
            <button
              type="button"
              onClick={() => setLocalCategory('')}
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white transition hover:bg-blue-700 cursor-pointer border-0 shadow-2xs"
            >
              <span>Category: {selectedCategory}</span>
              <span className="font-bold">&times;</span>
            </button>
          )}

          {selectedInstructor && (
            <button
              type="button"
              onClick={() => setLocalInstructor('')}
              className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white transition hover:bg-indigo-700 cursor-pointer border-0 shadow-2xs"
            >
              <span>Mentor: {selectedInstructor}</span>
              <span className="font-bold">&times;</span>
            </button>
          )}

          {searchQuery && (
            <button
              type="button"
              onClick={() => setLocalQuery('')}
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-700 px-3 py-1 text-xs font-semibold text-white transition hover:bg-slate-800 cursor-pointer border-0 shadow-2xs"
            >
              <span>Search: &ldquo;{searchQuery}&rdquo;</span>
              <span className="font-bold">&times;</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleClearAllFilters}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline bg-transparent border-0 cursor-pointer ml-auto"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-8">
        <CourseProducts
          courses={courses}
          filterCategory={selectedCategory}
          filterInstructor={selectedInstructor}
          searchQuery={searchQuery}
          sortBy={sortBy}
          onSelectCategory={handleSelectCategory}
          onClearFilters={handleClearAllFilters}
        />
        <CourseSidebar
          categories={categoriesList}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          instructors={instructorsList}
          selectedInstructor={selectedInstructor}
          onSelectInstructor={handleSelectInstructor}
          featuredCourses={FEATURED_COURSES_SIDEBAR_DATA}
        />
      </div>
    </div>
  );
}
