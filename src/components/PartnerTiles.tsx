import React from "react";

type Partner = {
  name: string;
  logo: string;
  url: string;
};

const partners: Partner[] = [
  {
    name: "Binance",
    logo: "/brands/binance.svg",
    url: "https://accounts.binance.com/de/register?ref=DEINE_REF",
  },
  {
    name: "Ledger",
    logo: "/brands/ledger.svg",
    url: "https://shop.ledger.com/",
  },
  {
    name: "Relai",
    logo: "/brands/relai.svg",
    url: "https://relai.app/?ref=DEINE_REF",
  },
  {
    name: "Koinly",
    logo: "/brands/koinly.svg",
    url: "https://koinly.io/",
  },
];

export const PartnerTiles: React.FC = () => {
  return (
    <div className="w-full bg-[#0B1220] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 transition-all px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-white/10"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-5 sm:h-6 w-auto opacity-90"
              />
              <span className="text-[13px] sm:text-[14px] text-white/90 font-medium">
                {p.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
