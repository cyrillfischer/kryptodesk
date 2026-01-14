import { TrendingUp, Shield, PiggyBank, FileText } from 'lucide-react';
import { AffiliateCard } from './AffiliateCard';

export const AffiliateSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          Services & Tools
        </h2>
        <p className="text-gray-400 text-sm">
          Handverlesene Partner für deine Krypto-Journey – vom Trading über Sicherheit bis zur Steuer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        <AffiliateCard
          title="Bei Binance traden"
          description="Du möchtest einen der Coins kaufen? Über Binance kannst du viele der hier angezeigten Kryptowährungen handeln."
          buttonText="Zu Binance"
          link="https://bit.ly/binance_kryptodesk"
          icon={TrendingUp}
        />

        <AffiliateCard
          title="Coins sicher aufbewahren (Ledger)"
          description="Schütze deine Kryptowährungen mit einer Hardware-Wallet. Ledger bietet dir eine sichere Aufbewahrung außerhalb von Börsen."
          buttonText="Zu Ledger"
          link="https://bit.ly/ledger_kryptodesk"
          icon={Shield}
        />

        <AffiliateCard
          title="Bitcoin Sparplan mit Relai"
          description="Du möchtest regelmäßig in Bitcoin investieren? Mit Relai kannst du einen einfachen Sparplan einrichten – ganz ohne komplexe Trading-Oberflächen."
          buttonText="Zu Relai"
          link="https://relai.me/referral"
          icon={PiggyBank}
          code="REL313148"
        />

        <AffiliateCard
          title="Steuerreport mit Koinly"
          description="Behalte deine Krypto-Steuern im Griff. Mit Koinly kannst du Transaktionen importieren und automatisch einen Steuerreport erstellen – ideal für Deutschland, Österreich und die Schweiz."
          buttonText="Zu Koinly"
          link="https://bit.ly/koinly_kryptodesk"
          icon={FileText}
        />
      </div>
    </div>
  );
};
