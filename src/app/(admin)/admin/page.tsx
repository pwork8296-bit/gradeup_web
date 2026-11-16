import React from 'react';
import type { Metadata } from 'next';
import DashboardClient from '@/components/admin/dashboard/DashboardClient';

export const metadata: Metadata = {
  title: 'Dashboard | Admin Portal',
  description: 'Main overview and analytics for academy administrators',
};

export default function AdminDashboardPage() {
  return <DashboardClient />;
}
