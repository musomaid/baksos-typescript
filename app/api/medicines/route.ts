import { db } from "@/lib/db"; import { medicines } from "@/db/schema"; import { ok } from "@/lib/api";
export async function GET(){return ok(await db.select().from(medicines));}
export async function POST(req:Request){const [row]=await db.insert(medicines).values(await req.json()).returning(); return ok(row);}
