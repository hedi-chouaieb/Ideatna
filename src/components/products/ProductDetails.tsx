import { MapPin } from 'lucide-react';
import { useState } from 'react';

interface ProductDetailsProps {
  name: string;
  price: string;
  description: string[];
  whyMade: string;
  culturalImpact: {
    title: string;
    text: string;
  };
  purchase: {
    note: string;
    shipping: string;
    cta: string;
    explore: string;
  };
}

const ProductDetails = ({ name, price, description, whyMade, culturalImpact, purchase }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-light text-gray-800 mb-4">{name}</h1>
        <p className="text-2xl text-amber-800 font-medium mb-6">{price}</p>
      </div>
      <div className="prose prose-lg text-gray-700">
        {description.map((desc, i) => (
          <p className="leading-relaxed" key={i}>{desc}</p>
        ))}
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-light text-gray-800 mb-4 italic">Why It Was Made</h3>
        <p className="text-gray-700 leading-relaxed">{whyMade}</p>
      </div>
      <div className="bg-amber-50 p-6 rounded-xl">
        <div className="flex items-start space-x-4">
          <MapPin className="w-5 h-5 text-amber-700 mt-1" />
          <div>
            <h4 className="font-medium text-amber-800 mb-2">{culturalImpact.title}</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{culturalImpact.text}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <div className="flex items-center space-x-4">
          <label className="text-gray-700">Quantity:</label>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50"
            >
              -
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50"
            >
              +
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-600 italic">{purchase.note}</p>
        <p className="text-sm text-gray-600">{purchase.shipping}</p>
        <button className="w-full bg-amber-800 text-white py-4 rounded-full text-lg font-medium hover:bg-amber-700 transition-colors">
          {purchase.cta}
        </button>
        <button className="w-full border border-amber-800 text-amber-800 py-4 rounded-full text-lg font-medium hover:bg-amber-50 transition-colors">
          {purchase.explore}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
