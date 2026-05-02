'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {ProductCategory, categoryLabels} from '@/lib/types';

const categories: ProductCategory[] = [
  'sofa', 'corner_sofa', 'dining_table', 'chair', 
  'coffee_table', 'bed', 'furniture_set'
];

export default function CategoryGrid() {
  const t = useTranslations('categories');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
          {t('title')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/products?category=${cat}`}
              className="group relative aspect-square bg-stone-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-medium text-stone-700 group-hover:text-stone-900 transition-colors">
                  {t(cat) || categoryLabels[cat]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
