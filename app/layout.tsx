import type { Metadata } from "next";
import "./globals.css";
import { BottomNav } from "@/components/bottom-nav";

export const metadata: Metadata = {
  title: "Baksos Pengobatan Dukkes",
  description: "Aplikasi mobile-first kegiatan bakti sosial pengobatan lapangan",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="max-w-md mx-auto min-h-screen pb-20">
        <header className="sticky top-0 z-40 bg-white border-b px-4 py-3 font-semibold">Baksos Pengobatan Dukkes</header>
        <main className="p-4 space-y-4">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
