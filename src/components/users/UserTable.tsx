'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { User } from '@/types/user';

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
}

const UserTable = ({ users, onEdit, onDelete }: UserTableProps) => {
  const { t } = useTranslation();
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredUsers = users.filter(user => {
    const roleMatch = selectedRole === 'all' || user.role === selectedRole;
    const statusMatch = selectedStatus === 'all' || user.status === selectedStatus;
    return roleMatch && statusMatch;
  });

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          {t('userManagement')}
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">{t('name')}</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">{t('role')}</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">{t('status')}</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">{t('actions')}</p>
        </div>
      </div>

      {filteredUsers.map((user) => (
        <div
          key={user.id}
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm font-medium text-black dark:text-white">
                {user.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm font-medium text-black dark:text-white">
              {t(user.role)}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p
              className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                user.status === 'Active'
                  ? 'bg-success text-success'
                  : 'bg-danger text-danger'
              }`}
            >
              {t(user.status)}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={() => onEdit(user)}
                className="text-primary hover:text-primary-dark"
              >
                {t('edit')}
              </button>
              <button
                onClick={() => onDelete(user.id)}
                className="text-danger hover:text-danger-dark"
              >
                {t('delete')}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTable; 