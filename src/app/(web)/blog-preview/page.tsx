import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import BlogDetailClient from '@/components/blogs/BlogDetailClient';
import Spinner from '@/components/ui/Spinner';

export const metadata: Metadata = {
  title: 'Marketing Guide & Case Study | Umar Tazkeer',
  description: 'Deep dive into digital marketing frameworks and analytics implementations.',
};

export default function BlogPreviewPage() {
  return (
    <>
      <PageHeader
        title="Article & Strategy Guide"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blogs', href: '/blogs' },
          { label: 'Guide Details' },
        ]}
      />
      <Suspense
        fallback={
          <div className="py-24 flex justify-center items-center">
            <Spinner size="lg" label="Loading Guide..." />
          </div>
        }
      >
        <BlogDetailClient />
      </Suspense>
    </>
  );
}
