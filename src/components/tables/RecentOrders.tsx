'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';

interface Order {
  id: string;
  product: {
    name: string;
    variants: number;
    image: string;
  };
  category: string;
  price: string;
  status: 'delivered' | 'pending' | 'canceled';
}

interface RecentOrdersProps {
  className?: string;
}

const RecentOrders = ({ className = '' }: RecentOrdersProps) => {
  const { t, isRTL } = useTranslation();

  const orders: Order[] = [
    {
      id: '1',
      product: {
        name: isRTL ? 'مک بوک پرو ۱۳ اینچ' : 'MacBook Pro 13"',
        variants: 2,
        image: '/images/product/product-01.jpg',
      },
      category: isRTL ? 'لپ تاپ' : 'Laptop',
      price: '$2399.00',
      status: 'delivered',
    },
    {
      id: '2',
      product: {
        name: isRTL ? 'اپل واچ اولترا' : 'Apple Watch Ultra',
        variants: 1,
        image: '/images/product/product-02.jpg',
      },
      category: isRTL ? 'ساعت' : 'Watch',
      price: '$879.00',
      status: 'pending',
    },
    {
      id: '3',
      product: {
        name: isRTL ? 'آیفون ۱۵ پرو مکس' : 'iPhone 15 Pro Max',
        variants: 2,
        image: '/images/product/product-03.jpg',
      },
      category: isRTL ? 'گوشی هوشمند' : 'SmartPhone',
      price: '$1869.00',
      status: 'delivered',
    },
    {
      id: '4',
      product: {
        name: isRTL ? 'آیپد پرو نسل ۳' : 'iPad Pro 3rd Gen',
        variants: 2,
        image: '/images/product/product-04.jpg',
      },
      category: isRTL ? 'الکترونیک' : 'Electronics',
      price: '$1699.00',
      status: 'canceled',
    },
    {
      id: '5',
      product: {
        name: isRTL ? 'ایرپادز پرو نسل ۲' : 'AirPods Pro 2nd Gen',
        variants: 1,
        image: '/images/product/product-05.jpg',
      },
      category: isRTL ? 'لوازم جانبی' : 'Accessories',
      price: '$240.00',
      status: 'delivered',
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-success bg-success/10';
      case 'pending':
        return 'text-warning bg-warning/10';
      case 'canceled':
        return 'text-danger bg-danger/10';
      default:
        return 'text-info bg-info/10';
    }
  };

  return (
    <div
      className={`rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ${className}`}
    >
      <div className="mb-6 flex justify-between">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            {t('recentOrders')}
          </h4>
        </div>
        <div className="flex items-center">
          <button className="flex items-center gap-2 rounded bg-primary py-2 px-4.5 font-medium text-white hover:bg-opacity-80">
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3201 10.776H1.67992C1.29992 10.776 0.979922 10.456 0.979922 10.076C0.979922 9.69598 1.29992 9.37598 1.67992 9.37598H14.3201C14.7001 9.37598 15.0201 9.69598 15.0201 10.076C15.0201 10.456 14.7001 10.776 14.3201 10.776Z"
                fill=""
              />
              <path
                d="M7.99992 15.5001C7.61992 15.5001 7.29992 15.1801 7.29992 14.8001V5.22006C7.29992 4.84006 7.61992 4.52006 7.99992 4.52006C8.37992 4.52006 8.69992 4.84006 8.69992 5.22006V14.8001C8.69992 15.1801 8.37992 15.5001 7.99992 15.5001Z"
                fill=""
              />
              <path
                d="M10.0799 7.02006C9.89992 7.02006 9.71992 6.94006 9.59992 6.82006L7.99992 5.22006L6.39992 6.82006C6.15992 7.06006 5.77992 7.06006 5.53992 6.82006C5.29992 6.58006 5.29992 6.20006 5.53992 5.96006L7.53992 3.96006C7.77992 3.72006 8.21992 3.72006 8.45992 3.96006L10.4599 5.96006C10.6999 6.20006 10.6999 6.58006 10.4599 6.82006C10.3399 6.94006 10.2099 7.02006 10.0799 7.02006Z"
                fill=""
              />
              <path
                d="M13.4399 3.60004H2.55992C2.17992 3.60004 1.85992 3.28004 1.85992 2.90004C1.85992 2.52004 2.17992 2.20004 2.55992 2.20004H13.4399C13.8199 2.20004 14.1399 2.52004 14.1399 2.90004C14.1399 3.28004 13.8199 3.60004 13.4399 3.60004Z"
                fill=""
              />
            </svg>
            <span>{t('filter')}</span>
          </button>

          <Link href="/orders" className="text-body hover:text-primary px-4">
            {t('seeAll')}
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-11">
          <div className="p-2.5 xl:p-5 col-span-3 sm:col-span-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              {t('products')}
            </h5>
          </div>
          <div className="p-2.5 xl:p-5 col-span-1 sm:col-span-2">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              {t('category')}
            </h5>
          </div>
          <div className="p-2.5 xl:p-5 col-span-1 sm:col-span-2">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              {t('price')}
            </h5>
          </div>
          <div className="p-2.5 xl:p-5 col-span-1 sm:col-span-2">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              {t('status')}
            </h5>
          </div>
        </div>

        {orders.map((order, index) => (
          <div
            className={`grid grid-cols-6 sm:grid-cols-11 ${
              index === orders.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={order.id}
          >
            <div className="flex items-center gap-4 p-2.5 xl:p-5 col-span-3 sm:col-span-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                  <span className="text-sm font-medium text-body">{order.product.name.charAt(0)}</span>
                </div>
              </div>
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {order.product.name}
                </h5>
                <p className="text-sm">
                  {order.product.variants} {t('variants')}
                </p>
              </div>
            </div>
            <div className="flex items-center p-2.5 xl:p-5 col-span-1 sm:col-span-2">
              <p className="text-black dark:text-white">{order.category}</p>
            </div>
            <div className="flex items-center p-2.5 xl:p-5 col-span-1 sm:col-span-2">
              <p className="text-black dark:text-white">{order.price}</p>
            </div>
            <div className="flex items-center p-2.5 xl:p-5 col-span-1 sm:col-span-2">
              <span
                className={`inline-flex rounded px-2.5 py-0.5 text-sm font-medium ${getStatusClass(
                  order.status
                )}`}
              >
                {t(order.status)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders; 