import type { Metadata } from "next";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "About",
  description: "About Yusuke Osoegawa.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <article className="stack-lg">
      <header className="stack-sm">
        <h1>About</h1>
      </header>

      <Prose>
        <p>I’m Yusuke Osoegawa, founder and CEO of Napier Labs.</p>

        <p>
          I design constraints and work on making DeFi a public good.
        </p>

        <p>
          My broader interests include financial systems, coordination, and how constraints shape systems.
        </p>

        <p>
          This site is a place to publish writing and collect ideas.
        </p>
      </Prose>
    </article>
  );
}
