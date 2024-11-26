'use client';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import Image from 'next/image';
import Link from 'next/link';

const DestinationsHero = () => {
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
        {/* Hero Heading with Slide-in Fade-in Animation */}
        <motion.h1
          className="mb-4 text-5xl font-bold leading-tight sm:text-6xl"
          initial={{ opacity: 0, x: -50 }} // Start from the left and invisible
          animate={{ opacity: 1, x: 0 }}   // Animate to visible and in the original position
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            duration: 0.8,
          }}
        >
          Explore the World with SATravelcations
        </motion.h1>

        {/* Subheading with Slide-in Fade-in Animation */}
        <motion.p
          className="mx-auto mb-6 max-w-3xl text-lg sm:text-xl"
          initial={{ opacity: 0, x: 50 }}  // Start from the right and invisible
          animate={{ opacity: 1, x: 0 }}   // Animate to visible and in the original position
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            duration: 0.8,
            delay: 0.2,  // Delay for a smooth sequence
          }}
        >
          Discover your next adventure with personalized travel experiences that take you to the
          most beautiful destinations around the globe.
        </motion.p>

        {/* Call-to-Action Buttons with Slide-in Fade-in Animation */}
        <div className="flex gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}  // Start below and invisible
            animate={{ opacity: 1, y: 0 }}   // Animate to visible and position it
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              duration: 0.8,
              delay: 0.4, // Delay for button 1
            }}
          >
            <Link
              href="#destinations-headline"
              className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700"
            >
              Explore Destinations
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}  // Start below and invisible
            animate={{ opacity: 1, y: 0 }}   // Animate to visible and position it
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              duration: 0.8,
              delay: 0.6, // Delay for button 2
            }}
          >
            <Link
              href="/search"
              className="rounded-lg border-2 border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-600"
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
