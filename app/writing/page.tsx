import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles by Yusuke Osoegawa.",
  alternates: {
    canonical: "/writing",
  },
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <section className="stack-lg">
      <header className="stack-sm">
        <h1>Writing</h1>
        <p className="muted">Notes and essays, listed in reverse chronological order.</p>
      </header>

      <PostList posts={posts} />
    </section>
  );
}
