interface ArtisanResultsCountProps {
  filteredCount: number;
  totalCount: number;
}

const ArtisanResultsCount = ({ filteredCount, totalCount }: ArtisanResultsCountProps) => (
  <div className="mb-6 flex items-center justify-between">
    <p className="text-gray-600">
      Showing {filteredCount} of {totalCount} artisans
    </p>
  </div>
);

export default ArtisanResultsCount;
