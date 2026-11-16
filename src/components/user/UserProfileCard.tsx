'use client';

import React from 'react';
import { UserProfileDetails } from '@/types/userTypes';

interface UserProfileCardProps {
  user: UserProfileDetails;
}

export default function UserProfileCard({ user }: UserProfileCardProps) {
  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs mb-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        {/* User Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 text-center sm:text-left">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-xl flex items-center justify-center shadow-md">
            {initials}
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">{user.name}</h2>
            <p className="text-xs text-slate-500">{user.email} • {user.phone}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Learner since {user.joinDate}</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-4 w-full sm:w-auto justify-around sm:justify-end">
          <div className="text-center px-4 py-2 bg-blue-50/60 rounded-xl border border-blue-100">
            <span className="block text-xl font-extrabold text-blue-600">
              {user.activeCoursesCount}
            </span>
            <span className="text-[11px] font-semibold text-slate-600">Active Courses</span>
          </div>

          <div className="text-center px-4 py-2 bg-green-50/60 rounded-xl border border-green-100">
            <span className="block text-xl font-extrabold text-green-600">
              {user.completedCertificatesCount}
            </span>
            <span className="text-[11px] font-semibold text-slate-600">Certificates</span>
          </div>
        </div>
      </div>
    </div>
  );
}
