import { db } from "@/lib/db"; import { visits } from "@/db/schema"; import { eq } from "drizzle-orm"; import { ok } from "@/lib/api";
export async function PATCH(req:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params; const body=await req.json(); const [row]=await db.update(visits).set({status:body.status}).where(eq(visits.id,id)).returning(); return ok(row);}
