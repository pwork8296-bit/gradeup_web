'use client';

import React, { useState } from 'react';
import { Save, CheckCircle, ShieldAlert, Globe, Bell, Key, Database } from '@/components/admin/common/AdminIcons';
import { ADMIN_SETTINGS_DEFAULT } from '@/data/adminData';
import { AdminSettingsData } from '@/types/adminTypes';

export default function AdminSettingsView() {
  const [settings, setSettings] = useState<AdminSettingsData>(ADMIN_SETTINGS_DEFAULT);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Platform Settings</h1>
          <p className="text-xs text-slate-500 mt-1">
            Configure global academy controls, currency formats, and security policies.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition"
        >
          <Save className="w-4 h-4" />
          <span>Save Configuration</span>
        </button>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Configuration saved successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* General Academy Info */}
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-6 space-y-5">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 text-slate-800 font-bold text-sm">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>General Information</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Academy / Brand Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Default Currency</label>
              <select
                value={settings.currency}
                onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="INR (₹)">INR (₹) - Indian Rupee</option>
                <option value="USD ($)">USD ($) - US Dollar</option>
                <option value="AED (د.إ)">AED (د.إ) - UAE Dirham</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Support Email</label>
              <input
                type="email"
                value={settings.supportEmail}
                onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Support WhatsApp / Phone</label>
              <input
                type="text"
                value={settings.supportPhone}
                onChange={(e) => setSettings({ ...settings, supportPhone: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Enrollment & Access Controls */}
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-6 space-y-5">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 text-slate-800 font-bold text-sm">
            <ShieldAlert className="w-4 h-4 text-blue-600" />
            <span>Enrollment & System Toggles</span>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between p-3.5 rounded-lg bg-slate-50 border border-slate-100 hover:bg-slate-100/60 cursor-pointer transition">
              <div>
                <p className="text-xs font-bold text-slate-800">Allow Learner Self-Registration</p>
                <p className="text-[11px] text-slate-500">
                  When enabled, visitors can sign up on the public portal and purchase courses.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.allowRegistration}
                onChange={(e) =>
                  setSettings({ ...settings, allowRegistration: e.target.checked })
                }
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-lg bg-slate-50 border border-slate-100 hover:bg-slate-100/60 cursor-pointer transition">
              <div>
                <p className="text-xs font-bold text-slate-800">Maintenance Mode</p>
                <p className="text-[11px] text-slate-500">
                  Temporarily display an under-maintenance landing page for non-admin visitors.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={(e) =>
                  setSettings({ ...settings, maintenanceMode: e.target.checked })
                }
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
            </label>
          </div>
        </div>

        {/* Payment Gateways & Keys */}
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-6 space-y-5">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 text-slate-800 font-bold text-sm">
            <Key className="w-4 h-4 text-blue-600" />
            <span>Payment & API Integration</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Razorpay Key ID</label>
              <input
                type="password"
                defaultValue="rzp_live_99482910482"
                className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Razorpay Key Secret</label>
              <input
                type="password"
                defaultValue="••••••••••••••••••••••••"
                className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
