import { SelectedFilters } from '@/hooks/useProductDiscovery';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import FilterSidebar from './FilterSidebar';

interface ProductsFiltersSidebarProps {
  show: boolean;
  categories: string[];
  regions: string[];
  materials: string[];
  impactTags: string[];
  selectedFilters: SelectedFilters;
  toggleFilter: (type: 'categories' | 'regions' | 'materials' | 'impactTags', value: string) => void;
  clearAllFilters: () => void;
  setPriceRange: (range: [number, number]) => void;
  getActiveFiltersCount: () => number;
  onClose: () => void;
  onApply: () => void;
}

const ProductsFiltersSidebar: React.FC<ProductsFiltersSidebarProps> = ({
  show,
  categories,
  regions,
  materials,
  impactTags,
  selectedFilters,
  toggleFilter,
  clearAllFilters,
  getActiveFiltersCount,
  onClose,
  onApply,
}) => {
  if (!show) return null;

  return (
    <FilterSidebar
      show={show}
      onClose={onClose}
      onApply={onApply}
      onCancel={getActiveFiltersCount() > 0 ? clearAllFilters : onClose}
      title="Discover Treasures"
      cancelLabel={getActiveFiltersCount() > 0 ? 'Clear All' : 'Cancel'}
    >
      {/* Filter by category */}
      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-amber-100/50">
        <h3 className="font-serif text-amber-900 mb-3 text-sm font-medium">Category</h3>
        <div className="relative">
          <select className="w-full p-2 border border-amber-200 rounded-md appearance-none bg-white text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm">
            <option>All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-600 pointer-events-none" />
        </div>
      </div>

      {/* Sort by */}
      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-amber-100/50">
        <h3 className="font-serif text-amber-900 mb-3 text-sm font-medium">Sort by</h3>
        <div className="relative">
          <select className="w-full p-2 border border-amber-200 rounded-md appearance-none bg-white text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm">
            <option>Most Authentic</option>
            <option>Newest Arrivals</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Artisan Stories</option>
            <option>Cultural Heritage</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-600 pointer-events-none" />
        </div>
      </div>

      {/* Special offers */}
      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-amber-100/50">
        <h3 className="font-serif text-amber-900 mb-3 text-sm font-medium">Special Offers</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-amber-600 border-amber-300 rounded focus:ring-amber-500 focus:ring-1"
            />
            <span className="ml-2 text-sm text-amber-800">Free shipping</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-amber-600 border-amber-300 rounded focus:ring-amber-500 focus:ring-1"
            />
            <span className="ml-2 text-sm text-amber-800">Featured pieces</span>
          </label>
        </div>
      </div>

      {/* Artisan Location */}
      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-amber-100/50">
        <h3 className="font-serif text-amber-900 mb-3 text-sm font-medium">Artisan Location</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="location"
              value="anywhere"
              defaultChecked
              className="w-4 h-4 text-amber-600 border-amber-300 focus:ring-amber-500 focus:ring-1"
            />
            <span className="ml-2 text-sm text-amber-800">All Regions</span>
          </label>
          {regions.map(region => (
            <label key={region} className="flex items-center">
              <input
                type="radio"
                name="location"
                value={region}
                className="w-4 h-4 text-amber-600 border-amber-300 focus:ring-amber-500 focus:ring-1"
              />
              <span className="ml-2 text-sm text-amber-800">{region}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Craft Type */}
      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-amber-100/50">
        <h3 className="font-serif text-amber-900 mb-3 text-sm font-medium">Craft Type</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="craft"
              value="all"
              defaultChecked
              className="w-4 h-4 text-amber-600 border-amber-300 focus:ring-amber-500 focus:ring-1"
            />
            <span className="ml-2 text-sm text-amber-800">All Crafts</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="craft"
              value="traditional"
              className="w-4 h-4 text-amber-600 border-amber-300 focus:ring-amber-500 focus:ring-1"
            />
            <span className="ml-2 text-sm text-amber-800">Traditional Heritage</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="craft"
              value="contemporary"
              className="w-4 h-4 text-amber-600 border-amber-300 focus:ring-amber-500 focus:ring-1"
            />
            <span className="ml-2 text-sm text-amber-800">Contemporary Fusion</span>
          </label>
        </div>
      </div>

      {/* Materials */}
      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-amber-100/50">
        <h3 className="font-serif text-amber-900 mb-3 text-sm font-medium">Materials</h3>
        <div className="space-y-2">
          {materials.map(material => (
            <label key={material} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedFilters.materials.includes(material)}
                onChange={() => toggleFilter('materials', material)}
                className="w-4 h-4 text-amber-600 border-amber-300 rounded focus:ring-amber-500 focus:ring-1"
              />
              <span className="ml-2 text-sm text-amber-800">{material}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-amber-100/50">
        <h3 className="font-serif text-amber-900 mb-3 text-sm font-medium">Price Range</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              value="any"
              defaultChecked
              className="w-4 h-4 text-amber-600 border-amber-300 focus:ring-amber-500 focus:ring-1"
            />
            <span className="ml-2 text-sm text-amber-800">Any price</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              value="under25"
              className="w-4 h-4 text-amber-600 border-amber-300 focus:ring-amber-500 focus:ring-1"
            />
            <span className="ml-2 text-sm text-amber-800">Under $25</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              value="25-50"
              className="w-4 h-4 text-amber-600 border-amber-300 focus:ring-amber-500 focus:ring-1"
            />
            <span className="ml-2 text-sm text-amber-800">$25 - $50</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              value="50-100"
              className="w-4 h-4 text-amber-600 border-amber-300 focus:ring-amber-500 focus:ring-1"
            />
            <span className="ml-2 text-sm text-amber-800">$50 - $100</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              value="over100"
              className="w-4 h-4 text-amber-600 border-amber-300 focus:ring-amber-500 focus:ring-1"
            />
            <span className="ml-2 text-sm text-amber-800">Over $100</span>
          </label>
        </div>
      </div>

      {/* Impact & Values */}
      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-amber-100/50">
        <h3 className="font-serif text-amber-900 mb-3 text-sm font-medium">Impact & Values</h3>
        <div className="space-y-2">
          {impactTags.map(tag => (
            <label key={tag} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedFilters.impactTags.includes(tag)}
                onChange={() => toggleFilter('impactTags', tag)}
                className="w-4 h-4 text-amber-600 border-amber-300 rounded focus:ring-amber-500 focus:ring-1"
              />
              <span className="ml-2 text-sm text-amber-800">{tag}</span>
            </label>
          ))}
        </div>
      </div>
    </FilterSidebar>
  );
};

export default ProductsFiltersSidebar;
