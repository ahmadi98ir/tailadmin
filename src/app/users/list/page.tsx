'use client';

import { useState } from 'react';
import DefaultLayout from '@/components/common/DefaultLayout';
import { useTranslation } from '@/hooks/useTranslation';

export default function UserList() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock user data - would be fetched from API in a real application
  const mockUsers = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2023-05-28',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Editor',
      status: 'Active',
      lastLogin: '2023-05-27',
    },
    {
      id: '3',
      name: 'Robert Johnson',
      email: 'robert@example.com',
      role: 'Viewer',
      status: 'Inactive',
      lastLogin: '2023-05-15',
    },
    {
      id: '4',
      name: 'Emily Wilson',
      email: 'emily@example.com',
      role: 'Editor',
      status: 'Active',
      lastLogin: '2023-05-26',
    },
    {
      id: '5',
      name: 'Michael Brown',
      email: 'michael@example.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2023-05-28',
    },
    {
      id: '6',
      name: 'Sarah Lee',
      email: 'sarah@example.com',
      role: 'Viewer',
      status: 'Inactive',
      lastLogin: '2023-05-10',
    },
    {
      id: '7',
      name: 'David Clark',
      email: 'david@example.com',
      role: 'Editor',
      status: 'Active',
      lastLogin: '2023-05-22',
    },
  ];

  // Filter users based on search term
  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            {t('userManagement')}
          </h2>
          <div className="flex items-center gap-4">
            <div>
              <button className="flex items-center gap-2 rounded bg-primary px-4.5 py-2 font-medium text-white hover:bg-opacity-80">
                <svg
                  className="fill-current"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z"
                    fill=""
                  />
                </svg>
                {t('addUser')}
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('searchUsers')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-10 pr-4 outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                />
                <span className="absolute left-3 top-2.5">
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
                <select className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-2 pl-4 pr-9 text-sm outline-none dark:border-strokedark">
                  <option value="">{t('allRoles')}</option>
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
                <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
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
                <select className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-2 pl-4 pr-9 text-sm outline-none dark:border-strokedark">
                  <option value="">{t('allStatus')}</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
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

          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    {t('name')}
                  </th>
                  <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">
                    {t('email')}
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    {t('role')}
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    {t('status')}
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    {t('lastLogin')}
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    {t('actions')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={user.id}>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        {user.name}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">{user.email}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">{user.role}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <span
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                          user.status === 'Active'
                            ? 'bg-success text-success'
                            : 'bg-danger text-danger'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {user.lastLogin}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                              fill=""
                            />
                            <path
                              d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                              fill=""
                            />
                          </svg>
                        </button>
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                              fill=""
                            />
                            <path
                              d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                              fill=""
                            />
                            <path
                              d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                              fill=""
                            />
                            <path
                              d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                              fill=""
                            />
                          </svg>
                        </button>
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                              fill=""
                            />
                            <path
                              d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.59012 10.4906V2.1094C9.59012 1.7719 9.30887 1.46252 8.97324 1.46252C8.63762 1.46252 8.35637 1.74377 8.35637 2.1094V10.4906L5.37762 7.53752C5.12449 7.2844 4.73074 7.31252 4.47762 7.53752C4.22449 7.79065 4.25262 8.1844 4.47762 8.43752L8.55074 12.3469Z"
                              fill=""
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
} 