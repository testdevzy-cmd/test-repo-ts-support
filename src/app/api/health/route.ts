import { NextResponse } from "next/server";
import { formatTimestamp, getCurrentTimestamp } from "@/utils/time";

export async function GET() {
  const now = new Date();
  
  return NextResponse.json({
    status: "ok",
    timestamp: getCurrentTimestamp(),
    formatted: formatTimestamp(now),
  });
}

