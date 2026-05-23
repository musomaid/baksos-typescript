"use client";
import { useState } from "react";

export function PatientForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setMessage("");
    const res = await fetch("/api/patients", { method: "POST", body: JSON.stringify(Object.fromEntries(formData)), headers: {"Content-Type":"application/json"} });
    setMessage(res.ok ? "Pasien berhasil didaftarkan." : "Gagal mendaftar pasien.");
    setLoading(false);
  }

  return (
    <form action={onSubmit} className="card space-y-3">
      <input name="fullName" placeholder="Nama lengkap" className="w-full border rounded-xl p-3" required />
      <input name="nik" placeholder="NIK" className="w-full border rounded-xl p-3" required />
      <input name="phone" placeholder="Nomor HP" className="w-full border rounded-xl p-3" />
      <button disabled={loading} className="w-full bg-brand text-white rounded-xl p-3 font-semibold">{loading ? "Menyimpan..." : "Daftar Pasien"}</button>
      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}
