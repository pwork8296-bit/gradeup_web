import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import FacultySection from '@/components/home/FacultySection';
import AdvantagesSection from '@/components/home/AdvantagesSection';

export const metadata: Metadata = {
  title: 'About Umar Tazkeer & UT Digital Media Academy',
  description:
    'Learn about our mission to provide practical, outcome-driven performance marketing and analytics education.',
};

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        title="About Umar Tazkeer Digital Academy"
        subtitle="Bridging the gap between theoretical marketing courses and high-scale agency execution"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        {/* Story Banner */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xs mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Our Vision &amp; Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-4 leading-tight">
              Practical Marketing Built on Real Ad Spend &amp; Agency Data
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Founded by Umar Tazkeer, UT Digital Media has trained over 50,000+ digital marketers, business owners, and agency founders across India and globally. We believe media buying and analytics cannot be mastered through slide decks—they require dissecting real ad managers, auditing tracking tags, and running live campaigns.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-slate-100 text-center">
            <div>
              <span className="block text-3xl sm:text-4xl font-black text-blue-600">50K+</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 block">Students Trained</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-black text-blue-600">₹25Cr+</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 block">Ad Spend Managed</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-black text-blue-600">4.9/5</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 block">Average Rating</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-black text-blue-600">95%</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 block">Placement &amp; Growth</span>
            </div>
          </div>
        </div>

        {/* Advantages & Why Choose Us */}
        <AdvantagesSection />

        {/* Mentors & Faculty */}
        <div className="mt-12">
          <FacultySection />
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-10 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready to Accelerate Your Career?</h3>
          <p className="text-blue-100 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Join our upcoming live cohorts or start learning with self-paced masterclasses today.
          </p>
          <Link
            href="/courses"
            className="inline-block rounded-xl bg-white text-blue-700 font-bold px-8 py-3.5 text-sm transition hover:bg-blue-50 shadow-md no-underline"
          >
            Explore All Programs &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
