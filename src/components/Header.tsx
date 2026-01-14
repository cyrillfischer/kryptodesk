import { FiCpu } from "react-icons/fi";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full px-6 h-16 border-b border-white/10">
      <div className="flex items-center gap-2 font-semibold text-lg">
        <FiCpu className="text-teal-300" />
        KryptoDesk <span className="text-xs text-white/40 ml-2">Beta</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
        <button className="hover:text-white transition">Coins</button>
      </nav>
    </header>
  );
}
