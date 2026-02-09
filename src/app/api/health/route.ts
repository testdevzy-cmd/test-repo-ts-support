import { NextResponse } from "next/server";
import { appConfig } from "@/config/app";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    app: appConfig.name,
    environment: appConfig.environment,
  });
}

