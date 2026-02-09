import { NextResponse } from "next/server";

/**
 * Status endpoint
 * Returns system status and uptime information
 */
export async function GET() {
  const uptimeSeconds = Math.floor(process.uptime());
  const hours = Math.floor(uptimeSeconds / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = uptimeSeconds % 60;
  
  return NextResponse.json({
    status: "operational",
    uptime: {
      total: uptimeSeconds,
      formatted: `${hours}h ${minutes}m ${seconds}s`,
    },
    environment: process.env.NODE_ENV || "unknown",
    timestamp: new Date().toISOString(),
  });
}
