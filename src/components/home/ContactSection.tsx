'use client';

import React, { useState } from 'react';
import { ContactSectionProps } from '@/types/courseTypes';
import { CONTACT_DATA } from '@/data/courseData';

export default function ContactSection({
  contactInfo = CONTACT_DATA,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-[#f5f5ff]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3c4dc9] tracking-tight">
            Connect with us
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-700">
            Send us your query
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-slate-200 mb-16">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Thank you for reaching out!</h3>
              <p className="text-slate-600 mt-2">We have received your message and will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Enter Name..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border-2 border-[#3c4dc9] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3c4dc9]/30 rounded-md text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Enter Email..."
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border-2 border-[#3c4dc9] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3c4dc9]/30 rounded-md text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Enter Phone..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border-2 border-[#3c4dc9] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3c4dc9]/30 rounded-md text-sm"
                  />
                </div>
              </div>

              <div>
                <textarea
                  required
                  rows={4}
                  placeholder="Enter Your Message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border-2 border-[#3c4dc9] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3c4dc9]/30 rounded-md text-sm"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="bg-[#3c4dc9] hover:bg-[#2b37a8] text-white font-semibold text-base px-12 py-3 rounded-md shadow-md transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>

        {/* 3 Contact Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Location */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#3c4dc9] text-[#3c4dc9] hover:bg-[#3c4dc9] hover:text-white transition-colors flex items-center justify-center text-2xl mb-3">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-base font-bold text-slate-700 tracking-wider">LOCATION</h4>
            <p className="mt-1 text-sm text-slate-600 max-w-xs">{contactInfo.location}</p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#3c4dc9] text-[#3c4dc9] hover:bg-[#3c4dc9] hover:text-white transition-colors flex items-center justify-center text-2xl mb-3">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-base font-bold text-slate-700 tracking-wider">CONTACT US</h4>
            <p className="mt-1 text-sm text-slate-600">{contactInfo.phoneNumbers.join(', ')}</p>
          </div>

          {/* Mail Us */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#3c4dc9] text-[#3c4dc9] hover:bg-[#3c4dc9] hover:text-white transition-colors flex items-center justify-center text-2xl mb-3">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-base font-bold text-slate-700 tracking-wider">MAIL US</h4>
            <p className="mt-1 text-sm text-slate-600">{contactInfo.email}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
