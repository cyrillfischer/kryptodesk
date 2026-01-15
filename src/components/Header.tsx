import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#0B1220] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Brand Logo - Typo */}
        <div className="flex items-center select-none">
          <span className="text-[28px] sm:text-[32px] font-bold tracking-tight text-white">
            Krypto
          </span>
          <span
            className="text-[28px] sm:text-[32px] font-bold tracking-tight"
            style={{ color: "#27D3B8" }}
          >
            Desk
          </span>
        </div>

        {/* Beta Badge*/}
        <div className="px-2 py-1 rounded-md bg-white/10 text-white/70 text-xs uppercase">
          Beta
        </div>
      </div>
    </header>
  );
};
