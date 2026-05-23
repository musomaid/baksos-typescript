import { NextResponse } from "next/server";

import { publicEnv } from "@/src/lib/env";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: publicEnv.NEXT_PUBLIC_APP_NAME,
  });
}
