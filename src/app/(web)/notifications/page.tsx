import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Batch Notifications & Announcements | Umar Tazkeer',
  description: 'Stay updated with upcoming live sessions, schedule revisions, and new material uploads.',
};

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: 'Live Session Tomorrow: Advanced CAPI & Server-Side GTM',
      date: 'Today at 4:30 PM',
      read: false,
      tag: 'Live Cohort 1',
      link: '/courses/master-google-analytics-4-live-cohort',
    },
    {
      id: 2,
      title: 'New Assignment Released: Meta Dynamic Creative Testing Framework',
      date: 'Yesterday at 11:00 AM',
      read: true,
      tag: 'Assignment',
      link: '/user',
    },
    {
      id: 3,
      title: 'Updated Agency Checklist 2026 available in LMS Resources',
      date: 'Nov 12, 2026',
      read: true,
      tag: 'Resource',
      link: '/courses/google-ads-checklist',
    },
  ];

  return (
    <>
      <PageHeader
        title="Student Notifications"
        subtitle="Recent alerts, timetable reminders, and curriculum updates for your active batches"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Notifications' },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-900">Recent Alerts</h3>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
              1 Unread
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`py-4 flex items-start justify-between gap-4 transition-colors ${!n.read ? 'bg-blue-50/30 -mx-4 px-4 rounded-xl' : ''}`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                      {n.tag}
                    </span>
                    <span className="text-xs text-slate-400">{n.date}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900">{n.title}</h4>
                </div>

                <Link
                  href={n.link}
                  className="rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors whitespace-nowrap no-underline"
                >
                  View Details &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
