import React from "react";

type Partner = {
  name: string;
  logo: string;
  url: string;
};

const partners: Partner[] = [
  {
    name: "Binance",
    logo: "/assets/icons/binance.svg",
    url: "https://accounts.binance.com/register?ref=445721617",
  },
  {
    name: "Ledger",
    logo: "/assets/icons/ledger.svg",
    url: "https://shop.ledger.com/de/pages/referral-program?referral_code=VSG51E4JGB8FP",
  },
  {
    name: "Relai",
    logo: "/assets/icons/relai.svg",
    url: "https://relai.me/referral/REL313148",
  },
  {
    name: "Koinly",
    logo: "/assets/icons/koinly.svg",
    url: "https://koinly.io/?via=0F06321F&utm_source=affiliate",
  },
];

export default function PartnerTiles() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {partners.map((partner) => (
        <a
          key={partner.name}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-dark-800 hover:bg-dark-700 transition rounded-xl p-6"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="h-10 w-10 object-contain"
          />
        </a>
      ))}
    </div>
  );
}
