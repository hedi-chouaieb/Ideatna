import { ChevronLeft, Heart } from 'lucide-react';

interface ProductNavBarProps {
  onBack: () => void;
  onCart: () => void;
  cartCount: number;
}

const ProductNavBar = ({ onBack, onCart, cartCount }: ProductNavBarProps) => (
  <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-amber-100">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="text-amber-800 hover:text-amber-600 transition-colors" onClick={onBack}>
          <ChevronLeft className="w-5 h-5" />
          Back to Shop
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-amber-800 hover:text-amber-600">
          <Heart className="w-5 h-5" />
        </button>
        <button className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors" onClick={onCart}>
          Cart ({cartCount})
        </button>
      </div>
    </div>
  </nav>
);

export default ProductNavBar;
