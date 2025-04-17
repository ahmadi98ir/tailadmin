'use client';

import { HTMLAttributes } from 'react';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  circle?: boolean;
  className?: string;
}

export const Skeleton = ({
  width,
  height,
  rounded = true,
  circle = false,
  className = '',
  ...props
}: SkeletonProps) => {
  const style = {
    width: width || '100%',
    height: height || '1rem',
  };

  return (
    <div
      style={style}
      className={`
        skeleton-loading
        ${rounded ? 'rounded' : ''}
        ${circle ? 'rounded-full' : ''}
        ${className}
      `}
      {...props}
    />
  );
};

export const SkeletonText = ({ lines = 3, className = '' }: { lines?: number; className?: string }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          width={i === lines - 1 ? '80%' : '100%'}
          className="last:w-4/5"
        />
      ))}
    </div>
  );
};

export const SkeletonCard = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`p-4 border rounded-lg shadow-sm ${className}`}>
      <Skeleton height={150} className="mb-4" />
      <SkeletonText lines={3} />
    </div>
  );
}; 