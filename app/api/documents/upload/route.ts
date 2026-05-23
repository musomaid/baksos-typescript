import { put } from "@vercel/blob"; import { ok } from "@/lib/api";
export async function POST(req:Request){const form=await req.formData(); const file=form.get("file") as File; const blob=await put(file.name,file,{access:"public", token:process.env.BLOB_READ_WRITE_TOKEN}); return ok(blob);}
