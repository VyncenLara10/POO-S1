import { IPostRepository } from "@/lib/repositories/IPostRepository";
import { Post } from "@/lib/value-objects/Post";

export class PostService {
  constructor(private readonly repo: IPostRepository) {}

  async create(title: string, description: string, author: string) {
    const post = new Post(title, description, author);
    await this.repo.save(post);
    return post;
  }
}
