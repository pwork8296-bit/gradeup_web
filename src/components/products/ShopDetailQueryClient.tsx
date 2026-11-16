'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import ProductDetailView from './ProductDetailView';
import { ALL_COURSES_DATA } from '@/data/courseData';
import { Product } from '@/types/productTypes';

export default function ShopDetailQueryClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const slug = searchParams.get('slug');

  const course =
    ALL_COURSES_DATA.find((c) => (id && c.id === id) || (slug && c.slug === slug)) ||
    ALL_COURSES_DATA[0];

  const productData: Product = {
    id: course.id,
    title: course.title,
    slug: course.slug,
    image: course.image,
    thumbnail: course.image,
    instructor: course.instructor,
    rating: course.rating,
    ratingsCount: course.ratingsCount,
    originalPrice: course.originalPrice,
    discountedPrice: course.discountedPrice,
    isBestseller: course.isBestseller,
    ctaLink: `/checkout?course=${course.slug}`,
  };

  return <ProductDetailView product={productData} />;
}
