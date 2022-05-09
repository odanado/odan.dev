import { FC } from "react";

export type Props = {
  className: string;
};

const AccountList: FC<Props> = ({ className }) => {
  const accounts = [
    {
      service: "GitHub",
      url: "https://github.com/odanado",
    },
    {
      service: "Twitter",
      url: "https://twitter.com/odan3240",
    },
    {
      service: "Zenn",
      url: "https://zenn.dev/odan",
    },
    {
      service: "SpeakerDeck",
      url: "https://speakerdeck.com/odanado",
    },
    {
      service: "はてなブログ",
      url: "https://odan3240.hatenablog.com/",
    },
    {
      service: "Qiita",
      url: "https://qiita.com/odanado",
    },
  ];

  return (
    <ul className={`${className} list-disc pl-8`}>
      {accounts.map((account) => (
        <li key={account.service}>
          <a
            className="underline"
            href={account.url}
            target="_blank"
            rel="noreferrer"
          >
            {account.service}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default AccountList;
