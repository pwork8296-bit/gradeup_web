import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy | Umar Tazkeer Digital Academy',
  description:
    'Learn how Umar Tazkeer Digital Academy collects, protects, and handles your student information, email, and payment transactions.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy & Data Protection Policy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Legal' },
          { label: 'Privacy Policy' },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Banner */}
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="inline-block rounded-md bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Learner Privacy
              </span>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Your Data Privacy Is Fundamental
              </h2>
            </div>
            <p className="text-xs font-semibold text-slate-500">
              Last Updated: November 2026
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            At <strong>Umar Tazkeer Digital Academy (UT Digital Media)</strong>, we are committed to safeguarding the personal information and trust of our students, alumni, and community members. This Privacy Policy outlines what information we collect, how it is used to deliver learning experiences, and our strict data confidentiality safeguards.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-6 text-slate-700">
          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                1
              </span>
              Information We Collect
            </h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600 leading-relaxed">
              <p>When you register for a bootcamp, webinar, or recorded course, we collect:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong>Identity Details:</strong> Full Name, Email Address, and WhatsApp / Phone Number.</li>
                <li><strong>LMS Data:</strong> Enrolled courses, lecture progress, assignment submissions, and quiz responses.</li>
                <li><strong>Billing &amp; Invoicing:</strong> Billing address, state, postal code, and optional GSTIN for tax input credits.</li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                2
              </span>
              Payment & Financial Security
            </h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>We never store sensitive banking or card numbers:</strong> All transactions are securely routed through PCI-DSS Level 1 compliant, RBI-authorized payment processors (such as Razorpay and Stripe).
              </p>
              <p>
                All browser-to-server traffic is protected using bank-grade 256-bit TLS/SSL encryption.
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                3
              </span>
              How We Use Your Information
            </h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600 leading-relaxed">
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Issuing your LMS dashboard credentials and private Discord/community access.</li>
                <li>Sending Zoom/Google Meet links and timetable alerts for live cohort sessions.</li>
                <li>Generating verifiable course completion certificates.</li>
                <li>Providing 1-on-1 mentor guidance and assignment feedback.</li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Contact Privacy Officer
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              For any questions regarding your data privacy or to request account deletion, reach out to:
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-900">
              Email: support@umartazkeer.com
              <br />
              Address: UT Digital Media, New Delhi, India
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
