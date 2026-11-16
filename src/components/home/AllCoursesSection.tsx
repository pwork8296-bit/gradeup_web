import React from 'react';
import { AllCoursesSectionProps } from '@/types/courseTypes';
import { ALL_COURSES_DATA } from '@/data/courseData';
import ProductCard from '@/components/products/ProductCard';

export default function AllCoursesSection({
  courses = ALL_COURSES_DATA,
}: AllCoursesSectionProps) {
  return (
    <section id="courses" className="py-16 bg-[#f5f5ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            All <span className="text-[#3c4dc9]">Courses</span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            From beginner foundations to advanced mastery. Access every program designed to help you grow in digital marketing
          </p>
        </div>

        {/* 4-Column Grid using ProductCard component */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <ProductCard key={course.id} product={course} />
          ))}
        </div>

      </div>
    </section>
  );
}
