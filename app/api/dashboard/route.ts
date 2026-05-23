import { ok } from "@/lib/api";
export async function GET(){return ok({ totalPatients: 0, waiting: 0, triageHigh: 0 });}
