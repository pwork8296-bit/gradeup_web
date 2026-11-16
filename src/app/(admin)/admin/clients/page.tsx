import React from 'react';
import type { Metadata } from 'next';
import AdminClientList from '@/components/admin/clients/AdminClientList';

export const metadata: Metadata = {
  title: 'Learners & Clients | Admin Portal',
  description: 'Manage learner accounts and course enrollments',
};

export default function AdminClientsPage() {
  return <AdminClientList />;
}
