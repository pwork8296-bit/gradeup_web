import React from 'react';
import { FacultySectionProps } from '@/types/courseTypes';
import { FACULTY_DATA } from '@/data/courseData';

export default function FacultySection({
  faculty = FACULTY_DATA,
}: FacultySectionProps) {
  return (
    <section className="py-16 bg-[#f5f5ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Faculty & <span className="text-[#3c4dc9]">Experts</span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Our mentors are Top digital marketers running real campaigns for clients. Get insider knowledge, proven strategies, and guidance you can trust.
          </p>
        </div>

        {/* Faculty Cards Row / Grid */}
        <div className="flex gap-6 overflow-x-auto pb-6 pt-10 no-scrollbar justify-start lg:justify-center">
          {faculty.map((member) => (
            <div
              key={member.id}
              className="w-[240px] min-w-[240px] flex-shrink-0 flex flex-col"
            >
              {/* Colored Top Block with popping avatar */}
              <div
                className="w-full rounded-2xl relative pt-0 pb-4 flex items-end justify-center min-h-[190px]"
                style={{ backgroundColor: member.bgColor }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-auto object-contain -mt-10 max-h-[220px]"
                />
              </div>

              {/* Name & Role */}
              <div className="mt-3">
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5 mb-3">
                  {member.role}
                </p>
              </div>

              {/* Border Box with Bio */}
              <div
                className="p-4 rounded-b-2xl rounded-tr-2xl border-2 bg-white flex-1 min-h-[280px]"
                style={{ borderColor: member.borderColor }}
              >
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
