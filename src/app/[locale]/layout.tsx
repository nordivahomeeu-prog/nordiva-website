import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import '../globals.css';

const locales = ['en', 'de', 'fr', 'ar', 'it', 'es', 'nl'];

const messages: Record<string, any> = {
  en: () => import('../../../messages/en.json'),
  de: () => import('../../../messages/de.json'),
  fr: () => import('../../../messages/fr.json'),
  ar: () => import('../../../messages/ar.json'),
  it: () => import('../../../messages/it.json'),
  es: () => import('../../../messages/es.json'),
  nl: () => import('../../../messages/nl.json'),
};

const getDirection = (locale: string) => locale === 'ar' ? 'rtl' : 'ltr';

export async function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const msg = await messages[locale]?.() || await messages.en();
  return {
    title: msg.default.metadata?.title || 'NORDIVA HOME EUROPE',
    description: msg.default.metadata?.description || 'Premium Furniture',
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  const direction = getDirection(locale);

  return (
    <html lang={locale} dir={direction}>
      <body className="antialiased min-h-screen bg-stone-50">
        {children}
      </body>
    </html>
  );
}
