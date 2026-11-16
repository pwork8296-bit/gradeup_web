import { NavItem, UserProfile } from '@/types/navigationTypes';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Courses', href: '/courses' },
  { label: 'Digital Products', href: '/#' },
  // { label: 'Blogs & Guides', href: '/blogs' },
  // { label: 'About Us', href: '/about-us' },
  // { label: 'Contact', href: '/contact' },
];

// export const FOOTER_LINKS: NavItem[] = [
//   { label: 'Terms of use', href: '/terms-of-use' },
//   { label: 'Privacy policy', href: '/privacy-policy' },
//   { label: 'About us', href: '/about-us' },
//   { label: 'FAQs', href: '/faqs' },
//   { label: 'Contact us', href: '/contact-us' },
//   { label: 'Refund policy', href: '/refund-policy' },
//   { label: 'Shipping policy', href: '/shipping-policy' },
// ];

export const FOOTER_LINKS: NavItem[] = [
  { label: 'Terms of use', href: '/#' },
  { label: 'Privacy policy', href: '/#' },
  { label: 'About us', href: '/#' },
  { label: 'FAQs', href: '/#' },
  { label: 'Contact us', href: '/#' },
  { label: 'Refund policy', href: '/#' },
  { label: 'Shipping policy', href: '/#' },
];

export const HEADER2_LEFT_LINKS: NavItem[] = [
  { label: 'Explore Courses', href: '/courses' },
  { label: 'Bundle Offers', href: '/courses#bundles' },
];

export const HEADER2_RIGHT_LINKS: NavItem[] = [
  { label: 'Enterprise Training', href: '/contact' },
  { label: 'Become a Mentor', href: '/contact' },
  { label: 'My Learning', href: '/user' },
];

export const DEFAULT_USER: UserProfile = {
  name: 'Prashanth Kumar',
  initials: 'PK',
};
