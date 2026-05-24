"use client";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";

const items: { href: Route; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/patients", label: "Pasien" },
  { href: "/services", label: "Layanan" },
  { href: "/pharmacy", label: "Farmasi" },
  { href: "/reports", label: "Laporan" },
];

export function BottomNav() {
  const path = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 grid grid-cols-5 z-50">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className={`text-center text-xs p-2 rounded-xl ${path === item.href ? "bg-teal-100 text-teal-700" : "text-slate-500"}`}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
