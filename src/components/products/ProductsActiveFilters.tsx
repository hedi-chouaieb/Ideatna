import { X } from 'lucide-react';
import React from 'react';

interface ProductsActiveFiltersProps {
  activeFilters: string[];
  onRemove: (filter: string) => void;
}

const ProductsActiveFilters: React.FC<ProductsActiveFiltersProps> = ({ activeFilters, onRemove }) => (
  <div className="flex items-center gap-2 mb-6 flex-wrap">
    <span className="text-sm text-gray-600">Active filters:</span>
    {activeFilters.map(filter => (
      <span
        key={filter}
        className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm"
      >
        {filter}
        <button
          onClick={() => onRemove(filter)}
          className="text-amber-600 hover:text-amber-800"
        >
          <X className="w-3 h-3" />
        </button>
      </span>
    ))}
  </div>
);

export default ProductsActiveFilters;
