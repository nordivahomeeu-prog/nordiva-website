'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative bg-stone-900 text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-stone-300 mb-8">
            {t('subtitle')}
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-stone-900 px-8 py-3 rounded-md font-medium hover:bg-stone-100 transition-colors"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
