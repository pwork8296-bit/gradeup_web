import { Product, Product2 } from '@/types/productTypes';

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'ga4-cohort-1',
    title: 'Advanced Google Analytics 4 - (Cohort 1)',
    slug: 'advanced-google-analytics-4-cohort-1',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    instructors: 'Umar Tazkeer / Prashanth',
    originalPrice: 18000,
    discountedPrice: 9440,
    currency: '₹',
  },
];

export const SAMPLE_PRODUCT2: Product2 = {
  id: 'genai-langchain-agents',
  title: 'Generative AI Engineer: LangChain, AI Agents & 12 Projects',
  slug: 'generative-ai-engineer-langchain-ai-agents',
  thumbnail: '',
  instructor: 'Ardit Sulce',
  studentsCount: '600,000+ Students',
  isPremium: true,
  isBestseller: true,
  type: 'Course',
  rating: 4.5,
  ratingsCount: '723 ratings',
  originalPrice: 799.0,
  discountedPrice: 549.0,
  currency: '₹',
};
