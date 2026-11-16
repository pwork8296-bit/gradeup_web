'use client';

import React from 'react';
import { CourseSidebarCategoriesProps } from '@/types/courseTypes';

export default function CourseSidebarCategories({
  categories = [],
  selectedCategory = '',
  onSelectCategory,
}: CourseSidebarCategoriesProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2.5">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
          Categories
        </h4>
        {selectedCategory && (
          <button
            type="button"
            onClick={() => onSelectCategory && onSelectCategory('')}
            className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 transition cursor-pointer"
          >
            Reset
          </button>
        )}
      </div>

      <ul className="space-y-1 p-0 list-none mb-0">
        {categories.map((cat) => {
          const catValue = cat.value !== undefined ? cat.value : cat.label;
          const isSelected =
            selectedCategory.toLowerCase() === catValue.toLowerCase() ||
            (catValue === '' && selectedCategory === '');

          return (
            <li key={cat.label}>
              <button
                type="button"
                onClick={() => onSelectCategory && onSelectCategory(catValue)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 border-0 text-left cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                }`}
              >
                <span className="truncate">{cat.label}</span>
                <span
                  className={`text-[11px] font-medium ml-2 ${
                    isSelected ? 'text-blue-100' : 'text-slate-400'
                  }`}
                >
                  ({cat.count})
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
