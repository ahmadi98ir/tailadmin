'use client';

import { useState, useEffect } from 'react';
import DefaultLayout from '@/components/common/DefaultLayout';
import { useTranslation } from '@/hooks/useTranslation';
import UserTable from '@/components/UserTable';
import UserFilter from '@/components/UserFilter';
import { User } from '@/types/User';

export default function UserList() {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const isRTL = i18n.language === 'fa';

  // Mock user data - would be fetched from API in a real application
  const mockUsers: User[] = [
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

  // Filter users based on search term, role and status
  const filteredUsers = mockUsers.filter(
    (user) => {
      const matchesSearch = 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRole = roleFilter === '' || user.role === roleFilter;
      const matchesStatus = statusFilter === '' || user.status === statusFilter;
      
      return matchesSearch && matchesRole && matchesStatus;
    }
  );

  // Apply RTL direction when language is Persian
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  return (
    <DefaultLayout>
      <div className={`mx-auto max-w-screen-2xl ${isRTL ? 'font-vazirmatn' : ''}`}>
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
          <UserFilter 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            roleFilter={roleFilter}
            setRoleFilter={setRoleFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            isRTL={isRTL}
          />

          <UserTable users={filteredUsers} isRTL={isRTL} />
        </div>
      </div>
    </DefaultLayout>
  );
} 