import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import AccountList from "../components/AccountList";
import { imageLoader } from "../utils/image-loader";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="bg-gray-100 h-screen w-screen">
        <div className="md:container md:mx-auto px-4 w-full h-full flex items-center justify-center flex-col">
          <Image
            loader={imageLoader}
            src="/icon.jpeg"
            width={128}
            height={128}
            alt="My icon"
            className="rounded-full"
          />
          <section className="w-full max-w-2xl border-solid border-2 border-blue-500 rounded p-4 mt-6">
            <h2 className="font-bold text-2xl">Abount me</h2>
            <p className="pt-2">
              ソフトウェアエンジニアです。
              <br />
              Web 技術やブロックチェーンに興味があります。
            </p>
            <AccountList className="py-4" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
