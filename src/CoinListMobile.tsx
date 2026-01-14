import { ExternalLink } from 'lucide-react';
import { CryptoCoin } from '../types/crypto';

interface CoinListMobileProps {
  coins: CryptoCoin[];
  onCoinClick: (coinId: string) => void;
}

export const CoinListMobile = ({ coins, onCoinClick }: CoinListMobileProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: price < 1 ? 6 : 2,
    }).format(price);
  };

  return (
    <div className="lg:hidden space-y-3">
      {coins.map((coin) => (
        <div
          key={coin.id}
          onClick={() => onCoinClick(coin.id)}
          className="bg-slate-900/60 border border-white/5 rounded-xl p-4 shadow-lg cursor-pointer hover:border-teal-500/30 transition-all"
        >
          <div className="flex items-start gap-3 mb-3">
            <img
              src={coin.image}
              alt={coin.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-white font-semibold text-lg truncate">
                  {coin.name}
                </h3>
                <span className="text-gray-500 text-sm uppercase whitespace-nowrap">
                  {coin.symbol}
                </span>
              </div>
              <div className="text-gray-400 text-sm">
                Rang #{coin.market_cap_rank}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-gray-400 text-xs mb-1">Aktueller Preis</div>
              <div className="text-white font-bold text-xl">
                {formatPrice(coin.current_price)}
              </div>
            </div>
            <div className="text-right">
              <div className="text-gray-400 text-xs mb-1">24h Änderung</div>
              <div
                className={`font-bold text-lg ${
                  coin.price_change_percentage_24h >= 0
                    ? 'text-emerald-400'
                    : 'text-rose-400'
                }`}
              >
                {coin.price_change_percentage_24h >= 0 ? '+' : ''}
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            </div>
          </div>

          <a
            href="https://bit.ly/binance_kryptodesk"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 rounded-lg text-sm font-medium transition-colors border border-teal-500/30"
          >
            Bei Binance kaufen
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      ))}
    </div>
  );
};
