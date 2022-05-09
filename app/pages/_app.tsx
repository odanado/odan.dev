import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="odan.dev"
        description="ソフトウェアエンジニアです。"
        openGraph={{
          url: "https://odan.dev",
          images: [{ url: "https://odan.dev/icon.jpeg" }],
        }}
        twitter={{ handle: "@odan3240" }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
