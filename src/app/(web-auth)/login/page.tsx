import type { Metadata } from 'next';
import LoginForm from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Sign In | Umar Tazkeer Digital Academy',
  description: 'Sign in to access your digital marketing bootcamps, courses, and resources.',
};

export default function WebUserLoginPage() {
  return <LoginForm />;
}
