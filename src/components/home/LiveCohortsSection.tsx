import React from 'react';
import Link from 'next/link';
import { LiveCohortsSectionProps } from '@/types/courseTypes';
import { LIVE_COHORTS_DATA } from '@/data/courseData';

export default function LiveCohortsSection({
  cohorts = LIVE_COHORTS_DATA,
}: LiveCohortsSectionProps) {
  const [bootcamp, ga4] = cohorts;

  return (
    <section id="live-cohorts" className="py-16 bg-gradient-to-b from-[#f4f5ff] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fde8e9] text-[#e5262f] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5262f] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5262f]"></span>
            </span>
            Now enrolling
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12152b] tracking-tight">
            Live <span className="text-[#3d4fd6]">Cohorts</span>
          </h2>
          <p className="mt-2 text-lg sm:text-xl text-gray-700">
            Learn live with the trainers, alongside a batch.
          </p>
        </div>

        {/* Cohort Card 1: AI-Powered Performance Marketing */}
        {bootcamp && (
          <div className="mb-12 bg-white rounded-3xl border border-[#e5e8f2] shadow-[0_20px_50px_rgba(30,41,99,0.08)] overflow-hidden flex flex-col lg:flex-row">
            {/* Banner Media */}
            <div className="lg:w-7/12 relative bg-[#e8590c] overflow-hidden flex items-center justify-center min-h-[300px]">
              <img
                src={bootcamp.image}
                alt={bootcamp.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Details */}
            <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between gap-5">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-[#fbbf24] text-[#1a1446] font-bold text-xs px-3 py-1.5 rounded-lg">
                    {bootcamp.tag}
                  </span>
                  <span className="bg-[#eef0ff] text-[#3B3BD0] font-bold text-xs px-3 py-1.5 rounded-lg">
                    100% Live Online
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  {bootcamp.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {bootcamp.description}
                </p>
              </div>

              {/* Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-[#e5e8f2] bg-[#fafbff]">
                  <div className="w-8 h-8 rounded-lg bg-[#eef0ff] text-[#3B3BD0] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth="2" />
                      <path d="M16 3v4M8 3v4M3 10h18" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">{bootcamp.schedule}</strong>
                    <span className="text-[11px] text-slate-500">{bootcamp.scheduleTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-[#e5e8f2] bg-[#fafbff]">
                  <div className="w-8 h-8 rounded-lg bg-[#eef0ff] text-[#3B3BD0] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="6" width="14" height="12" rx="2" strokeWidth="2" />
                      <path d="M16 10l6-3v10l-6-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">{bootcamp.sessionsCount}</strong>
                    <span className="text-[11px] text-slate-500">{bootcamp.sessionsDetail}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-[#e5e8f2] bg-[#fafbff]">
                  <div className="w-8 h-8 rounded-lg bg-[#eef0ff] text-[#3B3BD0] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M3 7h18v13H3z" strokeWidth="2" strokeLinecap="round" />
                      <path d="M8 7V4h8v3" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">{bootcamp.projectsCount}</strong>
                    <span className="text-[11px] text-slate-500">{bootcamp.projectsDetail}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-[#e5e8f2] bg-[#fafbff]">
                  <div className="w-8 h-8 rounded-lg bg-[#eef0ff] text-[#3B3BD0] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M3 12a9 9 0 109-9 9.7 9.7 0 00-6.7 2.7L3 8" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 3v5h5M12 7v5l3 2" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">{bootcamp.recordingsInfo}</strong>
                    <span className="text-[11px] text-slate-500">{bootcamp.recordingsDetail}</span>
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-dashed border-[#e2e5ef] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-2xl font-black text-slate-900 leading-none">
                    {bootcamp.price} <span className="text-xs font-semibold text-slate-500">{bootcamp.priceNote}</span>
                  </p>
                  <p className="text-xs font-semibold text-red-600 mt-1">
                    {bootcamp.urgencyText}
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#3B3BD0] hover:bg-[#2A2AA8] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-[#3B3BD0]/30 transition-all hover:translate-y-[-1px]"
                >
                  {bootcamp.ctaText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Cohort Card 2: GA4 Live Mastery Program */}
        {ga4 && (
          <div className="bg-white rounded-3xl border border-[#e4e6f2] shadow-[0_18px_40px_-16px_rgba(61,79,214,0.25)] overflow-hidden flex flex-col lg:flex-row">
            {/* Media */}
            <div className="lg:w-7/12 relative aspect-[3/2] bg-[#0d1030] overflow-hidden">
              <img
                src={ga4.image}
                alt={ga4.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e5262f] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                {ga4.tag}
              </span>
              {ga4.startDate && (
                <div className="absolute right-3.5 bottom-3.5 bg-white rounded-2xl px-3.5 py-2 text-center shadow-xl">
                  <small className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider">Starts</small>
                  <b className="block text-xl font-black text-[#3d4fd6] leading-tight">{ga4.startDate.split(' ').slice(0, 2).join(' ')}</b>
                  <span className="text-[11px] font-semibold text-slate-700">{ga4.startDate.split(' ')[2]}</span>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between gap-5">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-[#f6c63c] text-[#3a2a00] font-bold text-xs px-3 py-1.5 rounded-lg">
                    1st Cohort Price
                  </span>
                  <span className="bg-[#eef0ff] text-[#3d4fd6] font-bold text-xs px-3 py-1.5 rounded-lg">
                    100% Live Online
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  {ga4.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {ga4.description}
                </p>
              </div>

              {/* Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-[#e4e6f2] bg-[#fafbff]">
                  <div className="w-7 h-7 rounded-lg bg-[#eef0ff] text-[#3d4fd6] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth="2" />
                      <path d="M16 3v4M8 3v4M3 10h18" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">{ga4.schedule}</strong>
                    <span className="text-[11px] text-slate-500">{ga4.scheduleTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-[#e4e6f2] bg-[#fafbff]">
                  <div className="w-7 h-7 rounded-lg bg-[#eef0ff] text-[#3d4fd6] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M22 8l-6 4 6 4V8z" strokeWidth="2" />
                      <rect x="2" y="6" width="14" height="12" rx="2" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">{ga4.sessionsCount}</strong>
                    <span className="text-[11px] text-slate-500">{ga4.sessionsDetail}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-[#e4e6f2] bg-[#fafbff]">
                  <div className="w-7 h-7 rounded-lg bg-[#eef0ff] text-[#3d4fd6] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="9" r="6" strokeWidth="2" />
                      <path d="M8.5 14l-1.5 8 5-3 5 3-1.5-8" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">{ga4.projectsCount}</strong>
                    <span className="text-[11px] text-slate-500">{ga4.projectsDetail}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-[#e4e6f2] bg-[#fafbff]">
                  <div className="w-7 h-7 rounded-lg bg-[#eef0ff] text-[#3d4fd6] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M3 12a9 9 0 103-6.7L3 8" strokeWidth="2" />
                      <path d="M3 3v5h5M12 7v5l3 2" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">{ga4.recordingsInfo}</strong>
                    <span className="text-[11px] text-slate-500">{ga4.recordingsDetail}</span>
                  </div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="pt-4 border-t border-dashed border-[#e4e6f2] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-2xl font-black text-slate-900 leading-none">
                    {ga4.price} <small className="text-xs font-semibold text-slate-500">{ga4.priceNote}</small>
                  </p>
                  <p className="text-xs font-semibold text-[#e5262f] mt-1">{ga4.urgencyText}</p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#3d4fd6] hover:bg-[#2b37a8] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-[#3d4fd6]/40 transition-all hover:translate-y-[-1px]"
                >
                  {ga4.ctaText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
