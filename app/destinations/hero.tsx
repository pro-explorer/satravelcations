'use client';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero.jpg" // You can replace this with any of your image URLs
          alt="Exotic destination"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 text-5xl font-bold leading-tight sm:text-6xl">
          Explore the World with SATravelcations
        </h1>
        <p className="mx-auto mb-6 max-w-3xl text-lg sm:text-xl">
          Discover your next adventure with personalized travel experiences that take you to the
          most beautiful destinations around the globe.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex gap-4">
          <Link
            href="#destinations-headline"
            className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Explore Destinations
          </Link>

          <Link
            href="/search"
            className="rounded-lg border-2 border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-600"
          >
            Find Your Trip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
