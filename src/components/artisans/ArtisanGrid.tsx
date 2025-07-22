import { ArtisanCard as ArtisanCardType } from '@/lib/types';
import ArtisanCard from './ArtisanCard';

interface ArtisanGridProps {
  artisans: ArtisanCardType[];
  viewMode: string;
}

const ArtisanGrid = ({ artisans, viewMode }: ArtisanGridProps) => (
  <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
    {artisans.map(artisan => (
      <ArtisanCard key={artisan.id} artisan={artisan} />
    ))}
  </div>
);

export default ArtisanGrid;
