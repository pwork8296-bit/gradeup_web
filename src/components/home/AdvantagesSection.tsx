import React from 'react';
import { AdvantagesSectionProps } from '@/types/courseTypes';
import { ADVANTAGES_DATA, ADVANTAGES_IMAGE } from '@/data/courseData';

export default function AdvantagesSection({
  advantages = ADVANTAGES_DATA,
  image = ADVANTAGES_IMAGE,
}: AdvantagesSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            UTDM <span className="text-[#3c4dc9]">Advantages</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Learn directly from practitioners running real campaigns daily. Get practical strategies, updated frameworks, and mentorship designed to keep you ahead in the fast-changing digital landscape.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left: Mentor Illustration */}
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="relative max-w-[280px] rounded-2xl overflow-hidden border-2 border-slate-900 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
              <img
                src={image}
                alt="Umar Tazkeer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Dotted Numbered List */}
          <div className="w-full md:w-7/12">
            <ul className="space-y-4">
              {advantages.map((item, index) => {
                const isLast = index === advantages.length - 1;
                return (
                  <li key={item.number} className="relative flex items-center gap-4">
                    {/* Number Circle and Dotted Line */}
                    <div className="relative flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-[#3c4dc9] text-white flex items-center justify-center font-bold text-sm z-10 shadow-sm">
                        {item.number}
                      </div>
                      {!isLast && (
                        <div className="absolute top-9 w-0.5 h-6 border-l-2 border-dotted border-[#3c4dc9]" />
                      )}
                    </div>

                    {/* Text */}
                    <div className="py-2">
                      <span className="text-lg font-medium text-slate-800">
                        {item.title}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
