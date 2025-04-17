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
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2023-04-15' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Viewer', status: 'Active', lastLogin: '2023-04-12' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive', lastLogin: '2023-03-28' },
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