import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { title, description, author } = data || {};

  if (!title || !description || !author) {
    return NextResponse.json({ error: "Missing fields" });
  }

  if (typeof title !== "string" || title.length < 3) {
    return NextResponse.json({ error: "Invalid title" });
  }

  if (typeof description !== "string" || description.length < 10) {
    return NextResponse.json({ error: "Invalid description" });
  }

  if (typeof author !== "string" || author.length < 3) {
    return NextResponse.json({ error: "Invalid author" });
  }

  return NextResponse.json({
    message: "Data validated strictly",
    data: { title, description, author }
  });
}
