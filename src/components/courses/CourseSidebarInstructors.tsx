'use client';

import React from 'react';
import { CourseSidebarInstructorsProps } from '@/types/courseTypes';

export default function CourseSidebarInstructors({
  instructors = [],
  selectedInstructor = '',
  onSelectInstructor,
}: CourseSidebarInstructorsProps) {
  if (instructors.length === 0) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2.5">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
          Instructors
        </h4>
        {selectedInstructor && (
          <button
            type="button"
            onClick={() => onSelectInstructor && onSelectInstructor('')}
            className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 transition cursor-pointer"
          >
            Reset
          </button>
        )}
      </div>

      <ul className="space-y-1 p-0 list-none mb-0">
        {instructors.map((inst) => {
          const instValue = inst.value !== undefined ? inst.value : inst.label;
          const isSelected =
            selectedInstructor.toLowerCase() === instValue.toLowerCase() ||
            (instValue === '' && selectedInstructor === '');

          return (
            <li key={inst.label}>
              <button
                type="button"
                onClick={() => onSelectInstructor && onSelectInstructor(instValue)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 border-0 text-left cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                }`}
              >
                <span className="truncate">{inst.label}</span>
                <span
                  className={`text-[11px] font-medium ml-2 ${
                    isSelected ? 'text-blue-100' : 'text-slate-400'
                  }`}
                >
                  ({inst.count})
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
