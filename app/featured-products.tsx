import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Headline from 'components/ui/headline';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedProducts = () => {
  // Example products array
  const products = [
    {
      title: 'Luxury Beach Getaway',
      description: 'A relaxing 5-star beachfront resort experience in Bali.',
      price: '$2,500',
      image: '/images/product1.jpg',
    },
    {
      title: 'Safari Adventure in Africa',
      description: 'An unforgettable safari experience in South Africa.',
      price: '$3,000',
      image: '/images/product2.jpg',
    },
    {
      title: 'Romantic Getaway in Paris',
      description: 'Explore the city of love with private tours and experiences.',
      price: '$1,800',
      image: '/images/product3.jpg',
    },
  ];

  return (
    <section className="py-16 ">
      <div className="  text-center">
        {/* Section Heading */}
    

        <Headline
        title="Choose Your Packages"
        subtitle="Packages"
        tagline="Luxury, Adventure, Memories"
        classes={{
           container: "max-w-4xl mx-auto",
    title: "text-3xl font-bold text-gray-800 dark:text-white", 
    subtitle: "mt-4 text-base text-gray-600 dark:text-gray-400", 
        }}
      />

        {/* Product Cards */}
        <ThreeItemGrid />
        <Carousel />

        {/* CTA Button */}
        <div className="mt-12">
          <Link
            href="/search"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-full text-lg hover:bg-primary-700 transition duration-300"
          >
            Discover More Packages
            <FaArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
