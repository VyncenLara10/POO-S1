import { Post } from "@/lib/value-objects/Post";

export interface IPostRepository {
  save(post: Post): Promise<void>;
}
