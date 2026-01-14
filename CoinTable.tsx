import { ExternalLink } from 'lucide-react';
import { CryptoCoin } from '../types/crypto';

interface CoinTableProps {
  coins: CryptoCoin[];
  onCoinClick: (coinId: string) => void;
}

export const CoinTable = ({ coins, onCoinClick }: CoinTableProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: price < 1 ? 6 : 2,
    }).format(price);
  };

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) {
      return `${(marketCap / 1e12).toFixed(2)} B $`;
    } else if (marketCap >= 1e9) {
      return `${(marketCap / 1e9).toFixed(2)} Mrd. $`;
    } else if (marketCap >= 1e6) {
      return `${(marketCap / 1e6).toFixed(2)} Mio. $`;
    }
    return `${marketCap.toFixed(0)} $`;
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1e9) {
      return `${(volume / 1e9).toFixed(2)} Mrd. $`;
    } else if (volume >= 1e6) {
      return `${(volume / 1e6).toFixed(2)} Mio. $`;
    }
    return `${volume.toFixed(0)} $`;
  };

  return (
    <div className="hidden lg:block overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/5">
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Rang
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Coin
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
              Preis
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
              24h Änderung
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
              Marktkapitalisierung
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
              24h Volumen
            </th>
            <th className="px-4 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">
              Aktion
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {coins.map((coin) => (
            <tr
              key={coin.id}
              className="hover:bg-white/5 transition-colors cursor-pointer"
              onClick={() => onCoinClick(coin.id)}
            >
              <td className="px-4 py-4 text-sm text-gray-400">
                {coin.market_cap_rank}
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="text-white font-medium">{coin.name}</div>
                    <div className="text-gray-500 text-sm uppercase">
                      {coin.symbol}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-right text-white font-medium">
                {formatPrice(coin.current_price)}
              </td>
              <td className="px-4 py-4 text-right font-medium">
                <span
                  className={
                    coin.price_change_percentage_24h >= 0
                      ? 'text-emerald-400'
                      : 'text-rose-400'
                  }
                >
                  {coin.price_change_percentage_24h >= 0 ? '+' : ''}
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </td>
              <td className="px-4 py-4 text-right text-gray-300">
                {formatMarketCap(coin.market_cap)}
              </td>
              <td className="px-4 py-4 text-right text-gray-300">
                {formatVolume(coin.total_volume)}
              </td>
              <td className="px-4 py-4 text-center">
                <a
                  href="https://bit.ly/binance_kryptodesk"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 rounded-lg text-sm font-medium transition-colors border border-teal-500/30"
                >
                  Bei Binance kaufen
                  <ExternalLink className="w-3 h-3" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
