import { Eye } from 'lucide-react';
import React from 'react';

interface ProductsEmptyStateProps {
  onClear: () => void;
}

const ProductsEmptyState: React.FC<ProductsEmptyStateProps> = ({ onClear }) => (
  <div className="text-center py-12">
    <Eye className="w-16 h-16 text-gray-300 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
    <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
    <button
      onClick={onClear}
      className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full transition-colors"
    >
      Clear all filters
    </button>
  </div>
);

export default ProductsEmptyState;
