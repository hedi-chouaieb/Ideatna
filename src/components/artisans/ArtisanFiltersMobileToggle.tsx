import { Filter } from 'lucide-react';

interface ArtisanFiltersMobileToggleProps {
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  getActiveFilterCount: () => number;
}

const ArtisanFiltersMobileToggle = ({ showFilters, setShowFilters, getActiveFilterCount }: ArtisanFiltersMobileToggleProps) => (
  <div className="lg:hidden mb-6">
    <button
      onClick={() => setShowFilters(!showFilters)}
      className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2"
    >
      <Filter className="w-5 h-5" />
      <span>Filters</span>
      {getActiveFilterCount() > 0 && (
        <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">
          {getActiveFilterCount()}
        </span>
      )}
    </button>
  </div>
);

export default ArtisanFiltersMobileToggle;
