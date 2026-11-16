import React from 'react';
import type { Metadata } from 'next';
import AdminCategoryForm from '@/components/admin/categories/AdminCategoryForm';
import { ADMIN_CATEGORIES_DATA } from '@/data/adminData';

export async function generateStaticParams() {
  return ADMIN_CATEGORIES_DATA.map((c) => ({ id: String(c.id) }));
}

export const metadata: Metadata = {
  title: 'Edit Category | Admin Portal',
  description: 'Update category details and taxonomy',
};

interface EditCategoryPageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminEditCategoryPage({ params }: EditCategoryPageProps) {
  const { id } = await params;
  return <AdminCategoryForm mode="edit" categoryId={id} />;
}
