export interface Customer {
  readonly id: number;
  name: string;
  phone_number: string;
  gender?: 'Male' | 'Female' | 'Other';
  email?: string;
  organization?: string;
  created_at: Date;
  deleted_at?: Date;
}
