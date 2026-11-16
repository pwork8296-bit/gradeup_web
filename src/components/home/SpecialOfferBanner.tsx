import React from 'react';
import Link from 'next/link';
import { SpecialOfferBannerProps } from '@/types/courseTypes';
import { SPECIAL_OFFER_DATA } from '@/data/courseData';

export default function SpecialOfferBanner({
  title = SPECIAL_OFFER_DATA.title,
  badge = SPECIAL_OFFER_DATA.badge,
  points = SPECIAL_OFFER_DATA.points,
  image = SPECIAL_OFFER_DATA.image,
  ctaText = SPECIAL_OFFER_DATA.ctaText,
  ctaLink = SPECIAL_OFFER_DATA.ctaLink,
}: SpecialOfferBannerProps) {
  return (
    <section className="py-16 bg-[#f7f5e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border-4 border-[#4a5cff] bg-[#f7f5e9] p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-lg">
          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col items-start">
            <span className="inline-block bg-[#ffc400] text-black text-sm sm:text-base font-semibold px-5 py-2 rounded-xl mb-5 shadow-sm">
              {badge}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4054d7] leading-tight mb-6">
              {title}
            </h2>

            <div className="space-y-3 mb-8">
              {points.map((point, index) => (
                <p key={index} className="text-base sm:text-lg text-slate-800 font-medium">
                  {point}
                </p>
              ))}
            </div>

            <Link
              href={ctaLink}
              className="inline-flex items-center gap-4 bg-[#6fbe00] hover:bg-[#5fa300] text-white font-bold text-base px-7 py-3.5 rounded-full shadow-md transition-all duration-200 group"
            >
              <span>{ctaText}</span>
              <span className="w-7 h-7 rounded-full bg-white text-[#6fbe00] flex items-center justify-center font-bold text-sm group-hover:translate-x-1 transition-transform">
                ➜
              </span>
            </Link>
          </div>

          {/* Right Column (Bundle Image) */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <Link href={ctaLink} className="block w-full max-w-lg overflow-hidden rounded-3xl shadow-xl hover:scale-102 transition-transform duration-300">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover rounded-3xl"
              />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
