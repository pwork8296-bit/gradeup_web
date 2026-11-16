import React from 'react';
import { CertificationSectionProps } from '@/types/courseTypes';
import { CERTIFICATION_BENEFITS, CERTIFICATION_IMAGE } from '@/data/courseData';

export default function CertificationSection({
  benefits = CERTIFICATION_BENEFITS,
  image = CERTIFICATION_IMAGE,
}: CertificationSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column: Benefits */}
          <div className="lg:w-1/2">
            <span className="text-base sm:text-lg font-medium text-slate-600">
              How will it benefit your career?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3c4dc9] tracking-tight mt-1 mb-8">
              Get certified by UTDM
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#eef0ff] text-[#3c4dc9] flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index === 0 && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="5" strokeWidth="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13v8l-4-2 4-2 4 2-4-2" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certificate Preview Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src={image}
                alt="UTDM Certificate Preview"
                className="w-full h-auto object-cover max-w-lg"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
