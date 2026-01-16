import React from "react";

const partners = [
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
    url: "https://relai.me/referral?code=REL313148",
  },
  {
    name: "Koinly",
    logo: "/assets/icons/koinly.svg",
    url: "https://koinly.io/?via=0F06321F&utm_source=affiliate",
  },
];

const PartnerTiles: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="flex flex-wrap justify-center gap-4">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 hover:bg-white/10 transition"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-8 h-8"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PartnerTiles;
