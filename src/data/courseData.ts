import {
  HeroBannerData,
  CohortCourse,
  FlagshipCourse,
  BundleCourse,
  CourseCardItem,
  AdvantageItem,
  AlumniStudent,
  BenefitItem,
  FacultyMember,
  FaqItem,
  ContactInfo,
  FeaturedCourseItem,
} from '@/types/courseTypes';
import { Product } from '@/types/productTypes';

export const HERO_BANNER_DATA: HeroBannerData = {
  desktopImage: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/new banner.jpg',
  mobileImage: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/website hero banner mobile view.jpg',
  altText: 'Umar Tazkeer Digital Marketing Courses & Cohorts',
  linkHref: '#live-cohorts',
};

export const LIVE_COHORTS_DATA: CohortCourse[] = [
  {
    id: 'ai-performance-marketing',
    slug: 'live-performance-marketing-bootcamp',
    tag: 'New Live Cohort',
    isNew: true,
    isLive: true,
    title: 'AI-Powered Performance Marketing Bootcamp',
    description: 'A practical, live bootcamp covering Google Ads, Meta Ads, GTM, GA4, CAPI and AI automation, with hands-on projects in every module.',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/Pw1HNperformancemarketing5.jpg',
    schedule: 'Mon · Wed · Fri',
    scheduleTime: '8–10 PM IST',
    sessionsCount: '30 live sessions',
    sessionsDetail: '2 hrs each · ~60 hours',
    projectsCount: '4 major projects',
    projectsDetail: 'Plus final capstone',
    recordingsInfo: 'Lifetime recordings',
    recordingsDetail: '+ 4 bonus courses free',
    price: '₹25,000/-',
    priceNote: 'incl. GST',
    urgencyText: 'Fee increases from the next cohort',
    ctaText: 'Enrol Now – Seats Filling Fast',
    ctaLink: '#',
    brandColor: '#3B3BD0',
  },
  {
    id: 'ga4-live-mastery',
    slug: 'master-google-analytics-4-live-cohort',
    tag: 'Live · Cohort 1',
    isNew: false,
    isLive: true,
    startDate: '23 Oct 2026',
    title: 'GA4 Live Mastery Program',
    description: 'A practical, live GA4 program built on real agency data, from foundations to advanced tracking, with hands-on practice every session.',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/5thOXdownload.jpg',
    schedule: 'Mon · Wed · Fri',
    scheduleTime: '8:30 – 10:00 PM IST',
    sessionsCount: '20 live sessions',
    sessionsDetail: '90 min each · 7 weeks',
    projectsCount: 'Certificate',
    projectsDetail: 'From UT Digital Media',
    recordingsInfo: 'Lifetime recordings',
    recordingsDetail: 'Rewatch anytime',
    price: '₹8,000',
    priceNote: '+ 18% GST',
    urgencyText: 'Price increases from the next cohort',
    ctaText: 'Join Now',
    ctaLink: '#',
    brandColor: '#3d4fd6',
  },
];

export const FLAGSHIP_COURSES_DATA: FlagshipCourse[] = [
  {
    id: 'flagship-advanced-tracking',
    slug: 'advanced-tracking-course',
    title: 'Advanced Tracking Course (Become Tracking Expert)',
    instructor: 'Umar Tazkeer',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/WDDufadvancedtrackingcourse.jpg',
    rating: 5.0,
    ratingsCount: 80,
    originalPrice: 8000,
    discountedPrice: 3999,
    ctaLink: '#',
  },
  {
    id: 'flagship-google-ads-2025',
    slug: 'google-ads-course-2025',
    title: 'Google Ads Course 2025 (Certified Advanced Course)',
    instructor: 'Umar Tazkeer',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/5T23Padvancedgoogleadscourser.jpg',
    rating: 5.0,
    ratingsCount: 39,
    originalPrice: 8000,
    discountedPrice: 4199,
    ctaLink: '#',
  },
];

export const SPECIAL_OFFER_DATA = {
  badge: 'Special Offer',
  title: 'Become Full Stack Digital Marketer',
  points: [
    '🎯 8 Courses in 1 – Exclusive Digital Marketing Bundle',
    '🚀 Become a Full Stack Digital Marketer',
    '🔒 One Bundle. Lifetime Access. All Courses Included',
    '💬 WhatsApp Support Included',
    '📈 All Courses by Actual Founders & Experts in Industry',
  ],
  image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/w6FDi7coursesin1bundle1.jpg',
  ctaText: 'Enrol Now',
  ctaLink: '#',
};

export const BUNDLES_DATA: BundleCourse[] = [
  {
    id: 'special-bundle',
    title: 'Special Bundle',
    slug: 'special-bundle-offer',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/i0xei5ibfxlimitedtimeoffer11.jpg',
    description: 'Agency-level Google Ads and advanced conversion tracking, combined.',
    tags: ['Agency certification', '2 courses + checklist'],
    items: [
      { name: 'Advanced Google Ads Course', price: 4199 },
      { name: 'Advanced Tracking Course', price: 3999 },
      { name: 'Google Ads Checklist', price: 799 },
    ],
    price: '₹6,499/-',
    ctaLink: '#',
  },
  {
    id: 'performance-stack',
    title: 'The Performance Stack (4 in 1)',
    slug: 'the-performance-stack',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/oDZMgtheperformancestack.jpg',
    description: 'Build the complete skill set required to run campaigns, track every important action, and create landing pages that convert.',
    tags: ['Agency certification', '3 courses + checklist'],
    items: [
      { name: 'Advanced Google Ads Course', price: 4199 },
      { name: 'Advanced Tracking Course', price: 3999 },
      { name: 'Google Ads Checklist', price: 790 },
      { name: 'AI Landing Page', price: 7080 },
    ],
    price: '₹8,499/-',
    ctaLink: '#',
  },
];

export const ALL_COURSES_DATA: CourseCardItem[] = [
  {
    id: 'c-live-1',
    title: 'AI-Powered Performance Marketing Bootcamp (Live Cohort)',
    slug: 'live-performance-marketing-bootcamp',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/Pw1HNperformancemarketing5.jpg',
    instructor: 'Umar Tazkeer / Industry Mentors',
    rating: 5.0,
    ratingsCount: 92,
    originalPrice: 45000,
    discountedPrice: 25000,
    isBestseller: true,
    category: 'Performance Marketing',
    ctaLink: '#',
  },
  {
    id: 'c-live-2',
    title: 'GA4 Live Mastery Program - Real Agency Data',
    slug: 'master-google-analytics-4-live-cohort',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/5thOXdownload.jpg',
    instructor: 'Umar Tazkeer / Prashanth Sir',
    rating: 5.0,
    ratingsCount: 64,
    originalPrice: 16000,
    discountedPrice: 8000,
    isBestseller: true,
    category: 'Analytics & Tracking',
    ctaLink: '#',
  },
  {
    id: 'c1',
    title: 'AI Landing Page Mastery (Cohort 2) - With Automations & Tracking',
    slug: 'ai-landing-page-mastery',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/UmyCAailandingpagemastery1.jpg',
    instructor: 'Umar Tazkeer / Aditya',
    rating: 5.0,
    ratingsCount: 45,
    originalPrice: 15000,
    discountedPrice: 7080,
    isBestseller: true,
    category: 'AI & Automation',
    ctaLink: '#',
  },
  {
    id: 'c2',
    title: 'AI First - Digital Marketing Course (Specially for Beginners)',
    slug: 'ai-first-digital-marketing-course',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/UM23daifirstdigitalmarketingcourse600400.jpg',
    instructor: 'Ankur Sir',
    rating: 5.0,
    ratingsCount: 45,
    originalPrice: 40000,
    discountedPrice: 19470,
    isBestseller: true,
    category: 'AI & Automation',
    ctaLink: '#',
  },
  {
    id: 'c3',
    title: 'Cohort 9 - Performance Marketing for D2C BootCamp (Meta Special)',
    slug: 'cohort-9-performance-marketing-d2c',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/ZIUlc600400.jpg',
    instructor: 'Umar Tazkeer & Sahil Sir',
    rating: 5.0,
    ratingsCount: 47,
    originalPrice: 30000,
    discountedPrice: 16520,
    isBestseller: true,
    category: 'Performance Marketing',
    ctaLink: '#',
  },
  {
    id: 'c4',
    title: 'Digital Marketing Bootcamp 4.0 | Umar Tazkeer',
    slug: 'digital-marketing-bootcamp-4',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/YnVqpmetamarketingbootcamp42.jpg',
    instructor: 'Umar Tazkeer',
    rating: 4.6,
    ratingsCount: 53,
    originalPrice: 45000,
    discountedPrice: 24780,
    isBestseller: true,
    category: 'Performance Marketing',
    ctaLink: '#',
  },
  {
    id: 'c5',
    title: 'Google Ads Course 2025 (Certified Advanced Course)',
    slug: 'google-ads-course-2025-certified',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/r2zhqadvancedgoogleadscourser1.jpg',
    instructor: 'Umar Tazkeer / Sahil Sir',
    rating: 4.6,
    ratingsCount: 180,
    originalPrice: 8000,
    discountedPrice: 4199,
    isBestseller: true,
    category: 'Google Ads',
    ctaLink: '#',
  },
  {
    id: 'c6',
    title: 'Advanced Tracking Course (Become Tracking Expert)',
    slug: 'advanced-tracking-expert',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/h8xaRadvancedtrackingcourse.jpg',
    instructor: 'UT Digital Media Trainer : Ankur Sir',
    rating: 5.0,
    ratingsCount: 39,
    originalPrice: 8000,
    discountedPrice: 3999,
    isBestseller: true,
    category: 'Analytics & Tracking',
    ctaLink: '#',
  },
  {
    id: 'c7',
    title: 'Data Analytics for Digital Marketers (Cohort 3)',
    slug: 'data-analytics-for-digital-marketers',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/fNphpdataanalyticsfordigitalmarketers.jpg',
    instructor: 'Umar Tazkeer / Shiva Sir',
    rating: 5.0,
    ratingsCount: 50,
    originalPrice: 10000,
    discountedPrice: 8000,
    isBestseller: true,
    category: 'Analytics & Tracking',
    ctaLink: '#',
  },
  {
    id: 'c8',
    title: 'Google Ads Advanced + Advanced Tracking Bundle',
    slug: 'google-ads-tracking-bundle',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/T80CIspecialoffer.jpg',
    instructor: 'Umar Tazkeer',
    rating: 5.0,
    ratingsCount: 48,
    originalPrice: 15000,
    discountedPrice: 6499,
    isBestseller: true,
    category: 'Bundles & Tools',
    ctaLink: '#',
  },
  {
    id: 'c9',
    title: 'SEO Mastery Course - Recorded',
    slug: 'seo-mastery-course-recorded',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/4xc3Pseocoursemastery.jpg',
    instructor: 'Umar Tazkeer',
    rating: 5.0,
    ratingsCount: 48,
    originalPrice: 4499,
    discountedPrice: 3499,
    isBestseller: true,
    category: 'SEO',
    ctaLink: '#',
  },
  {
    id: 'c10',
    title: 'AI-Powered Shopify Development Course | Cohort-1',
    slug: 'ai-powered-shopify-development',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/1Q4bsshopifydevlopment1.jpg',
    instructor: 'Umar Tazkeer',
    rating: 5.0,
    ratingsCount: 45,
    originalPrice: 9999,
    discountedPrice: 4720,
    isBestseller: true,
    category: 'AI & Automation',
    ctaLink: '#',
  },
  {
    id: 'c11',
    title: 'Google Ads Checklist + Media Buying Sheet + Calculators',
    slug: 'google-ads-checklist-media-buying',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/vS44pgoogleadschecklist.jpg',
    instructor: 'Umar Tazkeer',
    rating: 4.8,
    ratingsCount: 45,
    originalPrice: 1999,
    discountedPrice: 799,
    isBestseller: true,
    category: 'Bundles & Tools',
    ctaLink: '#',
  },
];

export const FEATURED_COURSES_SIDEBAR_DATA: FeaturedCourseItem[] = [
  {
    id: 'feat-1',
    title: 'AI Performance Marketing Bootcamp',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/Pw1HNperformancemarketing5.jpg',
    price: '₹25,000',
    originalPrice: '₹45,000',
    slug: 'live-performance-marketing-bootcamp',
    ctaLink: '#',
    tag: 'Live Cohort',
  },
  {
    id: 'feat-2',
    title: 'GA4 Live Mastery Program',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/5thOXdownload.jpg',
    price: '₹8,000',
    originalPrice: '₹16,000',
    slug: 'master-google-analytics-4-live-cohort',
    ctaLink: '#',
    tag: 'Cohort 1',
  },
  {
    id: 'feat-3',
    title: 'Google Ads + Tracking Mastery Bundle',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/T80CIspecialoffer.jpg',
    price: '₹6,499',
    originalPrice: '₹15,000',
    slug: 'google-ads-tracking-bundle',
    ctaLink: '#',
    tag: 'Best Value',
  },
];

export const ADVANTAGES_DATA: AdvantageItem[] = [
  { number: 1, title: 'Lifetime Recordings.' },
  { number: 2, title: 'Industry Recognized Certificate' },
  { number: 3, title: 'Community with Batchmates' },
  { number: 4, title: 'Assignment Based Learning Module' },
  { number: 5, title: 'Industry Top Experts' },
  { number: 6, title: 'Lifetime Access' },
];

export const ADVANTAGES_IMAGE = 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/LrkwB7c6268cfec014522cadc888fc65ab173b51a4b5a.png';

export const ALUMNI_DATA: AlumniStudent[] = [
  {
    id: 'alumni-1',
    name: 'Sachin Kumar',
    role: 'Assistant Digital Marketing Manager',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/vccHJ8e3f9c65d5e343b364014adcf0f73e5b867db921.png',
    companyLogo: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/gKfLd1668914dcade6225c1894127de370df636a0ef18.png',
    package: '8+ LPA',
  },
  {
    id: 'alumni-2',
    name: 'Navin Sharma',
    role: 'Digital Marketing Manager',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/JNtdpwhatsappimage20250912at12.59.13pm1.png',
    companyLogo: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/Bkj6B63753f91fb50ff3c728f992fe2c87fec0f9664ef1.png',
    package: '5.5+ LPA',
  },
  {
    id: 'alumni-3',
    name: 'Gurdeep',
    role: 'Digital Marketing Manager',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/d9fHdbc652b20b56eead6eb43712e51ffd12b745b53bb1.png',
    companyLogo: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/lw5xX50205e7f08afb11b78b7a7262909aff58a0a509d2.png',
    package: '7.5+ LPA',
  },
  {
    id: 'alumni-4',
    name: 'Ranajit Behera',
    role: 'Digital Marketing Manager',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/4vAq82b83c341fa4b3b841ce58ba173bf6091f93095fe2.png',
    companyLogo: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/bkcp683f370147587c1faa470ea8c5ca8127f0c1d7e812.png',
    package: '6+ LPA',
  },
  {
    id: 'alumni-5',
    name: 'Vishal Bansal',
    role: 'Associate SEO Analyst',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/4OwRu73d210fd9d5ff7979309fce572dcc842e0ac92041.png',
    companyLogo: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/lcLof8bb246c63bd253ef0f9601e3780e2b80ed866e031.png',
    package: '5+ LPA',
  },
  {
    id: 'alumni-6',
    name: 'Ashish Kumar',
    role: 'Senior Executive Media Operations',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/3M40Zd676e810b25a9ff8fac7afae0b30244e18108aea1.png',
    companyLogo: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/KgkSI50433b0c50f0b8ecbc51be3424112924b027bd3f1.png',
    package: '6+ LPA',
  },
];

export const CERTIFICATION_BENEFITS: BenefitItem[] = [
  {
    icon: 'certificate',
    title: 'Industry-Recognized Certification',
    description: 'Validate your digital marketing expertise with credentials respected by top employers globally.',
  },
  {
    icon: 'credibility',
    title: 'Instant Career Credibility',
    description: 'Strengthen your resume and LinkedIn profile to boost job opportunities and salary negotiations.',
  },
  {
    icon: 'growth',
    title: 'Gateway to High-Growth Roles',
    description: 'Open doors to roles like Digital Marketing Specialist, Growth Marketer, and SEO/SEM Expert.',
  },
];

export const CERTIFICATION_IMAGE = 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/6LeIo083be63f92de2c19571e6c6d9f32388ed01cc82f.png';

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: 'faculty-1',
    name: 'Umar Tazkeer',
    role: 'Founder UTDM',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/dNNFh23a6b5991d1a0c51c9a4efe79355529c9625c9dd.png',
    bio: 'Umar Tazkeer, Founder of UTDM, is a B.Tech (CSE) and MBA (Marketing & Finance) with deep expertise in Paid Media and Tracking. He leads a performance-driven digital agency, consulting top global brands. With hands-on experience managing over ₹50Cr in ad spend, he focuses on scalable performance strategies and high-ROI digital campaigns.',
    bgColor: '#f2c546',
    borderColor: '#f2c546',
  },
  {
    id: 'faculty-2',
    name: 'Afsar Khan',
    role: 'DM Trainer, UTDM',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/sRdU85fde73e1d416f1de59233dadb66d45d701d0e9b9.png',
    bio: 'Afsar Khan, Sales Lead at UTDM and B.Tech graduate from IIT–Dasuali, has practical experience in managing international clients, especially across the GCC region. He supports client acquisition, sales strategy, and relationship building while aligning client goals with agency outcomes.',
    bgColor: '#6eebbf',
    borderColor: '#6eebbf',
  },
  {
    id: 'faculty-3',
    name: 'Ankur Pratap Singh',
    role: 'DM Trainer, UTDM',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/AMgbJ9c142e72a8b61b5db5881d53db4b430e50d8a36c.png',
    bio: 'Ankur Pratap, Senior Trainer at UTDM, has trained 10,000+ students in the past 7+ years across online and offline platforms. A B.Tech graduate, he works closely with India’s top digital marketing institutes and specializes in SEO, Google Ads, and Funnel Building.',
    bgColor: '#f3baa9',
    borderColor: '#f3baa9',
  },
  {
    id: 'faculty-4',
    name: 'Sahil Kannojiya',
    role: 'Founder Promote Digitally',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/zD1m39aba4c74b96250323f9f01c8bbd012e5977a25be.png',
    bio: 'Sahil Kanojiya, Founder of PromoteDigitally and BITS Pilani alumnus, is a growth strategist known for scaling D2C and Meta Ads campaigns. His creative, data-led storytelling approach has helped multiple brands grow from scratch to 8-figure revenue.',
    bgColor: '#7eee9c',
    borderColor: '#7eee9c',
  },
  {
    id: 'faculty-5',
    name: 'Aditya Singh',
    role: 'Founder, FX Retina',
    image: 'https://d502jbuhuh9wk.cloudfront.net/orgData/655de673e4b0ab5485148ea9/pages/assets/images/fEV2555facad8b34eb77da7adfd44f80a89c0bff2e00d.png',
    bio: 'Aditya Singh, Founder of FxRetina, is a digital strategist with deep expertise in lead generation funnels and marketing automation. With years of experience, he has helped startups and service based businesses implement ROI-focused strategies that deliver quality leads.',
    bgColor: 'rgb(60, 77, 201)',
    borderColor: 'rgb(60, 77, 201)',
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'How do I create an account?',
    answer: 'You need to create an account before taking a course. Click on Login/Register button. Click on Sign Up. Enter your Email Id & Password to register for an account.',
  },
  {
    question: 'I have issues with Login, what should I do?',
    answer: 'You can click on Forgot Password link to reset your password from the login screen. We will send the new password to your registered email address. Try to login with the new password. If the issue still persists, drop an email to info@umartazkeer.com.',
  },
  {
    question: 'How to take a Course?',
    answer: 'After you have purchased the Course or used the access code of the course, the course would be added to your “My Course” Section. Click on the Course image to start the course.',
  },
  {
    question: 'Do I receive certificate upon course completion?',
    answer: 'Absolutely! Each course you successfully complete will earn you a certificate of achievement. These certificates are a testament to your newly acquired skills and can be shared on your professional profiles.',
  },
  {
    question: 'Is there a time limit to complete the courses?',
    answer: 'We understand that life can get busy. That\'s why we provide lifetime access to the courses you enroll in. While there\'s no strict time limit, we encourage you to make consistent progress to get the most out of your learning experience.',
  },
  {
    question: 'Are these courses live or recorded?',
    answer: 'We offer both! Some courses are self-paced recorded modules that you can watch anytime, while others are live cohorts and bootcamps with fixed schedules, live classes, and mentor support. For more details you can call or whatsapp on +919721410786.',
  },
  {
    question: 'Is the content in Hindi or English?',
    answer: 'Most of our courses are taught in Hindi with practical English technical terminology.',
  },
  {
    question: 'Can I mention these courses on my LinkedIn profile?',
    answer: 'Definitely. You can add them under your “Licenses & Certifications” section and even tag Umar Tazkeer or UT Digital Media as the issuing organization.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept all major payment options - UPI, debit/credit cards, net banking, and international payments via Razorpay.',
  },
  {
    question: 'Can international students join?',
    answer: 'Yes, international learners can purchase in USD directly through our website. The pricing automatically adjusts based on your country.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Since all content is digital and instantly accessible, we do not offer refunds once access is granted. However, if you face any technical issue, our support team will resolve it.',
  },
  {
    question: 'How will I know when a new live batch starts?',
    answer: 'All new batch announcements are made via YouTube videos and emails. Make sure you’re subscribed to the Umar Tazkeer YouTube channel.',
  },
  {
    question: 'What happens if I miss a live class?',
    answer: 'Don’t worry - every session is recorded and uploaded to your dashboard within 4 hours.',
  },
];

export const CONTACT_DATA: ContactInfo = {
  location: '643/97D, Nayak Nagar Colony, Stp Road, Lko.',
  phoneNumbers: ['+919721410786', '+919455076758'],
  email: 'info@umartazkeer.com',
};

export function getAllCourseSlugs(): string[] {
  const slugs = new Set<string>();
  LIVE_COHORTS_DATA.forEach((c) => slugs.add(c.slug));
  FLAGSHIP_COURSES_DATA.forEach((c) => slugs.add(c.slug));
  BUNDLES_DATA.forEach((c) => slugs.add(c.slug));
  ALL_COURSES_DATA.forEach((c) => slugs.add(c.slug));
  slugs.add('combo-package');
  slugs.add('google-ads-checklist');
  return Array.from(slugs);
}

export function findCourseBySlug(slug: string): Product | undefined {
  // Check ALL_COURSES_DATA
  const c = ALL_COURSES_DATA.find((item) => item.slug === slug);
  if (c) {
    return {
      id: c.id,
      title: c.title,
      slug: c.slug,
      image: c.image,
      thumbnail: c.image,
      instructor: c.instructor,
      rating: c.rating,
      ratingsCount: c.ratingsCount,
      originalPrice: c.originalPrice,
      discountedPrice: c.discountedPrice,
      isBestseller: c.isBestseller,
      ctaLink: `/checkout?course=${c.slug}`,
    };
  }

  // Check LIVE_COHORTS_DATA
  const live = LIVE_COHORTS_DATA.find((item) => item.slug === slug);
  if (live) {
    const numericPrice = parseInt(live.price.replace(/[^\d]/g, ''), 10) || 25000;
    return {
      id: live.id,
      title: live.title,
      slug: live.slug,
      image: live.image,
      thumbnail: live.image,
      instructor: 'Umar Tazkeer / Industry Mentors',
      rating: 5.0,
      ratingsCount: 95,
      originalPrice: numericPrice * 1.8,
      discountedPrice: numericPrice,
      isBestseller: true,
      ctaLink: `/checkout?course=${live.slug}`,
    };
  }

  // Check FLAGSHIP_COURSES_DATA
  const flag = FLAGSHIP_COURSES_DATA.find((item) => item.slug === slug);
  if (flag) {
    return {
      id: flag.id,
      title: flag.title,
      slug: flag.slug,
      image: flag.image,
      thumbnail: flag.image,
      instructor: flag.instructor,
      rating: flag.rating,
      ratingsCount: flag.ratingsCount,
      originalPrice: flag.originalPrice,
      discountedPrice: flag.discountedPrice,
      isBestseller: true,
      ctaLink: `/checkout?course=${flag.slug}`,
    };
  }

  // Check BUNDLES_DATA
  const bundle = BUNDLES_DATA.find((item) => item.slug === slug);
  if (bundle) {
    const numericPrice = parseInt(bundle.price.replace(/[^\d]/g, ''), 10) || 6499;
    return {
      id: bundle.id,
      title: bundle.title,
      slug: bundle.slug,
      image: bundle.image,
      thumbnail: bundle.image,
      instructor: 'Umar Tazkeer',
      rating: 5.0,
      ratingsCount: 88,
      originalPrice: 15000,
      discountedPrice: numericPrice,
      isBestseller: true,
      ctaLink: `/checkout?course=${bundle.slug}`,
    };
  }

  if (slug === 'combo-package') {
    return {
      id: 'combo-package',
      title: SPECIAL_OFFER_DATA.title,
      slug: 'combo-package',
      image: SPECIAL_OFFER_DATA.image,
      thumbnail: SPECIAL_OFFER_DATA.image,
      instructor: 'Umar Tazkeer & Industry Founders',
      rating: 5.0,
      ratingsCount: 120,
      originalPrice: 35000,
      discountedPrice: 14999,
      isBestseller: true,
      ctaLink: '/checkout?course=combo-package',
    };
  }

  return undefined;
}
