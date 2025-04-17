'use client';

import DefaultLayout from '@/components/common/DefaultLayout';
import StatisticsCard from '@/components/common/StatisticsCard';
import { useTranslation } from '@/hooks/useTranslation';

export default function AnalyticsDashboard() {
  const { t } = useTranslation();

  // Users statistics
  const usersIcon = (
    <svg
      className="fill-primary dark:fill-white"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
        fill=""
      />
      <path
        d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z"
        fill=""
      />
    </svg>
  );

  // Views statistics
  const viewsIcon = (
    <svg
      className="fill-primary dark:fill-white"
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.825012 8.61876C0.825012 8.61876 4.19376 2.12189 11 2.12189C17.8063 2.12189 21.175 8.61876 21.175 8.61876C21.175 8.61876 17.8063 15.1156 11 15.1156ZM11 3.65626C7.70626 3.65626 5.03126 5.91876 5.03126 8.61876C5.03126 11.3188 7.70626 13.5813 11 13.5813C14.2938 13.5813 16.9688 11.3188 16.9688 8.61876C16.9688 5.91876 14.2938 3.65626 11 3.65626Z"
        fill=""
      />
      <path
        d="M11 11.1156C9.84689 11.1156 8.91939 10.1881 8.91939 9.03499C8.91939 7.88189 9.84689 6.95439 11 6.95439C12.1531 6.95439 13.0806 7.88189 13.0806 9.03499C13.0806 10.1881 12.1531 11.1156 11 11.1156Z"
        fill=""
      />
    </svg>
  );

  // Sessions statistics
  const sessionsIcon = (
    <svg
      className="fill-primary dark:fill-white"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0688 9.99999H15.6688L13.3875 4.69374C13.2406 4.29374 12.7906 4.11249 12.3875 4.26249C11.9875 4.41249 11.8063 4.86249 11.9563 5.26249L13.9563 9.99999H6.04376L8.04376 5.26249C8.19376 4.86249 8.01251 4.41249 7.61251 4.26249C7.21251 4.11249 6.76251 4.29374 6.61251 4.69374L4.33126 9.99999H1.93126C1.48126 9.99999 1.11877 10.3625 1.11877 10.8125C1.11877 11.2625 1.48126 11.625 1.93126 11.625H2.19376L3.14376 15.8125C3.33126 16.5625 4.00626 17.0625 4.79376 17.0625H15.2063C15.9938 17.0625 16.6688 16.5625 16.8563 15.8125L17.8063 11.625H18.0688C18.5188 11.625 18.8813 11.2625 18.8813 10.8125C18.8813 10.3625 18.5188 9.99999 18.0688 9.99999ZM15.2938 15.4375H4.70626L3.94376 11.625H16.0688L15.2938 15.4375Z"
        fill=""
      />
    </svg>
  );

  // Bounce Rate statistics
  const bounceRateIcon = (
    <svg
      className="fill-primary dark:fill-white"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4844 5.4375C11.4844 6 11.0156 6.5 10.5 6.5C9.9375 6.5 9.42188 6 9.42188 5.4375C9.42188 4.9375 9.9375 4.4375 10.5 4.4375C11.0156 4.4375 11.4844 4.9375 11.4844 5.4375ZM14.5781 4.84375C12.9219 2.125 9.28125 1.28125 6.5625 2.9375C3.84375 4.59375 3 8.25 4.65625 10.9688C6.3125 13.6875 9.95312 14.5312 12.6719 12.875C15.3906 11.2188 16.2344 7.5625 14.5781 4.84375ZM9 15.5C4.03125 15.5 0 11.4688 0 6.5C0 1.5625 4.03125 -2.5 9 -2.5C13.9219 -2.5 18 1.5625 18 6.5C18 11.4688 13.9219 15.5 9 15.5ZM10.5 1.5C7.17188 1.5 4.5 4.20312 4.5 7.5C4.5 8.125 4.96875 8.625 5.625 8.625C6.25 8.625 6.75 8.125 6.75 7.5C6.75 5.4375 8.4375 3.75 10.5 3.75C11.125 3.75 11.625 3.28125 11.625 2.625C11.625 2 11.125 1.5 10.5 1.5ZM16.3125 12.4375C16.5469 12.4375 16.7344 12.25 16.7344 12.0156C16.7344 11.8125 16.5469 11.625 16.3125 11.625H15.1875C14.9531 11.625 14.7656 11.8125 14.7656 12.0156C14.7656 12.25 14.9531 12.4375 15.1875 12.4375H16.3125ZM7.03125 12.4375C7.26562 12.4375 7.45312 12.25 7.45312 12.0156C7.45312 11.8125 7.26562 11.625 7.03125 11.625H5.90625C5.67188 11.625 5.48438 11.8125 5.48438 12.0156C5.48438 12.25 5.67188 12.4375 5.90625 12.4375H7.03125ZM11.6719 16.1562C11.6719 15.9219 11.4844 15.7344 11.25 15.7344C11.0469 15.7344 10.8594 15.9219 10.8594 16.1562V17.2812C10.8594 17.5156 11.0469 17.7031 11.25 17.7031C11.4844 17.7031 11.6719 17.5156 11.6719 17.2812V16.1562ZM11.6719 6.78125C11.6719 6.54688 11.4844 6.35938 11.25 6.35938C11.0469 6.35938 10.8594 6.54688 10.8594 6.78125V7.90625C10.8594 8.14062 11.0469 8.32812 11.25 8.32812C11.4844 8.32812 11.6719 8.14062 11.6719 7.90625V6.78125Z"
        fill=""
      />
    </svg>
  );

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* Users Card */}
        <StatisticsCard
          title={t('users')}
          count="13,949"
          percentageChange="9.15%"
          isIncreased={true}
          icon={usersIcon}
        />
        
        {/* Sessions Card */}
        <StatisticsCard
          title={t('sessions')}
          count="3,218"
          percentageChange="4.35%"
          isIncreased={true}
          icon={sessionsIcon}
        />

        {/* Page Views Card */}
        <StatisticsCard
          title={t('pageViews')}
          count="8,623"
          percentageChange="2.08%"
          isIncreased={true}
          icon={viewsIcon}
        />

        {/* Bounce Rate Card */}
        <StatisticsCard
          title={t('bounceRate')}
          count="49.73%"
          percentageChange="1.95%"
          isIncreased={false}
          icon={bounceRateIcon}
        />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* Website Traffic Chart */}
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
          <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
            <div className="flex w-full flex-wrap gap-3 sm:gap-5">
              <div className="flex min-w-47.5">
                <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
                  <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
                </span>
                <div className="w-full">
                  <p className="font-semibold text-primary">{t('websiteTraffic')}</p>
                </div>
              </div>
            </div>
            <div className="flex w-full max-w-45 justify-end">
              <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
                <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
                  {t('viewMore')}
                </button>
                <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                  {t('delete')}
                </button>
              </div>
            </div>
          </div>

          <div className="h-[250px] w-full">
            {/* Chart placeholder */}
            <div className="flex h-full items-center justify-center text-center">
              <div>
                <p className="text-lg font-semibold">{t('websiteTraffic')}</p>
                <p className="text-sm text-body-color">
                  {t('chartWillBeImplementedSoon')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
          <div className="mb-4 justify-between gap-4 sm:flex">
            <div>
              <h4 className="text-xl font-semibold text-black dark:text-white">
                {t('trafficSources')}
              </h4>
              <p className="text-sm text-body-color">
                {t('sourceBreakdown')}
              </p>
            </div>
            <div>
              <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
                <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
                  {t('viewMore')}
                </button>
                <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                  {t('delete')}
                </button>
              </div>
            </div>
          </div>

          <div className="mb-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="block h-4 w-4 rounded-full bg-primary"></span>
                  <span className="font-medium text-black dark:text-white">
                    {t('organic')}
                  </span>
                </div>
                <span className="font-medium text-black dark:text-white">42%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="block h-4 w-4 rounded-full bg-success"></span>
                  <span className="font-medium text-black dark:text-white">
                    {t('direct')}
                  </span>
                </div>
                <span className="font-medium text-black dark:text-white">25%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="block h-4 w-4 rounded-full bg-warning"></span>
                  <span className="font-medium text-black dark:text-white">
                    {t('social')}
                  </span>
                </div>
                <span className="font-medium text-black dark:text-white">15%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="block h-4 w-4 rounded-full bg-danger"></span>
                  <span className="font-medium text-black dark:text-white">
                    {t('referral')}
                  </span>
                </div>
                <span className="font-medium text-black dark:text-white">10%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="block h-4 w-4 rounded-full bg-meta-4"></span>
                  <span className="font-medium text-black dark:text-white">
                    {t('other')}
                  </span>
                </div>
                <span className="font-medium text-black dark:text-white">8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
} 