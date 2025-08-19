import { NextResponse, NextRequest } from "next/server";
import { sql } from "@/lib/db";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { title, description, author } = data || {};

  if (!title || !description || !author) {
    return NextResponse.json({ error: "Missing fields" }, { status: 422 });
  }

  await sql
  `INSERT INTO "Posts" (title, description, author)
    VALUES (${title}, ${description}, ${author})`;

  return NextResponse.json({
    message: "Post saved successfully",
    data: { title, description, author }
  });
}
