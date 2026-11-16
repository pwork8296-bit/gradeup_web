import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CheckoutSection from '@/components/checkout/CheckoutSection';

export const metadata: Metadata = {
  title: 'Secure Checkout & Enrollment | Umar Tazkeer Digital Academy',
  description:
    'Complete your enrollment in Umar Tazkeer digital marketing bootcamps, Google Ads, and AI courses.',
};

export default function CheckoutPage() {
  return (
    <>
      <PageHeader
        title="Secure Checkout & Enrollment"
        subtitle="Finalize your learner credentials and choose your preferred payment method"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cart', href: '/cart' },
          { label: 'Checkout' },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <CheckoutSection />
      </div>
    </>
  );
}
