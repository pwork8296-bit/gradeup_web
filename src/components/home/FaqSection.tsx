'use client';

import React, { useState } from 'react';
import { FaqSectionProps } from '@/types/courseTypes';
import { FAQS_DATA } from '@/data/courseData';

export default function FaqSection({
  faqs = FAQS_DATA,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            FAQs About Our Courses
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            Here’s everything you may ask.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-slate-300 border-y border-slate-300">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left py-5 px-3 sm:px-4 flex items-center justify-between gap-4 font-semibold text-lg sm:text-xl text-slate-900 hover:text-[#3c4dc9] focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl font-bold text-slate-800 flex-shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-3 sm:px-4 pb-5 pt-1 text-slate-700 text-base leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
