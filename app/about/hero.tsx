'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const slideInFadeIn = {
  hidden: { opacity: 0, y: '60%' }, // Invisible and positioned below
  visible: { opacity: 1, y: '0%' }, // Fully visible at the actual position
};

const AboutHero = () => {
  return (
    <div className="relative h-[80vh] md:h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop className="absolute left-0 top-0 h-full w-full object-cover">
        <source src="/videos/about-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white px-6">
        {/* Animated Heading */}
        <motion.h1
          className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInFadeIn}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        >
          Discover the SATravelcations Experience
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="mx-auto mb-8 max-w-2xl text-base sm:text-lg md:text-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInFadeIn}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          SATravelcations is not just a travel agency. We’re your personal gateway to unforgettable
          journeys. Our tailored itineraries and exceptional service are designed to make every trip
          an extraordinary adventure.
        </motion.p>

        {/* Animated Call-to-Action Button */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInFadeIn}
          transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto rounded-lg bg-blue-600 px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-lg font-semibold text-white transition duration-300 hover:bg-blue-700 hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
