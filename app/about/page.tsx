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
        <p>I’m Yusuke Osoegawa, founder of Napier Labs.</p>

        <p>
          I work on DeFi infrastructure, especially systems related to yield
          markets, market structure, and product design.
        </p>

        <p>
          My broader interests include financial systems, coordination,
          organizational design, and how software changes the way people build
          and think.
        </p>

        <p>
          This site is a place to publish writing and collect ideas over time.
        </p>
      </Prose>
    </article>
  );
}
