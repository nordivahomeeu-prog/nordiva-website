import {getTranslations} from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import {getProducts} from '@/lib/api';
import ProductCard from '@/components/ProductCard';

export default async function HomePage({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations('products');
  const products = await getProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CategoryGrid />

      {featuredProducts.length > 0 && (
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 NORDIVA HOME EUROPE. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://instagram.com/nordivahomeeurope" target="_blank" rel="noopener"
                 className="hover:text-stone-300 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
