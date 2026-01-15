import React from "react";
import Logo from "../assets/logo/KryptoDesk_Logo_white.svg";

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#0B1220] border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="KryptoDesk Logo"
            className="h-9 w-auto sm:h-10 md:h-11"
          />
        </div>

        {/* Beta */}
        <div className="hidden sm:block">
          <span className="px-2 py-1 text-xs rounded-md bg-white/10 text-white/80">
            Beta
          </span>
        </div>

      </div>
    </header>
  );
};
