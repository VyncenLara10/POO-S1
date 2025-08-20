import { NextRequest, NextResponse } from "next/server";
import { PostRepository } from "@/lib/repositories/PostRepository";
import { PostService } from "@/lib/services/PostService";

const service = new PostService(new PostRepository());

export async function PUT(request: NextRequest, context: { params: { id: string } }) {
  try {
    const idStr = context.params.id;           
    const idNum = Number(idStr);
    if (!Number.isInteger(idNum) || idNum <= 0) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const { title, description, author } = await request.json();
    await service.update(idNum, title, description, author);

    return NextResponse.json({ message: "Post updated" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? "Bad Request" }, { status: 422 });
  }
}

export async function DELETE(_request: NextRequest, context: { params: { id: string } }) {
  try {
    const idStr = context.params.id;           
    const idNum = Number(idStr);
    if (!Number.isInteger(idNum) || idNum <= 0) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    await service.remove(idNum);
    return NextResponse.json({ message: "Post deleted" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? "Bad Request" }, { status: 422 });
  }
}