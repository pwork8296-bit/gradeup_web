'use client';

import React from 'react';
import Link from 'next/link';
import { CartItemRowProps } from '@/types/cartTypes';

export default function CartItemRow({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemRowProps) {
  const { product_id, title, slug, image, instructor, price, quantity, variant } = item;
  const itemTotal = price * quantity;
  const linkHref = slug ? `/courses/${slug}` : '#';

  return (
    <tr className="hover:bg-slate-50/70 transition-colors">
      {/* Course Thumbnail */}
      <td className="py-4 px-4 whitespace-nowrap">
        <Link href={linkHref} className="block w-20 h-14 rounded-lg overflow-hidden bg-slate-900 border border-slate-200 shadow-2xs">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold bg-blue-900">
              UT
            </div>
          )}
        </Link>
      </td>

      {/* Course Info */}
      <td className="py-4 px-4">
        <Link
          href={linkHref}
          className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors line-clamp-2 no-underline"
        >
          {title}
        </Link>
        {instructor && (
          <p className="text-xs text-slate-500 mt-0.5">Instructor: {instructor}</p>
        )}
        {variant && (
          <span className="inline-block mt-1 text-[11px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
            {variant}
          </span>
        )}
      </td>

      {/* Unit Price */}
      <td className="py-4 px-4 whitespace-nowrap text-sm font-semibold text-slate-800">
        ₹{price.toLocaleString('en-IN')}
      </td>

      {/* Quantity Controls */}
      <td className="py-4 px-4 whitespace-nowrap">
        <div className="inline-flex items-center rounded-lg border border-slate-300 bg-white shadow-2xs">
          <button
            type="button"
            onClick={() => onUpdateQuantity(product_id, Math.max(1, quantity - 1), variant)}
            disabled={quantity <= 1}
            className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent rounded-l-lg transition-colors cursor-pointer"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="w-10 text-center text-xs font-bold text-slate-900">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => onUpdateQuantity(product_id, quantity + 1, variant)}
            className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-r-lg transition-colors cursor-pointer"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </td>

      {/* Subtotal */}
      <td className="py-4 px-4 whitespace-nowrap text-sm font-bold text-blue-600">
        ₹{itemTotal.toLocaleString('en-IN')}
      </td>

      {/* Remove Button */}
      <td className="py-4 px-4 whitespace-nowrap text-center">
        <button
          type="button"
          onClick={() => onRemove(product_id, variant)}
          className="text-slate-400 hover:text-red-600 transition-colors p-1.5 rounded-md hover:bg-red-50 cursor-pointer border-0 bg-transparent"
          title="Remove item"
          aria-label="Remove item"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </td>
    </tr>
  );
}
