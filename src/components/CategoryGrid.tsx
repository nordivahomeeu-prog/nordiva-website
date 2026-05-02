'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {ProductCategory, categoryLabels} from '@/lib/types';

const categories: ProductCategory[] = [
  'sofa', 'corner_sofa', 'dining_table', 'chair', 
  'coffee_table', 'bed', 'furniture_set'
];

const categoryTranslations: Record<string, Record<ProductCategory, string>> = {
  en: { sofa: 'Sofas', table: 'Tables', chair: 'Chairs', coffee_table: 'Coffee Tables', corner_sofa: 'Corner Sofas', dining_table: 'Dining Tables', bed: 'Beds', furniture_set: 'Furniture Sets' },
  de: { sofa: 'Sofas', table: 'Tische', chair: 'Stühle', coffee_table: 'Couchtische', corner_sofa: 'Ecksofas', dining_table: 'Esstische', bed: 'Betten', furniture_set: 'Möbelsets' },
  fr: { sofa: 'Canapés', table: 'Tables', chair: 'Chaises', coffee_table: 'Tables basses', corner_sofa: 'Canapés d\'angle', dining_table: 'Tables à manger', bed: 'Lits', furniture_set: 'Ensembles de meubles' },
  it: { sofa: 'Divani', table: 'Tavoli', chair: 'Sedie', coffee_table: 'Tavolini', corner_sofa: 'Divani angolari', dining_table: 'Tavoli da pranzo', bed: 'Letti', furniture_set: 'Set di mobili' },
  es: { sofa: 'Sofás', table: 'Mesas', chair: 'Sillas', coffee_table: 'Mesas de centro', corner_sofa: 'Sofás de esquina', dining_table: 'Mesas de comedor', bed: 'Camas', furniture_set: 'Conjuntos de muebles' },
  nl: { sofa: 'Banken', table: 'Tafels', chair: 'Stoelen', coffee_table: 'Salontafels', corner_sofa: 'Hoekbanken', dining_table: 'Eettafels', bed: 'Bedden', furniture_set: 'Meubelsets' },
  ar: { sofa: 'أرائك', table: 'طاولات', chair: 'كراسي', coffee_table: 'طاولات قهوة', corner_sofa: 'أرائك زاوية', dining_table: 'طاولات طعام', bed: 'أسرة', furniture_set: 'طقم أثاث' },
};

export default function CategoryGrid() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const t = categoryTranslations[locale] || categoryTranslations.en;
  const title = locale === 'en' ? 'Our Categories' : 
                locale === 'de' ? 'Unsere Kategorien' :
                locale === 'fr' ? 'Nos Catégories' :
                locale === 'it' ? 'Le nostre Categorie' :
                locale === 'es' ? 'Nuestras Categorías' :
                locale === 'nl' ? 'Onze Categorieën' :
                locale === 'ar' ? 'فئاتنا' : 'Our Categories';

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
          {title}
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
                  {t[cat] || categoryLabels[cat]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
