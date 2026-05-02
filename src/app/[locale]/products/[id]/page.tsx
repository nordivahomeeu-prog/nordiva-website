import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import Navigation from '@/components/Navigation';
import {getProduct, getProducts} from '@/lib/api';

interface ProductPageProps {
  params: {locale: string; id: string};
}

export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.map((p) => ({id: p.id}));
  } catch {
    return [];
  }
}

export default async function ProductPage({params}: ProductPageProps) {
  let product;
  try {
    product = await getProduct(params.id);
  } catch {
    notFound();
  }

  const formatPrice = (price: string, currency: string) => {
    const num = parseFloat(price);
    if (num === 0) return 'Contact for Price';
    return `${num.toLocaleString()} ${currency}`;
  };

  const whatsappLink = `https://wa.me/?text=I'm interested in: ${encodeURIComponent(product.name)}`;
  const instagramLink = 'https://instagram.com/nordivahomeeurope';

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/products" className="text-stone-600 hover:text-stone-900 mb-6 inline-block">
          ← Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="aspect-square relative bg-stone-100 rounded-lg overflow-hidden">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                No Image
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-stone-900 mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold text-stone-700">
                {formatPrice(product.price, product.currency)}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-stone-900 mb-2">Description</h2>
              <div 
                className="text-stone-600 prose prose-stone max-w-none"
                dangerouslySetInnerHTML={{__html: product.description}}
              />
            </div>

            {/* Order Buttons */}
            <div className="space-y-3 pt-6 border-t border-stone-200">
              <p className="text-sm text-stone-500 mb-3">Cash on Delivery</p>
              
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                Order via WhatsApp
              </a>

              <a
                href={instagramLink}
                target="_blank"
                rel="noopener"
                className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Order via Instagram DM
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-stone-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 NORDIVA HOME EUROPE</p>
        </div>
      </footer>
    </div>
  );
}
