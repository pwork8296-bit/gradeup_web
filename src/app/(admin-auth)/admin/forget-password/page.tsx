import React from 'react';
import type { Metadata } from 'next';
import AdminForgotPasswordForm from '@/components/admin/auth/AdminForgotPasswordForm';

export const metadata: Metadata = {
  title: 'Forgot Admin Password | Umar Tazkeer Academy',
  description: 'Reset password for staff and admin access',
};

export default function AdminForgetPasswordPage() {
  return <AdminForgotPasswordForm />;
}
