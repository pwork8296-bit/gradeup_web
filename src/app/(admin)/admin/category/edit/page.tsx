import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import AdminCategoryForm from '@/components/admin/categories/AdminCategoryForm';

export const metadata: Metadata = {
  title: 'Edit Category | Admin Portal',
  description: 'Update category details and taxonomy',
};

interface EditCategoryQueryProps {
  searchParams: Promise<{ id?: string }>;
}

async function EditCategoryContent({ searchParams }: EditCategoryQueryProps) {
  const { id } = await searchParams;
  return <AdminCategoryForm mode="edit" categoryId={id} />;
}

export default function AdminEditCategoryQueryPage({
  searchParams,
}: EditCategoryQueryProps) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading editor...</div>}>
      <EditCategoryContent searchParams={searchParams} />
    </Suspense>
  );
}
