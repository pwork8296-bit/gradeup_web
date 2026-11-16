'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BillingForm from './BillingForm';
import CheckoutOrderSummary from './CheckoutOrderSummary';
import { BillingDetails } from '@/types/orderTypes';
import { INITIAL_CART_ITEMS } from '@/data/cartData';

export default function CheckoutSection() {
  const [items] = useState(INITIAL_CART_ITEMS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    firstName: 'Praveen',
    lastName: 'Kumar',
    email: 'praveen.kumar@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 402, Royal Palms, Outer Ring Road',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560103',
    orderNotes: '',
    paymentMethod: 'upi',
  });

  const handleChange = (field: keyof BillingDetails, value: string) => {
    setBillingDetails((prev) => ({ ...prev, [field]: value }));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 2000;
  const total = Math.max(0, subtotal - discount);

  const processOrder = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderPlaced(true);
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processOrder();
  };

  if (orderPlaced) {
    return (
      <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 text-center shadow-sm">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          ✓
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Enrollment Confirmed!</h2>
        <p className="text-sm text-slate-600 mb-6">
          Thank you for enrolling with Umar Tazkeer Digital Academy. Your access credentials and invoice have been dispatched to <strong>{billingDetails.email}</strong>.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/user"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700 transition no-underline shadow-md"
          >
            Access Student Dashboard
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 transition no-underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-start">
      <div className="w-full lg:w-7/12">
        <BillingForm
          billingDetails={billingDetails}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
      <CheckoutOrderSummary
        items={items}
        subtotal={subtotal}
        discount={discount}
        tax={0}
        total={total}
        isSubmitting={isSubmitting}
        onPlaceOrder={processOrder}
      />
    </div>
  );
}
