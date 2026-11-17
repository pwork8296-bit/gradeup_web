import React from 'react';
import type { Metadata } from 'next';
import AdminLayoutClient from '@/components/admin/layout/AdminLayoutClient';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = {
  title: `Admin Dashboard | ${siteConfig.name}`,
  description: `Academy Management System and Admin Portal for ${siteConfig.name}`,
  icons: {
    icon: siteConfig.logo,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}
