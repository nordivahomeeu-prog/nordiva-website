import {Product} from './types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://web-production-3807a.up.railway.app';

export async function getProducts(category?: string): Promise<Product[]> {
  const url = new URL(`${API_BASE}/api/products`);
  if (category) {
    url.searchParams.set('category', category);
  }
  
  const res = await fetch(url.toString(), {next: {revalidate: 60}});
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${API_BASE}/api/products/${id}`, {next: {revalidate: 60}});
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}
