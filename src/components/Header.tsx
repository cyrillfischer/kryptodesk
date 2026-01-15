// src/components/Header.tsx

import { useState } from 'react';
import Logo from '../assets/logo/KryptoDesk_Logo_complete_white.svg';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-dark-800 border-b border-white/5 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="KryptoDesk Logo"
            className="h-7 w-auto cursor-pointer"
            onClick={() => (window.location.href = '/')}
          />
        </div>

        {/* Beta Badge */}
        <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-md">
          Beta
        </span>
      </div>
    </header>
  );
}
