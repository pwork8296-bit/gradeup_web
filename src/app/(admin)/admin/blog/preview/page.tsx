import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import AdminBlogPreview from '@/components/admin/blogs/AdminBlogPreview';

export const metadata: Metadata = {
  title: 'Article Preview | Admin Portal',
  description: 'Preview published article content',
};

interface PreviewBlogQueryProps {
  searchParams: Promise<{ id?: string }>;
}

async function BlogPreviewContent({ searchParams }: PreviewBlogQueryProps) {
  const { id } = await searchParams;
  return <AdminBlogPreview blogId={id || '1'} />;
}

export default function AdminBlogPreviewQueryPage({
  searchParams,
}: PreviewBlogQueryProps) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading preview...</div>}>
      <BlogPreviewContent searchParams={searchParams} />
    </Suspense>
  );
}
