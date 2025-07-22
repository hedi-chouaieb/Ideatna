import { fetchFeaturedArtisans } from '@/lib/artisansService';
import { Artisan } from '@/lib/types';
import { MapPin } from 'lucide-react';
import Image from "next/image";
import { useEffect, useState } from 'react';

const safe = <T,>(val: T | undefined, fallback: T) => val === undefined ? fallback : val;

const ArtisanSpotlights = () => {
  const [artisans, setArtisans] = useState<Artisan[]>([]);

  useEffect(() => {
    fetchFeaturedArtisans().then(setArtisans);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="artisans">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-stone-800 mb-4">Meet Our Artisans</h2>
        <p className="text-stone-600 text-lg">Discover authentic handmade treasures from skilled craftspeople across Tunisia</p>
      </div>
      <div className="grid grid-cols-12 gap-2 h-[600px]">
        {/* Large left artisan - Amina */}
        <div className="col-span-12 md:col-span-6 group cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
          <Image
            src={safe(artisans[0]?.image, '/fake/broken-image.png')}
            alt={safe(artisans[0]?.name, 'Artisan')}
            width={800}
            height={600}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent"></div>
          <div className="absolute top-6 right-6 flex space-x-2">
            <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-white/80 shadow-lg backdrop-blur-sm">
              <Image src={safe(artisans[0]?.productsImages[0], '/fake/broken-image.png')} alt="Basket" width={400} height={400} className="w-full h-full object-cover" />
            </div>
            <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-white/80 shadow-lg backdrop-blur-sm">
              <Image src={safe(artisans[0]?.productsImages[1], '/fake/broken-image.png')} alt="Rug" width={400} height={400} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col">
            <div className="transition-all duration-300 group-hover:translate-y-[-48px] translate-y-0 z-10">
              <h3 className="text-2xl font-bold mb-2">{safe(artisans[0]?.name, 'Artisan')}</h3>
              <p className="text-amber-300 font-semibold mb-2">{safe(artisans[0]?.craft, '')}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-white/90">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{safe(artisans[0]?.location, '')}</span>
                </div>
                <span className="text-white/70 text-sm">+{safe(artisans[0]?.products, 0) - 2} more items</span>
              </div>
            </div>
            <button
              className="w-full bg-white/20 backdrop-blur-md text-white py-3 rounded-xl hover:bg-white/30 transition-all duration-200 font-semibold border border-white/20 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0"
              style={{ marginTop: '-48px', zIndex: 20 }}
            >
              Shop {safe(artisans[0]?.name, 'Artisan')}&apos;s Work
            </button>
          </div>
        </div>
        {/* Right column with medium and small artisans */}
        <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
          {/* Medium top right - Salem */}
          <div className="group cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-[300px] relative">
            <Image
              src={safe(artisans[1]?.image, '/fake/broken-image.png')}
              alt={safe(artisans[1]?.name, 'Artisan')}
              width={800}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent"></div>
            <div className="absolute top-4 right-4 flex space-x-2">
              <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/80 shadow-lg">
                <Image src={safe(artisans[1]?.productsImages[0], '/fake/broken-image.png')} alt="Vase" width={400} height={400} className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/80 shadow-lg">
                <Image src={safe(artisans[1]?.productsImages[1], '/fake/broken-image.png')} alt="Bowl" width={400} height={400} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex flex-col">
              <div className="transition-all duration-300 group-hover:translate-y-[-48px] translate-y-0 z-10">
                <h3 className="text-xl font-bold mb-1">{safe(artisans[1]?.name, 'Artisan')}</h3>
                <p className="text-amber-300 font-semibold mb-2">{safe(artisans[1]?.craft, '')}</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-white/90">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{safe(artisans[1]?.location, '')}</span>
                  </div>
                  <span className="text-white/70 text-xs">+{safe(artisans[1]?.products, 0) - 2} more</span>
                </div>
              </div>
              <button className="w-full bg-white/20 backdrop-blur-md text-white py-2 rounded-lg hover:bg-white/30 transition-all duration-200 font-medium border border-white/20 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0"
                style={{ marginTop: '-48px', zIndex: 20 }}
              >
                Shop {safe(artisans[1]?.name, 'Artisan')}&apos;s Work
              </button>
            </div>
          </div>
          {/* Bottom row with two small artisans */}
          <div className="flex gap-2 h-[300px]">
            {/* Small bottom left - Khouloud */}
            <div className="flex-1 group cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
              <Image
                src={safe(artisans[2]?.image, '/fake/broken-image.png')}
                alt={safe(artisans[2]?.name, 'Artisan')}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent"></div>
              <div className="absolute top-3 right-3 flex space-x-1">
                <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-white/80 shadow-lg">
                  <Image src={safe(artisans[2]?.productsImages[0], '/fake/broken-image.png')} alt="Embroidery" width={400} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-white/80 shadow-lg">
                  <Image src={safe(artisans[2]?.productsImages[1], '/fake/broken-image.png')} alt="Textile" width={400} height={400} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex flex-col">
                <div className="transition-all duration-300 group-hover:translate-y-[-48px] translate-y-0 z-10">
                  <h3 className="text-lg font-bold mb-1">{safe(artisans[2]?.name, 'Artisan')}</h3>
                  <p className="text-amber-300 font-semibold text-sm mb-2">{safe(artisans[2]?.craft, '')}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-white/90">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span className="text-xs">{safe(artisans[2]?.location, '')}</span>
                    </div>
                    <span className="text-white/70 text-xs">+{safe(artisans[2]?.products, 0) - 2}</span>
                  </div>
                </div>
                <button className="w-full bg-white/20 backdrop-blur-md text-white py-2 rounded-lg hover:bg-white/30 transition-all duration-200 font-medium text-sm border border-white/20 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0"
                  style={{ marginTop: '-48px', zIndex: 20 }}
                >
                  Shop {safe(artisans[2]?.name, 'Artisan')}&apos;s Work
                </button>
              </div>
            </div>
            {/* Small bottom right - Nizar */}
            <div className="flex-1 group cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
              <Image
                src={safe(artisans[3]?.image, '/fake/broken-image.png')}
                alt={safe(artisans[3]?.name, 'Artisan')}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent"></div>
              <div className="absolute top-3 right-3 flex space-x-1">
                <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-white/80 shadow-lg">
                  <Image src={safe(artisans[3]?.productsImages[0], '/fake/broken-image.png')} alt="Bowl" width={400} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-white/80 shadow-lg">
                  <Image src={safe(artisans[3]?.productsImages[1], '/fake/broken-image.png')} alt="Cutting board" width={400} height={400} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex flex-col">
                <div className="transition-all duration-300 group-hover:translate-y-[-48px] translate-y-0 z-10">
                  <h3 className="text-lg font-bold mb-1">{safe(artisans[3]?.name, 'Artisan')}</h3>
                  <p className="text-amber-300 font-semibold text-sm mb-2">{safe(artisans[3]?.craft, '')}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-white/90">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span className="text-xs">{safe(artisans[3]?.location, '')}</span>
                    </div>
                    <span className="text-white/70 text-xs">+{safe(artisans[3]?.products, 0) - 2}</span>
                  </div>
                </div>
                <button className="w-full bg-white/20 backdrop-blur-md text-white py-2 rounded-lg hover:bg-white/30 transition-all duration-200 font-medium text-sm border border-white/20 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0"
                  style={{ marginTop: '-48px', zIndex: 20 }}
                >
                  Shop {safe(artisans[3]?.name, 'Artisan')}&apos;s Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanSpotlights;
