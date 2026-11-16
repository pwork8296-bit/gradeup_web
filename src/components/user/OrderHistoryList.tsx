'use client';

import React from 'react';
import Link from 'next/link';
import { OrderHistoryListProps } from '@/types/userTypes';

export default function OrderHistoryList({ orders = [] }: OrderHistoryListProps) {
  if (orders.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-xs">
        <p className="text-sm text-slate-500 mb-4">You have not enrolled in any programs yet.</p>
        <Link
          href="/courses"
          className="inline-block rounded-lg bg-blue-600 px-5 py-2 text-xs font-bold text-white hover:bg-blue-700 transition no-underline"
        >
          Browse Programs
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => {
        const isCompleted = order.status === 'completed';

        return (
          <div
            key={order.id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-blue-300 transition-colors"
          >
            {/* Course Thumbnail & Details */}
            <div className="flex items-start gap-4 min-w-0 flex-1">
              <div className="w-20 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-slate-900 border border-slate-200">
                <img
                  src={order.courseImage}
                  alt={order.courseTitle}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {order.orderNumber}
                  </span>
                  <span>•</span>
                  <span className="text-xs text-slate-400">{order.date}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 truncate">
                  {order.courseTitle}
                </h4>
                <p className="text-xs text-slate-500">{order.instructor}</p>

                {/* Progress bar */}
                {order.progressPercentage !== undefined && (
                  <div className="mt-2.5 flex items-center gap-2 max-w-xs">
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${isCompleted ? 'bg-green-500' : 'bg-blue-600'}`}
                        style={{ width: `${order.progressPercentage}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500">
                      {order.progressPercentage}%
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Price & Action */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
              <div className="text-left sm:text-right">
                <span className="text-sm font-bold text-slate-900">
                  ₹{order.amount.toLocaleString('en-IN')}
                </span>
                <span
                  className={`block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full text-center mt-0.5 ${
                    isCompleted
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}
                >
                  {isCompleted ? 'Completed' : 'In Progress'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={order.accessUrl}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 transition no-underline shadow-2xs"
                >
                  Continue Learning
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
