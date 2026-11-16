import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CoursesSection from '@/components/courses/CoursesSection';
import Spinner from '@/components/ui/Spinner';

export const metadata: Metadata = {
  title: 'All Digital Marketing & AI Courses | Umar Tazkeer',
  description:
    'Browse our comprehensive catalog of certified performance marketing bootcamps, Google Ads, GA4, and AI courses.',
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Programs & Digital Courses"
        subtitle="Master high-demand performance marketing, tracking, and AI skills from industry veterans"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products & Courses' },
        ]}
      />
      <Suspense
        fallback={
          <div className="py-24 flex justify-center items-center">
            <Spinner size="lg" label="Loading Programs..." />
          </div>
        }
      >
        <CoursesSection />
      </Suspense>
    </>
  );
}
