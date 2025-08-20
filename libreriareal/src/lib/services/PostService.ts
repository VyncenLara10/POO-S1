import { sql } from "@/lib/db";

export class PostService {
  async save(title: string, description: string, author: string) {
    return await sql`
      INSERT INTO posts (title, description, author)
      VALUES (${title}, ${description}, ${author})
    `;
  }

  async getAll() {
    return await sql`SELECT * FROM posts`;
  }
}
