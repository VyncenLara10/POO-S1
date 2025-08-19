import { PostRepository } from "@/lib/repositories/PostRepository";

export class PostService {
  constructor(private readonly repo: PostRepository) {}

  async create(title: string, description: string, author: string) {
    await this.repo.save(title, description, author);
    return { title, description, author };
  }
}
