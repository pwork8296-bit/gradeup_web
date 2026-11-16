'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProductCard2Props } from '@/types/productTypes';

export default function ProductCard2({
  product = {
    id: 'genai-langchain-agents',
    title: 'Generative AI Engineer: LangChain, AI Agents & 12 Projects',
    slug: 'generative-ai-engineer-langchain-ai-agents',
    thumbnail: '',
    instructor: 'Ardit Sulce',
    studentsCount: '600,000+ Students',
    isPremium: true,
    isBestseller: true,
    type: 'Course',
    rating: 4.5,
    ratingsCount: '723 ratings',
    originalPrice: 799.0,
    discountedPrice: 549.0,
    currency: '₹',
  },
  onAddToCart,
  onToggleWishlist,
  isWishlisted: initialWishlisted = false,
}: ProductCard2Props) {
  const [isWishlisted, setIsWishlisted] = useState(initialWishlisted);

  const {
    title,
    slug = '',
    thumbnail,
    instructor,
    studentsCount,
    isPremium = true,
    isBestseller = true,
    type = 'Course',
    rating = 4.5,
    ratingsCount = '723 ratings',
    originalPrice,
    discountedPrice,
    currency = '₹',
  } = product;

  // Format currency with decimals (e.g. ₹549.00)
  const formatPrice = (amount: number) => {
    return `${currency}${amount.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    onToggleWishlist?.(product);
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart?.(product);
  };

  return (
    <div className="group w-full max-w-[340px] bg-white rounded-[22px] border border-gray-200 p-3.5 sm:p-4 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Thumbnail Area with Inner Padding & Rounded Borders */}
        <div className="relative w-full aspect-[16/10] rounded-[14px] overflow-hidden bg-slate-900 select-none">
          {/* Top-Left Premium Badge */}
          {isPremium && (
            <div className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1.5 bg-[#6d28d9] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Premium</span>
            </div>
          )}

          {/* Top-Right Wishlist Heart Button */}
          <button
            type="button"
            onClick={handleWishlistClick}
            aria-label="Add to wishlist"
            className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all text-[#7c3aed]"
          >
            <svg
              className="w-4 h-4 stroke-[2]"
              fill={isWishlisted ? '#7c3aed' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          {/* Image / Graphic Thumbnail */}
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="relative w-full h-full bg-[#0b0f19] flex items-center justify-between p-3 overflow-hidden">
              {/* Neural Mesh Graphics */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]" />

              {/* Python & AI Graphic */}
              <div className="relative z-10 pl-2">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center p-2 shadow-inner">
                  {/* Python stylized logo */}
                  <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M23.5 4c-5.8 0-9.5 2.5-9.5 6.5v4.5h10v1.5H10c-4 0-8 3.5-8 9.5s3.5 9 7.5 9h3.5v-4.5c0-4 3.5-7.5 7.5-7.5h10c3.5 0 6.5-2.5 6.5-6.5V10.5C44 6.5 40 4 23.5 4zm-4 4.5a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6z"
                      fill="#38bdf8"
                    />
                    <path
                      d="M24.5 44c5.8 0 9.5-2.5 9.5-6.5v-4.5H24v-1.5h14c4 0 8-3.5 8-9.5s-3.5-9-7.5-9H35v4.5c0 4-3.5 7.5-7.5 7.5H17.5c-3.5 0-6.5 2.5-6.5 6.5v6c0 4 4 6.5 13.5 6.5zm4-4.5a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6z"
                      fill="#facc15"
                    />
                  </svg>
                </div>
              </div>

              {/* Instructor Avatar Graphic */}
              <div className="relative z-10 pr-1 flex flex-col items-center">
                <div className="w-20 h-24 rounded-t-full bg-gradient-to-t from-slate-900 to-slate-700/80 border-t border-x border-slate-600 flex items-center justify-center overflow-hidden shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-slate-600/60 flex items-center justify-center text-slate-300 font-bold text-lg">
                    AS
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Title */}
        <Link href={slug ? `/products/${slug}` : '#'}>
          <h3 className="mt-3 text-[#0f172a] hover:text-[#7c3aed] font-bold text-[16px] sm:text-[17px] leading-snug tracking-tight line-clamp-2 transition-colors">
            {title}
          </h3>
        </Link>

        {/* Instructor & Social Proof */}
        <p className="mt-1.5 text-[13px] text-[#64748b] font-normal leading-tight">
          {instructor} {studentsCount && `| ${studentsCount}`}
        </p>

        {/* Badges / Tags Row */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {isBestseller && (
            <span className="bg-[#ccfbf1] text-[#0f766e] text-[11px] font-semibold px-2 py-0.5 rounded-[5px]">
              Bestseller
            </span>
          )}

          {type && (
            <span className="border border-slate-300 text-slate-500 text-[11px] font-normal px-2 py-0.5 rounded-[5px]">
              {type}
            </span>
          )}

          {rating !== undefined && (
            <span className="border border-slate-300 text-slate-700 text-[11px] font-semibold px-2 py-0.5 rounded-[5px] inline-flex items-center gap-1">
              <svg
                className="w-3 h-3 text-[#f59e0b] fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{rating}</span>
            </span>
          )}

          {ratingsCount && (
            <span className="border border-slate-300 text-slate-500 text-[11px] font-normal px-2 py-0.5 rounded-[5px]">
              {ratingsCount}
            </span>
          )}
        </div>
      </div>

      {/* Pricing & Add to Cart Footer */}
      <div className="mt-4 pt-2 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-[18px] sm:text-[19px] font-bold text-[#0f172a]">
            {formatPrice(discountedPrice)}
          </span>
          {originalPrice && (
            <span className="text-[13px] sm:text-[14px] text-[#64748b] line-through font-normal">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>

        {/* Add to Cart Outline Pill Button */}
        <button
          type="button"
          onClick={handleAddToCartClick}
          className="border-[1.5px] border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white active:scale-95 text-[13px] font-bold px-3.5 py-1.5 rounded-[10px] transition-all duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/40"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

