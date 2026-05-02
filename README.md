# NORDIVA HOME EUROPE Website

Çok dilli mobilya katalog web sitesi - Next.js 14 + next-intl + Tailwind CSS

## Özellikler

- **7 Dil Desteği**: English (EN), Deutsch (DE), Français (FR), العربية (AR), Italiano (IT), Español (ES), Nederlands (NL)
- **Ürün Kataloğu**: Backend API'den çekilen gerçek ürünler
- **Sipariş Butonları**: WhatsApp ve Instagram DM entegrasyonu
- **Kapıda Ödeme**: COD (Cash on Delivery) vurgusu
- **Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu

## Teknoloji Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- next-intl (i18n)
- Backend: NestJS + PostgreSQL (Railway)

## Kurulum

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Vercel Deployment

1. Vercel CLI kurulumu:
```bash
npm i -g vercel
```

2. Login ve deploy:
```bash
vercel login
vercel --prod
```

## Ortam Değişkenleri

`.env.local` dosyası oluşturun:

```
NEXT_PUBLIC_API_URL=https://web-production-3807a.up.railway.app
```

## Backend API Endpoints

- `GET /api/products` - Tüm ürünler
- `GET /api/products?category={category}` - Kategoriye göre filtrele
- `GET /api/products/{id}` - Ürün detayı

## Kategoriler

- sofa (Koltuklar)
- corner_sofa (Köşe Koltuklar)
- dining_table (Yemek Masaları)
- chair (Sandalyeler)
- coffee_table (Sehpalar)
- bed (Yataklar)
- furniture_set (Mobilya Takımları)

## Proje Yapısı

```
src/
├── app/[locale]/          # Dil bazlı sayfalar
│   ├── page.tsx           # Ana sayfa
│   ├── products/
│   │   ├── page.tsx       # Ürün listesi
│   │   └── [id]/
│   │       └── page.tsx   # Ürün detay
│   ├── about/
│   ├── contact/
│   └── delivery/
├── components/            # React komponentleri
├── lib/                   # API ve tipler
├── i18n/                  # i18n yapılandırması
└── messages/              # Çeviri dosyaları (7 dil)
```

## Domain

Önerilen: `nordivahomeurope.com`

## Instagram

@nordivahomeeurope

---

*Bu proje Next.js ile oluşturulmuştur.*
