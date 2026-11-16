import type { Metadata } from 'next';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

export const metadata: Metadata = {
  title: 'Reset Password | Umar Tazkeer Digital Academy',
  description: 'Recover your student account access.',
};

export default function WebForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
