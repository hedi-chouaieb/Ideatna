import React from 'react';

interface ProductsResultsHeaderProps {
  productsCount: number;
  totalProducts: number;
}

const ProductsResultsHeader: React.FC<ProductsResultsHeaderProps> = ({ productsCount, totalProducts }) => (
  <div className="flex items-center justify-between mb-6">
    <div>
      <h2 className="text-2xl font-bold text-gray-900">
        Handcrafted Treasures
      </h2>
      <p className="text-gray-600">
        Showing {productsCount} of {totalProducts} products
      </p>
    </div>
    <div className="bg-amber-100 px-4 py-2 rounded-full">
      <span className="text-sm text-amber-800 font-medium">
        Supporting 250+ artisans across Tunisia
      </span>
    </div>
  </div>
);

export default ProductsResultsHeader;
