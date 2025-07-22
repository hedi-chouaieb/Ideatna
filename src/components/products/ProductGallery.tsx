import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";
import { useState } from 'react';

interface ProductGalleryProps {
  gallery: string[];
}

const ProductGallery = ({ gallery }: ProductGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % gallery.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <Image
          src={gallery[currentImage] ?? ''}
          alt="Clay bowl detail"
          width={800}
          height={800}
          className="w-full aspect-square object-cover"
          priority
        />
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="flex space-x-4">
        {gallery.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${currentImage === index ? 'border-amber-500' : 'border-gray-200'}`}
          >
            <Image src={img} alt="" width={400} height={400} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
