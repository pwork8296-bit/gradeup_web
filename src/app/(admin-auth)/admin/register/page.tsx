import React from 'react';
import type { Metadata } from 'next';
import AdminRegisterForm from '@/components/admin/auth/AdminRegisterForm';

export const metadata: Metadata = {
  title: 'Request Admin Account | Umar Tazkeer Academy',
  description: 'Submit an application for instructor or staff admin access',
};

export default function AdminRegisterPage() {
  return <AdminRegisterForm />;
}
