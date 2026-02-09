import { NextResponse } from "next/server";
import { appConfig, getAppVersion } from "@/config/app";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    app: appConfig.name,
    version: getAppVersion(),
    environment: appConfig.environment,
  });
}

