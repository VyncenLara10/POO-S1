import { NextResponse, NextRequest } from "next/server";
import { PostService } from "@/lib/services/PostService";

const postService = new PostService();

export async function POST(request: NextRequest) {
  const { title, description, author } = await request.json();
  if (!title || !description || !author) {
    return NextResponse.json({ error: "Missing fields" }, { status: 422 });
  }

  await postService.save(title, description, author);

  return NextResponse.json({
    message: "Post saved successfully",
    data: { title, description, author },
  });
}

export async function GET() {
  const posts = await postService.getAll();
  return NextResponse.json(posts);
}
