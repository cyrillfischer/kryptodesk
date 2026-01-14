import { useState, useEffect } from 'react';
import { CryptoCoin, TabType } from '../types/crypto';

interface UseCryptoDataReturn {
  coins: CryptoCoin[];
  loading: boolean;
  error: string | null;
  getCoinsForTab: (tab: TabType) => CryptoCoin[];
}

const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3';

let cachedCoins: { data: CryptoCoin[]; timestamp: number } | null = null;
const CACHE_DURATION = 2 * 60 * 1000;

export const useCryptoData = (): UseCryptoDataReturn => {
  const [coins, setCoins] = useState<CryptoCoin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true);
        setError(null);

        if (cachedCoins && Date.now() - cachedCoins.timestamp < CACHE_DURATION) {
          setCoins(cachedCoins.data);
          setLoading(false);
          return;
        }

        await new Promise(resolve => setTimeout(resolve, 500));

        const response = await fetch(
          `${COINGECKO_API_BASE}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`
        );

        if (!response.ok) {
          if (response.status === 429) {
            throw new Error('Zu viele Anfragen. Die Daten werden in Kürze aktualisiert.');
          }
          throw new Error('Fehler beim Laden der Daten');
        }

        const data: CryptoCoin[] = await response.json();
        cachedCoins = { data, timestamp: Date.now() };
        setCoins(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Beim Laden der Marktdaten ist ein Fehler aufgetreten. Bitte versuche es später erneut.';
        setError(errorMessage);
        console.error('Error fetching crypto data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();

    const interval = setInterval(() => {
      if (!cachedCoins || Date.now() - cachedCoins.timestamp >= CACHE_DURATION) {
        fetchCoins();
      }
    }, CACHE_DURATION);

    return () => clearInterval(interval);
  }, []);

  const getCoinsForTab = (tab: TabType): CryptoCoin[] => {
    switch (tab) {
      case 'top':
        return coins.slice(0, 50);

      case 'gainers':
        return [...coins]
          .filter((coin) => coin.price_change_percentage_24h > 0)
          .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
          .slice(0, 30);

      case 'trending':
        return [...coins]
          .filter((coin) => {
            const hasHighVolume = coin.total_volume > 100000000;
            const hasSignificantChange = Math.abs(coin.price_change_percentage_24h) > 5;
            return hasHighVolume && hasSignificantChange;
          })
          .sort((a, b) => b.total_volume - a.total_volume)
          .slice(0, 20);

      default:
        return coins.slice(0, 50);
    }
  };

  return { coins, loading, error, getCoinsForTab };
};
