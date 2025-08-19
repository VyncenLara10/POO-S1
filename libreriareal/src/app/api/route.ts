import { NextResponse, NextRequest } from "next/server";
import { PostRepository } from "@/lib/repositories/PostRepository";
import { PostService } from "@/lib/services/PostService";

export async function POST(request: NextRequest) {
  try {
    const { title, description, author } = await request.json();

    const service = new PostService(new PostRepository());
    const post = await service.create(title, description, author);

    return NextResponse.json({
      message: "Post saved successfully",
      data: post,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? "Bad Request" }, { status: 422 });
  }
}
