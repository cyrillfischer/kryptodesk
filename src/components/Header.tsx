import BinanceIcon from "../assets/icons/binance.svg";
import LedgerIcon from "../assets/icons/ledger.svg";
import RelaiIcon from "../assets/icons/relai.svg";
import KoinlyIcon from "../assets/icons/koinly.svg";
import LogoWhite from "../assets/logo/KryptoDesk_Logo_white.svg";

export function Header() {
  return (
    <header className="w-full border-b border-white/5 bg-dark-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={LogoWhite}
            alt="KryptoDesk"
            className="h-8 sm:h-10 w-auto select-none"
            draggable={false}
          />
          <span className="text-xs text-green-400/80 font-medium tracking-wide">
            Beta
          </span>
        </div>

        {/* AFFILIATE QUICK LINKS */}
        <nav className="hidden sm:flex items-center gap-6">

          <a
            href="https://accounts.binance.com/register?ref=445721617"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <img src={BinanceIcon} alt="Binance" className="h-6 w-6" />
            <span className="text-sm text-gray-300">Trading</span>
          </a>

          <a
            href="https://shop.ledger.com/de/pages/referral-program?referral_code=VSG51E4JGB8FP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <img src={LedgerIcon} alt="Ledger" className="h-6 w-6" />
            <span className="text-sm text-gray-300">Wallet</span>
          </a>

          <a
            href="https://relai.me/referral/REL313148"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <img src={RelaiIcon} alt="Relai" className="h-6 w-6" />
            <span className="text-sm text-gray-300">Sparplan</span>
          </a>

          <a
            href="https://koinly.io/?via=0F06321F&utm_source=affiliate"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <img src={KoinlyIcon} alt="Koinly" className="h-6 w-6" />
            <span className="text-sm text-gray-300">Steuern</span>
          </a>

        </nav>
      </div>
    </header>
  );
}
