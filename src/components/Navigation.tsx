'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

const locales = ['en', 'de', 'fr', 'ar', 'it', 'es', 'nl'];

const navTranslations: Record<string, Record<string, string>> = {
  en: { home: 'Home', products: 'Products', about: 'About', contact: 'Contact', delivery: 'Delivery' },
  de: { home: 'Startseite', products: 'Produkte', about: 'Über uns', contact: 'Kontakt', delivery: 'Lieferung' },
  fr: { home: 'Accueil', products: 'Produits', about: 'À propos', contact: 'Contact', delivery: 'Livraison' },
  it: { home: 'Home', products: 'Prodotti', about: 'Chi siamo', contact: 'Contatti', delivery: 'Consegna' },
  es: { home: 'Inicio', products: 'Productos', about: 'Nosotros', contact: 'Contacto', delivery: 'Entrega' },
  nl: { home: 'Home', products: 'Producten', about: 'Over ons', contact: 'Contact', delivery: 'Levering' },
  ar: { home: 'الرئيسية', products: 'المنتجات', about: 'من نحن', contact: 'اتصل بنا', delivery: 'التوصيل' },
};

export default function Navigation() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const t = navTranslations[locale] || navTranslations.en;

  const navItems = [
    {href: '/', label: t.home},
    {href: '/products', label: t.products},
    {href: '/about', label: t.about},
    {href: '/contact', label: t.contact},
    {href: '/delivery', label: t.delivery},
  ];

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';
    return `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-stone-900">
            NORDIVA
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <select
              value={locale}
              onChange={(e) => {
                window.location.href = switchLocale(e.target.value);
              }}
              className="text-sm border border-stone-300 rounded-md px-2 py-1 bg-white"
            >
              {locales.map((l) => (
                <option key={l} value={l}>
                  {l.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
