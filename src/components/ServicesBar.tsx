export function ServicesBar() {
  const items = [
    {
      label: "Trading",
      icon: "🟧",
      text: "Binance",
      url: "https://bit.ly/binance_kryptodesk"
    },
    {
      label: "Wallet",
      icon: "🟩",
      text: "Ledger",
      url: "https://bit.ly/ledger_kryptodesk"
    },
    {
      label: "Sparplan",
      icon: "🟪",
      text: "Relai",
      url: "https://relai.me/referral?code=REL313148"
    },
    {
      label: "Steuern",
      icon: "🟦",
      text: "Koinly",
      url: "https://bit.ly/koinly_kryptodesk"
    }
  ];

  return (
    <div className="w-full flex flex-wrap md:flex-nowrap gap-2 px-4 py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-3 py-2 text-xs rounded-md bg-white/10 hover:bg-white/20 transition border border-white/10"
        >
          <span className="text-lg">{item.icon}</span>
          <span className="text-white/90">{item.label}</span>
        </a>
      ))}
    </div>
  );
}

