import React from 'react';
import type { Metadata } from 'next';
import AdminUserList from '@/components/admin/users/AdminUserList';

export const metadata: Metadata = {
  title: 'Admin Staff & Instructors | Admin Portal',
  description: 'Manage administrative roles, faculty, and support privileges',
};

export default function AdminUsersPage() {
  return <AdminUserList />;
}
