import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import BlogsGridSection from '@/components/blogs/BlogsGridSection';
import Spinner from '@/components/ui/Spinner';

export const metadata: Metadata = {
  title: 'Digital Marketing Guides, Case Studies & Insights | Umar Tazkeer',
  description:
    'Read expert articles on Meta Ads scaling, GA4 server-side tracking, Google Ads Performance Max, CRO, and AI automations.',
};

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        title="Marketing Insights & Case Studies"
        subtitle="Tactical blueprints, server-side tracking tutorials, and scaling frameworks from agency veterans"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/blogs' },
          { label: 'Articles' },
        ]}
      />

      <Suspense
        fallback={
          <div className="py-24 flex justify-center items-center">
            <Spinner size="lg" label="Loading Articles..." />
          </div>
        }
      >
        <BlogsGridSection />
      </Suspense>
    </>
  );
}
