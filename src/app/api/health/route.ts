import { NextResponse } from "next/server";
import { calculateAverage } from "@/utils/math";

export async function GET() {
  // Bug: Using utility with empty array - will cause division by zero
  const avg = calculateAverage([]);
  
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    average: avg,
  });
}

