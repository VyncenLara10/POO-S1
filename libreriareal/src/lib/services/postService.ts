import { sql } from "@/lib/db";

export async function savePost(title: string, description: string, author: string) {
  await sql`
    INSERT INTO posts (title, description, author)
    VALUES (${title}, ${description}, ${author})
  `;
}
