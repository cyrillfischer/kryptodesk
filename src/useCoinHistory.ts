import { useState, useEffect } from 'react';

const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3';

export interface PricePoint {
  timestamp: number;
  price: number;
}

interface UseCoinHistoryReturn {
  priceHistory: PricePoint[];
  loading: boolean;
  error: string | null;
}

export const useCoinHistory = (coinId: string | null, days: number): UseCoinHistoryReturn => {
  const [priceHistory, setPriceHistory] = useState<PricePoint[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!coinId) {
      setPriceHistory([]);
      return;
    }

    const fetchPriceHistory = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${COINGECKO_API_BASE}/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
        );

        if (!response.ok) {
          throw new Error('Fehler beim Laden der Kursdaten');
        }

        const data = await response.json();

        const formattedData: PricePoint[] = data.prices.map(
          ([timestamp, price]: [number, number]) => ({
            timestamp,
            price,
          })
        );

        setPriceHistory(formattedData);
      } catch (err) {
        setError('Kein Kursverlauf verfügbar.');
        console.error('Error fetching price history:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPriceHistory();
  }, [coinId, days]);

  return { priceHistory, loading, error };
};
