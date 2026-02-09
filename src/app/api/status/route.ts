import { NextResponse } from "next/server";

/**
 * Status endpoint
 * Returns system status and uptime information
 */
export async function GET() {
  const startTime = process.uptime();
  
  return NextResponse.json({
    status: "operational",
    uptime: Math.floor(startTime),
    timestamp: new Date().toISOString(),
  });
}
