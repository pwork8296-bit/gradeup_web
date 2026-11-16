export interface AdminStatCard {
  id: string;
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  iconBgColor: string;
  iconTextColor: string;
  icon: string;
}

export interface AdminProductItem {
  id: string | number;
  title: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  instructor: string;
  studentsCount: number;
  status: 'published' | 'draft' | 'archived';
  image?: string;
}

export interface AdminBlogItem {
  id: string | number;
  title: string;
  slug: string;
  category: string;
  author: string;
  publishedAt: string;
  status: 'published' | 'draft';
  views: number;
  image?: string;
}

export interface AdminCategoryItem {
  id: string | number;
  name: string;
  slug: string;
  description: string;
  courseCount: number;
}

export interface AdminClientItem {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  enrolledCourse: string;
  amount: string;
  status: 'active' | 'completed' | 'pending' | 'cancelled';
  statusBadge?: string;
  date: string;
  avatar?: string;
}

export interface AdminUserItem {
  id: string | number;
  name: string;
  email: string;
  role: 'Super Admin' | 'Instructor' | 'Moderator' | 'Support';
  status: 'active' | 'inactive';
  lastActive: string;
  avatar?: string;
}

export interface AdminSettingsData {
  siteName: string;
  supportEmail: string;
  supportPhone: string;
  currency: string;
  allowRegistration: boolean;
  maintenanceMode: boolean;
  defaultBatchSize: number;
}

export interface AdminNavItem {
  name: string;
  href: string;
  iconName: string;
  badge?: string;
}

export interface AdminNotificationItem {
  id: string;
  title: string;
  time: string;
  read: boolean;
  type: 'order' | 'user' | 'alert';
}

export interface AdminFormPageProps {
  id?: string;
  mode?: 'add' | 'edit';
}
