import React from 'react';
import type { Metadata } from 'next';
import AdminSettingsView from '@/components/admin/settings/AdminSettingsView';

export const metadata: Metadata = {
  title: 'Platform Settings | Admin Portal',
  description: 'Manage academy configuration, currency, and integrations',
};

export default function AdminSettingsPage() {
  return <AdminSettingsView />;
}
