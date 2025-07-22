import { ChevronRight } from 'lucide-react';

interface ArtisanBiographyProps {
  shortBio: string;
  fullBio: string;
  showFullBio: boolean;
  onToggle: () => void;
}

const ArtisanBiography = ({ shortBio, fullBio, showFullBio, onToggle }: ArtisanBiographyProps) => (
  <section className="bg-white rounded-2xl p-8 shadow-sm">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet the Artisan</h2>
    <p className="text-gray-700 leading-relaxed mb-4">
      {showFullBio ? fullBio : shortBio}
    </p>
    <button
      onClick={onToggle}
      className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1"
    >
      {showFullBio ? 'Show less' : 'Read more'}
      <ChevronRight className={`w-4 h-4 transition-transform ${showFullBio ? 'rotate-90' : ''}`} />
    </button>
  </section>
);

export default ArtisanBiography;
