# NORDIVA HOME EUROPE - Deployment Talimatları

## 🎉 Build Başarılı!

Web sitesi başarıyla build edildi ve `C:\Users\TR\Projects\nordiva-website` dizininde hazır.

## 📁 Build Çıktısı

- **Konum**: `.next/` dizini
- **Toplam Sayfa**: 194 (7 dil × sayfalar)
- **Durum**: ✅ Başarılı

## 🚀 Vercel Deployment Adımları

### 1. Vercel Login
```bash
cd C:\Users\TR\Projects\nordiva-website
vercel login
```
- Tarayıcı açılacak, Vercel hesabınıza giriş yapın

### 2. Deploy
```bash
vercel --prod
```

### 3. Domain Bağlama (Opsiyonel)
```bash
vercel domains add nordivahomeurope.com
```

## 🔧 Manuel Deploy (Alternatif)

Vercel dashboard'dan:
1. https://vercel.com/new adresine gidin
2. "Import Git Repository" seçeneğini kullanın
3. GitHub'da `nordiva-website` repo'su oluşturun
4. Repoyu import edin
5. Deploy edin

## ⚙️ Ortam Değişkenleri

Vercel dashboard'da Settings > Environment Variables bölümüne ekleyin:

```
NEXT_PUBLIC_API_URL = https://web-production-3807a.up.railway.app
```

## 📋 Özellikler

| Özellik | Durum |
|---------|-------|
| 7 Dil Desteği | ✅ EN, DE, FR, AR, IT, ES, NL |
| Ürün Kataloğu | ✅ Backend API entegrasyonu |
| WhatsApp Sipariş | ✅ |
| Instagram DM | ✅ |
| Responsive | ✅ |
| SEO Optimizasyonu | ✅ |

## 🔗 Önemli Linkler

- **Backend API**: https://web-production-3807a.up.railway.app
- **Instagram**: @nordivahomeeurope
- **Önerilen Domain**: nordivahomeurope.com

## 📝 Notlar

- Ürün detay sayfaları statik olarak generate edildi (155+ ürün)
- Kategori filtreleme client-side çalışıyor
- Kapıda ödeme (COD) vurgusu tüm sayfalarda mevcut

## 🛠️ Sorun Giderme

Eğer API bağlantısı çalışmazsa:
1. CORS ayarlarını backend'de kontrol edin
2. `next.config.mjs` içindeki API URL'ini güncelleyin
3. Rebuild edin: `npm run build`

---
Hazırlayan: Manager
Tarih: 2026-05-02
