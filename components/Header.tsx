import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/links", label: "Links" },
];

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="brand">
          Yusuke Osoegawa
        </Link>

        <div className="nav-links">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
