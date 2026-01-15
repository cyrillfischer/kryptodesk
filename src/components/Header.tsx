import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#0B1220] border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* Brand */}
        <div className="text-2xl sm:text-[30px] font-bold tracking-tight flex items-center">
          <span className="text-white">Krypto</span>
          <span style={{ color: "#27D3B8" }}>Desk</span>
        </div>

        {/* Beta */}
        <span className="px-2 py-1 text-xs rounded-md bg-white/10 text-white/80">
          Beta
        </span>
      </div>
    </header>
  );
};
