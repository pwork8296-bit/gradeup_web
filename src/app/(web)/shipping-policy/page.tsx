import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Digital Delivery & Shipping Policy | Umar Tazkeer Digital Academy',
  description:
    'Information regarding instant digital course access, LMS credentials delivery, and physical welcome kits dispatch.',
};

export default function ShippingPolicyPage() {
  return (
    <>
      <PageHeader
        title="Delivery & Fulfillment Policy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Customer Care' },
          { label: 'Delivery Policy' },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="inline-block rounded-md bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Fulfillment &amp; Access
              </span>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Instant Access &amp; Kit Dispatch Guidelines
              </h2>
            </div>
            <p className="text-xs font-semibold text-slate-500">
              Last Updated: November 2026
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            All digital marketing programs, masterclasses, and cohort recordings are delivered digitally with instantaneous access. For programs including printed playbooks or welcome kits, here is our dispatch timeline.
          </p>
        </div>

        <div className="space-y-6 text-slate-700">
          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-3">1. Instant Digital Access</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Upon successful payment, an automated confirmation email containing your LMS portal login link and account credentials is automatically delivered within 2 minutes. You can also log in directly via the website using your registered email address.
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-3">2. Live Session Links &amp; Timetables</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Live cohort calendar invites (Zoom / Google Meet links) are shared both on your student dashboard and via the private batch WhatsApp and Discord channels 24 hours prior to each scheduled session.
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-3">3. Physical Kits &amp; Swag</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              For flagship programs that offer printed agency checklists, hardcopy workbooks, or merchandise, packages are dispatched via BlueDart or DTDC within 3 business days of enrollment. A tracking AWB number is emailed upon dispatch.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
