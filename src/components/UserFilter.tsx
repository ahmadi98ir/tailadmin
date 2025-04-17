'use client';

import { useTranslation } from '@/hooks/useTranslation';

interface UserFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  roleFilter: string;
  setRoleFilter: (role: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  isRTL: boolean;
}

const UserFilter = ({
  searchTerm,
  setSearchTerm,
  roleFilter,
  setRoleFilter,
  statusFilter,
  setStatusFilter,
  isRTL,
}: UserFilterProps) => {
  const { t } = useTranslation();

  return (
    <div className={`mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="flex items-center gap-2">
        <div className="relative">
          <input
            type="text"
            placeholder={t('searchUsers')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-10 pr-4 outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
          />
          <span className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-2.5`}>
            <svg
              className="fill-body dark:fill-bodydark"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2716 13.1684L11.3313 10.2281C12.0391 9.28574 12.4213 8.13865 12.42 6.96C12.42 3.94938 9.97063 1.5 6.96 1.5C3.94938 1.5 1.5 3.94938 1.5 6.96C1.5 9.97063 3.94938 12.42 6.96 12.42C8.13865 12.4213 9.28574 12.0391 10.2281 11.3313L13.1684 14.2716C13.3173 14.4029 13.5114 14.4714 13.711 14.4619C13.9105 14.4524 14.0978 14.3656 14.2343 14.2222C14.3707 14.0789 14.4488 13.8875 14.4488 13.688C14.4488 13.4885 14.3707 13.2971 14.2343 13.1538L14.2716 13.1684ZM3.06 6.96C3.06 6.18865 3.28873 5.43463 3.71727 4.79328C4.14581 4.15192 4.7549 3.65205 5.46754 3.35687C6.18017 3.06169 6.96433 2.98446 7.72085 3.13494C8.47738 3.28542 9.17229 3.65686 9.71772 4.20228C10.2631 4.74771 10.6346 5.44262 10.7851 6.19915C10.9355 6.95567 10.8583 7.73983 10.5631 8.45247C10.268 9.1651 9.76808 9.77419 9.12673 10.2027C8.48537 10.6313 7.73135 10.86 6.96 10.86C5.92604 10.8588 4.93478 10.4475 4.20365 9.71635C3.47253 8.98522 3.06124 7.99396 3.06 6.96Z"
                fill=""
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative z-20 inline-block rounded">
          <select 
            className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-2 pl-4 pr-9 text-sm outline-none dark:border-strokedark"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="">{t('allRoles')}</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
          <span className={`absolute top-1/2 ${isRTL ? 'left-3' : 'right-3'} z-10 -translate-y-1/2`}>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                fill="#637381"
              />
            </svg>
          </span>
        </div>
        <div className="relative z-20 inline-block rounded">
          <select 
            className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-2 pl-4 pr-9 text-sm outline-none dark:border-strokedark"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">{t('allStatus')}</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <span className={`absolute top-1/2 ${isRTL ? 'left-3' : 'right-3'} z-10 -translate-y-1/2`}>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                fill="#637381"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserFilter; 