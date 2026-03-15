import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
  description: "External links for Yusuke Osoegawa.",
  alternates: {
    canonical: "/links",
  },
};

const links = [
  { label: "X", href: "https://x.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Napier", href: "https://napier.finance/" },
];

export default function LinksPage() {
  return (
    <section className="stack-lg">
      <header className="stack-sm">
        <h1>Links</h1>
        <p className="muted">External profiles and related sites.</p>
      </header>

      <ul className="link-list" aria-label="External links">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
