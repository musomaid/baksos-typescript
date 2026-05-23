const cards = ["Dashboard Lapangan","Registrasi Pasien Cepat","Antrean & Nomor Layanan","Triage Pasien","Pemeriksaan Medis","Resep & Farmasi","Rujukan Pasien","Upload Dokumen & Foto","Manajemen Tim & Pos Pelayanan","Laporan Harian"];
export default function HomePage(){
  return <div className="space-y-3">{cards.map(c=><div key={c} className="card">{c}</div>)}<button className="fixed bottom-24 right-6 bg-brand text-white rounded-full w-14 h-14 text-2xl">+</button></div>
}
