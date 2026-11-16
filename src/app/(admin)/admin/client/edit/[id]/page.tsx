import React from 'react';
import type { Metadata } from 'next';
import AdminClientForm from '@/components/admin/clients/AdminClientForm';
import { ADMIN_CLIENTS_DATA } from '@/data/adminData';

export async function generateStaticParams() {
  return ADMIN_CLIENTS_DATA.map((c) => ({ id: String(c.id) }));
}

export const metadata: Metadata = {
  title: 'Edit Learner | Admin Portal',
  description: 'Update learner enrollment details and payment status',
};

interface EditClientPageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminEditClientPage({ params }: EditClientPageProps) {
  const { id } = await params;
  return <AdminClientForm mode="edit" clientId={id} />;
}
