'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/ecommerce');
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-boxdark">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold">تیل ادمین فارسی</h1>
          <p className="mb-4 text-base text-body-color">در حال انتقال به داشبورد...</p>
          <div className="h-1 w-full overflow-hidden rounded bg-stroke">
            <div className="h-full w-2/3 animate-pulse rounded bg-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
