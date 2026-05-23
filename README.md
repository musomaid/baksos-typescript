# Baksos Pengobatan Dukkes

Aplikasi mobile-first PWA untuk kegiatan bakti sosial pengobatan lapangan Dukkes.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Drizzle ORM + Postgres
- Vercel Blob
- Zod validation

## Setup lokal
1. `npm install`
2. Salin `.env.example` ke `.env.local` dan isi variabel
3. Jalankan migrasi: `npm run db:migrate`
4. Seed data: `npm run db:seed`
5. Jalankan: `npm run dev`

## Deployment ke Vercel
1. Push repo ke Git provider
2. Import project ke Vercel
3. Tambahkan Postgres via Vercel Marketplace (contoh Neon)
4. Buat Blob Store di Vercel, salin token ke `BLOB_READ_WRITE_TOKEN`
5. Set env vars: `DATABASE_URL`, `BLOB_READ_WRITE_TOKEN`, `JWT_SECRET`, `NEXT_PUBLIC_APP_NAME`
6. Deploy dan jalankan migrasi pada environment target.

## Struktur utama
- `/`, `/patients`, `/patients/new`, `/patients/[id]`
- `/services`, `/visits/[id]`, `/pharmacy`, `/reports`, `/settings`
- API routes sesuai kebutuhan operasional lapangan

## PWA
Manifest tersedia di `public/manifest.webmanifest`.
