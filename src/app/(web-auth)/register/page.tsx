import type { Metadata } from 'next';
import RegisterForm from '@/components/auth/RegisterForm';

export const metadata: Metadata = {
  title: 'Create Account | Umar Tazkeer Digital Academy',
  description: 'Join thousands of growth marketers, media buyers, and entrepreneurs.',
};

export default function WebUserRegisterPage() {
  return <RegisterForm />;
}
