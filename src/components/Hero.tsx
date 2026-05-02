'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

const heroTranslations: Record<string, {title: string; subtitle: string; cta: string}> = {
  en: { title: 'Premium Furniture for Your Home', subtitle: 'Discover our collection of handcrafted furniture designed for modern living', cta: 'Explore Collection' },
  de: { title: 'Premium Möbel für Ihr Zuhause', subtitle: 'Entdecken Sie unsere Kollektion handgefertigter Möbel für modernes Wohnen', cta: 'Kollektion entdecken' },
  fr: { title: 'Meubles Premium pour votre maison', subtitle: 'Découvrez notre collection de meubles artisanaux conçus pour la vie moderne', cta: 'Découvrir la collection' },
  it: { title: 'Mobili Premium per la tua casa', subtitle: 'Scopri la nostra collezione di mobili artigianali per la vita moderna', cta: 'Esplora la collezione' },
  es: { title: 'Muebles Premium para tu hogar', subtitle: 'Descubre nuestra colección de muebles artesanales diseñados para la vida moderna', cta: 'Explorar colección' },
  nl: { title: 'Premium Meubelen voor uw huis', subtitle: 'Ontdek onze collectie handgemaakte meubelen voor modern wonen', cta: 'Collectie verkennen' },
  ar: { title: 'أثاث فاخر لمنزلك', subtitle: 'اكتشف مجموعتنا من الأثاث المصنوع يدويًا للحياة العصرية', cta: 'استكشف المجموعة' },
};

export default function Hero() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const t = heroTranslations[locale] || heroTranslations.en;

  return (
    <section className="relative bg-stone-900 text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-stone-300 mb-8">
            {t.subtitle}
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-stone-900 px-8 py-3 rounded-md font-medium hover:bg-stone-100 transition-colors"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
