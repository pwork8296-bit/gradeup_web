import React from 'react';
import type { Metadata } from 'next';
import AdminBlogForm from '@/components/admin/blogs/AdminBlogForm';

export const metadata: Metadata = {
  title: 'Write Article | Admin Portal',
  description: 'Author and publish a new academy article',
};

export default function AdminAddBlogPage() {
  return <AdminBlogForm mode="add" />;
}
