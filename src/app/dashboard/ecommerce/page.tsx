'use client';

import DefaultLayout from '@/components/common/DefaultLayout';
import StatisticsCard from '@/components/common/StatisticsCard';
import CustomersDemographic from '@/components/charts/CustomersDemographic';
import RecentOrders from '@/components/tables/RecentOrders';
import { useTranslation } from '@/hooks/useTranslation';

export default function EcommerceDashboard() {
  const { t } = useTranslation();

  // Customer statistics
  const customerIcon = (
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

  // Order statistics
  const orderIcon = (
    <svg
      className="fill-primary dark:fill-white"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 19.1406C9.64062 19.1406 9.28125 19.0625 8.95312 18.8828L2.60938 15.3984C1.91406 15.0078 1.49219 14.2969 1.49219 13.5156V6.46094C1.49219 5.6875 1.91406 4.96875 2.60938 4.58594L8.95312 1.09375C9.60938 0.753906 10.3984 0.753906 11.0547 1.09375L17.3984 4.58594C18.0938 4.96875 18.5156 5.6875 18.5156 6.46094V13.5156C18.5156 14.2969 18.0938 15.0078 17.3984 15.3984L11.0547 18.8828C10.7344 19.0625 10.3672 19.1406 10 19.1406ZM10 2.65625C9.86719 2.65625 9.72656 2.6875 9.60156 2.76562L3.25781 6.25781C2.98438 6.40625 2.8125 6.71875 2.8125 7.07031V14.125C2.8125 14.4766 2.98438 14.7891 3.25781 14.9375L9.60156 18.4297C9.86719 18.5781 10.1406 18.5781 10.4062 18.4297L16.75 14.9375C17.0234 14.7891 17.1953 14.4766 17.1953 14.125V7.07031C17.1953 6.71875 17.0234 6.40625 16.75 6.25781L10.4062 2.76562C10.2734 2.6875 10.1406 2.65625 10 2.65625Z"
        fill=""
      />
      <path
        d="M9.375 8.46875C9.375 7.90625 9.82031 7.46094 10.3828 7.46094H11.875C11.9922 7.46094 12.0703 7.53906 12.0703 7.65625V8.60938C12.0703 8.72656 11.9922 8.80469 11.875 8.80469H10.3828C10.3047 8.80469 10.2344 8.875 10.2344 8.95312V9.01562C10.2344 9.10156 10.3047 9.16406 10.3828 9.16406H11.1797C11.7422 9.16406 12.1953 9.60938 12.1953 10.1719V10.8125C12.1953 11.375 11.7422 11.8203 11.1797 11.8203H9.6875C9.57031 11.8203 9.49219 11.7422 9.49219 11.625V10.6719C9.49219 10.5547 9.57031 10.4766 9.6875 10.4766H11.1797C11.2578 10.4766 11.3281 10.4062 11.3281 10.3281V10.2656C11.3281 10.1875 11.2578 10.1172 11.1797 10.1172H10.3828C9.82031 10.1172 9.375 9.67188 9.375 9.10938V8.46875Z"
        fill=""
      />
      <path
        d="M13.9844 11.8203C13.8672 11.8203 13.7891 11.7422 13.7891 11.625V7.65625C13.7891 7.53906 13.8672 7.46094 13.9844 7.46094H14.9375C15.0547 7.46094 15.1328 7.53906 15.1328 7.65625V11.625C15.1328 11.7422 15.0547 11.8203 14.9375 11.8203H13.9844Z"
        fill=""
      />
      <path
        d="M5.07812 11.8203C4.96094 11.8203 4.88281 11.7422 4.88281 11.625V7.65625C4.88281 7.53906 4.96094 7.46094 5.07812 7.46094H6.03125C6.14844 7.46094 6.22656 7.53906 6.22656 7.65625V10.4766H7.92969C8.04688 10.4766 8.125 10.5547 8.125 10.6719V11.625C8.125 11.7422 8.04688 11.8203 7.92969 11.8203H5.07812Z"
        fill=""
      />
    </svg>
  );

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* Customer Card */}
        <StatisticsCard
          title={t('customers')}
          count="3,782"
          percentageChange="11.01%"
          isIncreased={true}
          icon={customerIcon}
        />
        
        {/* Order Card */}
        <StatisticsCard
          title={t('orders')}
          count="5,359"
          percentageChange="9.05%"
          isIncreased={true}
          icon={orderIcon}
        />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* Monthly Sales Chart */}
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
          <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
            <div className="flex w-full flex-wrap gap-3 sm:gap-5">
              <div className="flex min-w-47.5">
                <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
                  <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
                </span>
                <div className="w-full">
                  <p className="font-semibold text-primary">{t('monthlySales')}</p>
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
                <p className="text-lg font-semibold">{t('monthlySales')}</p>
                <p className="text-sm text-body-color">
                  {t('chartWillBeImplementedSoon')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Target */}
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
          <div className="mb-4 justify-between gap-4 sm:flex">
            <div>
              <h4 className="text-xl font-semibold text-black dark:text-white">
                {t('monthlyTarget')}
              </h4>
              <p className="text-sm text-body-color">
                {t('targetForEachMonth')}
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
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-success">
                  <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-success"></span>
                </span>
                <p className="font-semibold text-success">+10%</p>
              </div>
              <p className="font-medium">{t('goodWork')}</p>
            </div>
          </div>

          <div>
            <div id="chartTwo" className="mx-auto flex justify-center">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-black dark:text-white">
                    {t('target')}
                  </span>
                  <span className="text-sm font-medium text-meta-1">$20K</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-black dark:text-white">
                    {t('revenue')}
                  </span>
                  <span className="text-sm font-medium text-meta-1">$20K</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-black dark:text-white">
                    {t('today')}
                  </span>
                  <span className="text-sm font-medium text-meta-1">$20K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* Customer Demographics */}
        <div className="col-span-12 xl:col-span-5">
          <CustomersDemographic />
        </div>

        {/* Recent Orders */}
        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </DefaultLayout>
  );
} 