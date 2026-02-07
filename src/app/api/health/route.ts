import { NextResponse } from "next/server";
import { isDevelopment } from "@/utils/env";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: isDevelopment() ? "development" : "production",
  });
}

