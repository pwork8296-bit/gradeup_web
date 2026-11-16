import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CoursesSection from '@/components/courses/CoursesSection';
import Spinner from '@/components/ui/Spinner';

export const metadata: Metadata = {
  title: 'All Courses & Programs | Umar Tazkeer Digital Academy',
  description:
    'Browse high-impact digital marketing bootcamps, Google Ads 2025, GA4, tracking mastery, and AI automation courses taught by Umar Tazkeer and industry experts.',
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        title="All Programs & Courses"
        subtitle="Master Performance Marketing, Advanced Tracking, Google Ads, and AI with practical agency experience."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '/courses' },
          { label: 'All Courses' },
        ]}
      />
      <Suspense
        fallback={
          <div className="py-24 flex justify-center items-center">
            <Spinner size="lg" label="Loading Courses Catalog..." />
          </div>
        }
      >
        <CoursesSection />
      </Suspense>
    </>
  );
}
