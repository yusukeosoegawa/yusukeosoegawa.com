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
            Founder of Napier Labs. I design constraints and work on making DeFi a public good
          </p>
        </div>

        <p>
          I’m building DeFi infrastructure at Napier Labs. My broader interests include financial systems, coordination, and how constraints shape systems.
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
