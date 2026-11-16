'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CartItemRow from './CartItemRow';
import { CartItem } from '@/types/cartTypes';
import { INITIAL_CART_ITEMS, VALID_COUPONS } from '@/data/cartData';

export default function CartTable() {
  const [items, setItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);
  const [couponError, setCouponError] = useState('');

  const handleUpdateQuantity = (productId: string | number, quantity: number, variant?: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.product_id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string | number, variant?: string) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.product_id === productId && item.variant === variant)
      )
    );
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const cleanCode = couponCode.trim().toUpperCase();

    if (!cleanCode) {
      setCouponError('Please enter a valid coupon code.');
      return;
    }

    if (VALID_COUPONS[cleanCode] !== undefined) {
      const discountVal = VALID_COUPONS[cleanCode];
      setAppliedCoupon({ code: cleanCode, discount: discountVal });
      setCouponCode('');
    } else {
      setCouponError('Invalid coupon code. Try GROWTH10 or FESTIVE20');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponError('');
  };

  // Subtotal Calculation
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Discount Calculation
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discount <= 100) {
      discountAmount = Math.round((subtotal * appliedCoupon.discount) / 100);
    } else {
      discountAmount = appliedCoupon.discount;
    }
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  // 1. Empty Cart State
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 sm:p-20 rounded-2xl border border-slate-200 bg-white text-center shadow-xs">
        <div className="h-20 w-20 rounded-full bg-blue-50 flex items-center justify-center mb-5 text-blue-600">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
          Your Learning Cart is Empty
        </h3>
        <p className="text-sm text-slate-500 mb-8 max-w-md">
          Explore our certified marketing cohorts, advanced tracking programs, and AI courses to add items to your cart.
        </p>
        <Link
          href="/courses"
          className="rounded-xl bg-blue-600 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 shadow-md no-underline hover:shadow-lg"
        >
          Explore All Courses &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Items Table Card */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80 text-xs font-bold uppercase tracking-wider text-slate-600">
              <th className="py-3.5 px-4">Program</th>
              <th className="py-3.5 px-4">Details</th>
              <th className="py-3.5 px-4">Price</th>
              <th className="py-3.5 px-4">Quantity</th>
              <th className="py-3.5 px-4">Total</th>
              <th className="py-3.5 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((item) => (
              <CartItemRow
                key={`${item.product_id}-${item.variant || ''}`}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Coupon & Order Summary Grid */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Coupon & Guarantees */}
        <div className="lg:col-span-7 space-y-6">
          {/* Coupon Box */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
            <h4 className="text-sm font-bold text-slate-900 mb-3">
              Have a Discount Coupon Code?
            </h4>
            <form onSubmit={handleApplyCoupon} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter coupon (e.g. GROWTH10)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden uppercase"
              />
              <button
                type="submit"
                className="rounded-lg bg-slate-900 hover:bg-slate-800 px-6 py-2 text-sm font-semibold text-white transition-colors cursor-pointer border-0 shadow-xs"
              >
                Apply Coupon
              </button>
            </form>

            {couponError && (
              <p className="mt-2 text-xs font-medium text-red-600">{couponError}</p>
            )}

            {appliedCoupon && (
              <div className="mt-3 flex items-center justify-between rounded-lg bg-green-50 border border-green-200 px-3 py-2 text-xs text-green-800">
                <span>
                  Coupon <strong>{appliedCoupon.code}</strong> applied successfully!
                </span>
                <button
                  type="button"
                  onClick={handleRemoveCoupon}
                  className="font-bold text-red-600 hover:text-red-800 ml-2 cursor-pointer bg-transparent border-0"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Value Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
              <span className="text-2xl">🔒</span>
              <div>
                <h5 className="text-xs font-bold text-slate-900">100% Secure</h5>
                <p className="text-[11px] text-slate-500">256-bit SSL encrypted</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
              <span className="text-2xl">⚡</span>
              <div>
                <h5 className="text-xs font-bold text-slate-900">Instant Access</h5>
                <p className="text-[11px] text-slate-500">Immediate LMS unlock</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
              <span className="text-2xl">📜</span>
              <div>
                <h5 className="text-xs font-bold text-slate-900">Certificates</h5>
                <p className="text-[11px] text-slate-500">Industry recognized</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Cart Total Summary */}
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
              Order Summary
            </h3>

            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Cart Subtotal:</span>
                <span className="font-semibold text-slate-900">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Coupon Discount:</span>
                  <span className="font-semibold">
                    -₹{discountAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              <div className="flex justify-between">
                <span>GST (18% Included):</span>
                <span className="font-semibold text-slate-900">Included</span>
              </div>

              <div className="border-t border-slate-200 pt-3 flex justify-between items-center text-base font-bold">
                <span className="text-slate-900">Total Payable:</span>
                <span className="text-blue-600 text-xl font-extrabold">
                  ₹{finalTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="mt-6 block w-full rounded-xl bg-blue-600 py-3.5 text-center text-sm font-bold text-white transition hover:bg-blue-700 no-underline shadow-md hover:shadow-lg"
            >
              Proceed to Checkout &rarr;
            </Link>

            <div className="mt-4 text-center">
              <Link
                href="/courses"
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 no-underline"
              >
                &larr; Continue Exploring Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
