import { CartItem } from '@/types/cartTypes';

export const INITIAL_CART_ITEMS: CartItem[] = [
  {
    id: 'cart-1',
    product_id: 'c-live-1',
    title: 'AI-Powered Performance Marketing Bootcamp (Live Cohort)',
    slug: 'live-performance-marketing-bootcamp',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/Pw1HNperformancemarketing5.jpg',
    instructor: 'Umar Tazkeer / Industry Mentors',
    price: 25000,
    originalPrice: 45000,
    quantity: 1,
    variant: 'Evening Batch (8-10 PM IST)',
  },
  {
    id: 'cart-2',
    product_id: 'c5',
    title: 'Google Ads Course 2025 (Certified Advanced Course)',
    slug: 'google-ads-course-2025-certified',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/r2zhqadvancedgoogleadscourser1.jpg',
    instructor: 'Umar Tazkeer / Sahil Sir',
    price: 4199,
    originalPrice: 8000,
    quantity: 1,
    variant: 'Lifetime Access',
  },
];

export const VALID_COUPONS: Record<string, number> = {
  GROWTH10: 10,
  FESTIVE20: 20,
  SPECIAL500: 500, // flat ₹500 off
};
