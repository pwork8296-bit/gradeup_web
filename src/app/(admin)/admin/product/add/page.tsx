import React from 'react';
import type { Metadata } from 'next';
import AdminProductForm from '@/components/admin/products/AdminProductForm';

export const metadata: Metadata = {
  title: 'Add New Course | Admin Portal',
  description: 'Create and publish a new academy course product',
};

export default function AdminAddProductPage() {
  return <AdminProductForm mode="add" />;
}
