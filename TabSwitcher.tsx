import { TabType } from '../types/crypto';

interface TabSwitcherProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const TabSwitcher = ({ activeTab, onTabChange }: TabSwitcherProps) => {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'top', label: 'Top Coins' },
    { id: 'trending', label: 'Trend Coins' },
    { id: 'gainers', label: 'Top Gewinner (24h)' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base
              transition-all duration-200
              ${
                activeTab === tab.id
                  ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
                  : 'bg-slate-800/50 text-gray-400 border border-white/5 hover:border-teal-500/30 hover:text-teal-400'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
