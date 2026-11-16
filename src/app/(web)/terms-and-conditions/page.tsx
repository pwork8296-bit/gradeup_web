import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Terms of Use & Student Agreement | Umar Tazkeer Digital Academy',
  description:
    'Review the terms of service, enrollment policies, intellectual property guidelines, and code of conduct for students.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service & Enrollment"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Legal' },
          { label: 'Terms & Conditions' },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="inline-block rounded-md bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Legal Terms
              </span>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Student Terms &amp; Conditions
              </h2>
            </div>
            <p className="text-xs font-semibold text-slate-500">
              Last Updated: November 2026
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Welcome to <strong>Umar Tazkeer Digital Academy</strong>. By accessing our platform, enrolling in live cohorts, or purchasing recorded programs, you agree to comply with and be bound by the following terms and community standards.
          </p>
        </div>

        <div className="space-y-6 text-slate-700">
          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-3">1. License &amp; Course Access</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              When you enroll in a course, you are granted a non-exclusive, non-transferable, single-user license to view the course materials, live session recordings, and downloadable media buying templates for your personal learning. Account sharing, group viewing, or resale of course content is strictly prohibited.
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-3">2. Intellectual Property</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              All instructional videos, curriculum roadmaps, agency spreadsheets, calculators, and brand graphics are the exclusive intellectual property of UT Digital Media. Any unauthorized recording, screen capture rebroadcast, or distribution will result in immediate LMS access revocation without refund and legal remedies.
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-3">3. Community Code of Conduct</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our live chat rooms, Discord channels, and discussion forums must remain a constructive, respectful environment. Spamming, pitching unsolicited services to fellow students, harassment, or abusive language will result in permanent expulsion from the community.
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-3">4. Program Modifications</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To keep our curriculum aligned with the latest ad platform updates (Google, Meta, TikTok, GA4), instructors may update course modules, replace outdated lessons, or adjust session schedules with prior notice to batch members.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
