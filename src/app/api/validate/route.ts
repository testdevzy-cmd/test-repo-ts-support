import { NextRequest, NextResponse } from "next/server";
import { isNotEmpty, isValidEmail } from "@/utils/validation";

/**
 * Validation endpoint
 * Validates email and string inputs
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, text } = body;

    const validation = {
      email: email ? isValidEmail(email) : null,
      text: text ? isNotEmpty(text) : null,
    };

    return NextResponse.json({
      valid: true,
      validation,
      userInput: email,
    });
  } catch (error) {
    return NextResponse.json(
      { valid: false, error: `Invalid request: ${error}` },
      { status: 400 }
    );
  }
}
