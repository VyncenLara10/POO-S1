import { sql } from "@/lib/db";
import { Post } from "@/lib/value-objects/Post";
import { IPostRepository } from "./IPostRepository";

export class PostRepository implements IPostRepository {
  async save(post: Post): Promise<void> {
    await sql`
      INSERT INTO posts (title, description, author)
      VALUES (${post.title}, ${post.description}, ${post.author})
    `;
  }

  async findAll(): Promise<any[]> {
    const rows = await sql`
      SELECT id, title, description, author, created_at
      FROM posts
      ORDER BY id DESC
    `;
    return rows as any[];
  }

  async update(id: number, post: Post): Promise<void> {
    await sql`
      UPDATE posts
      SET title = ${post.title}, description = ${post.description}, author = ${post.author}
      WHERE id = ${id}
    `;
  }

  async remove(id: number): Promise<void> {
    await sql`DELETE FROM posts WHERE id = ${id}`;
  }
}
