export interface HeroBannerData {
  desktopImage: string;
  mobileImage: string;
  altText: string;
  linkHref?: string;
}

export interface CohortCourse {
  id: string;
  slug: string;
  tag: string;
  isNew?: boolean;
  isLive?: boolean;
  startDate?: string;
  title: string;
  description: string;
  image: string;
  schedule: string;
  scheduleTime: string;
  sessionsCount: string;
  sessionsDetail: string;
  projectsCount: string;
  projectsDetail: string;
  recordingsInfo: string;
  recordingsDetail: string;
  price: string;
  priceNote: string;
  urgencyText: string;
  ctaText: string;
  ctaLink: string;
  brandColor?: string;
}

export interface FlagshipCourse {
  id: string;
  slug: string;
  title: string;
  instructor: string;
  image: string;
  rating: number;
  ratingsCount: number;
  originalPrice: number;
  discountedPrice: number;
  ctaLink: string;
}

export interface BundleItem {
  name: string;
  price: number;
}

export interface BundleCourse {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  tags: string[];
  items: BundleItem[];
  price: string;
  originalPrice?: string;
  ctaLink: string;
}

export interface CourseCardItem {
  id: string;
  title: string;
  slug: string;
  image: string;
  instructor: string;
  rating: number;
  ratingsCount: number;
  originalPrice?: number;
  discountedPrice: number;
  isBestseller?: boolean;
  ctaLink: string;
  category?: string;
}

export interface AdvantageItem {
  number: number;
  title: string;
}

export interface AlumniStudent {
  id: string;
  name: string;
  role: string;
  image: string;
  companyLogo: string;
  package: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  bgColor: string;
  borderColor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  location: string;
  phoneNumbers: string[];
  email: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  image?: string;
  rating: number;
  content: string;
  courseTaken?: string;
  package?: string;
}

export interface TestimonialsSectionProps {
  testimonials?: TestimonialItem[];
}

/* Component Prop Interfaces */
export interface HeroBannerProps {
  data?: HeroBannerData;
}

export interface LiveCohortsSectionProps {
  cohorts?: CohortCourse[];
}

export interface FlagshipProgramsProps {
  courses?: FlagshipCourse[];
}

export interface SpecialOfferBannerProps {
  title?: string;
  badge?: string;
  points?: string[];
  image?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface BundleSectionProps {
  bundles?: BundleCourse[];
}

export interface AllCoursesSectionProps {
  courses?: CourseCardItem[];
}

export interface AdvantagesSectionProps {
  advantages?: AdvantageItem[];
  image?: string;
}

export interface AlumniSectionProps {
  alumni?: AlumniStudent[];
}

export interface CertificationSectionProps {
  benefits?: BenefitItem[];
  image?: string;
}

export interface FacultySectionProps {
  faculty?: FacultyMember[];
}

export interface FaqSectionProps {
  faqs?: FaqItem[];
}

export interface ContactSectionProps {
  contactInfo?: ContactInfo;
}

/* Courses Directory & Filtering Interfaces */
export interface CourseCategoryItem {
  label: string;
  count: number;
  value?: string;
}

export interface CourseInstructorItem {
  label: string;
  count: number;
  value?: string;
}

export interface FeaturedCourseItem {
  id: string;
  title: string;
  image: string;
  price: string;
  originalPrice?: string;
  slug?: string;
  ctaLink?: string;
  tag?: string;
}

export interface CourseFilterState {
  category: string;
  instructor: string;
  searchQuery: string;
  sortBy: string;
}

export interface CoursesSectionProps {
  courses?: CourseCardItem[];
}

export interface CourseProductsProps {
  courses?: CourseCardItem[];
  filterCategory?: string;
  filterInstructor?: string;
  searchQuery?: string;
  sortBy?: string;
  onSelectCategory?: (category: string) => void;
  onClearFilters?: () => void;
}

export interface CourseSidebarProps {
  categories?: CourseCategoryItem[];
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  instructors?: CourseInstructorItem[];
  selectedInstructor?: string;
  onSelectInstructor?: (instructor: string) => void;
  featuredCourses?: FeaturedCourseItem[];
}

export interface CourseSidebarCategoriesProps {
  categories?: CourseCategoryItem[];
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export interface CourseSidebarInstructorsProps {
  instructors?: CourseInstructorItem[];
  selectedInstructor?: string;
  onSelectInstructor?: (instructor: string) => void;
}

export interface CourseSidebarFeaturedProps {
  courses?: FeaturedCourseItem[];
}
