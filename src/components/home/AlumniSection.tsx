'use client';

import React, { useRef } from 'react';
import { AlumniSectionProps } from '@/types/courseTypes';
import { ALUMNI_DATA } from '@/data/courseData';

export default function AlumniSection({
  alumni = ALUMNI_DATA,
}: AlumniSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-[#f5f5ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Alumni <span className="text-[#3c4dc9]">Students</span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Thousands of learners have transformed their careers and businesses with our training. Results from alumni who turned knowledge into real-world results.
          </p>
        </div>

        {/* Carousel / Scroll container with control arrows */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#f5a623] text-white items-center justify-center shadow-lg hover:bg-[#e09212] transition-colors"
            aria-label="Previous"
          >
            ❮
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#f5a623] text-white items-center justify-center shadow-lg hover:bg-[#e09212] transition-colors"
            aria-label="Next"
          >
            ❯
          </button>

          {/* Cards Track */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          >
            {alumni.map((student) => (
              <div
                key={student.id}
                className="w-[260px] sm:w-[280px] flex-shrink-0 snap-start bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.06)] p-5 flex flex-col items-center text-center justify-between hover:shadow-xl transition-shadow"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {student.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium min-h-[36px] mt-1 leading-tight flex items-center justify-center">
                    {student.role}
                  </p>

                  {/* Alumni Image */}
                  <div className="my-3 w-40 h-44 overflow-hidden rounded-xl flex items-center justify-center bg-slate-50">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="w-full pt-2 flex flex-col items-center">
                  <span className="text-xs font-bold text-[#289afd]">
                    UT Digital Media Alumni
                  </span>
                  <p className="text-base font-bold text-slate-900 mt-1">
                    Package: {student.package}
                  </p>
                  <div className="mt-2 h-7 flex items-center justify-center">
                    <img
                      src={student.companyLogo}
                      alt="Company Logo"
                      className="max-h-6 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
