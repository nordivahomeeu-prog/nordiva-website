'use client';

import {useTranslations} from 'next-intl';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import {ProductCategory, categoryLabels} from '@/lib/types';
import Link from 'next/link';
import {useSearchParams} from 'next/navigation';
import {useEffect, useState} from 'react';
import {Product} from '@/lib/types';

export default function ProductsContent() {
  const t = useTranslations('products');
  const ct = useTranslations('categories');
  const searchParams = useSearchParams();
  const category = searchParams.get('category') as ProductCategory | null;
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const url = category 
        ? `https://web-production-3807a.up.railway.app/api/products?category=${category}`
        : 'https://web-production-3807a.up.railway.app/api/products';
      
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setProducts([]);
      }
      setLoading(false);
    }

    fetchProducts();
  }, [category]);

  const categories: ProductCategory[] = [
    'sofa', 'corner_sofa', 'dining_table', 'chair', 
    'coffee_table', 'bed', 'furniture_set'
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-8">{t('title')}</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            href="/products"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !category 
                ? 'bg-stone-900 text-white' 
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/products?category=${cat}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat 
                  ? 'bg-stone-900 text-white' 
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {ct(cat) || categoryLabels[cat]}
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-16 text-stone-500">Loading...</div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-stone-500">
            No products found in this category.
          </div>
        )}
      </div>

      <footer className="bg-stone-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 NORDIVA HOME EUROPE</p>
        </div>
      </footer>
    </div>
  );
}
