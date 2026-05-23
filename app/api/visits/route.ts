import { db } from "@/lib/db"; import { visits } from "@/db/schema"; import { ok } from "@/lib/api";
export async function GET(){return ok(await db.select().from(visits));}
export async function POST(req:Request){const [row]=await db.insert(visits).values(await req.json()).returning(); return ok(row);}
