import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import ProductCard from '@/components/products/ProductCard';
import { ALL_COURSES_DATA } from '@/data/courseData';

export const metadata: Metadata = {
  title: 'My Wishlist | Umar Tazkeer Digital Academy',
  description: 'View your saved courses, cohorts, and learning bundles.',
};

export default function WishlistPage() {
  const savedCourses = ALL_COURSES_DATA.slice(0, 3);

  return (
    <>
      <PageHeader
        title="My Wishlist"
        subtitle="Programs and masterclasses you have saved for later enrollment"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Wishlist' },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-slate-900">
            Saved Programs ({savedCourses.length})
          </h2>
          <Link
            href="/courses"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 no-underline"
          >
            Explore More Programs &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedCourses.map((c) => (
            <ProductCard
              key={c.id}
              product={{
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
                ctaLink: `/courses/${c.slug}`,
              }}
              showRating={true}
              showActionBtn={true}
              actionBtnText="Enroll Now"
            />
          ))}
        </div>
      </div>
    </>
  );
}
