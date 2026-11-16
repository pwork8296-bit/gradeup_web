import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import ProductDetailView from '@/components/products/ProductDetailView';
import { getAllCourseSlugs, findCourseBySlug, ALL_COURSES_DATA } from '@/data/courseData';
import { Product } from '@/types/productTypes';

export async function generateStaticParams() {
  const slugs = getAllCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = findCourseBySlug(slug);

  return {
    title: course ? `${course.title} | Umar Tazkeer Digital Academy` : 'Course Details | Umar Tazkeer',
    description: course ? `Enroll in ${course.title} taught by ${course.instructor}.` : 'Course details and enrollment.',
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = findCourseBySlug(slug);

  const fallbackProduct: Product = {
    id: ALL_COURSES_DATA[0].id,
    title: ALL_COURSES_DATA[0].title,
    slug: ALL_COURSES_DATA[0].slug,
    image: ALL_COURSES_DATA[0].image,
    thumbnail: ALL_COURSES_DATA[0].image,
    instructor: ALL_COURSES_DATA[0].instructor,
    rating: ALL_COURSES_DATA[0].rating,
    ratingsCount: ALL_COURSES_DATA[0].ratingsCount,
    originalPrice: ALL_COURSES_DATA[0].originalPrice,
    discountedPrice: ALL_COURSES_DATA[0].discountedPrice,
    isBestseller: ALL_COURSES_DATA[0].isBestseller,
    ctaLink: `/checkout?course=${ALL_COURSES_DATA[0].slug}`,
  };

  const productData = course || fallbackProduct;

  return (
    <>
      <PageHeader
        title={productData.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '/courses' },
          { label: productData.title },
        ]}
      />
      <ProductDetailView product={productData} />
    </>
  );
}
