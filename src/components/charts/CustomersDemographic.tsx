'use client';

import { useTranslation } from '@/hooks/useTranslation';

interface CountryData {
  name: string;
  customers: number;
  percentage: number;
  flagCode: string;
}

interface CustomersDemographicProps {
  className?: string;
}

const CustomersDemographic = ({ className = '' }: CustomersDemographicProps) => {
  const { t, isRTL } = useTranslation();

  const countries: CountryData[] = [
    {
      name: isRTL ? 'آرپ وب ایران' : 'ARP Web Iran',
      customers: 2379,
      percentage: 79,
      flagCode: 'iran',
    },
    {
      name: isRTL ? 'آرپ وب بین‌الملل' : 'ARP Web International',
      customers: 589,
      percentage: 23,
      flagCode: 'global',
    },
  ];

  return (
    <div
      className={`rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 ${className}`}
    >
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            {t('customersDemographic')}
          </h5>
          <p className="text-sm text-body-color">
            {t('numberOfCustomersByCountry')}
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

      <div className="flex flex-col gap-4">
        {countries.map((country, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div className="flex flex-1 items-center gap-4">
              <div className="h-10 w-10 overflow-hidden rounded-full">
                <img
                  src={`/images/flags/${country.flagCode}.svg`}
                  alt={country.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex w-full flex-1 items-center justify-between">
                <div>
                  <h6 className="font-medium text-black dark:text-white">
                    {country.name}
                  </h6>
                  <p className="text-sm font-medium">
                    {country.customers.toLocaleString()} {t('customers')}
                  </p>
                </div>
                <div className="w-20 px-2">
                  <div className="h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                    <div
                      className="h-1.5 rounded-full bg-primary"
                      style={{ width: `${country.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <span className="font-medium text-meta-3">
                    {country.percentage}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersDemographic; 