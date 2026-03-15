import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yusukeosoegawa.com"),
  title: {
    default: "Yusuke Osoegawa",
    template: "%s | Yusuke Osoegawa",
  },
  description:
    "Founder of Napier Labs. I design constraints and work on making DeFi a public good.",
  openGraph: {
    title: "Yusuke Osoegawa",
    description:
      "Founder of Napier Labs. I design constraints and work on making DeFi a public good",
    url: "https://yusukeosoegawa.com",
    siteName: "Yusuke Osoegawa",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={serif.className}>
      <body>
        <div className="site-shell">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
