'use client';

import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import {ProductCategory, categoryLabels} from '@/lib/types';
import Link from 'next/link';
import {useSearchParams} from 'next/navigation';
import {useState, useMemo, Suspense} from 'react';
import {Product} from '@/lib/types';

// Static products data - embedded directly to avoid CORS issues
const allProducts: Product[] = [
  {id: '1', sku: 'madrid-001', name: 'Madrid Corner Sofa', category: 'sofa', description: 'Modern corner sofa', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/madrid-sofa.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '2', sku: 'marea-001', name: 'Marea Corner Sofa', category: 'sofa', description: 'Elegant corner sofa', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/marea-sofa.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '3', sku: 'assos-001', name: 'Assos Corner Sofa', category: 'sofa', description: 'Luxury corner sofa', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/assos-sofa.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '4', sku: 'nora-001', name: 'Nora Bed', category: 'sofa', description: 'Modern bed', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/nora-bed.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '5', sku: 'riva-001', name: 'Riva Furniture Set', category: 'furniture_set', description: 'Complete set', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/riva-set.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '6', sku: 'rio-001', name: 'Rio Furniture Set', category: 'furniture_set', description: 'Dining set', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/rio-set.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '7', sku: 'verta-001', name: 'Verta Seramik Set', category: 'furniture_set', description: 'Ceramic set', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/verta-set.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '8', sku: 'roseir-001', name: 'Roseir Furniture Set', category: 'furniture_set', description: 'Elegant set', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/roseir-set.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '9', sku: 'milano-001', name: 'Milano Furniture Set', category: 'furniture_set', description: 'Modern set', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/milano-set.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '10', sku: 'noir-001', name: 'Noir Line Set', category: 'furniture_set', description: 'Black set', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/noir-set.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '11', sku: 'arno-001', name: 'Arno Furniture Set', category: 'furniture_set', description: 'Classic set', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/arno-set.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '12', sku: 'axis-001', name: 'Axis Oval Table', category: 'dining_table', description: 'White table', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/axis-table.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '13', sku: 'pure-001', name: 'Pure Marble Table', category: 'dining_table', description: 'Marble table', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/pure-marble.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '14', sku: 'urban-001', name: 'Urban Pearl Table', category: 'dining_table', description: 'Pearl table', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/urban-table.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '15', sku: 'flute-001', name: 'Flute Beech Table', category: 'dining_table', description: 'Beech table', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/flute-beech.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '16', sku: 'moxie-001', name: 'Moxie Chair', category: 'chair', description: 'Natural chair', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/moxie-chair.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '17', sku: 'apex-001', name: 'Apex Natural Chair', category: 'chair', description: 'Natural chair', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/apex-chair.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '18', sku: 'delta-001', name: 'Delta Chair', category: 'chair', description: 'Contemporary chair', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/delta-chair.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '19', sku: 'venice-001', name: 'Venice Chair', category: 'chair', description: 'Elegant chair', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/venice-chair.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '20', sku: 'orbit-001', name: 'Orbit Chair', category: 'chair', description: 'Modern chair', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/orbit-chair.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '21', sku: 'mono-001', name: 'Mono Triple Coffee Table', category: 'coffee_table', description: 'Black table', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/mono-triple.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '22', sku: 'metro-001', name: 'Metro Triple Coffee Table', category: 'coffee_table', description: 'Brown table', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/metro-triple.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '23', sku: 'classic-001', name: 'Classic Sofa', category: 'sofa', description: 'Traditional sofa', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/classic-sofa.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '24', sku: 'modern-001', name: 'Modern Sofa', category: 'sofa', description: 'Contemporary sofa', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/modern-sofa.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '25', sku: 'lounge-001', name: 'Lounge Sofa', category: 'sofa', description: 'Comfortable sofa', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/lounge-sofa.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '26', sku: 'heritage-001', name: 'Heritage Table', category: 'dining_table', description: 'Walnut table', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/heritage-table.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '27', sku: 'nordic-001', name: 'Nordic Table', category: 'dining_table', description: 'Nordic table', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/nordic-table.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '28', sku: 'cone-001', name: 'Cone Table', category: 'dining_table', description: 'Oak table', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/cone-table.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '29', sku: 'torino-001', name: 'Torino Table', category: 'dining_table', description: 'Italian table', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/torino-table.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
  {id: '30', sku: 'masami-001', name: 'Masami Table', category: 'dining_table', description: 'Japanese table', price: '0', currency: 'EUR', imageUrl: 'https://cdn.shopify.com/s/files/1/0766/8246/1355/files/masami-table.png', isActive: true, stockStatus: 'made_to_order', createdAt: '', updatedAt: ''},
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') as ProductCategory | null;
  
  const products = useMemo(() => {
    if (!category) return allProducts;
    return allProducts.filter(p => p.category === category);
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

        {products.length > 0 ? (
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
