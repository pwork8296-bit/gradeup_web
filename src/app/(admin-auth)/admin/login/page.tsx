import React from 'react';
import type { Metadata } from 'next';
import AdminLoginForm from '@/components/admin/auth/AdminLoginForm';

export const metadata: Metadata = {
  title: 'Admin Login | Umar Tazkeer Academy',
  description: 'Sign in to access admin management tools',
};

export default function AdminLoginPage() {
  return <AdminLoginForm />;
}
