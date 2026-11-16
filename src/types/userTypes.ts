export interface UserOrder {
  id: string;
  orderNumber: string;
  courseTitle: string;
  courseImage: string;
  instructor: string;
  date: string;
  amount: number;
  status: 'active' | 'completed' | 'processing' | 'cancelled';
  accessUrl: string;
  invoiceUrl?: string;
  progressPercentage?: number;
}

export interface UserProfileDetails {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  avatarUrl?: string;
  activeCoursesCount: number;
  completedCertificatesCount: number;
}

export interface OrderHistoryListProps {
  orders: UserOrder[];
}

export interface UserDashboardProps {
  user: UserProfileDetails;
  orders: UserOrder[];
}
