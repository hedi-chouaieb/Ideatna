import { Search } from 'lucide-react';

interface ArtisanEmptyStateProps {
  clearAllFilters: () => void;
}

const ArtisanEmptyState = ({ clearAllFilters }: ArtisanEmptyStateProps) => (
  <div className="text-center py-12">
    <div className="text-gray-400 mb-4">
      <Search className="w-16 h-16 mx-auto" />
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">No artisans found</h3>
    <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
    <button
      onClick={clearAllFilters}
      className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-xl transition-colors"
    >
      Clear All Filters
    </button>
  </div>
);

export default ArtisanEmptyState;
