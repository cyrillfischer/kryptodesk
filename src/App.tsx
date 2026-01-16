import { useState } from "react";

import Header from "./components/Header";

import PartnerTiles from "./components/PartnerTiles";

import { SearchBar } from "./components/SearchBar";
import { TabSwitcher } from "./components/TabSwitcher";
import { CoinTable } from "./components/CoinTable";
import { CoinListMobile } from "./components/CoinListMobile";
import { AffiliateSection } from "./components/AffiliateSection";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { ErrorMessage } from "./components/ErrorMessage";
import { CoinDetailModal } from "./components/CoinDetailModal";

import { useCryptoData } from "./hooks/useCryptoData";
import { TabType } from "./types/crypto";

function App() {
  const [activeTab, setActiveTab] = useState<TabType>("top");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCoinId, setSelectedCoinId] = useState<string | null>(null);

  const { loading, error, coins, getCoinsForTab } = useCryptoData();

  const displayedCoins =
    searchQuery.trim().length > 0
      ? coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : getCoinsForTab(activeTab);

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* HEADER */}
      <Header />

      {/* PARTNER TILES */}
      <PartnerTiles />

      {/* SEARCH */}
      <SearchBar onSearch={setSearchQuery} isActive={searchQuery.length > 0} />

      {/* TABS */}
      {searchQuery.length === 0 && (
        <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
      )}

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}

        {!loading && !error && (
          <>
            <CoinTable coins={displayedCoins} onCoinClick={setSelectedCoinId} />
            <CoinListMobile
              coins={displayedCoins}
              onCoinClick={setSelectedCoinId}
            />
          </>
        )}
      </div>

      {/* AFFILIATE SECTION */}
      <AffiliateSection />

      {/* COIN MODAL */}
      <CoinDetailModal
        coinId={selectedCoinId}
        onClose={() => setSelectedCoinId(null)}
      />
    </div>
  );
}

export default App;
