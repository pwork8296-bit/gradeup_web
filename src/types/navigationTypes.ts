export interface NavItem {
  label: string;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

export interface HeaderProps {
  cartItemCount?: number;
  logoSrc?: string;
}

export interface FooterProps {
  copyright?: string;
  links?: NavItem[];
}

export interface UserProfile {
  name?: string;
  initials?: string;
  avatarUrl?: string;
}

export interface Header2Props {
  user?: UserProfile;
  cartItemCount?: number;
  notificationCount?: number;
  onSearch?: (query: string) => void;
  logoHref?: string;
}
