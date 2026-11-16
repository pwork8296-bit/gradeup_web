export interface CartItem {
  id: string | number;
  product_id: string | number;
  title: string;
  slug?: string;
  image?: string;
  instructor?: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  variant?: string;
}

export interface CartTableProps {
  initialItems?: CartItem[];
}

export interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (productId: string | number, quantity: number, variant?: string) => void;
  onRemove: (productId: string | number, variant?: string) => void;
}

export interface CouponDiscount {
  code: string;
  percent: number;
  discountAmount: number;
}
