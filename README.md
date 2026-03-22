# Zeela Marketing Playbook

B2B & B2C Marketing Playbook — Next.js web uygulaması.

## Kurulum

```bash
npm install
npm run dev
```

## Vercel'e Deploy

### Yöntem 1 — GitHub üzerinden (önerilen)

1. GitHub'da yeni bir repo oluştur
2. Bu klasörü push et:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/KULLANICI_ADI/zeela-playbook.git
   git push -u origin main
   ```
3. [vercel.com](https://vercel.com) → "New Project" → GitHub repo'yu seç → Deploy

### Yöntem 2 — Vercel CLI

```bash
npm i -g vercel
vercel
```

## İçerik Güncelleme

Tüm içerik `data/playbook.ts` dosyasındadır.
Her bölüm `sections` dizisinde bir obje olarak tanımlıdır.
İçeriği güncelleyip push ettiğinde Vercel otomatik yeniden deploy eder.

## Teknoloji

- **Next.js 14** — App Router
- **TypeScript**
- **CSS** — custom design system (no Tailwind)
- **Google Fonts** — Syne + DM Sans
- **Vercel** — hosting
