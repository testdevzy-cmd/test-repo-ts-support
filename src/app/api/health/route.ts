import { NextResponse } from "next/server";
import { formatTimestamp } from "@/utils/time";

export async function GET() {
  const now = new Date();
  
  return NextResponse.json({
    status: "ok",
    timestamp: now.toISOString(),
    formatted: formatTimestamp(now),
  });
}

