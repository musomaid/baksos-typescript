# Baksos Pengobatan Dukkes

Aplikasi mobile-first PWA untuk kegiatan bakti sosial pengobatan lapangan Dukkes.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Drizzle ORM + Postgres (`DATABASE_URL`)
- Vercel Blob Storage
- Zod validation

## Setup lokal
1. `npm install`
2. Salin `.env.example` ke `.env.local` lalu isi variabel.
3. Jalankan migrasi: `npm run db:migrate`
4. Seed data: `npm run db:seed`
5. Jalankan dev server: `npm run dev`

## Deploy ke Vercel

### Vercel Project Settings
- Framework Preset: **Next.js**
- Root Directory: **`./`**
- Build Command: **`npm run build`**
- Output Directory: **kosongkan / default**
- Install Command: **`npm install`**

### Environment Variables di Vercel
- `DATABASE_URL`
- `BLOB_READ_WRITE_TOKEN`
- `JWT_SECRET`
- `NEXT_PUBLIC_APP_NAME`
- `APP_ENV`

### Environment yang dipilih
- Production
- Preview

## Catatan keamanan
- Jangan commit `.env.local`.
- Jangan isi secret asli di repository.
- `NEXT_PUBLIC_APP_NAME` boleh diekspos ke browser.
- `DATABASE_URL`, `BLOB_READ_WRITE_TOKEN`, `JWT_SECRET` harus tetap server-side.

## PWA
Manifest tersedia di `public/manifest.webmanifest`.
