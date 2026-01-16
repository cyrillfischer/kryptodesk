import binanceIcon from "../assets/icons/binance.svg";
import ledgerIcon from "../assets/icons/ledger.svg";
import relaiIcon from "../assets/icons/relai.svg";
import koinlyIcon from "../assets/icons/koinly.svg";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-[#050b1a]">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            KryptoDesk
            <span className="text-teal-400 text-xs font-medium ml-1">Beta</span>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-4 gap-4">
          <ActionButton
            icon={binanceIcon}
            label="Trading"
            href="https://accounts.binance.com/register?ref=445721617"
          />

          <ActionButton
            icon={ledgerIcon}
            label="Wallet"
            href="https://shop.ledger.com/de/pages/referral-program?referral_code=VSG51E4JGB8FP"
          />

          <ActionButton
            icon={relaiIcon}
            label="Sparplan"
            href="https://relai.me/referral"
          />

          <ActionButton
            icon={koinlyIcon}
            label="Steuern"
            href="https://koinly.io/?via=0F06321F&utm_source=affiliate"
          />
        </div>

      </div>
    </header>
  );
}

function ActionButton({
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
      className="
        flex flex-col items-center justify-center
        gap-2
        rounded-2xl
        bg-white
        text-black
        hover:bg-gray-100
        transition
        px-4 py-5
      "
    >
      <img src={icon} alt={label} className="h-6 w-6" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}
