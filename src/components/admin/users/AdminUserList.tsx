'use client';

import React, { useState } from 'react';
import { ShieldCheck, PlusCircle, Search, Mail, ShieldAlert } from '@/components/admin/common/AdminIcons';
import { ADMIN_USERS_DATA } from '@/data/adminData';
import { AdminUserItem } from '@/types/adminTypes';

export default function AdminUserList() {
  const [users, setUsers] = useState<AdminUserItem[]>(ADMIN_USERS_DATA);
  const [search, setSearch] = useState('');

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  );

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'Super Admin':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Instructor':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Moderator':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Admin Staff & Instructors</h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage administrative privileges, teaching faculty, and staff access roles.
          </p>
        </div>
        <button
          onClick={() => alert('Add staff modal dialog triggered')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Invite Admin User</span>
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search team member..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-500 focus:bg-white text-slate-800"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead className="bg-slate-50/80 text-slate-600 font-semibold border-b border-slate-100 uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-5">Team Member</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Access Status</th>
                <th className="py-3 px-4">Last Active</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/60 transition">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">{user.name}</p>
                        <p className="text-[11px] text-slate-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-full border ${getRoleBadge(
                        user.role
                      )}`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-semibold rounded-full border capitalize ${
                        user.status === 'active'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          user.status === 'active' ? 'bg-emerald-500' : 'bg-slate-400'
                        }`}
                      />
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">{user.lastActive}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => alert(`Permissions modal for ${user.name}`)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Edit Privileges
                    </button>
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
