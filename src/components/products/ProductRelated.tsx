import Image from 'next/image';
interface ProductRelatedProps {
  relatedProducts: {
    name: string;
    price: string;
    image: string;
  }[];
}

const ProductRelated = ({ relatedProducts }: ProductRelatedProps) => (
  <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
    <div className="max-w-7xl mx-auto px-6">
      <h3 className="text-3xl font-light text-center text-gray-800 mb-4">
        More Stories from Selma&apos;s Workshop
      </h3>
      <p className="text-center text-gray-600 mb-16">
        Each piece carries the same spirit, shaped by the same hands
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {relatedProducts.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <Image src={item.image} alt={item.name} width={400} height={256} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h4 className="font-medium text-gray-800 mb-2">{item.name}</h4>
              <p className="text-amber-800 font-medium mb-4">{item.price}</p>
              <button className="w-full bg-amber-100 text-amber-800 py-2 rounded-full hover:bg-amber-200 transition-colors">
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductRelated;
