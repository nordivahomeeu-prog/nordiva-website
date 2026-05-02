export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  description: string;
  price: string;
  currency: string;
  imageUrl: string;
  isActive: boolean;
  stockStatus: 'in_stock' | 'made_to_order' | 'out_of_stock';
  createdAt: string;
  updatedAt: string;
}

export type ProductCategory = 
  | 'sofa' 
  | 'table' 
  | 'chair' 
  | 'coffee_table'
  | 'corner_sofa'
  | 'dining_table'
  | 'bed'
  | 'furniture_set';

export const categoryLabels: Record<ProductCategory, string> = {
  sofa: 'Sofas',
  table: 'Tables',
  chair: 'Chairs',
  coffee_table: 'Coffee Tables',
  corner_sofa: 'Corner Sofas',
  dining_table: 'Dining Tables',
  bed: 'Beds',
  furniture_set: 'Furniture Sets',
};
