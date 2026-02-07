import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "test-repo-ts-support",
    version: "0.1.0",
    framework: "Next.js 14",
    language: "TypeScript",
    description: "A Next.js TypeScript fullstack application for testing PR review workflows",
    endpoints: {
      health: "/api/health",
      info: "/api/info",
    },
  });
}
