import {
  ArrowTrendingUpIcon,
  WalletIcon,
  CalendarDaysIcon,
  PercentBadgeIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="w-full border-b border-white/5 bg-[#050b1a]">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            KryptoDesk
            <span className="text-teal-400 text-xs font-medium ml-1">Beta</span>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-4 gap-3">
          <ActionButton
            icon={ArrowTrendingUpIcon}
            label="Trading"
            href="https://accounts.binance.com/register?ref=445721617"
          />
          <ActionButton
            icon={WalletIcon}
            label="Wallet"
            href="https://shop.ledger.com/de/pages/referral-program?referral_code=VSG51E4JGB8FP"
          />
          <ActionButton
            icon={CalendarDaysIcon}
            label="Sparplan"
            href="https://relai.me/referral"
          />
          <ActionButton
            icon={PercentBadgeIcon}
            label="Steuern"
            href="https://koinly.io/?via=0F06321F&utm_source=affiliate"
          />
        </div>

      </div>
    </header>
  );
}

function ActionButton({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex items-center justify-center gap-3
        rounded-xl
        bg-[#0f1629]
        border border-white/5
        px-4 py-2.5
        text-sm font-medium text-white/80
        transition
        hover:bg-[#27d3b8]
        hover:text-[#050b1a]
      "
    >
      <Icon className="h-5 w-5 stroke-current" />
      <span>{label}</span>
    </a>
  );
}
