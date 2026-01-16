import binanceIcon from "@/assets/icons/binance.svg";
import ledgerIcon from "@/assets/icons/ledger.svg";
import relaiIcon from "@/assets/icons/relai.svg";
import koinlyIcon from "@/assets/icons/koinly.svg";

export default function Header() {
  return (
    <header className="w-full bg-[#050b1a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            KryptoDesk
            <span className="text-teal-400 text-xs font-medium">Beta</span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-white/80">
            <span>Trading</span>
            <span>Wallet</span>
            <span>Sparplan</span>
            <span>Steuern</span>
          </nav>
        </div>

        {/* PROVIDER ICONS */}
        <div className="grid grid-cols-4 gap-4">
          <ProviderCard
            icon={binanceIcon}
            label="Binance"
            href="https://www.binance.com"
          />

          <ProviderCard
            icon={ledgerIcon}
            label="Ledger"
            href="https://www.ledger.com"
          />

          <ProviderCard
            icon={relaiIcon}
            label="Relai"
            href="https://relai.me/referral/REL313148"
          />

          <ProviderCard
            icon={koinlyIcon}
            label="Koinly"
            href="https://koinly.io"
          />
        </div>

      </div>
    </header>
  );
}

function ProviderCard({
  icon,
  label,
  href,
}: {
  icon: string;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition rounded-xl px-4 py-3"
    >
      <img src={icon} alt={label} className="h-6 w-6" />
      <span className="text-white text-sm">{label}</span>
    </a>
  );
}
