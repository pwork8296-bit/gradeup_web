import { UserOrder, UserProfileDetails } from '@/types/userTypes';

export const CURRENT_USER_PROFILE: UserProfileDetails = {
  id: 'usr-892',
  name: 'Praveen Kumar',
  email: 'praveen.kumar@example.com',
  phone: '+91 98765 43210',
  joinDate: 'March 2026',
  avatarUrl: '',
  activeCoursesCount: 3,
  completedCertificatesCount: 2,
};

export const USER_ORDERS_DATA: UserOrder[] = [
  {
    id: 'ord-101',
    orderNumber: 'UT-2026-9812',
    courseTitle: 'AI-Powered Performance Marketing Bootcamp (Live Cohort)',
    courseImage: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/Pw1HNperformancemarketing5.jpg',
    instructor: 'Umar Tazkeer / Industry Mentors',
    date: '12 Nov 2026',
    amount: 25000,
    status: 'active',
    accessUrl: '/courses/live-performance-marketing-bootcamp',
    invoiceUrl: '#',
    progressPercentage: 35,
  },
  {
    id: 'ord-102',
    orderNumber: 'UT-2026-8741',
    courseTitle: 'GA4 Live Mastery Program - Real Agency Data',
    courseImage: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/5thOXdownload.jpg',
    instructor: 'Umar Tazkeer / Prashanth Sir',
    date: '28 Oct 2026',
    amount: 8000,
    status: 'completed',
    accessUrl: '/courses/master-google-analytics-4-live-cohort',
    invoiceUrl: '#',
    progressPercentage: 100,
  },
  {
    id: 'ord-103',
    orderNumber: 'UT-2026-7290',
    courseTitle: 'Google Ads Advanced + Advanced Tracking Bundle',
    courseImage: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/T80CIspecialoffer.jpg',
    instructor: 'Umar Tazkeer',
    date: '15 Sep 2026',
    amount: 6499,
    status: 'completed',
    accessUrl: '/courses/google-ads-tracking-bundle',
    invoiceUrl: '#',
    progressPercentage: 100,
  },
];
