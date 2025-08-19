export class Post {
  readonly title: string;
  readonly description: string;
  readonly author: string;

  constructor(title: string, description: string, author: string) {
    const t = typeof title === "string" ? title.trim() : "";
    const d = typeof description === "string" ? description.trim() : "";
    const a = typeof author === "string" ? author.trim() : "";

    if (!t || !d || !a) throw new Error("Missing fields");
    if (t.length < 3) throw new Error("Invalid title");
    if (d.length < 10) throw new Error("Invalid description");
    if (a.length < 3) throw new Error("Invalid author");

    this.title = t;
    this.description = d;
    this.author = a;
  }
}
