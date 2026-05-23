import { ok } from "@/lib/api";
export async function GET(){return ok({date:new Date().toISOString(), summary:"Laporan harian lapangan"});}
