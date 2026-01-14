import { useState, useEffect } from 'react';
import { CoinDetail } from '../types/crypto';

const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3';

const cache: Record<string, { data: CoinDetail; timestamp: number }> = {};
const CACHE_DURATION = 5 * 60 * 1000;

const GERMAN_DESCRIPTIONS: Record<string, string> = {
  bitcoin: 'Bitcoin ist die weltweit erste dezentrale Kryptowährung, die 2009 vom pseudonymen Satoshi Nakamoto erschaffen wurde. Sie ermöglicht elektronische Peer-to-Peer-Cash-Transaktionen ohne Vermittler wie Banken oder Regierungen und basiert auf einer durch Proof of Work Mining gesicherten Blockchain sowie dem kryptographischen SHA-256-Algorithmus. Mit einer festen maximalen Menge von 21 Millionen Coins und programmatischen Halvings alle vier Jahre, die die Miner-Belohnungen reduzieren, ist Bitcoin als deflationäres digitales Asset konzipiert, oft als "digitales Gold" bezeichnet. Sein Wert beruht darauf, das Double-Spending-Problem ohne vertrauenswürdige Vermittler zu lösen und damit das erste wirklich knappe digitale Asset zu schaffen, das über Zensurresistenz und erlaubnisfreien Zugang verfügt, den keine Regierung, Firma oder Einzelperson kontrollieren kann. Bitcoin fungiert als dezentrales Peer-to-Peer-Zahlungsnetzwerk, das von seinen Nutzern ohne zentrale Autorität oder Vermittler betrieben wird.',
  ethereum: 'Ethereum ist eine dezentrale Open-Source-Blockchain-Plattform, die Smart Contracts ermöglicht. Sie wurde 2015 von Vitalik Buterin und anderen Entwicklern ins Leben gerufen und erweitert die Blockchain-Technologie über reine Werttransfers hinaus.',
  tether: 'Tether (USDT) ist ein Stablecoin, der 1:1 an den US-Dollar gekoppelt ist. Er bietet die Stabilität traditioneller Währungen bei gleichzeitiger Integration in die Blockchain-Technologie.',
  binancecoin: 'BNB ist der native Token der Binance-Börse und wird für Handelsgebühren-Rabatte, Teilnahme an Token-Verkäufen und verschiedene andere Dienste im Binance-Ökosystem verwendet.',
  solana: 'Solana ist eine hochperformante Blockchain, die für schnelle und kostengünstige Transaktionen entwickelt wurde. Sie nutzt einen einzigartigen Proof-of-History-Konsensmechanismus.',
  'usd-coin': 'USD Coin (USDC) ist ein vollständig besicherter Stablecoin, der an den US-Dollar gekoppelt ist. Er wird von regulierten Finanzinstituten ausgegeben.',
  ripple: 'XRP ist die native Kryptowährung des Ripple-Zahlungsnetzwerks, das für schnelle und kostengünstige grenzüberschreitende Zahlungen entwickelt wurde.',
  cardano: 'Cardano ist eine Proof-of-Stake-Blockchain-Plattform, die auf peer-reviewter akademischer Forschung basiert und für Smart Contracts und dezentrale Anwendungen entwickelt wurde.',
  dogecoin: 'Dogecoin ist eine Community-getriebene Kryptowährung, die ursprünglich als Scherz gestartet wurde, sich aber zu einer beliebten digitalen Währung mit aktiver Community entwickelt hat.',
  'avalanche-2': 'Avalanche ist eine Layer-1-Blockchain, die als Plattform für dezentrale Anwendungen und benutzerdefinierte Blockchain-Netzwerke dient und hohe Geschwindigkeit und niedrige Kosten bietet.'
};

interface UseCoinDetailReturn {
  coinDetail: CoinDetail | null;
  loading: boolean;
  error: string | null;
}

export const useCoinDetail = (coinId: string | null): UseCoinDetailReturn => {
  const [coinDetail, setCoinDetail] = useState<CoinDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!coinId) {
      setCoinDetail(null);
      return;
    }

    const fetchCoinDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        const cached = cache[coinId];
        if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
          setCoinDetail(cached.data);
          setLoading(false);
          return;
        }

        await new Promise(resolve => setTimeout(resolve, 300));

        const response = await fetch(
          `${COINGECKO_API_BASE}/coins/${coinId}?localization=true&tickers=false&community_data=false&developer_data=false`
        );

        if (!response.ok) {
          if (response.status === 429) {
            throw new Error('Zu viele Anfragen. Bitte warten Sie einen Moment.');
          }
          throw new Error('Fehler beim Laden der Detail-Daten');
        }

        const data: CoinDetail = await response.json();

        if (GERMAN_DESCRIPTIONS[coinId]) {
          data.description = {
            de: GERMAN_DESCRIPTIONS[coinId],
            en: data.description?.en || ''
          };
        }

        cache[coinId] = { data, timestamp: Date.now() };
        setCoinDetail(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Keine Detaildaten verfügbar.';
        setError(errorMessage);
        console.error('Error fetching coin detail:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCoinDetail();
  }, [coinId]);

  return { coinDetail, loading, error };
};
