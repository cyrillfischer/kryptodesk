import { useEffect } from 'react';
import { X, ExternalLink, TrendingUp, TrendingDown } from 'lucide-react';
import { useCoinDetail } from '../hooks/useCoinDetail';
import { LoadingSpinner } from './LoadingSpinner';
import { CoinChart } from './CoinChart';

interface CoinDetailModalProps {
  coinId: string | null;
  onClose: () => void;
}

export const CoinDetailModal = ({ coinId, onClose }: CoinDetailModalProps) => {
  const { coinDetail, loading, error } = useCoinDetail(coinId);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (coinId) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [coinId, onClose]);

  if (!coinId) return null;

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

  const formatSupply = (supply: number) => {
    if (supply >= 1e9) {
      return `${(supply / 1e9).toFixed(2)} Mrd.`;
    } else if (supply >= 1e6) {
      return `${(supply / 1e6).toFixed(2)} Mio.`;
    }
    return supply.toLocaleString('de-DE');
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getDescription = () => {
    if (!coinDetail?.description) return '';
    const desc = coinDetail.description.de || coinDetail.description.en || '';
    return stripHtml(desc);
  };

  const isBitcoin = coinDetail?.id === 'bitcoin';
  const isTop10 = coinDetail && coinDetail.market_cap_rank <= 10;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-400 hover:text-white" />
        </button>

        {loading && (
          <div className="p-12">
            <LoadingSpinner />
          </div>
        )}

        {error && (
          <div className="p-12">
            <p className="text-rose-400 text-center">{error}</p>
          </div>
        )}

        {!loading && !error && coinDetail && (
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-6">
              <img
                src={coinDetail.image.large}
                alt={coinDetail.name}
                className="w-16 h-16 rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {coinDetail.name}
                </h2>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 uppercase text-sm">
                    {coinDetail.symbol}
                  </span>
                  <span className="px-2 py-1 bg-slate-800 text-gray-400 text-xs rounded">
                    Rang #{coinDetail.market_cap_rank}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {formatPrice(coinDetail.market_data.current_price.usd)}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {coinDetail.market_data.price_change_percentage_24h >= 0 ? (
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-rose-400" />
                  )}
                  <span
                    className={`font-semibold ${
                      coinDetail.market_data.price_change_percentage_24h >= 0
                        ? 'text-emerald-400'
                        : 'text-rose-400'
                    }`}
                  >
                    {coinDetail.market_data.price_change_percentage_24h >= 0 ? '+' : ''}
                    {coinDetail.market_data.price_change_percentage_24h.toFixed(2)}% (24h)
                  </span>
                </div>
                {coinDetail.market_data.price_change_percentage_7d && (
                  <div className="flex items-center gap-1">
                    <span
                      className={`font-semibold text-sm ${
                        coinDetail.market_data.price_change_percentage_7d >= 0
                          ? 'text-emerald-400'
                          : 'text-rose-400'
                      }`}
                    >
                      {coinDetail.market_data.price_change_percentage_7d >= 0 ? '+' : ''}
                      {coinDetail.market_data.price_change_percentage_7d.toFixed(2)}% (7d)
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-gray-400 text-xs mb-1">Marktkapitalisierung</div>
                <div className="text-white font-semibold">
                  {formatMarketCap(coinDetail.market_data.market_cap.usd)}
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-gray-400 text-xs mb-1">24h Volumen</div>
                <div className="text-white font-semibold">
                  {formatMarketCap(coinDetail.market_data.total_volume.usd)}
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-gray-400 text-xs mb-1">Umlaufmenge</div>
                <div className="text-white font-semibold">
                  {formatSupply(coinDetail.market_data.circulating_supply)}
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-gray-400 text-xs mb-1">Max. Menge</div>
                <div className="text-white font-semibold">
                  {coinDetail.market_data.max_supply
                    ? formatSupply(coinDetail.market_data.max_supply)
                    : '∞'}
                </div>
              </div>
            </div>

            <CoinChart coinId={coinDetail.id} />

            {getDescription() && (
              <div className="mb-6 p-4 bg-slate-800/30 rounded-lg max-h-64 overflow-y-auto">
                <h3 className="text-white font-semibold mb-2">Über {coinDetail.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{getDescription()}</p>
              </div>
            )}

            <div className="space-y-3">
              <a
                href="https://bit.ly/binance_kryptodesk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-teal-500/30"
              >
                Bei Binance kaufen
                <ExternalLink className="w-4 h-4" />
              </a>

              {isBitcoin && (
                <div className="bg-slate-800/50 border border-white/5 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-3">
                    Du kannst Bitcoin auch per Sparplan kaufen (Relai)
                  </p>
                  <a
                    href="https://relai.me/referral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
                  >
                    Bitcoin Sparplan (Relai)
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="mt-2 text-center">
                    <span className="text-xs text-gray-500">Code: </span>
                    <span className="text-sm text-teal-400 font-mono font-semibold">
                      REL313148
                    </span>
                  </div>
                </div>
              )}

              {isTop10 && (
                <a
                  href="https://bit.ly/ledger_kryptodesk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-800/80 hover:bg-slate-700/80 text-gray-300 border border-white/10 rounded-lg font-medium transition-colors"
                >
                  Mit Hardware-Wallet sichern (Ledger)
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
