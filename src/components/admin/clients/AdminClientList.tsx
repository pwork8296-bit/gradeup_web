'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PlusCircle, Search, Edit2, Trash2 } from '@/components/admin/common/AdminIcons';
import { ADMIN_CLIENTS_DATA } from '@/data/adminData';
import { AdminClientItem } from '@/types/adminTypes';

export default function AdminClientList() {
  const [clients, setClients] = useState<AdminClientItem[]>(ADMIN_CLIENTS_DATA);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = clients.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.enrolledCourse.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id: string | number) => {
    if (confirm('Are you sure you want to remove this learner enrollment?')) {
      setClients(clients.filter((c) => c.id !== id));
    }
  };

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
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Learners & Clients</h1>
          <p className="text-xs text-slate-500 mt-1">
            Directory of enrolled students, course access, and payments.
          </p>
        </div>
        <Link
          href="/admin/client/add"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add New Learner</span>
        </Link>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search learner name, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-500 focus:bg-white text-slate-800"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full sm:w-auto text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-hidden focus:border-blue-500"
        >
          <option value="all">All Statuses</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead className="bg-slate-50/80 text-slate-600 font-semibold border-b border-slate-100 uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-5">Learner</th>
                <th className="py-3 px-4">Contact Phone</th>
                <th className="py-3 px-4">Enrolled Course</th>
                <th className="py-3 px-4">Fee Paid</th>
                <th className="py-3 px-4">Enroll Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/60 transition">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">{item.name}</p>
                        <p className="text-[11px] text-slate-400">{item.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{item.phone}</td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">{item.enrolledCourse}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">{item.amount}</td>
                  <td className="py-3.5 px-4 text-slate-500">{item.date}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-full border capitalize ${getBadgeStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/client/edit/${item.id}`}
                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-slate-100 rounded-md transition"
                        title="Edit learner"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition"
                        title="Delete learner"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
