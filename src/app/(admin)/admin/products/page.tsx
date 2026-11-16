import React from 'react';
import type { Metadata } from 'next';
import AdminProductList from '@/components/admin/products/AdminProductList';

export const metadata: Metadata = {
  title: 'Products & Courses | Admin Portal',
  description: 'Manage course inventory, pricing, and curriculum',
};

export default function AdminProductsPage() {
  return <AdminProductList />;
}
