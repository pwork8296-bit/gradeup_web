'use client';

import React from 'react';
import Link from 'next/link';
import { ProductCardProps } from '@/types/productTypes';

export default function ProductCard({
  product = {
    id: 1,
    title: 'Advanced Google Analytics 4 - (Cohort 1)',
    slug: 'advanced-google-analytics-4-cohort-1',
    thumbnail: '',
    instructors: 'Umar Tazkeer / Prashanth',
    originalPrice: 18000,
    discountedPrice: 9440,
    currency: '₹',
  },
  showRating,
  showActionBtn,
  actionBtnText = 'View Details',
}: ProductCardProps) {
  const {
    title,
    slug = '',
    thumbnail,
    image,
    instructor,
    instructors,
    rating,
    ratingsCount,
    originalPrice,
    discountedPrice,
    currency = '₹',
    isBestseller = false,
    ctaLink,
  } = product;

  const displayImage = thumbnail || image || '';
  const displayInstructor = instructor || instructors || '';
  const destinationUrl = '#';
  const shouldShowRating = showRating !== undefined ? showRating : rating !== undefined;
  const shouldShowBtn = showActionBtn !== undefined ? showActionBtn : Boolean(ctaLink);

  // Format currency with Indian grouping (e.g. 18,000 and 9,440)
  const formatPrice = (amount: number) => {
    return `${currency}${amount.toLocaleString('en-IN')}`;
  };

  return (
    <div className="group relative w-full bg-white rounded-xl border-2 border-[#289afd] hover:border-[#a93284] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col justify-between transition-colors duration-200">
      
      {/* Best Seller Corner Ribbon */}
      {isBestseller && (
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none z-10">
          <span className="absolute top-4 -right-7 transform rotate-45 bg-red-600 text-white text-[11px] font-bold px-7 py-0.5 shadow-md">
            Best Seller
          </span>
        </div>
      )}

      <div>
        {/* Thumbnail Banner */}
        <Link
          href={destinationUrl}
          className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-900"
        >
          {displayImage ? (
            <img
              src={displayImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            /* Fallback banner */
            <div className="relative w-full h-full bg-gradient-to-br from-[#101321] via-[#1a1f38] to-[#0b0e1b] flex flex-col items-center justify-center p-3 text-white overflow-hidden select-none">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/25 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 text-center flex flex-col items-center">
                <span className="text-white font-extrabold text-[12px] sm:text-[13px] tracking-wide uppercase drop-shadow">
                  Advanced
                </span>
                <span className="text-[#facc15] font-black text-[16px] sm:text-[18px] leading-tight tracking-tight uppercase drop-shadow-md">
                  Google Analytics 4
                </span>
                <div className="mt-2 inline-flex items-center gap-1.5 bg-[#2563eb] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
                  <span>COHORT 1</span>
                </div>
              </div>
            </div>
          )}
        </Link>

        {/* Card Body */}
        <div className="p-4 flex flex-col">
          {/* Title */}
          <Link href={destinationUrl}>
            <h3 className="font-semibold text-[17px] text-slate-900 leading-snug line-clamp-3 min-h-[75px] group-hover:text-[#3c4dc9] transition-colors">
              {title}
            </h3>
          </Link>

          {/* Optional Star Rating */}
          {shouldShowRating && rating !== undefined && (
            <div className="flex items-center gap-1.5 mt-2">
              <div className="flex text-[#fdc10b]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {rating.toFixed(1)} {ratingsCount ? `(${ratingsCount} ratings)` : ''}
              </span>
            </div>
          )}

          {/* Instructor */}
          {displayInstructor && (
            <p className="mt-2 text-xs font-medium text-slate-400">
              {displayInstructor}
            </p>
          )}

          {/* Pricing */}
          <div className="mt-2.5 flex items-baseline gap-2 text-[#3c4dc9] font-bold text-base">
            {originalPrice && (
              <span className="line-through text-slate-400 text-xs font-normal">
                {formatPrice(originalPrice)}
              </span>
            )}
            <span>{formatPrice(discountedPrice)}</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      {shouldShowBtn && (
        <div className="p-4 pt-0">
          <Link
            href={destinationUrl}
            className="block w-full text-center bg-[#289afd] group-hover:bg-[#a93284] text-white font-medium text-sm py-2.5 px-4 rounded-md transition-colors duration-200"
          >
            {actionBtnText}
          </Link>
        </div>
      )}
    </div>
  );
}
