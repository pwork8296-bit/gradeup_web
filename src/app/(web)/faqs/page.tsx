import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import FaqSection from '@/components/home/FaqSection';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQs) | Umar Tazkeer Digital Academy',
  description:
    'Find answers to common questions about live cohorts, recordings, certificates, and payment options.',
};

export default function FaqsPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Got questions? Find clear answers regarding enrollment, live batches, LMS access, and certifications"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQs' },
        ]}
      />

      <div className="py-8">
        <FaqSection />
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16 text-center">
        <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Still Have Questions?</h3>
          <p className="text-sm text-slate-600 mb-6">
            Our admissions and counseling team is available on WhatsApp and phone call to help you choose the right program.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700 transition no-underline shadow-sm"
            >
              Contact Admissions
            </Link>
            <a
              href="https://wa.me/919721410786"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-green-600 text-green-700 hover:bg-green-50 px-6 py-3 text-sm font-bold transition no-underline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
