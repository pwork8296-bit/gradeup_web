import React from 'react';
import Link from 'next/link';
import { FlagshipProgramsProps } from '@/types/courseTypes';
import { FLAGSHIP_COURSES_DATA } from '@/data/courseData';

export default function FlagshipPrograms({
  courses = FLAGSHIP_COURSES_DATA,
}: FlagshipProgramsProps) {
  return (
    <section className="py-16 bg-[#f5f5ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Flagship <span className="text-[#3c4dc9]">Programs/Courses</span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            In-depth, result-driven learning experiences designed to transform your career and business growth.
          </p>
        </div>

        {/* Courses list */}
        <div className="space-y-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-stretch"
            >
              {/* Left: Thumbnail Image */}
              <div className="md:w-5/12 lg:w-4/12 relative aspect-[16/10] md:aspect-auto overflow-hidden bg-slate-900">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Info */}
              <div className="md:w-7/12 lg:w-8/12 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {course.title}
                  </h3>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-2 mt-2.5">
                    <div className="flex text-[#fdc10b]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-400">
                      {course.rating.toFixed(1)} ({course.ratingsCount} ratings)
                    </span>
                  </div>

                  {/* Instructor */}
                  <p className="mt-2 text-sm font-semibold text-slate-400">
                    {course.instructor}
                  </p>

                  {/* Pricing */}
                  <div className="mt-3 flex items-baseline gap-2 text-[#3c4dc9] font-bold text-lg">
                    {course.originalPrice && (
                      <span className="line-through text-slate-400 text-sm font-normal">
                        ₹{course.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    <span>₹{course.discountedPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="mt-6">
                  <Link
                    href={course.ctaLink}
                    className="block w-full text-center bg-[#3c4dc9] hover:bg-[#a93284] text-white font-medium text-base py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
