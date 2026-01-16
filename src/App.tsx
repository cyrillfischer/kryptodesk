import { useState, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { ServicesBar } from './components/ServicesBar';
import { SearchBar } from './components/SearchBar';
import { TabSwitcher } from './components/TabSwitcher';
import { CoinTable } from './components/CoinTable';
import { CoinListMobile } from './components/CoinListMobile';
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
    <div className="min-h-screen bg-dark-900 text-white flex flex-col">

      {/* HEADER */}
      <Header />
      
      {/* SERVICES BAR (C2) */}
      <ServicesBar />

      {/* SEARCH */}
      <SearchBar onSearch={handleSearch} isActive={isSearchActive} />

      {/* TABS */}
      {!isSearchActive && (
        <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
      )}

      {/* CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="bg-slate-900/60 border border-white/5 rounded-xl p-6 shadow-lg">

          {isSearchActive && (
            <p className="text-gray-400 text-sm mb-4">
              {searchResults.length > 0
                ? `${searchResults.length} Treffer für "${searchQuery}"`
                : 'Keine Treffer'}
            </p>
          )}

          {!isSearchActive && (
            <p className="text-gray-400 text-xs mb-3">
              Daten können leicht verzögert sein.
            </p>
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
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 mt-8">
        <p className="text-center text-gray-500 text-sm">
          © 2024 KryptoDesk.de — Dein Krypto-Cockpit für den DACH-Raum
        </p>
      </footer>

      <CoinDetailModal coinId={selectedCoinId} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
