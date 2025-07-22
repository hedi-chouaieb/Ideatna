import { FilterOptionItem, FilterOptions } from '@/lib/types';
import { X } from 'lucide-react';
import FilterSidebar from '../products/FilterSidebar';

export type FilterCategory = 'region' | 'craft' | 'materials' | 'culturalTags' | 'gender' | 'status';

interface ArtisanFiltersSidebarProps {
  selectedFilters: Record<FilterCategory, string[]>;
  clearAllFilters: () => void;
  getActiveFilterCount: () => number;
  toggleFilter: (category: FilterCategory, value: string) => void;
  filterOptions: FilterOptions | null;
  show?: boolean;
  onClose?: () => void;
  onApply?: () => void;
}

const ArtisanFiltersSidebar = ({
  selectedFilters,
  clearAllFilters,
  getActiveFilterCount,
  toggleFilter,
  filterOptions,
  show = true,
  onClose = () => { },
  onApply = () => { },
}: ArtisanFiltersSidebarProps) => (
  <FilterSidebar
    show={show}
    onClose={onClose}
    onApply={onApply}
    onCancel={getActiveFilterCount() > 0 ? clearAllFilters : onClose}
    title="Find Artisans"
    cancelLabel={getActiveFilterCount() > 0 ? 'Clear All' : 'Cancel'}
  >
    {getActiveFilterCount() > 0 && (
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {Object.entries(selectedFilters).map(([category, values]) =>
            values.map((value: string) => (
              <span
                key={`${category}-${value}`}
                className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md text-xs flex items-center gap-1 border border-amber-200"
              >
                {value.replace('-', ' ')}
                <button
                  onClick={() => toggleFilter(category as FilterCategory, value)}
                  className="hover:bg-amber-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))
          )}
        </div>
      </div>
    )}
    <div className="space-y-5">
      {filterOptions &&
        Object.entries(filterOptions).map(([category, options]) => (
          <div key={category} className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-amber-100/50">
            <h3 className="font-serif text-amber-900 mb-3 text-sm font-medium capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="space-y-2">
              {options.map((option: FilterOptionItem) => (
                <label key={option.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedFilters[category as FilterCategory].includes(option.id)}
                    onChange={() => toggleFilter(category as FilterCategory, option.id)}
                    className="rounded border-amber-300 text-amber-600 focus:ring-amber-500 focus:ring-1 w-4 h-4"
                  />
                  <span className="ml-2 text-sm text-amber-800">
                    {option.label} <span className="text-amber-600 font-medium">({option.count})</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
    </div>
  </FilterSidebar>
);

export default ArtisanFiltersSidebar;
