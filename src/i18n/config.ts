import {notFound} from 'next/navigation';

export const locales = ['en', 'de', 'fr', 'ar', 'it', 'es', 'nl'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';
