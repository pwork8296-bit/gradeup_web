import React from 'react';
import type { Metadata } from 'next';
import AdminBlogForm from '@/components/admin/blogs/AdminBlogForm';
import { ADMIN_BLOGS_DATA } from '@/data/adminData';

export async function generateStaticParams() {
  return ADMIN_BLOGS_DATA.map((b) => ({ id: String(b.id) }));
}

export const metadata: Metadata = {
  title: 'Edit Article | Admin Portal',
  description: 'Update article draft and publishing status',
};

interface EditBlogPageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminEditBlogPage({ params }: EditBlogPageProps) {
  const { id } = await params;
  return <AdminBlogForm mode="edit" blogId={id} />;
}
