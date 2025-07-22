import { ArtisansDetailTestimonial } from '@/lib/types';
import { Star } from 'lucide-react';
import React from 'react';

export interface ArtisanTestimonialsProps {
  realTalk: ArtisansDetailTestimonial[];
}

const ArtisanTestimonials: React.FC<ArtisanTestimonialsProps> = ({ realTalk }) => (
  <section className="bg-white rounded-2xl p-8 shadow-sm">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">What Customers Say</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {realTalk.map((testimonial, index) => (
        <div key={index} className="bg-gray-50 rounded-xl p-6">
          <div className="flex items-center gap-1 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
          <div className="text-sm text-gray-600">
            <p className="font-medium">{testimonial.name}</p>
            <p>{testimonial.location}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ArtisanTestimonials;
