import React from 'react';
import type { Metadata } from 'next';
import AdminLayoutClient from '@/components/admin/layout/AdminLayoutClient';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Umar Tazkeer Academy',
  description: 'Academy Management System and Admin Portal for Umar Tazkeer',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}
