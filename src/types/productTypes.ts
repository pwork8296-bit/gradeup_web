export interface Product {
  id: string | number;
  title: string;
  slug?: string;
  thumbnail?: string;
  image?: string;
  instructor?: string;
  instructors?: string;
  rating?: number;
  ratingsCount?: number | string;
  originalPrice?: number;
  discountedPrice: number;
  currency?: string;
  badge?: string;
  isBestseller?: boolean;
  ctaLink?: string;
}

export interface ProductCardProps {
  product?: Product;
  showRating?: boolean;
  showActionBtn?: boolean;
  actionBtnText?: string;
}

export interface ProductGridProps {
  products: Product[];
  title?: string;
}

export interface Product2 {
  id: string | number;
  title: string;
  slug?: string;
  thumbnail: string;
  instructor: string;
  studentsCount?: string;
  isPremium?: boolean;
  isBestseller?: boolean;
  type?: string;
  rating?: number;
  ratingsCount?: number | string;
  originalPrice: number;
  discountedPrice: number;
  currency?: string;
}

export interface ProductCard2Props {
  product?: Product2;
  onAddToCart?: (product: Product2) => void;
  onToggleWishlist?: (product: Product2) => void;
  isWishlisted?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

export interface ProductDetailProps {
  product: Product;
  curriculum?: { title: string; duration: string; lecturesCount: number }[];
  highlights?: string[];
  requirements?: string[];
  reviews?: ReviewItem[];
}
