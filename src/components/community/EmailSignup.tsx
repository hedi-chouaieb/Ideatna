import { Mail } from 'lucide-react';
import { useState } from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  return (
    <section className="bg-amber-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-12 h-12 mx-auto mb-6  text-white" />
        <h2 className="text-3xl font-bold mb-4">Want to Support Handmade?</h2>
        <p className="text-amber-100 text-lg mb-8">Join our community for exclusive drops and stories from the workshop</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-md text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
          />
          <button className="bg-stone-800 hover:bg-stone-900 text-white px-6 py-3 rounded-md font-medium transition-colors">
            Join Community
          </button>
        </div>
        <p className="text-amber-200 text-sm mt-4">Get 10% off your first order • Unsubscribe anytime</p>
      </div>
    </section>
  );
};

export default EmailSignup;
