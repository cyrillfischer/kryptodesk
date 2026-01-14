import { ExternalLink, LucideIcon } from 'lucide-react';

interface AffiliateCardProps {
  title: string;
  description: string;
  buttonText: string;
  link: string;
  icon: LucideIcon;
  code?: string;
}

export const AffiliateCard = ({
  title,
  description,
  buttonText,
  link,
  icon: Icon,
  code,
}: AffiliateCardProps) => {
  return (
    <div className="bg-slate-900/60 border border-white/5 rounded-xl p-5 shadow-lg hover:border-teal-500/30 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-teal-500/10 rounded-lg">
          <Icon className="w-6 h-6 text-teal-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          {code && (
            <div className="mt-3 px-3 py-2 bg-slate-800/80 rounded-lg border border-white/5">
              <span className="text-xs text-gray-500">Empfehlungscode:</span>
              <div className="text-teal-400 font-mono font-semibold mt-1">
                {code}
              </div>
            </div>
          )}
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-teal-500/20"
      >
        {buttonText}
        <ExternalLink className="w-4 h-4" />
      </a>
      <p className="text-center text-gray-500 text-xs mt-2">Affiliate-Link</p>
    </div>
  );
};
