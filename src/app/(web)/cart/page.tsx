import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CartTable from '@/components/cart/CartTable';

export const metadata: Metadata = {
  title: 'Shopping Basket & Cart | Umar Tazkeer Digital Academy',
  description:
    'Review your selected performance marketing bootcamps, Google Ads courses, and AI programs in your cart.',
};

export default function CartPage() {
  return (
    <>
      <PageHeader
        title="Your Learning Basket"
        subtitle="Review your chosen courses and apply promotional coupons before checkout"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '/courses' },
          { label: 'Cart' },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <CartTable />
      </div>
    </>
  );
}
