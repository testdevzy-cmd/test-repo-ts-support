import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { numbers, operation } = body;

  let result;

  if (operation === "average") {
    const sum = numbers.reduce((acc: number, num: number) => acc + num, 0);
    result = sum / numbers.length;
  } else if (operation === "max") {
    result = Math.max(...numbers);
  } else if (operation === "min") {
    result = Math.min(...numbers);
  } else {
    result = numbers.reduce((acc: number, num: number) => acc + num, 0);
  }

  return NextResponse.json({
    operation,
    result,
    input: numbers,
  });
}
