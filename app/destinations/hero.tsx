'use client';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import Image from 'next/image';
import Link from 'next/link';

const DestinationsHero = () => {
  return (
    <div className="relative h-[80vh] md:h-screen w-full bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero.jpg" // Replace with your image URL
          alt="Exotic destination"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        {/* Hero Heading */}
        <motion.h1
          className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            duration: 0.8,
          }}
        >
          Explore the World with SATravelcations
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mx-auto mb-6 max-w-2xl text-base sm:text-lg md:text-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            duration: 0.8,
            delay: 0.2,
          }}
        >
          Discover personalized travel experiences to the most beautiful destinations across the
          globe, curated just for you.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              duration: 0.8,
              delay: 0.4,
            }}
          >
            <Link
              href="#destinations-headline"
              className="w-full sm:w-auto rounded-lg bg-blue-600 px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-lg font-semibold text-white transition duration-300 hover:bg-blue-700"
            >
              Explore Destinations
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              duration: 0.8,
              delay: 0.6,
            }}
          >
            <Link
              href="/search"
              className="w-full sm:w-auto rounded-lg border-2 border-white bg-transparent px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-lg font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-600"
            >
              Find Your Trip
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsHero;
