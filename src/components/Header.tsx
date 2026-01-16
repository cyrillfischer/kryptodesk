export default function Header() {
  return (
    <header className="w-full border-b border-white/5 bg-[#050b1a]">
      <div className="max-w-7xl mx-auto px-6 py-6">

        {/* LOGO */}
        <div className="flex items-center gap-2 text-white font-semibold text-lg mb-6">
          KryptoDesk
          <span className="text-teal-400 text-xs font-medium">Beta</span>
        </div>

        {/* CTA CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <CTACard
            title="Trading"
            description="Krypto kaufen & verkaufen"
            target="Binance"
            href="https://accounts.binance.com/register?ref=445721617"
            icon={
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M14 7h7v7" />
              </svg>
            }
          />

          <CTACard
            title="Wallet"
            description="Coins sicher aufbewahren"
            target="Ledger"
            href="https://shop.ledger.com/de/pages/referral-program?referral_code=VSG51E4JGB8FP"
            icon={
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M16 12h2" />
              </svg>
            }
          />

          <CTACard
            title="Sparplan"
            description="Regelmässig investieren"
            target="Relai"
            href="https://relai.me/referral"
            icon={
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
            }
          />

          <CTACard
            title="Steuern"
            description="Krypto korrekt versteuern"
            target="Koinly"
            href="https://koinly.io/?via=0F06321F&utm_source=affiliate"
            icon={
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v18" />
                <path d="M17 8c0-2-2-3-5-3s-5 1-5 3 2 3 5 3 5 1 5 3-2 3-5 3-5-1-5-3" />
              </svg>
            }
          />

        </div>
      </div>
    </header>
  );
}

function CTACard({
  title,
  description,
  target,
  href,
  icon,
}: {
  title: string;
  description: string;
  target: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        rounded-2xl
        bg-[#0f1629]
        border border-white/5
        p-5
        transition
        hover:border-[#27d3b8]
        hover:bg-[#0f1f1c]
      "
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-black/30 text-white group-hover:text-[#27d3b8] transition">
        {icon}
      </div>

      <div className="text-white font-medium mb-1">{title}</div>
      <div className="text-sm text-white/60 mb-3">{description}</div>
      <div className="text-sm font-medium text-[#27d3b8]">→ {target}</div>
    </a>
  );
}
