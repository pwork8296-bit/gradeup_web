'use client';

import React from 'react';
import Link from 'next/link';
import { CheckoutOrderSummaryProps } from '@/types/orderTypes';

export default function CheckoutOrderSummary({
  items = [],
  subtotal = 0,
  discount = 0,
  tax = 0,
  total = 0,
  isSubmitting = false,
  onPlaceOrder,
}: CheckoutOrderSummaryProps) {
  return (
    <div className="w-full lg:w-5/12">
      <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
          <span>Order Overview</span>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
            {items.length} {items.length === 1 ? 'Program' : 'Programs'}
          </span>
        </h3>

        {/* Selected Programs List */}
        <div className="space-y-4 max-h-80 overflow-y-auto pr-1 mb-6 divide-y divide-slate-100">
          {items.map((item) => (
            <div key={`${item.product_id}-${item.variant || ''}`} className="pt-3 first:pt-0 flex items-start gap-3">
              <div className="w-16 h-12 flex-shrink-0 rounded-md overflow-hidden bg-slate-900 border border-slate-200">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-[10px] font-bold bg-blue-900">
                    UT
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-tight">
                  {item.title}
                </h4>
                {item.variant && (
                  <span className="text-[10px] text-blue-600 font-medium">{item.variant}</span>
                )}
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[11px] text-slate-500">Qty: {item.quantity}</span>
                  <span className="text-xs font-bold text-slate-900">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Financial Breakdown */}
        <div className="space-y-2.5 pt-4 border-t border-slate-100 text-sm text-slate-600">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span className="font-semibold text-slate-900">₹{subtotal.toLocaleString('en-IN')}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Applied Discount:</span>
              <span className="font-semibold">-₹{discount.toLocaleString('en-IN')}</span>
            </div>
          )}

          <div className="flex justify-between">
            <span>GST / Taxes:</span>
            <span className="font-semibold text-slate-900">
              {tax > 0 ? `₹${tax.toLocaleString('en-IN')}` : 'Included in Fee'}
            </span>
          </div>

          <div className="border-t border-slate-200 pt-3 flex justify-between items-center text-base font-bold">
            <span className="text-slate-900">Total Payable:</span>
            <span className="text-blue-600 text-xl font-extrabold">
              ₹{total.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {onPlaceOrder && (
          <button
            type="button"
            onClick={onPlaceOrder}
            disabled={isSubmitting}
            className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 text-center text-sm font-bold text-white transition hover:bg-blue-700 shadow-md hover:shadow-lg disabled:opacity-60 cursor-pointer border-0"
          >
            {isSubmitting ? 'Processing Order...' : 'Confirm & Enroll Now'}
          </button>
        )}

        {/* Guarantees Box */}
        <div className="mt-6 rounded-lg bg-slate-50 p-4 border border-slate-100 text-xs text-slate-500 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Instant LMS Dashboard & Course Materials Access</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Official Certificate from UT Digital Media</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Private Discord Community with Batchmates</span>
          </div>
        </div>

        <div className="mt-4 text-center">
          <Link href="/cart" className="text-xs font-semibold text-blue-600 hover:text-blue-800 no-underline">
            &larr; Modify Cart Items
          </Link>
        </div>
      </div>
    </div>
  );
}
