"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { RiArrowRightSLine, RiCompassDiscoverLine } from "react-icons/ri";

const Hero = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Animates children with a delay between each
      },
    },
  };

  return (
    <motion.section
      className="relative -mt-2 h-[580px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }} // Trigger animation every time
      variants={container}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/home-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 py-8 text-slate-50 sm:px-16">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
          {/* Animated Alert */}
          <motion.a
            href="/search?sort=latest-desc"
            className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            role="alert"
            variants={fadeInUp}
            viewport={{ once: false, amount: 0.5 }}
          >
            <span className="mr-3 rounded-full bg-primary-600 px-4 py-1.5 text-xs text-white">
              New
            </span>
            <span className="text-sm font-medium">See what's new</span>
            <RiArrowRightSLine className="ml-2 h-5 w-5" />
          </motion.a>

          {/* Animated Headline */}
          <motion.h1
            className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl"
            variants={fadeInUp}
            viewport={{ once: false, amount: 0.5 }}
          >
            Let's take a tour Cape Town!
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            className="mb-8 text-lg font-normal sm:px-16 lg:text-xl xl:px-48"
            variants={fadeInUp}
            viewport={{ once: false, amount: 0.5 }}
          >
            Tailor-made Travel Experiences for You. Experience the art of luxury travel with
            expertly curated experiences. Unwind in style, from lavish resorts to exclusive escapes!
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16"
            variants={fadeInUp}
            viewport={{ once: false, amount: 0.5 }}
          >
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Learn more
              <FaArrowRight className="-mr-1 ml-2 h-5 w-5" />
            </a>

            <Link
              href="/search"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-600"
            >
              <RiCompassDiscoverLine className="mr-2 -ml-1 h-5 w-5" />
              Explore packages
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
