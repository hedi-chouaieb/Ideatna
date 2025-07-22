import Image from 'next/image';
interface ProductHeroProps {
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
}

const ProductHero = ({ heroImage, heroTitle, heroSubtitle }: ProductHeroProps) => (
  <div className="relative h-screen overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10"></div>
    <Image
      src={heroImage}
      alt="Clay bowl in natural setting"
      fill
      className="w-full h-full object-cover"
      style={{ objectFit: 'cover' }}
    />
    <div className="absolute inset-0 z-20 flex items-center justify-center">
      <div className="text-center text-white max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 animate-fade-in">
          {heroTitle}
        </h1>
        <p className="text-xl md:text-2xl font-light opacity-90 animate-fade-in-delay">
          {heroSubtitle}
        </p>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductHero;
