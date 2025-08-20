import { NextResponse, NextRequest } from "next/server";
import { PostRepository } from "@/lib/repositories/PostRepository";
import { PostService } from "@/lib/services/PostService";

const service = new PostService(new PostRepository());

export async function GET() {
  const posts = await service.list();
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  try {
    const { title, description, author } = await request.json();
    const post = await service.create(title, description, author);
    return NextResponse.json({ message: "Post created", data: post });
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? "Bad Request" }, { status: 422 });
  }
}
