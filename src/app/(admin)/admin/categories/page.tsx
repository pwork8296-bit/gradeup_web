import React from 'react';
import type { Metadata } from 'next';
import AdminCategoryList from '@/components/admin/categories/AdminCategoryList';

export const metadata: Metadata = {
  title: 'Categories | Admin Portal',
  description: 'Manage academy course categories and taxonomy',
};

export default function AdminCategoriesPage() {
  return <AdminCategoryList />;
}
