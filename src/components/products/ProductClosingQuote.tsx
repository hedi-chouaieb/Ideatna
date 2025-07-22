import Image from 'next/image';
interface ProductClosingQuoteProps {
  portrait: string;
  name: string;
}

const ProductClosingQuote = ({ portrait, name }: ProductClosingQuoteProps) => (
  <section className="py-20 bg-amber-800 text-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="mb-8">
        <Image
          src={portrait}
          alt={`${name}'s portrait`}
          width={120}
          height={120}
          className="mx-auto rounded-full border-4 border-white/20"
        />
      </div>
      <blockquote className="text-3xl font-light leading-relaxed mb-6">
        &quot;What the hands remember, the heart never forgets.&quot;
      </blockquote>
      <p className="text-xl opacity-90">— {name} of Sejnane</p>
    </div>
  </section>
);

export default ProductClosingQuote;
