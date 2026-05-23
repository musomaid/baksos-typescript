import { db } from "@/lib/db"; import { patients } from "@/db/schema"; import { ok } from "@/lib/api"; import { z } from "zod";
const schema=z.object({fullName:z.string().min(2),nik:z.string().min(4),phone:z.string().optional()});
export async function GET(){const rows=await db.select().from(patients); return ok(rows);}
export async function POST(req:Request){const body=schema.parse(await req.json()); const [row]=await db.insert(patients).values(body).returning(); return ok(row);}
