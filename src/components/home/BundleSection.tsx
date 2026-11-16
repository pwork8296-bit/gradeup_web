import React from 'react';
import Link from 'next/link';
import { BundleSectionProps } from '@/types/courseTypes';
import { BUNDLES_DATA } from '@/data/courseData';

export default function BundleSection({
  bundles = BUNDLES_DATA,
}: BundleSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className="bg-white rounded-3xl border border-[#e3e6eb] shadow-[0_6px_20px_rgba(15,23,42,0.06)] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              {/* Top Image Dropzone */}
              <div className="relative aspect-[3/2] w-full bg-[#e5e7ec] overflow-hidden">
                <img
                  src={bundle.image}
                  alt={bundle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {bundle.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          idx === 0
                            ? 'bg-[#e6f1fb] text-[#1d4f80]'
                            : 'bg-[#eef0f3] text-[#4b5563]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-[#0f1a33] tracking-tight">
                    {bundle.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#6b7280] leading-relaxed min-h-[48px]">
                    {bundle.description}
                  </p>

                  {/* Included items */}
                  <div className="mt-5 border border-[#e3e6eb] rounded-xl overflow-hidden divide-y divide-[#e3e6eb]">
                    {bundle.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-3 px-4 py-3 bg-[#fafbff]"
                      >
                        <span className="text-sm font-medium text-[#1a2238]">
                          {item.name}
                        </span>
                        <span className="text-xs font-semibold text-[#9aa0ab] line-through">
                          ₹{item.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Price and CTA */}
                <div className="mt-8 pt-5 border-t border-[#e3e6eb] flex items-center justify-between gap-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-[#0f1a33]">
                      {bundle.price}
                    </span>
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center justify-center gap-2 bg-[#b13b7f] hover:bg-[#9c316f] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
                  >
                    <span>Enrol now</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
