'use client';

import React from 'react';
import { IndianRupee, Users, BookOpen, Star, TrendingUp } from '@/components/admin/common/AdminIcons';
import { ADMIN_STATS_DATA } from '@/data/adminData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  currency: IndianRupee,
  users: Users,
  book: BookOpen,
  star: Star,
};

export default function AdminStatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {ADMIN_STATS_DATA.map((card) => {
        const IconComponent = iconMap[card.icon] || TrendingUp;
        return (
          <div
            key={card.id}
            className="p-5 bg-white rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                {card.title}
              </p>
              <h3 className="text-2xl font-bold text-slate-900">{card.value}</h3>
              {card.change && (
                <p className="text-[11px] font-medium text-emerald-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>{card.change}</span>
                </p>
              )}
            </div>

            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBgColor} ${card.iconTextColor} shrink-0`}
            >
              <IconComponent className="w-6 h-6" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
