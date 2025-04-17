'use client';

import { ReactNode } from 'react';

interface StatisticsCardProps {
  title: string;
  count: string;
  percentageChange: string;
  isIncreased: boolean;
  icon: ReactNode;
}

const StatisticsCard = ({
  title,
  count,
  percentageChange,
  isIncreased,
  icon,
}: StatisticsCardProps) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {icon}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {count}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <span className={`flex items-center gap-1 text-sm font-medium ${isIncreased ? 'text-success' : 'text-danger'}`}>
          {percentageChange}
          <svg
            className={isIncreased ? 'fill-success' : 'fill-danger rotate-180'}
            width="9"
            height="10"
            viewBox="0 0 9 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.60001 3.00001L4.60001 8.30001"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M7.92499 5.3L4.59999 8.3L1.27499 5.3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default StatisticsCard; 