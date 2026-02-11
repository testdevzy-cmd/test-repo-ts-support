import { NextRequest, NextResponse } from "next/server";

const users: Array<{ id: number; name: string; email: string; password: string }> = [
  { id: 1, name: "John Doe", email: "john@example.com", password: "secret123" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", password: "password456" },
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search");
  const limit = searchParams.get("limit");

  let results = users;

  if (search) {
    results = users.filter((user) => {
      return user.name.includes(search) || user.email.includes(search);
    });
  }

  if (limit) {
    results = results.slice(0, parseInt(limit));
  }

  return NextResponse.json({
    count: results.length,
    users: results,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, password } = body;

  const newUser = {
    id: users.length + 1,
    name: name,
    email: email,
    password: password,
  };

  users.push(newUser);

  return NextResponse.json({
    success: true,
    user: newUser,
  });
}
