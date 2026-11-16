'use client';

import React from 'react';
import Link from 'next/link';
import { ADMIN_CLIENTS_DATA } from '@/data/adminData';

export default function AdminRecentOrdersTable() {
  const getBadgeStyle = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'completed':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'pending':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'cancelled':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-slate-100">
        <div>
          <h3 className="font-bold text-slate-800 text-sm">Recent Enrollments</h3>
          <p className="text-xs text-slate-500">Latest students joining academy batches</p>
        </div>
        <Link
          href="/admin/clients"
          className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
        >
          View All &rarr;
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs whitespace-nowrap">
          <thead className="bg-slate-50/80 text-slate-600 font-semibold border-b border-slate-100 uppercase tracking-wider text-[11px]">
            <tr>
              <th className="py-3 px-5">Learner</th>
              <th className="py-3 px-4">Course Enrolled</th>
              <th className="py-3 px-4">Fee Paid</th>
              <th className="py-3 px-4">Enrollment Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {ADMIN_CLIENTS_DATA.map((client) => (
              <tr key={client.id} className="hover:bg-slate-50/60 transition">
                <td className="py-3.5 px-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={client.avatar}
                      alt={client.name}
                      className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">{client.name}</p>
                      <p className="text-[11px] text-slate-400">{client.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-medium text-slate-800">
                  {client.enrolledCourse}
                </td>
                <td className="py-3.5 px-4 font-bold text-slate-900">{client.amount}</td>
                <td className="py-3.5 px-4 text-slate-500">{client.date}</td>
                <td className="py-3.5 px-4">
                  <span
                    className={`inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-full border capitalize ${getBadgeStyle(
                      client.status
                    )}`}
                  >
                    {client.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <Link
                    href={`/admin/client/edit/${client.id}`}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
