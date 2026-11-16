'use client';

import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export default function Spinner({
  size = 'md',
  className = '',
  label = 'Loading courses...',
}: SpinnerProps) {
  const sizeMap = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <div
        className={`${sizeMap[size]} border-blue-200 border-t-blue-600 rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      />
      {label && <span className="text-sm font-medium text-slate-500">{label}</span>}
    </div>
  );
}
