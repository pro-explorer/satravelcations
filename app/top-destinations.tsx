"use client";

import Headline from "components/ui/headline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export async function TopDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Cape Town",
      location: "Western Cape",
      country: "South Africa",
      description: "Experience the beauty of Table Mountain and pristine beaches.",
      images: [{ url: "/images/about-hero.jpg" }],
      activities: ["Hiking", "Beaches", "Nature"]
    },
    {
      id: 2,
      name: "Mauritius",
      location: "Indian Ocean",
      country: "Mauritius",
      description: "Discover paradise with crystal-clear waters and stunning resorts.",
      images: [{ url: "/images/about-hero.jpg" }],
      activities: ["Snorkeling", "Resorts", "Adventure"]
    },
    {
      id: 3,
      name: "Santorini",
      location: "Cyclades",
      country: "Greece",
      description: "A dreamy island getaway with sunsets and iconic white-washed houses.",
      images: [{ url: "/images/about-hero.jpg" }],
      activities: ["Sunsets", "Wineries", "Exploration"]
    },
    {
      id: 4,
      name: "Bora Bora",
      location: "Leeward Islands",
      country: "French Polynesia",
      description: "Relax in the lap of luxury with overwater bungalows and turquoise lagoons.",
      images: [{ url: "/images/about-hero.jpg" }],
      activities: ["Luxury", "Water Sports", "Romance"]
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <Headline
          title="Explore Our Top Destinations"
          subtitle="Discover some of the most breathtaking locations for your next getaway. Whether you're seeking luxury, adventure, or tranquility, these destinations are perfect for your dream vacation."
          classes={{
            container: "max-w-4xl mx-auto",
            title: "text-3xl font-bold text-gray-800 dark:text-white",
            subtitle: "mt-4 text-base text-gray-600 dark:text-gray-400",
          }}
        />

        {/* Grid of Destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transform transition-transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                duration: 0.8,
              }}
            >
              <Link href={`/destinations/${destination.id}`} passHref>
                <div className="relative aspect-[16/9]">
                  <Image
                    alt={destination.name}
                    src={destination.images[0]?.url || "/images/placeholder.webp"}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <h2 className="font-bold text-2xl text-gray-900 dark:text-gray-100 mb-3">
                  <Link href={`/destinations/${destination.id}`} className="hover:text-primary-600">
                    {destination.name}
                  </Link>
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">
                  {destination.location}, {destination.country}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
                  {destination.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {destination.activities.map((activity, index) => (
                    <span
                      key={index}
                      className="text-sm bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-full"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
          <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         <Link
             href="/destinations"
             className="inline-block px-8 py-3 bg-primary-600 text-white rounded-full text-lg hover:bg-primary-700 transition duration-300 transform hover:scale-110"
           >
            Discover More
            <FaArrowRight className="inline-block ml-2" />
          </Link>

        </motion.div>
      </div>
    </section>
  );
}
