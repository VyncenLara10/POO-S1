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
}
