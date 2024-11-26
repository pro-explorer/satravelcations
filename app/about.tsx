"use client";

import Headline from "components/ui/headline";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowRight, FaRegClipboard, FaStar, FaSuitcaseRolling } from "react-icons/fa";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-16">
      {/* Content Overlay */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-16 text-center">
        {/* Headline with Framer Motion Animation */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Headline
            title="About Us"
            subtitle="Explore luxury travel with SATravelcations. We craft tailor-made trips to breathtaking destinations, ensuring each journey is an unforgettable experience."
            classes={{
              container: "max-w-4xl mx-auto",
              title: "text-3xl font-semibold text-gray-800 dark:text-white",
              subtitle: "mt-4 text-sm text-gray-600 dark:text-gray-400",
            }}
          />
        </motion.div>

        {/* Quick Info Grid with Framer Motion Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action with Framer Motion Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <Link
            href="/about"
            className="inline-block px-6 py-2 bg-primary-600 text-white rounded-full text-sm hover:bg-primary-700 transition duration-300"
          >
            Learn More About Us
            <FaArrowRight className="inline-block ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

const infoItems = [
  {
    title: "Personalized Itineraries",
    description: "Custom-designed trips tailored to your unique preferences.",
    icon: <FaSuitcaseRolling className="w-8 h-8 text-white" />,
  },
  {
    title: "Expert Travel Planners",
    description: "Our team ensures your trip goes smoothly from start to finish.",
    icon: <FaRegClipboard className="w-8 h-8 text-white" />,
  },
  {
    title: "5-Star Experiences",
    description: "Hand-picked luxury resorts and exclusive excursions for our clients.",
    icon: <FaStar className="w-8 h-8 text-white" />,
  },
];
