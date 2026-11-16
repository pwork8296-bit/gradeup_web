import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import AdminProductForm from '@/components/admin/products/AdminProductForm';

export const metadata: Metadata = {
  title: 'Edit Course | Admin Portal',
  description: 'Update course details and pricing',
};

interface EditProductQueryPageProps {
  searchParams: Promise<{ id?: string }>;
}

async function EditProductContent({ searchParams }: EditProductQueryPageProps) {
  const { id } = await searchParams;
  return <AdminProductForm mode="edit" productId={id} />;
}

export default function AdminEditProductQueryPage({
  searchParams,
}: EditProductQueryPageProps) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading editor...</div>}>
      <EditProductContent searchParams={searchParams} />
    </Suspense>
  );
}
