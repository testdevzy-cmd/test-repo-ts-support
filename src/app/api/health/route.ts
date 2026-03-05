import { NextResponse } from "next/server";
<<<<<<< Updated upstream
=======
import { appConfig, getAppVersion } from "@/config/app";
>>>>>>> Stashed changes

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
<<<<<<< Updated upstream
=======
    app: appConfig.name,
    version: getAppVersion(),
    environment: appConfig.environment,
>>>>>>> Stashed changes
  });
}

