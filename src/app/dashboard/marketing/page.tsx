'use client';

import DefaultLayout from '@/components/common/DefaultLayout';
import StatisticsCard from '@/components/common/StatisticsCard';
import { useTranslation } from '@/hooks/useTranslation';

export default function MarketingDashboard() {
  const { t } = useTranslation();

  // Campaigns statistics
  const campaignsIcon = (
    <svg
      className="fill-primary dark:fill-white"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7657 1.61566 20.3969C2.20003 21.0282 2.99066 21.3813 3.85003 21.3813H18.1157C18.975 21.3813 19.8 21.0282 20.35 20.3969C20.9 19.7657 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3501C18.9407 19.6251 18.5688 19.8126 18.1157 19.8126H3.85003C3.39691 19.8126 2.99066 19.6251 2.71566 19.3501C2.44066 19.0751 2.30628 18.7032 2.34066 18.2501L4.05878 3.43751C4.16878 2.71563 4.81566 2.15313 5.56878 2.15313H16.4313C17.1844 2.15313 17.8313 2.71563 17.9413 3.43751L19.6594 18.2501C19.6938 18.7032 19.5594 19.0751 19.2157 19.3501Z"
        fill=""
      />
      <path
        d="M14.3345 5.29375C13.922 5.39688 13.647 5.80938 13.7501 6.22188C13.8845 6.77188 13.9751 7.35625 13.9751 7.94063C13.9751 8.0125 13.9407 8.08438 13.8845 8.08438H8.07513C8.01888 8.08438 7.98451 8.0125 7.98451 7.94063C7.98451 7.35625 8.10951 6.77188 8.24388 6.22188C8.34701 5.80938 8.07201 5.39688 7.65951 5.29375C7.24701 5.19063 6.83451 5.46563 6.73138 5.87813C6.56263 6.53438 6.41576 7.25625 6.41576 7.94063C6.41576 8.83438 7.15013 9.58438 8.07513 9.58438H13.922C14.8126 9.58438 15.5845 8.83438 15.5845 7.94063C15.5845 7.25625 15.4376 6.53438 15.2688 5.87813C15.1313 5.46563 14.7188 5.19063 14.3345 5.29375Z"
        fill=""
      />
    </svg>
  );

  // Leads statistics
  const leadsIcon = (
    <svg
      className="fill-primary dark:fill-white"
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.18418 8.03751C9.31543 8.03751 11.0686 6.35313 11.0686 4.25626C11.0686 2.15938 9.31543 0.475006 7.18418 0.475006C5.05293 0.475006 3.2998 2.15938 3.2998 4.25626C3.2998 6.35313 5.05293 8.03751 7.18418 8.03751ZM7.18418 2.05626C8.45605 2.05626 9.52168 3.05313 9.52168 4.29063C9.52168 5.52813 8.49043 6.52501 7.18418 6.52501C5.87793 6.52501 4.84668 5.52813 4.84668 4.29063C4.84668 3.05313 5.9123 2.05626 7.18418 2.05626Z"
        fill=""
      />
      <path
        d="M15.8124 9.6875C17.6687 9.6875 19.1468 8.24375 19.1468 6.42188C19.1468 4.6 17.6343 3.15625 15.8124 3.15625C13.9905 3.15625 12.478 4.6 12.478 6.42188C12.478 8.24375 13.9905 9.6875 15.8124 9.6875ZM15.8124 4.7375C16.8093 4.7375 17.5999 5.49375 17.5999 6.45625C17.5999 7.41875 16.8093 8.175 15.8124 8.175C14.8155 8.175 14.0249 7.41875 14.0249 6.45625C14.0249 5.49375 14.8155 4.7375 15.8124 4.7375Z"
        fill=""
      />
      <path
        d="M15.9843 10.0313H15.6749C14.6437 10.0313 13.6468 10.3406 12.7874 10.8563C11.8593 9.61876 10.3812 8.79376 8.73115 8.79376H5.67178C2.85303 8.82814 0.618652 11.0625 0.618652 13.8469V16.3219C0.618652 16.975 1.13428 17.4906 1.7874 17.4906H20.2468C20.8999 17.4906 21.4499 16.9406 21.4499 16.2875V13.8469C21.4155 11.7844 19.0468 10.0313 15.9843 10.0313ZM2.16553 15.9438V13.8469C2.16553 11.9219 3.74678 10.3406 5.67178 10.3406H8.73115C10.6562 10.3406 12.2374 11.9219 12.2374 13.8469V15.9438H2.16553V15.9438ZM19.8687 15.9438H13.7499V13.8469C13.7499 13.2969 13.6468 12.7469 13.4749 12.2313C14.0937 11.7844 14.8499 11.5781 15.6405 11.5781H15.9499C18.0812 11.5781 19.8343 12.7469 19.8343 13.8469V15.9438H19.8687Z"
        fill=""
      />
    </svg>
  );

  // ROI statistics
  const roiIcon = (
    <svg
      className="fill-primary dark:fill-white"
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7531 16.4312C10.3781 16.4312 9.27808 17.5312 9.27808 18.9062C9.27808 20.2812 10.3781 21.3812 11.7531 21.3812C13.1281 21.3812 14.2281 20.2812 14.2281 18.9062C14.2281 17.5656 13.1594 16.4312 11.7531 16.4312ZM11.7531 19.9062C11.2219 19.9062 10.7844 19.4688 10.7844 18.9375C10.7844 18.4062 11.2219 17.9688 11.7531 17.9688C12.2844 17.9688 12.7219 18.4062 12.7219 18.9375C12.7219 19.4375 12.2844 19.9062 11.7531 19.9062Z"
        fill=""
      />
      <path
        d="M5.22183 16.4312C3.84683 16.4312 2.74683 17.5312 2.74683 18.9062C2.74683 20.2812 3.84683 21.3812 5.22183 21.3812C6.59683 21.3812 7.69683 20.2812 7.69683 18.9062C7.69683 17.5656 6.62808 16.4312 5.22183 16.4312ZM5.22183 19.9062C4.69058 19.9062 4.25308 19.4688 4.25308 18.9375C4.25308 18.4062 4.69058 17.9688 5.22183 17.9688C5.75308 17.9688 6.19058 18.4062 6.19058 18.9375C6.19058 19.4375 5.75308 19.9062 5.22183 19.9062Z"
        fill=""
      />
      <path
        d="M19.0062 0.618744H17.6562C17.3125 0.618744 17.0312 0.868744 16.9688 1.21249L16.6875 3.34374C16.625 3.71874 16.8438 4.09374 17.2188 4.18749C17.5938 4.28124 17.9688 4.06249 18.0625 3.68749L18.3125 1.99999H18.9375C18.9375 1.99999 18.9688 1.99999 18.9688 2.03124C19 2.12499 19.0625 2.46874 18.7188 3.09374C18.625 3.21874 18.5625 3.37499 18.5312 3.53124L17.5 10.5625C17.4688 10.8125 17.5312 11.0312 17.6875 11.2188C17.8438 11.4062 18.0625 11.5 18.3125 11.5H19.9375C20.3438 11.5 20.6875 11.1875 20.6875 10.75V1.43749C20.75 0.999994 20.4062 0.618744 19.9688 0.618744C19.9375 0.618744 19.0375 0.618744 19.0062 0.618744Z"
        fill=""
      />
      <path
        d="M15.5938 4.43752L14.1875 4.62502C13.9688 4.62502 13.7812 4.56252 13.625 4.43752L12.7812 3.81252C12.2812 3.43752 11.6562 3.34377 11.0938 3.53127C10.4375 3.75002 10 4.21877 9.8125 4.84377L9.75 5.00002H4.75C4.09375 5.00002 3.5 5.43752 3.28125 6.06252L2.5625 8.43752C2.5 8.68752 2.5625 8.93752 2.75 9.12502C2.9375 9.31252 3.1875 9.40627 3.4375 9.34377L9.40625 7.96877C9.75 7.90627 9.96875 7.59377 9.96875 7.25002V6.81252C9.96875 6.50002 10.1875 6.25002 10.5 6.25002C10.7812 6.25002 11 6.46877 11 6.81252V11.1875C11 11.5 10.7812 11.75 10.5 11.75C10.1875 11.75 9.96875 11.5 9.96875 11.1875V10.75C9.96875 10.3438 9.65625 10.0625 9.28125 10.0625C8.90625 10.0625 8.59375 10.3438 8.59375 10.75V11.1875C8.59375 12.2813 9.40625 13.125 10.5 13.125C11.5938 13.125 12.4062 12.2813 12.4062 11.1875V8.00002L13.8438 10.125C14.1875 10.6563 14.7188 11 15.3438 11.0938L19.9375 11.8125C20 11.8125 20.0625 11.8125 20.125 11.8125C20.4375 11.8125 20.75 11.625 20.8438 11.3125C20.9688 10.9375 20.75 10.5625 20.375 10.4375L15.8125 9.75002C15.625 9.71877 15.5 9.62502 15.4062 9.46877L13.625 6.75002C13.4375 6.46877 13.4375 6.12502 13.5938 5.84377L13.7812 5.59377L15.0938 5.40627C15.2188 5.40627 15.3125 5.46877 15.375 5.56252L16.4375 7.21877C16.5625 7.43752 16.8125 7.56252 17.0625 7.56252C17.1875 7.56252 17.3438 7.53127 17.4375 7.43752C17.7188 7.21877 17.7812 6.81252 17.5625 6.53127L16.5 4.87502C16.1875 4.31252 15.9062 4.40627 15.5938 4.43752Z"
        fill=""
      />
    </svg>
  );

  // Conversion Rate statistics
  const conversionRateIcon = (
    <svg
      className="fill-primary dark:fill-white"
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8391 0.0710021H2.1608C1.10545 0.0710021 0.2243 0.95214 0.2243 2.00749V13.9926C0.2243 15.048 1.10545 15.9291 2.1608 15.9291H15.8391C16.8945 15.9291 17.7756 15.048 17.7756 13.9926V2.00749C17.7756 0.95214 16.8945 0.0710021 15.8391 0.0710021ZM2.1608 1.54257H15.8391C16.0857 1.54257 16.3041 1.76097 16.3041 2.00749V4.76976H1.69587V2.00749C1.69587 1.76097 1.91424 1.54257 2.1608 1.54257ZM15.8391 14.4576H2.1608C1.91424 14.4576 1.69587 14.2392 1.69587 13.9926V6.24133H16.3041V13.9926C16.3041 14.2392 16.0857 14.4576 15.8391 14.4576Z"
        fill=""
      />
      <path
        d="M7.11341 12.1192H5.37355C5.1732 12.1192 5.01025 12.2821 5.01025 12.4825V13.5123C5.01025 13.7126 5.1732 13.8756 5.37355 13.8756H7.11341C7.31374 13.8756 7.4767 13.7126 7.4767 13.5123V12.4825C7.4767 12.2821 7.31374 12.1192 7.11341 12.1192Z"
        fill=""
      />
    </svg>
  );

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* Active Campaigns Card */}
        <StatisticsCard
          title={t('activeCampaigns')}
          count="24"
          percentageChange="19.5%"
          isIncreased={true}
          icon={campaignsIcon}
        />
        
        {/* Leads Card */}
        <StatisticsCard
          title={t('leads')}
          count="436"
          percentageChange="12.4%"
          isIncreased={true}
          icon={leadsIcon}
        />

        {/* ROI Card */}
        <StatisticsCard
          title={t('roi')}
          count="267%"
          percentageChange="8.2%"
          isIncreased={true}
          icon={roiIcon}
        />

        {/* Conversion Rate Card */}
        <StatisticsCard
          title={t('conversionRate')}
          count="5.47%"
          percentageChange="3.2%"
          isIncreased={true}
          icon={conversionRateIcon}
        />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* Campaign Performance Chart */}
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
          <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
            <div className="flex w-full flex-wrap gap-3 sm:gap-5">
              <div className="flex min-w-47.5">
                <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
                  <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
                </span>
                <div className="w-full">
                  <p className="font-semibold text-primary">{t('campaignPerformance')}</p>
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
                <p className="text-lg font-semibold">{t('campaignPerformance')}</p>
                <p className="text-sm text-body-color">
                  {t('chartWillBeImplementedSoon')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Channels */}
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
          <div className="mb-4 justify-between gap-4 sm:flex">
            <div>
              <h4 className="text-xl font-semibold text-black dark:text-white">
                {t('topChannels')}
              </h4>
              <p className="text-sm text-body-color">
                {t('bestPerformingChannels')}
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
                    {t('email')}
                  </span>
                </div>
                <span className="font-medium text-black dark:text-white">34%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="block h-4 w-4 rounded-full bg-success"></span>
                  <span className="font-medium text-black dark:text-white">
                    {t('social')}
                  </span>
                </div>
                <span className="font-medium text-black dark:text-white">27%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="block h-4 w-4 rounded-full bg-warning"></span>
                  <span className="font-medium text-black dark:text-white">
                    {t('seo')}
                  </span>
                </div>
                <span className="font-medium text-black dark:text-white">21%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="block h-4 w-4 rounded-full bg-danger"></span>
                  <span className="font-medium text-black dark:text-white">
                    {t('ppc')}
                  </span>
                </div>
                <span className="font-medium text-black dark:text-white">13%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="block h-4 w-4 rounded-full bg-meta-4"></span>
                  <span className="font-medium text-black dark:text-white">
                    {t('direct')}
                  </span>
                </div>
                <span className="font-medium text-black dark:text-white">5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
} 