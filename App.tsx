import { useState, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { TabSwitcher } from './components/TabSwitcher';
import { CoinTable } from './components/CoinTable';
import { CoinListMobile } from './components/CoinListMobile';
import { AffiliateSection } from './components/AffiliateSection';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { CoinDetailModal } from './components/CoinDetailModal';
import { useCryptoData } from './hooks/useCryptoData';
import { TabType } from './types/crypto';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('top');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCoinId, setSelectedCoinId] = useState<string | null>(null);
  const { loading, error, coins, getCoinsForTab } = useCryptoData();

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleCoinClick = useCallback((coinId: string) => {
    setSelectedCoinId(coinId);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedCoinId(null);
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(query) ||
        coin.symbol.toLowerCase().includes(query)
    );
  }, [coins, searchQuery]);

  const isSearchActive = searchQuery.trim().length > 0;
  const displayedCoins = isSearchActive ? searchResults : getCoinsForTab(activeTab);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <SearchBar onSearch={handleSearch} isActive={isSearchActive} />

      {!isSearchActive && (
        <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="bg-slate-900/60 border border-white/5 rounded-xl p-6 shadow-lg">
          {isSearchActive && (
            <div className="mb-4">
              <p className="text-gray-400 text-sm">
                {searchResults.length > 0
                  ? `${searchResults.length} Treffer für "${searchQuery}"`
                  : 'Suchresultate'}
              </p>
            </div>
          )}

          {!isSearchActive && (
            <div className="mb-4">
              <p className="text-gray-400 text-xs">
                Daten werden von einem externen Krypto-Marktdatenanbieter geladen und können leicht verzögert sein.
              </p>
            </div>
          )}

          {loading && <LoadingSpinner />}

          {error && <ErrorMessage message={error} />}

          {!loading && !error && displayedCoins.length === 0 && isSearchActive && (
            <div className="py-16 text-center">
              <p className="text-gray-400">Keine Treffer gefunden.</p>
            </div>
          )}

          {!loading && !error && displayedCoins.length > 0 && (
            <>
              <CoinTable coins={displayedCoins} onCoinClick={handleCoinClick} />
              <CoinListMobile coins={displayedCoins} onCoinClick={handleCoinClick} />
            </>
          )}
        </div>
      </div>

      <AffiliateSection />

      <footer className="border-t border-white/5 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 KryptoDesk.de - Dein Krypto-Cockpit für den DACH-Raum
          </p>
        </div>
      </footer>

      <CoinDetailModal coinId={selectedCoinId} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
