'use client';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/carousel/pexels-element5-1051075.jpg"  // You can replace this with any of your image URLs
          alt="Exotic destination"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
          Explore the World with SATravelcations
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto">
          Discover your next adventure with personalized travel experiences that take you to the most beautiful destinations around the globe.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex gap-4">
          <Link href="/destinations" className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              Explore Destinations
         
          </Link>
          
          <Link href="/search" className="px-8 py-3 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
              Find Your Trip
          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
