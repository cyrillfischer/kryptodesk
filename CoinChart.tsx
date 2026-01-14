import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useCoinHistory } from '../hooks/useCoinHistory';
import { LoadingSpinner } from './LoadingSpinner';

interface CoinChartProps {
  coinId: string;
}

type Timeframe = 1 | 7 | 30;

export const CoinChart = ({ coinId }: CoinChartProps) => {
  const [timeframe, setTimeframe] = useState<Timeframe>(1);
  const { priceHistory, loading, error } = useCoinHistory(coinId, timeframe);

  const timeframeButtons: { value: Timeframe; label: string }[] = [
    { value: 1, label: '24h' },
    { value: 7, label: '7d' },
    { value: 30, label: '30d' },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: price < 1 ? 6 : 2,
    }).format(price);
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);

    if (timeframe === 1) {
      return date.toLocaleTimeString('de-DE', {
        hour: '2-digit',
        minute: '2-digit',
      });
    } else {
      return date.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
      });
    }
  };

  const chartData = priceHistory.map((point) => ({
    timestamp: point.timestamp,
    price: point.price,
    formattedDate: formatDate(point.timestamp),
  }));

  const isPriceIncreasing =
    priceHistory.length > 1 &&
    priceHistory[priceHistory.length - 1].price >= priceHistory[0].price;

  const chartColor = isPriceIncreasing ? '#34d399' : '#fb7185';

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">Kursverlauf</h3>
        <div className="flex gap-2 overflow-x-auto">
          {timeframeButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setTimeframe(btn.value)}
              className={`
                px-3 py-1.5 rounded-lg text-sm font-medium transition-all
                ${
                  timeframe === btn.value
                    ? 'bg-teal-500 text-white'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                }
              `}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="py-8">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-12 h-12 mb-3">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-teal-500/20 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-teal-500 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="text-gray-400 text-sm">Lade Kursverlauf...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="py-8 text-center">
          <p className="text-rose-400 text-sm">{error}</p>
        </div>
      )}

      {!loading && !error && priceHistory.length > 0 && (
        <div className="bg-slate-800/30 rounded-lg p-4">
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColor} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="formattedDate"
                stroke="#6b7280"
                style={{ fontSize: '11px' }}
                tickLine={false}
                axisLine={false}
                interval="preserveStartEnd"
                minTickGap={50}
              />
              <YAxis
                stroke="#6b7280"
                style={{ fontSize: '11px' }}
                tickLine={false}
                axisLine={false}
                domain={['auto', 'auto']}
                hide
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                }}
                labelStyle={{ color: '#9ca3af', fontSize: '12px' }}
                itemStyle={{ color: '#ffffff', fontSize: '14px', fontWeight: 600 }}
                formatter={(value: number) => [formatPrice(value), 'Preis']}
                labelFormatter={(label) => `${label}`}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke={chartColor}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorPrice)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};
