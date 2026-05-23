import { db } from "@/lib/db"; import { patients } from "@/db/schema"; import { eq } from "drizzle-orm"; import { ok } from "@/lib/api";
export async function GET(_:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params; const row=await db.select().from(patients).where(eq(patients.id,id)); return ok(row[0]??null);}
