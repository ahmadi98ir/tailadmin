'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import DefaultLayout from '@/components/common/DefaultLayout';
import UserTable from '@/components/users/UserTable';
import UserFilter from '@/components/users/UserFilter';
import AddUserButton from '@/components/users/AddUserButton';
import { User } from '@/types/User';

export default function UserListPage() {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([
    { id: '1', name: 'John Doe', role: 'Admin', status: 'Active' },
    { id: '2', name: 'Jane Smith', role: 'Viewer', status: 'Active' },
    { id: '3', name: 'Bob Johnson', role: 'Viewer', status: 'Inactive' },
  ]);

  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
  };

  const handleEdit = (user: User) => {
    // Implement edit functionality
    console.log('Edit user:', user);
  };

  const handleDelete = (userId: string) => {
    // Implement delete functionality
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleAddUser = () => {
    // Implement add user functionality
    console.log('Add new user');
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            {t('userManagement')}
          </h2>
          <AddUserButton onClick={handleAddUser} />
        </div>

        <UserFilter
          onRoleChange={handleRoleChange}
          onStatusChange={handleStatusChange}
        />

        <UserTable
          users={users}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </DefaultLayout>
  );
} 