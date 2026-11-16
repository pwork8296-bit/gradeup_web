import React from 'react';
import type { Metadata } from 'next';
import AdminBlogList from '@/components/admin/blogs/AdminBlogList';

export const metadata: Metadata = {
  title: 'Blog CMS | Admin Portal',
  description: 'Manage articles, publications, and academy insights',
};

export default function AdminBlogsPage() {
  return <AdminBlogList />;
}
