import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import UserProfileCard from '@/components/user/UserProfileCard';
import OrderHistoryList from '@/components/user/OrderHistoryList';
import { CURRENT_USER_PROFILE, USER_ORDERS_DATA } from '@/data/userData';

export const metadata: Metadata = {
  title: 'Learner Dashboard & My Courses | Umar Tazkeer Digital Academy',
  description: 'Access your enrolled bootcamps, view class recordings, and download invoices.',
};

export default function UserProfilePage() {
  return (
    <>
      <PageHeader
        title="Student Learning Dashboard"
        subtitle="Manage your active cohort registrations, session links, certificates, and invoices"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Student Account' },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <UserProfileCard user={CURRENT_USER_PROFILE} />

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-extrabold text-slate-900">
            Enrolled Programs &amp; Receipts
          </h3>
          <Link
            href="/courses"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 no-underline"
          >
            + Enroll in Another Program
          </Link>
        </div>

        <OrderHistoryList orders={USER_ORDERS_DATA} />
      </div>
    </>
  );
}
