// src/components/PartnerTiles.tsx
import React from "react";

// Brand-Icons
import BinanceIcon from "../assets/icons/binance.svg";
import LedgerIcon from "../assets/icons/ledger.svg";
import RelaiIcon from "../assets/icons/relai.svg";
import KoinlyIcon from "../assets/icons/koinly.svg";

type Partner = {
  name: string;
  icon: string;
  url: string;
  code?: string; // z.B. Relai-Code
};

const partners: Partner[] = [
  {
    name: "Binance",
    icon: BinanceIcon,
    url: "https://accounts.binance.com/register?ref=445721617"
  },
  {
    name: "Ledger",
    icon: LedgerIcon,
    url: "https://shop.ledger.com/de/pages/referral-program?referral_code=VSG51E4JGB8FP"
  },
  {
    name: "Relai",
    icon: RelaiIcon,
    url: "https://relai.me/referral",
    code: "REL313148"
  },
  {
    name: "Koinly",
    icon: KoinlyIcon,
    url: "https://koinly.io/?via=0F06321F&utm_source=affiliate"
  }
];

export const PartnerTiles: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-8">
      <div className="flex items-center justify-start gap-3 overflow-x-auto pb-2 scrollbar-none sm:grid sm:grid-cols-4 sm:gap-4 sm:overflow-visible">
        {partners.map((p) => (
          <button
            key={p.name}
            onClick={() => window.open(p.url, "_blank")}
            className="flex items-center gap-3 bg-slate-800/70 hover:bg-slate-700 border border-white/5 rounded-xl px-4 py-3 transition-all duration-150 hover:scale-[1.03] cursor-pointer"
          >
            <img src={p.icon} alt={p.name} className="w-7 h-7 flex-shrink-0" />
            <div className="flex flex-col items-start">
              <span className="text-white text-sm font-medium">{p.name}</span>
              {p.code && (
                <span className="text-xs text-gray-400">
                  Code: <span className="font-mono">{p.code}</span>
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
