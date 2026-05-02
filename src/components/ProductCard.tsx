'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Product} from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({product}: ProductCardProps) {
  const formatPrice = (price: string, currency: string) => {
    const num = parseFloat(price);
    if (num === 0) return 'Contact for Price';
    return `${num.toLocaleString()} ${currency}`;
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-stone-200 hover:shadow-lg transition-shadow">
      <div className="aspect-square relative bg-stone-100">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-stone-400">
            No Image
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-medium text-stone-900 mb-2 truncate">{product.name}</h3>
        <p className="text-stone-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="font-semibold text-stone-900">
            {formatPrice(product.price, product.currency)}
          </span>
          
          <Link
            href={`/products/${product.id}`}
            className="text-sm text-stone-600 hover:text-stone-900 underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
