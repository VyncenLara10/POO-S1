import { Post } from "@/lib/value-objects/Post";

export interface IPostRepository {
  save(post: Post): Promise<void>;
  findAll(): Promise<any[]>;
  update(id: number, post: Post): Promise<void>;
  remove(id: number): Promise<void>;
}
