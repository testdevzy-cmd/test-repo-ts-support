import { NextRequest, NextResponse } from "next/server";
import { isNotEmpty, isValidEmail } from "@/utils/validation";

export async function GET() {
  return NextResponse.json({
    supportedValidations: ["email", "text"],
    methods: ["POST"],
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { valid: false, error: "Invalid request body" },
        { status: 400 }
      );
    }

    const { email, text } = body;

    const validation = {
      email: email ? isValidEmail(email) : null,
      text: text ? isNotEmpty(text) : null,
    };

    const allValid = Object.values(validation).every(
      (result) => result === null || result === true
    );

    return NextResponse.json({
      valid: allValid,
      validation,
    });
  } catch (error) {
    return NextResponse.json(
      { valid: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
}
