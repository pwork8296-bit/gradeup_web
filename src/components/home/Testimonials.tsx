'use client';

import React from 'react';
import { TestimonialsSectionProps } from '@/types/courseTypes';

const defaultTestimonials = [
  {
    id: 't-1',
    name: 'Sachin Kumar',
    role: 'Assistant Digital Marketing Manager',
    company: 'GrowthX Agency',
    courseTaken: 'AI Performance Marketing Bootcamp',
    rating: 5,
    content: 'Umar Sir breaks down advanced tracking, GTM server containers, and CAPI like no one else. After implementing his dynamic creative frameworks, our agency scaled client ad spend from ₹2L to ₹18L/month at a 4.2x ROAS!',
    package: '8.5 LPA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 't-2',
    name: 'Pooja Aggarwal',
    role: 'Senior Media Buyer & D2C Growth Lead',
    company: 'PureBotanics (eCom)',
    courseTaken: 'Cohort 9 - Performance Marketing for D2C',
    rating: 5,
    content: 'The live cohort sessions and real agency case studies completely transformed my media buying. We resolved our Meta tracking discrepancies and unlocked profitable scale during festive sales.',
    package: '12 LPA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 't-3',
    name: 'Navin Sharma',
    role: 'Digital Marketing Strategist',
    company: 'FinTech Horizons',
    courseTaken: 'Google Ads 2025 Certified Mastery',
    rating: 5,
    content: 'I was hesitant about Google Ads PMax, but Sahil Sir and Umar Sir taught us the exact negative keyword script hierarchies and placement audits needed to avoid click waste. Highly recommended!',
    package: '7 LPA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 't-4',
    name: 'Deepak Rao',
    role: 'Lead Tracking & Analytics Engineer',
    company: 'TechFlow Global',
    courseTaken: 'Advanced Tracking & GA4 Cohort',
    rating: 5,
    content: 'Setting up GA4 server-side on GCP Cloud Run was always daunting until this course. The step-by-step assignments and instructor feedback helped me land my dream role with an immediate 60% hike.',
    package: '14 LPA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
];

export default function Testimonials({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-blue-100">
          ⭐ Verified Student Success
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3">
          Loved by Marketers, Founders & Agencies
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mt-2">
          Real stories and career leaps from graduates of our live bootcamps and advanced certification programs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:shadow-md hover:border-blue-300"
          >
            <div>
              {/* Star Rating */}
              <div className="flex gap-1 text-amber-400 mb-3">
                {Array.from({ length: t.rating || 5 }, (_, j) => (
                  <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4">
                &ldquo;{t.content}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900 mb-0.5">
                  {t.name}
                </h4>
                <p className="text-[11px] text-slate-500 mb-0.5">
                  {t.role}
                </p>
                {t.courseTaken && (
                  <span className="inline-block text-[10px] text-blue-600 font-medium">
                    {t.courseTaken}
                  </span>
                )}
              </div>

              {t.package && (
                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-400 block">Package</span>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    {t.package}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
