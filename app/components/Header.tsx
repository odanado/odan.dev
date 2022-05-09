import { FC } from "react";
import Link from "next/link";

const Header: FC = () => (
  <header className="h-16 bg-blue-600  flex items-center justify-items-center w-full">
    <div className="text-slate-200 font-bold w-full text-center">
      <Link href="/">
        <a>odan.dev</a>
      </Link>
    </div>
  </header>
);

export default Header;
