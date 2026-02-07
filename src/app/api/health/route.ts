import { NextResponse } from "next/server";

/**
 * Health check endpoint
 * Returns the current status and timestamp of the application
 */
export async function GET() {
  const response = {
    status: "ok",
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(response);
}

