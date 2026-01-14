import { TrendingUp } from 'lucide-react';

export const Header = () => {
  return (
    <div className="border-b border-white/5 bg-dark-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-500/10 rounded-lg">
              <TrendingUp className="w-8 h-8 text-teal-500" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                Krypto<span className="text-teal-500">Desk</span>
              </h1>
            </div>
          </div>
          <span className="px-3 py-1 bg-teal-500/20 text-teal-400 text-sm font-medium rounded-full border border-teal-500/30">
            Beta
          </span>
        </div>

        <p className="text-gray-400 text-sm sm:text-base mb-4">
          Dein Krypto-Cockpit für den DACH-Raum – Kurse, Infos & Services auf einen Blick.
        </p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
          <p className="text-amber-200/90 text-xs sm:text-sm">
            <span className="font-semibold">Hinweis:</span> Keine Anlageberatung. Krypto-Anlagen sind mit Risiken verbunden.
            Informiere dich sorgfältig, bevor du investierst.
          </p>
        </div>
      </div>
    </div>
  );
};
