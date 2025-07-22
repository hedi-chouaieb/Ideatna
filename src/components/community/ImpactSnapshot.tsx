import { Check, Heart, MapPin } from 'lucide-react';

const ImpactSnapshot = () => (
  <section className="bg-amber-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-stone-800 mb-8">Every Purchase Supports 250+ Artisans Across Tunisia</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-amber-800 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-stone-800 mb-2">Fair Trade Certified</h4>
            <p className="text-stone-600 text-center">Direct partnerships ensuring artisans receive fair compensation</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-amber-800 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-stone-800 mb-2">Authentic Origins</h4>
            <p className="text-stone-600 text-center">Every piece verified and sourced directly from the artisan</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-amber-800 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-stone-800 mb-2">Community Impact</h4>
            <p className="text-stone-600 text-center">Supporting traditional crafts and cultural preservation</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ImpactSnapshot;
