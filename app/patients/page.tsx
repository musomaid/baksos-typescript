import Link from "next/link";
export default function PatientsPage(){return <div className="space-y-3"><Link href="/patients/new" className="card block font-semibold">+ Registrasi Pasien Baru</Link><div className="card">Empty state: belum ada pasien.</div></div>}
