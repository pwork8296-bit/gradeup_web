import React from 'react';
import Link from 'next/link';
import { HeroBannerProps } from '@/types/courseTypes';
import { HERO_BANNER_DATA } from '@/data/courseData';

export default function HeroBanner({ data = HERO_BANNER_DATA }: HeroBannerProps) {
  const { desktopImage, mobileImage, altText, linkHref = '#live-cohorts' } = data;

  return (
    <section className="w-full bg-[#f4f5ff]">
      <Link href={linkHref} className="block w-full">
        {/* Desktop View */}
        <div className="hidden md:block w-full">
          <img
            src={desktopImage}
            alt={altText}
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
        {/* Mobile View */}
        <div className="block md:hidden w-full">
          <img
            src={mobileImage}
            alt={altText}
            className="w-full h-auto object-cover"
          />
        </div>
      </Link>
    </section>
  );
}
