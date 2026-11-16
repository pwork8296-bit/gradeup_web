import { CartItem } from './cartTypes';

export type PaymentMethod = 'upi' | 'card' | 'netbanking' | 'cod';

export interface BillingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  orderNotes?: string;
  paymentMethod: PaymentMethod;
}

export interface CheckoutOrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  isSubmitting?: boolean;
  onPlaceOrder?: () => void;
}

export interface BillingFormProps {
  billingDetails: BillingDetails;
  onChange: (field: keyof BillingDetails, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting?: boolean;
}
