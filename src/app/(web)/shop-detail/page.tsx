import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import ShopDetailQueryClient from '@/components/products/ShopDetailQueryClient';
import Spinner from '@/components/ui/Spinner';

export const metadata: Metadata = {
  title: 'Program Details & Syllabus | Umar Tazkeer Digital Academy',
  description: 'View full curriculum, live batch schedules, mentor details, and enrollment fees.',
};

export default function ShopDetailPage() {
  return (
    <>
      <PageHeader
        title="Course Details & Syllabus"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '/courses' },
          { label: 'Program Overview' },
        ]}
      />
      <Suspense
        fallback={
          <div className="py-24 flex justify-center items-center">
            <Spinner size="lg" label="Loading Program Details..." />
          </div>
        }
      >
        <ShopDetailQueryClient />
      </Suspense>
    </>
  );
}
