import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { numbers, operation } = body ?? {};

  if (!Array.isArray(numbers)) {
    return NextResponse.json({ error: "`numbers` must be an array" }, { status: 400 });
  }
  if (numbers.length === 0) {
    return NextResponse.json({ error: "`numbers` must not be empty" }, { status: 400 });
  }
  if (!numbers.every((n) => typeof n === "number" && Number.isFinite(n))) {
    return NextResponse.json(
      { error: "`numbers` must contain only finite numbers" },
      { status: 400 }
    );
  }

  const validOperations = ["average", "max", "min", "sum"];
  const op = operation || "sum";

  if (!validOperations.includes(op)) {
    return NextResponse.json(
      { error: `Invalid operation. Must be one of: ${validOperations.join(", ")}` },
      { status: 400 }
    );
  }

  let result;

  if (op === "average") {
    const sum = numbers.reduce((acc: number, num: number) => acc + num, 0);
    result = sum / numbers.length;
  } else if (op === "max") {
    result = Math.max(...numbers);
  } else if (op === "min") {
    result = Math.min(...numbers);
  } else {
    result = numbers.reduce((acc: number, num: number) => acc + num, 0);
  }

  return NextResponse.json({
    operation: op,
    result,
    input: numbers,
  });
}
