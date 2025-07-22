import { MessageCircle } from 'lucide-react';

const ArtisanConnection = () => (
  <div className="text-center mb-10">
    <div className="max-w-2xl mx-auto space-y-6">
      <p className="text-stone-700 text-lg">
        If my work speaks to you, if you understand that beauty comes from imperfection...
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-colors transform hover:scale-105">
          I want to know when you make something new
        </button>
        <button className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-full hover:bg-stone-50 transition-colors flex items-center gap-2 transform hover:scale-105">
          <MessageCircle className="w-4 h-4" />
          Tell me your story too
        </button>
      </div>
    </div>
  </div>
);

export default ArtisanConnection;
