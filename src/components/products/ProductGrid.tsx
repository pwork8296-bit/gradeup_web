'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { ProductGridProps } from '@/types/productTypes';

export default function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <section className="py-8">
      {title && (
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
