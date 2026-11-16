'use client';

import React from 'react';
import Link from 'next/link';
import { CourseSidebarFeaturedProps } from '@/types/courseTypes';
import { FEATURED_COURSES_SIDEBAR_DATA } from '@/data/courseData';

export default function CourseSidebarFeatured({
  courses = FEATURED_COURSES_SIDEBAR_DATA,
}: CourseSidebarFeaturedProps) {
  if (!courses || courses.length === 0) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-100 pb-2.5">
        Featured Programs
      </h4>
      <div className="space-y-3">
        {courses.map((item) => {
          const href = '#';
          return (
            <Link
              key={item.id}
              href={href}
              className="flex items-center gap-3 rounded-lg border border-slate-100 p-2.5 no-underline text-slate-900 hover:border-blue-400 hover:bg-slate-50/60 transition group"
            >
              <div className="h-14 w-14 flex-shrink-0 bg-slate-900 rounded-md overflow-hidden relative">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-blue-900/60 flex items-center justify-center text-white text-[10px] font-bold">
                    UT
                  </div>
                )}
                {item.tag && (
                  <span className="absolute bottom-0 inset-x-0 bg-blue-600/90 text-white text-[8px] font-bold text-center py-0.5">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h5
                  className="text-xs font-semibold text-slate-900 truncate mb-1 group-hover:text-blue-600 transition-colors"
                  title={item.title}
                >
                  {item.title}
                </h5>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-blue-600">{item.price}</span>
                  {item.originalPrice && (
                    <span className="text-[10px] text-slate-400 line-through">
                      {item.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
