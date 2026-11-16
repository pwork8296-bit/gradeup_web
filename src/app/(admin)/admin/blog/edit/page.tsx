import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import AdminBlogForm from '@/components/admin/blogs/AdminBlogForm';

export const metadata: Metadata = {
  title: 'Edit Article | Admin Portal',
  description: 'Update article draft and publishing status',
};

interface EditBlogQueryProps {
  searchParams: Promise<{ id?: string }>;
}

async function EditBlogContent({ searchParams }: EditBlogQueryProps) {
  const { id } = await searchParams;
  return <AdminBlogForm mode="edit" blogId={id} />;
}

export default function AdminEditBlogQueryPage({ searchParams }: EditBlogQueryProps) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading editor...</div>}>
      <EditBlogContent searchParams={searchParams} />
    </Suspense>
  );
}
