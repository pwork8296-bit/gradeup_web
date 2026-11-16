import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import AdminClientForm from '@/components/admin/clients/AdminClientForm';

export const metadata: Metadata = {
  title: 'Edit Learner | Admin Portal',
  description: 'Update learner enrollment details and payment status',
};

interface EditClientQueryProps {
  searchParams: Promise<{ id?: string }>;
}

async function EditClientContent({ searchParams }: EditClientQueryProps) {
  const { id } = await searchParams;
  return <AdminClientForm mode="edit" clientId={id} />;
}

export default function AdminEditClientQueryPage({
  searchParams,
}: EditClientQueryProps) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading editor...</div>}>
      <EditClientContent searchParams={searchParams} />
    </Suspense>
  );
}
