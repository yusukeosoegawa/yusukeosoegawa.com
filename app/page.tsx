import type { Metadata } from "next";
import Link from "next/link";
import { PostList } from "@/components/PostList";
import { getRecentPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Yusuke Osoegawa's personal website. Writing about DeFi, systems, and product design.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const posts = getRecentPosts(5);

  return (
    <>
      <section className="stack-lg">
        <div className="stack-sm">
          <h1>Yusuke Osoegawa</h1>
          <p className="lede">
            Founder of Napier Labs. I write about DeFi, systems, and product
            design.
          </p>
        </div>

        <p>
          I’m building infrastructure for yield markets at Napier. My interests
          include DeFi market structure, product systems, and the design of
          constraints.
        </p>

        <nav aria-label="Primary page links" className="inline-links">
          <Link href="/about">About</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/links">Links</Link>
        </nav>
      </section>

      <section className="stack-md section-divider">
        <div className="section-heading">
          <h2>Recent writing</h2>
          <Link href="/writing">View all writing</Link>
        </div>
        <PostList posts={posts} />
      </section>
    </>
  );
}
