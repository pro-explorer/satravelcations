'use client';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import Link from 'next/link';

const slideInFadeInVariants = {
  hidden: { opacity: 0, x: -50 }, // Start from 50px to the left
  visible: { opacity: 1, x: 0 }, // End position with full opacity (no offset)
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const BlogHero = () => {
  const handleScrollToSection = () => {
    // Scroll smoothly to the element with ID 'blogs-headline'
    const element = document.getElementById("blogs-headline");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", // Align the element to the top of the viewport
      });
    }
  };

  return (
    <div className="relative mb-8 h-[500px] w-full overflow-hidden bg-gray-800 sm:h-[600px]">
      {/* Background Image or Video */}
      <div
        className="absolute left-0 top-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/carousel/pexels-adrian-agawin-1386430-2767767.jpg")'
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white sm:px-10">
        <motion.h1
          className="mb-6 text-4xl font-extrabold leading-tight sm:text-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }} // Trigger when 1% is visible
          variants={slideInFadeInVariants}
          transition={{
            type: 'spring', // Spring transition for a more dynamic effect
            stiffness: 100,
            damping: 25,
            duration: 0.8,
          }}
        >
          Travel Stories & Inspiration
        </motion.h1>
        <motion.p
          className="mx-auto mb-8 max-w-3xl text-lg sm:text-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }} // Trigger when 1% is visible
          variants={slideInFadeInVariants}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            duration: 0.8,
            delay: 0.2,
          }}
        >
          Explore our blog for the latest travel tips, destination guides, and inspiring stories.
          Discover new places and experiences with SATravelcations.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center items-center gap-4 space-x-4 mt-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01 }} // Trigger when 1% is visible
            variants={buttonVariants}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              duration: 0.6,
              delay: 0.4,
            }}
          >
            <button
              onClick={handleScrollToSection}
              className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700"
            >
              Explore Our Blog
            </button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01 }} // Trigger when 1% is visible
            variants={buttonVariants}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              duration: 0.6,
              delay: 0.6,
            }}
          >
            <Link
              href="/tag"
              className="rounded-lg border-2 border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-white hover:text-gray-900"
            >
              View Tags
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
