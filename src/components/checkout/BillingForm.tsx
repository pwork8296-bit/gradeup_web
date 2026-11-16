'use client';

import React from 'react';
import { BillingFormProps } from '@/types/orderTypes';

export default function BillingForm({
  billingDetails,
  onChange,
  onSubmit,
  isSubmitting = false,
}: BillingFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Contact Details Card */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
          Learner Contact & Enrollment Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              First Name *
            </label>
            <input
              type="text"
              required
              value={billingDetails.firstName}
              onChange={(e) => onChange('firstName', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
              placeholder="e.g. Rahul"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Last Name *
            </label>
            <input
              type="text"
              required
              value={billingDetails.lastName}
              onChange={(e) => onChange('lastName', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
              placeholder="e.g. Sharma"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email Address (For LMS Credentials) *
            </label>
            <input
              type="email"
              required
              value={billingDetails.email}
              onChange={(e) => onChange('email', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
              placeholder="rahul@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Phone / WhatsApp Number (For Batch Updates) *
            </label>
            <input
              type="tel"
              required
              value={billingDetails.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>
      </div>

      {/* Billing Address Card */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
          Billing & Invoicing Address
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Street Address *
            </label>
            <input
              type="text"
              required
              value={billingDetails.address}
              onChange={(e) => onChange('address', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
              placeholder="House/Flat number, Building name, Street"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                City *
              </label>
              <input
                type="text"
                required
                value={billingDetails.city}
                onChange={(e) => onChange('city', e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
                placeholder="e.g. New Delhi"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                State *
              </label>
              <input
                type="text"
                required
                value={billingDetails.state}
                onChange={(e) => onChange('state', e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
                placeholder="e.g. Delhi NCR"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                PIN Code *
              </label>
              <input
                type="text"
                required
                value={billingDetails.pincode}
                onChange={(e) => onChange('pincode', e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
                placeholder="e.g. 110001"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Order Notes / GSTIN (Optional)
            </label>
            <textarea
              rows={3}
              value={billingDetails.orderNotes || ''}
              onChange={(e) => onChange('orderNotes', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
              placeholder="Company name, GST number for tax input credit, or special instructions"
            />
          </div>
        </div>
      </div>

      {/* Payment Method Selector */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
          Payment Method
        </h3>

        <div className="space-y-3">
          <label className={`flex items-center gap-3 p-3.5 rounded-lg border cursor-pointer transition-colors ${billingDetails.paymentMethod === 'upi' ? 'border-blue-600 bg-blue-50/50' : 'border-slate-200 hover:bg-slate-50'}`}>
            <input
              type="radio"
              name="paymentMethod"
              checked={billingDetails.paymentMethod === 'upi'}
              onChange={() => onChange('paymentMethod', 'upi')}
              className="text-blue-600 focus:ring-blue-500"
            />
            <div className="flex-1">
              <span className="text-sm font-bold text-slate-900">UPI Instant Payment (Google Pay, PhonePe, Paytm, QR)</span>
              <p className="text-xs text-slate-500">Zero surcharge, instant enrollment confirmation</p>
            </div>
          </label>

          <label className={`flex items-center gap-3 p-3.5 rounded-lg border cursor-pointer transition-colors ${billingDetails.paymentMethod === 'card' ? 'border-blue-600 bg-blue-50/50' : 'border-slate-200 hover:bg-slate-50'}`}>
            <input
              type="radio"
              name="paymentMethod"
              checked={billingDetails.paymentMethod === 'card'}
              onChange={() => onChange('paymentMethod', 'card')}
              className="text-blue-600 focus:ring-blue-500"
            />
            <div className="flex-1">
              <span className="text-sm font-bold text-slate-900">Credit / Debit Card / EMI</span>
              <p className="text-xs text-slate-500">Visa, MasterCard, RuPay & No-Cost EMI options</p>
            </div>
          </label>

          <label className={`flex items-center gap-3 p-3.5 rounded-lg border cursor-pointer transition-colors ${billingDetails.paymentMethod === 'netbanking' ? 'border-blue-600 bg-blue-50/50' : 'border-slate-200 hover:bg-slate-50'}`}>
            <input
              type="radio"
              name="paymentMethod"
              checked={billingDetails.paymentMethod === 'netbanking'}
              onChange={() => onChange('paymentMethod', 'netbanking')}
              className="text-blue-600 focus:ring-blue-500"
            />
            <div className="flex-1">
              <span className="text-sm font-bold text-slate-900">Net Banking</span>
              <p className="text-xs text-slate-500">All major Indian banks supported</p>
            </div>
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-blue-600 py-4 text-center text-base font-bold text-white transition hover:bg-blue-700 shadow-md hover:shadow-lg disabled:opacity-60 cursor-pointer border-0"
      >
        {isSubmitting ? 'Processing Enrollment...' : 'Complete Enrollment & Pay Now'}
      </button>
    </form>
  );
}
