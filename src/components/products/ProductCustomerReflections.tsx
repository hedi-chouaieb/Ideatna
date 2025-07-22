import { Star } from 'lucide-react';
import Image from 'next/image';

interface ProductCustomerReflectionsProps {
  reflections: {
    text: string;
    author: string;
    image: string;
  }[];
}

const ProductCustomerReflections = ({ reflections }: ProductCustomerReflectionsProps) => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-light text-center text-gray-800 mb-16">
        What This Means to Others
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reflections.map((reflection, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-2xl space-y-4">
            <Image
              src={reflection.image}
              alt="Customer's bowl in their home"
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded-xl"
            />
            <blockquote className="text-gray-700 italic leading-relaxed">
              &quot;{reflection.text}&quot;
            </blockquote>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm text-gray-600">— {reflection.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductCustomerReflections;
