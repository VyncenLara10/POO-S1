import { NextResponse, NextRequest } from "next/server";
import { PostRepository } from "@/lib/repositories/PostRepository";
import { PostService } from "@/lib/services/PostService";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { title, description, author } = data || {};

  if (!title || !description || !author) {
    return NextResponse.json({ error: "Missing fields" }, { status: 422 });
  }
  if (typeof title !== "string" || title.length < 3) {
    return NextResponse.json({ error: "Invalid title" }, { status: 422 });
  }
  if (typeof description !== "string" || description.length < 10) {
    return NextResponse.json({ error: "Invalid description" }, { status: 422 });
  }
  if (typeof author !== "string" || author.length < 3) {
    return NextResponse.json({ error: "Invalid author" }, { status: 422 });
  }

  const service = new PostService(new PostRepository());
  const saved = await service.create(title, description, author);

  return NextResponse.json({
    message: "Post saved successfully",
    data: saved,
  });
}
