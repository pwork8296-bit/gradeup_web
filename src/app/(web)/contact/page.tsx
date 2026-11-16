import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import ContactSection from '@/components/home/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us & Student Support | Umar Tazkeer Digital Academy',
  description:
    'Get in touch with Umar Tazkeer Digital Academy for admissions, enterprise training, and student support.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Student Admissions & Support"
        subtitle="Have questions about cohort schedules, syllabus, or payment options? Talk to our mentors."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
        ]}
      />
      <ContactSection />
    </>
  );
}
