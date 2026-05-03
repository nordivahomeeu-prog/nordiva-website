'use client';

import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import {ProductCategory, categoryLabels} from '@/lib/types';
import Link from 'next/link';
import {useSearchParams} from 'next/navigation';
import {useEffect, useState, Suspense} from 'react';
import {Product} from '@/lib/types';

function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') as ProductCategory | null;
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const url = category 
        ? `/api/products?category=${category}`
        : '/api/products';
      
      try {
        const res = await fetch(url);
        console.log('Response status:', res.status);
        const data = await res.json();
        console.log('Products data:', data);
        setProducts(Array.isArray(data) ? data : []);
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
        <h1 className="text-3xl font-bold text-stone-900 mb-8">Our Products</h1>

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
              {categoryLabels[cat]}
            </Link>
          ))}
        </div>

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

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-stone-50 flex items-center justify-center">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
