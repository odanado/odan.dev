import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "odan.dev",
  description: "ソフトウェアエンジニアです。",
  openGraph: {
    url: "https://odan.dev",
    images: [{ url: "https://odan.dev/icon.jpeg" }],
  },
  twitter: { creator: "@odan3240" },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
