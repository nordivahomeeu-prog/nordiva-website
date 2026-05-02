'use client';

import Link from 'next/link';

const navItems = [
  {href: '/', label: 'Home'},
  {href: '/products', label: 'Products'},
  {href: '/about', label: 'About'},
  {href: '/contact', label: 'Contact'},
  {href: '/delivery', label: 'Delivery'},
];

export default function Navigation() {
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
        </div>
      </div>
    </header>
  );
}
