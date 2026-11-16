import React from 'react';
import type { Metadata } from 'next';
import AdminBlogPreview from '@/components/admin/blogs/AdminBlogPreview';
import { ADMIN_BLOGS_DATA } from '@/data/adminData';

export async function generateStaticParams() {
  return ADMIN_BLOGS_DATA.map((b) => ({ id: String(b.id) }));
}

export const metadata: Metadata = {
  title: 'Article Preview | Admin Portal',
  description: 'Preview published article content',
};

interface PreviewBlogPageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminBlogPreviewPage({ params }: PreviewBlogPageProps) {
  const { id } = await params;
  return <AdminBlogPreview blogId={id} />;
}
