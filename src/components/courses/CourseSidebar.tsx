'use client';

import React from 'react';
import CourseSidebarCategories from './CourseSidebarCategories';
import CourseSidebarInstructors from './CourseSidebarInstructors';
import CourseSidebarFeatured from './CourseSidebarFeatured';
import { CourseSidebarProps } from '@/types/courseTypes';

export default function CourseSidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  instructors,
  selectedInstructor,
  onSelectInstructor,
  featuredCourses,
}: CourseSidebarProps) {
  return (
    <aside className="w-full lg:w-1/4 order-2 lg:order-1">
      <div className="space-y-6">
        <CourseSidebarCategories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
        {instructors && instructors.length > 0 && (
          <CourseSidebarInstructors
            instructors={instructors}
            selectedInstructor={selectedInstructor}
            onSelectInstructor={onSelectInstructor}
          />
        )}
        <CourseSidebarFeatured courses={featuredCourses} />
      </div>
    </aside>
  );
}
