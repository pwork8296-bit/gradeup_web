'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types/productTypes';

interface ProductDetailViewProps {
  product: Product;
}

export default function ProductDetailView({ product }: ProductDetailViewProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'reviews'>('overview');
  const [enrolledSuccess, setEnrolledSuccess] = useState(false);

  const {
    title,
    thumbnail,
    image,
    instructor,
    instructors,
    rating = 5.0,
    ratingsCount = 48,
    originalPrice,
    discountedPrice,
    isBestseller = true,
  } = product;

  const displayImage = thumbnail || image || '';
  const displayInstructor = instructor || instructors || 'Umar Tazkeer';

  const defaultCurriculum = [
    { module: 'Module 1: Foundations & Architecture', duration: '4 Hours', lectures: 8 },
    { module: 'Module 2: Advanced Campaign Structure & Testing', duration: '6 Hours', lectures: 12 },
    { module: 'Module 3: Server-Side Tracking, GA4 & CAPI', duration: '8 Hours', lectures: 16 },
    { module: 'Module 4: AI Creative Automation & Scaling', duration: '5 Hours', lectures: 10 },
    { module: 'Module 5: Capstone Live Agency Project', duration: '6 Hours', lectures: 6 },
  ];

  const highlights = [
    'Lifetime access to all session recordings and future cohort upgrades',
    'Certified industry credential from UT Digital Media',
    'Real agency ad account data and live budget case studies',
    '4 hands-on projects plus final capstone portfolio review',
    'Private batch Discord community with mentors and direct Q&A',
  ];

  const handleEnroll = () => {
    setEnrolledSuccess(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Details & Curriculum */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Hero Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {isBestseller && (
                <span className="bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Bestseller
                </span>
              )}
              <span className="bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Certified Program
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
              {title}
            </h1>

            {/* Instructor and Rating */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Created by:</span>
                <span className="font-bold text-slate-900">{displayInstructor}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-slate-900">{rating.toFixed(1)}</span>
                <span className="text-slate-400">({ratingsCount} reviews)</span>
              </div>
            </div>

            {/* Video / Thumbnail Banner */}
            <div className="mt-6 aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 relative shadow-sm">
              {displayImage ? (
                <img
                  src={displayImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 text-white">
                  <span className="text-xl font-extrabold">UT Digital Media</span>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-200 gap-6 text-sm font-bold text-slate-500">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`pb-3 transition-colors cursor-pointer border-b-2 bg-transparent ${activeTab === 'overview' ? 'border-blue-600 text-blue-600' : 'border-transparent hover:text-slate-900'}`}
            >
              Overview & Outcomes
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('curriculum')}
              className={`pb-3 transition-colors cursor-pointer border-b-2 bg-transparent ${activeTab === 'curriculum' ? 'border-blue-600 text-blue-600' : 'border-transparent hover:text-slate-900'}`}
            >
              Curriculum & Modules
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 transition-colors cursor-pointer border-b-2 bg-transparent ${activeTab === 'reviews' ? 'border-blue-600 text-blue-600' : 'border-transparent hover:text-slate-900'}`}
            >
              Student Reviews
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Highlights Box */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <h3 className="text-lg font-bold text-slate-900 mb-4">What You Will Master</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold mt-0.5">✓</span>
                      <span className="text-xs sm:text-sm text-slate-700 leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements Box */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Requirements & Prerequisites</h3>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <li>Basic knowledge of internet browsing and online marketing terms</li>
                  <li>A laptop or desktop computer with reliable internet access</li>
                  <li>No prior coding or technical knowledge required; all frameworks are taught step-by-step</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Detailed Program Curriculum</h3>
              {defaultCurriculum.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-sm font-bold text-slate-900">{c.module}</span>
                  </div>
                  <div className="text-xs text-slate-500 font-semibold">
                    {c.lectures} Lectures • {c.duration}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Student Feedback</h3>
              <div className="divide-y divide-slate-100">
                <div className="py-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-slate-900">Rohan Verma</span>
                    <span className="text-xs text-slate-400">2 weeks ago</span>
                  </div>
                  <div className="flex text-amber-400 text-xs mb-2">★★★★★</div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    The practical exercises alone are worth 10x the price of this course. Umar Sir breaks down real agency tracking setups without holding anything back.
                  </p>
                </div>
                <div className="py-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-slate-900">Sneha Kulkarni</span>
                    <span className="text-xs text-slate-400">1 month ago</span>
                  </div>
                  <div className="flex text-amber-400 text-xs mb-2">★★★★★</div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Best digital marketing investment I have made. The community support and live problem-solving sessions helped me set up CAPI for all 3 of my eCommerce stores.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Sticky Pricing & Enrollment Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
            {/* Pricing Section */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-slate-900">
                  ₹{discountedPrice.toLocaleString('en-IN')}
                </span>
                {originalPrice && (
                  <span className="text-base text-slate-400 line-through">
                    ₹{originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {originalPrice && (
                  <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full border border-green-200">
                    {Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-1 font-medium">Fee includes 18% GST and lifetime recording access</p>
            </div>

            {enrolledSuccess && (
              <div className="mb-4 rounded-xl bg-green-50 border border-green-200 p-3 text-xs text-green-800 text-center font-bold">
                Program added to cart! Proceed to checkout.
              </div>
            )}

            {/* CTAs */}
            <div className="space-y-3">
              <Link
                href="/checkout"
                className="block w-full rounded-xl bg-blue-600 py-3.5 text-center text-sm font-bold text-white transition hover:bg-blue-700 no-underline shadow-md hover:shadow-lg"
              >
                Enroll Now (Instant Access)
              </Link>

              <button
                type="button"
                onClick={handleEnroll}
                className="w-full rounded-xl border border-slate-300 py-3 text-center text-sm font-bold text-slate-800 hover:bg-slate-50 transition cursor-pointer bg-white"
              >
                Add to Cart
              </button>
            </div>

            {/* Features List */}
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-xs text-slate-600">
              <div className="font-bold text-slate-900 mb-2">This Program Includes:</div>
              <div className="flex items-center gap-2.5">
                <span>📹</span>
                <span>30+ hours of on-demand HD video</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span>📂</span>
                <span>Agency templates, calculators & media buying sheets</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span>🏆</span>
                <span>Official UT Digital Media completion certificate</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span>💬</span>
                <span>Private Discord community & lifetime batch access</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <span className="text-[11px] text-slate-400">
                🔒 30-Day Money Back Guarantee • No Questions Asked
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
