import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
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
    "Founder of Napier Labs. I write about DeFi, systems, and product design.",
  openGraph: {
    title: "Yusuke Osoegawa",
    description:
      "Founder of Napier Labs. I write about DeFi, systems, and product design.",
    url: "https://yusukeosoegawa.com",
    siteName: "Yusuke Osoegawa",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
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
