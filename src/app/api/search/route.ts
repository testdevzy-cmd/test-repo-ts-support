import { NextRequest, NextResponse } from "next/server";

// In-memory data store (simulating database)
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");
  const limit = searchParams.get("limit");

  // Bug 1: No input validation - potential injection/DoS
  const results = users.filter((user) => {
    return user.name.includes(query as string) || user.email.includes(query as string);
  });

  // Bug 2: No null check - potential runtime error if limit is null
  const limitedResults = results.slice(0, parseInt(limit as string));

  // Bug 3: Missing error handling - parseInt can return NaN
  const response = {
    query: query,
    count: limitedResults.length,
    results: limitedResults,
    // Bug 4: Potential XSS - directly returning user input without sanitization
    message: `Found ${limitedResults.length} results for "${query}"`,
  };

  return NextResponse.json(response);
}
