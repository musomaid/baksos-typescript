import { NextResponse } from "next/server";
export const ok = (data: unknown) => NextResponse.json({ success: true, data });
