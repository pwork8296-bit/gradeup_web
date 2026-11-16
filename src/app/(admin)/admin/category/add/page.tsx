import React from 'react';
import type { Metadata } from 'next';
import AdminCategoryForm from '@/components/admin/categories/AdminCategoryForm';

export const metadata: Metadata = {
  title: 'Add Category | Admin Portal',
  description: 'Create a new course category',
};

export default function AdminAddCategoryPage() {
  return <AdminCategoryForm mode="add" />;
}
