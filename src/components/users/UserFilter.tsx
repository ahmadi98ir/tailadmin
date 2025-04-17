'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface UserFilterProps {
  onRoleChange: (role: string) => void;
  onStatusChange: (status: string) => void;
}

const UserFilter = ({ onRoleChange, onStatusChange }: UserFilterProps) => {
  const { t } = useTranslation();
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
    onRoleChange(role);
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    onStatusChange(status);
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <select
          value={selectedRole}
          onChange={(e) => handleRoleChange(e.target.value)}
          className="rounded border border-stroke bg-transparent py-2 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
        >
          <option value="all">{t('allRoles')}</option>
          <option value="Admin">{t('Admin')}</option>
          <option value="Viewer">{t('Viewer')}</option>
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => handleStatusChange(e.target.value)}
          className="rounded border border-stroke bg-transparent py-2 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
        >
          <option value="all">{t('allStatuses')}</option>
          <option value="Active">{t('Active')}</option>
          <option value="Inactive">{t('Inactive')}</option>
        </select>
      </div>
    </div>
  );
};

export default UserFilter; 