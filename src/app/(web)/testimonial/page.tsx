import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import Testimonials from '@/components/home/Testimonials';

export const metadata: Metadata = {
  title: 'Student Testimonials & Reviews | Umar Tazkeer Digital Academy',
  description:
    'Read real reviews and career transformation stories from Umar Tazkeer live cohort graduates and alumni.',
};

export default function TestimonialPage() {
  return (
    <>
      <PageHeader
        title="Student Success Stories"
        subtitle="Hear directly from digital marketers, founders, and growth professionals who leveled up their skills"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Testimonials' },
        ]}
      />
      <Testimonials />
    </>
  );
}
