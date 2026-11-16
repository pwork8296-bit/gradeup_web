import React from 'react';
import type { Metadata } from 'next';
import AdminProductForm from '@/components/admin/products/AdminProductForm';
import { ADMIN_PRODUCTS_DATA } from '@/data/adminData';

export async function generateStaticParams() {
  return ADMIN_PRODUCTS_DATA.map((p) => ({ id: String(p.id) }));
}

export const metadata: Metadata = {
  title: 'Edit Course | Admin Portal',
  description: 'Update course details and pricing',
};

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminEditProductPage({ params }: EditProductPageProps) {
  const { id } = await params;
  return <AdminProductForm mode="edit" productId={id} />;
}
