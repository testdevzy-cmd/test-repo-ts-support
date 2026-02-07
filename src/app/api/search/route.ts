import { NextRequest, NextResponse } from "next/server";

// In-memory data store (simulating database)
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

/**
 * Search endpoint for querying users
 * @param request - NextRequest with query parameters
 * @param request.query.q - Search query string
 * @param request.query.limit - Maximum number of results to return
 * @returns JSON response with search results
 */
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
