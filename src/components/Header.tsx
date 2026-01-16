import {
  ArrowTrendingUpIcon,
  WalletIcon,
  CalendarDaysIcon,
  PercentBadgeIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
<div className="bg-red-600 text-white text-center p-2">
  CTA HEADER DEBUG
</div>
    <header className="w-full border-b border-white/5 bg-[#050b1a]">
      <div className="max-w-7xl mx-auto px-6 py-6">

        {/* TOP BAR */}
        <div className="flex items-center gap-2 text-white font-semibold text-lg mb-6">
          KryptoDesk
          <span className="text-teal-400 text-xs font-medium">Beta</span>
        </div>

        {/* CTA CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <CTACard
            icon={ArrowTrendingUpIcon}
            title="Trading"
            description="Krypto kaufen & verkaufen"
            target="Binance"
            href="https://accounts.binance.com/register?ref=445721617"
          />

          <CTACard
            icon={WalletIcon}
            title="Wallet"
            description="Coins sicher verwahren"
            target="Ledger"
            href="https://shop.ledger.com/de/pages/referral-program?referral_code=VSG51E4JGB8FP"
          />

          <CTACard
            icon={CalendarDaysIcon}
            title="Sparplan"
            description="Regelmässig investieren"
            target="Relai"
            href="https://relai.me/referral"
          />

          <CTACard
            icon={PercentBadgeIcon}
            title="Steuern"
            description="Krypto korrekt versteuern"
            target="Koinly"
            href="https://koinly.io/?via=0F06321F&utm_source=affiliate"
          />
        </div>

      </div>
    </header>
  );
}

function CTACard({
  icon: Icon,
  title,
  description,
  target,
  href,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  target: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        rounded-2xl
        bg-[#0f1629]
        border border-white/5
        p-5
        transition
        hover:border-[#27d3b8]
        hover:bg-[#0f1f1c]
      "
    >
      {/* ICON */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-black/30">
        <Icon className="h-5 w-5 text-white group-hover:text-[#27d3b8] transition" />
      </div>

      {/* TEXT */}
      <div className="text-white font-medium mb-1">{title}</div>
      <div className="text-sm text-white/60 mb-3">{description}</div>

      {/* CTA */}
      <div className="text-sm text-[#27d3b8] font-medium">
        → {target}
      </div>
    </a>
  );
}
