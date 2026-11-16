import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Umar Tazkeer Digital Academy',
  description:
    'Learn about our transparent refund guarantee and cancellation guidelines for cohorts and recorded masterclasses.',
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHeader
        title="Refund & Cancellation Policy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Customer Care' },
          { label: 'Refund Policy' },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="inline-block rounded-md bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Learner Satisfaction Guarantee
              </span>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Transparent &amp; Fair Refund Policy
              </h2>
            </div>
            <p className="text-xs font-semibold text-slate-500">
              Last Updated: November 2026
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            We are dedicated to providing world-class, outcome-oriented digital marketing training. We want you to enroll with complete peace of mind. Here is our straightforward refund policy.
          </p>
        </div>

        {/* 3 Highlights */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-xs">
            <span className="text-3xl mb-2 block">⏱️</span>
            <h4 className="text-sm font-bold text-slate-900 mb-1">7-Day Money Back</h4>
            <p className="text-xs text-slate-500">For eligible recorded self-paced masterclasses</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-xs">
            <span className="text-3xl mb-2 block">🎓</span>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Cohort Batch Transfers</h4>
            <p className="text-xs text-slate-500">Free batch deferral before the 2nd live session</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-xs">
            <span className="text-3xl mb-2 block">💳</span>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Direct Bank Payout</h4>
            <p className="text-xs text-slate-500">Refunds returned to original payment source</p>
          </div>
        </div>

        <div className="space-y-6 text-slate-700">
          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-3">1. Live Bootcamps &amp; Cohorts</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Due to limited seat caps and dedicated mentor allocations, refund requests for live bootcamps must be submitted within 48 hours following the first live orientation session. Alternatively, students experiencing unforeseen work or personal commitments may request a free transfer to the immediate next cohort batch.
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-3">2. How to Request a Refund</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              To request a refund or batch switch, email your order receipt and registered email address to{' '}
              <a href="mailto:support@umartazkeer.com" className="text-blue-600 underline font-semibold">
                support@umartazkeer.com
              </a>.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Approved refunds are processed within 5–7 business days back to your original source of payment (Bank, UPI, or Credit Card).
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/courses"
            className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700 transition no-underline shadow-md"
          >
            Explore All Courses
          </Link>
        </div>
      </div>
    </>
  );
}
