import { sql } from "@/lib/db";

export class PostRepository {
  async save(title: string, description: string, author: string): Promise<void> {
    await sql`
      INSERT INTO "Posts" (title, description, author)
      VALUES (${title}, ${description}, ${author})
    `;
  }
}
