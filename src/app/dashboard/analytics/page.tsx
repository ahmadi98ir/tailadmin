'use client';

import DefaultLayout from '@/components/common/DefaultLayout';
import StatisticsCard from '@/components/common/StatisticsCard';
import { useTranslation } from '@/hooks/useTranslation';

export default function AnalyticsDashboard() {
  const { t } = useTranslation();

  // Analytics statistics
  const visitsIcon = (
    <svg
      className="fill-primary dark:fill-white"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6687 1.44374C17.1187 0.893744 16.4312 0.618744 15.675 0.618744H7.42498C6.25623 0.618744 5.25935 1.58124 5.25935 2.78437V4.12499H4.29685C3.88435 4.12499 3.64998 4.62499 3.90935 4.94999L6.72185 8.19374C6.89685 8.40624 7.19998 8.40624 7.37498 8.19374L10.1875 4.94999C10.4469 4.62499 10.2125 4.12499 9.79998 4.12499H8.83748V2.78437C8.83748 2.53437 9.01873 2.32499 9.26873 2.32499H15.675C16.0875 2.32499 16.3156 2.47187 16.4594 2.61562C16.6312 2.78437 16.7187 3.01562 16.7187 3.23124C16.7187 3.86874 16.2031 4.12499 15.675 4.12499H14.1188C13.7062 4.12499 13.3969 4.43437 13.3969 4.84687C13.3969 5.25937 13.7062 5.56874 14.1188 5.56874H15.675C17.0844 5.56874 18.1625 4.53437 18.1625 3.23124C18.1625 2.49374 17.9906 1.91562 17.6687 1.44374Z"
        fill=""
      />
      <path
        d="M14.1188 6.84374H3.05935C2.70935 6.84374 2.36873 6.99374 2.13435 7.25624C1.89998 7.51874 1.77185 7.89999 1.83748 8.24999C2.26873 10.6594 3.70935 13.0719 6.27185 14.4031C6.36248 14.45 6.44998 14.4937 6.53435 14.5344C6.41248 14.775 6.15623 14.9437 5.85623 14.9437H3.95935C3.54685 14.9437 3.23748 15.2531 3.23748 15.6656C3.23748 16.0781 3.54685 16.3875 3.95935 16.3875H9.26873C9.64998 16.3875 9.71248 16.3406 10.1 16.3406C10.5125 16.3406 10.8219 16.0312 10.8219 15.6187C10.8219 15.2062 10.5125 14.8969 10.1 14.8969C9.57811 14.8969 9.25935 14.5594 9.25935 14.0687C9.25935 13.6562 9.57185 13.2219 10.0156 13.2219C10.4594 13.2219 10.7719 13.5562 10.7719 14.0687C10.7719 14.4812 11.0812 14.7906 11.4938 14.7906C11.9063 14.7906 12.2156 14.4812 12.2156 14.0687C12.2156 13.1344 11.5062 12.075 10.0156 12.075C8.70935 12.075 7.81873 12.9219 7.81873 14.0687C7.81873 14.1219 7.82498 14.175 7.83123 14.2312C7.73123 14.2031 7.63435 14.1719 7.5375 14.1375C5.53435 13.1 4.34373 11.175 3.9875 9.26249C3.97498 9.16249 4.01248 9.08749 4.05935 9.03124C4.10623 8.97499 4.19998 8.90624 4.30623 8.90624H14.1313C14.2844 8.90624 14.375 8.96874 14.4312 9.02499C14.5 9.09374 14.5469 9.18124 14.5313 9.28124C14.3844 10.0375 14.0719 10.7469 13.6594 11.375C13.475 11.6469 13.525 12.0094 13.7969 12.1938C13.8906 12.2531 14 12.2812 14.1031 12.2812C14.3031 12.2812 14.4938 12.1844 14.5938 12.0031C15.0844 11.2469 15.4562 10.3937 15.6375 9.47499C15.7219 8.94999 15.5813 8.42499 15.2531 8.03749C14.95 7.65934 14.55 7.44374 14.1094 7.44374H14.1219L14.1188 6.84374Z"
        fill=""
      />
    </svg>
  );

  // Conversions statistics
  const conversionIcon = (
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

  // Bounce rate statistics
  const bounceRateIcon = (
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

  return (
    <DefaultLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-black dark:text-white">
          {t('analytics')}
        </h2>
        <p className="text-body-color">{t('analyticsOverview')}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* Sessions Card */}
        <StatisticsCard
          title={t('sessions')}
          count="24,389"
          percentageChange="13.2%"
          isIncreased={true}
          icon={visitsIcon}
        />
        
        {/* Conversions Card */}
        <StatisticsCard
          title={t('conversions')}
          count="1,945"
          percentageChange="8.9%"
          isIncreased={true}
          icon={conversionIcon}
        />

        {/* Bounce Rate Card */}
        <StatisticsCard
          title={t('bounceRate')}
          count="49.3%"
          percentageChange="12.4%"
          isIncreased={false}
          icon={bounceRateIcon}
        />

        {/* Session Duration Card */}
        <StatisticsCard
          title={t('avgSessionDuration')}
          count="2m 27s"
          percentageChange="2.8%"
          isIncreased={true}
          icon={visitsIcon}
        />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* Analytics Charts */}
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
          <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
            <div className="flex w-full flex-wrap gap-3 sm:gap-5">
              <div className="flex min-w-47.5">
                <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
                  <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
                </span>
                <div className="w-full">
                  <p className="font-semibold text-primary">{t('visitors')}</p>
                </div>
              </div>
              <div className="flex min-w-47.5">
                <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
                  <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
                </span>
                <div className="w-full">
                  <p className="font-semibold text-secondary">{t('pageViews')}</p>
                </div>
              </div>
            </div>
            <div className="flex w-full max-w-45 justify-end">
              <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
                <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
                  {t('month')}
                </button>
                <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                  {t('year')}
                </button>
              </div>
            </div>
          </div>

          <div className="h-[300px] w-full">
            {/* Chart placeholder */}
            <div className="flex h-full items-center justify-center text-center">
              <div>
                <p className="text-lg font-semibold">{t('visitorAnalytics')}</p>
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
                {t('whereSiteVisitorsComingFrom')}
              </p>
            </div>
          </div>

          <div className="mb-2">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{t('direct')}</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="h-2 w-full bg-stroke dark:bg-strokedark">
                <div className="h-full w-[45%] rounded-sm bg-primary"></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{t('search')}</span>
                <span className="text-sm font-medium">32%</span>
              </div>
              <div className="h-2 w-full bg-stroke dark:bg-strokedark">
                <div className="h-full w-[32%] rounded-sm bg-secondary"></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{t('social')}</span>
                <span className="text-sm font-medium">15%</span>
              </div>
              <div className="h-2 w-full bg-stroke dark:bg-strokedark">
                <div className="h-full w-[15%] rounded-sm bg-success"></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{t('referral')}</span>
                <span className="text-sm font-medium">8%</span>
              </div>
              <div className="h-2 w-full bg-stroke dark:bg-strokedark">
                <div className="h-full w-[8%] rounded-sm bg-danger"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
} 