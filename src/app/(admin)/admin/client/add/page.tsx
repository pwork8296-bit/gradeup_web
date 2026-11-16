import React from 'react';
import type { Metadata } from 'next';
import AdminClientForm from '@/components/admin/clients/AdminClientForm';

export const metadata: Metadata = {
  title: 'Enroll Learner | Admin Portal',
  description: 'Add and grant course access to a new learner',
};

export default function AdminAddClientPage() {
  return <AdminClientForm mode="add" />;
}
