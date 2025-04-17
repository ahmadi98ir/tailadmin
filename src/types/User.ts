export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Viewer';
  status: 'Active' | 'Inactive';
  lastLogin: string;
} 