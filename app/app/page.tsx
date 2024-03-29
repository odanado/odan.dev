import type { NextPage } from "next";

import Header from "../components/Header";
import AccountList from "../components/AccountList";
import Icon from "../components/Icon";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />

      <main className="bg-gray-100 flex-grow">
        <div className="md:container md:mx-auto px-4 w-full h-full flex items-center justify-center flex-col">
          <Icon />
          <section className="w-full max-w-2xl border-solid border-2 border-blue-500 rounded p-4 mt-6">
            <h2 className="font-bold text-2xl">About me</h2>
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
