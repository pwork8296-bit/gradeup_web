import React from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import LiveCohortsSection from '@/components/home/LiveCohortsSection';
import FlagshipPrograms from '@/components/home/FlagshipPrograms';
import SpecialOfferBanner from '@/components/home/SpecialOfferBanner';
import BundleSection from '@/components/home/BundleSection';
import AllCoursesSection from '@/components/home/AllCoursesSection';
import AdvantagesSection from '@/components/home/AdvantagesSection';
import AlumniSection from '@/components/home/AlumniSection';
import CertificationSection from '@/components/home/CertificationSection';
import FacultySection from '@/components/home/FacultySection';
import FaqSection from '@/components/home/FaqSection';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Banner */}
      <HeroBanner />

      {/* 2. Live Cohorts Section */}
      <LiveCohortsSection />

      {/* 3. Flagship Programs / Courses */}
      <FlagshipPrograms />

      {/* 4. Special Offer Banner (Full Stack Digital Marketer) */}
      <SpecialOfferBanner />

      {/* 5. Course Bundles & Stacks */}
      <BundleSection />

      {/* 6. All Courses Grid */}
      <AllCoursesSection />

      {/* 7. UTDM Advantages (Numbered Dotted Path) */}
      <AdvantagesSection />

      {/* 8. Alumni Students (Placements & Packages) */}
      {/* <AlumniSection /> */}

      {/* 9. Career Benefits & Certification */}
      {/* <CertificationSection /> */}

      {/* 10. Faculty & Mentors */}
      <FacultySection />

      {/* 11. Frequently Asked Questions */}
      {/* <FaqSection /> */}

      {/* 12. Connect With Us / Contact Form */}
      <ContactSection />
    </div>
  );
}
