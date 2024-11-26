'use client';

import { DestinationsPreview } from 'components/destination-preview';
import Headline from 'components/ui/headline';
import { motion } from 'framer-motion';
import { Destination } from 'lib/wix/types';
import DestinationsHero from './hero';


// Define the animation variants for the headline
const slideInFadeInVariants = {
  hidden: { opacity: 0, y: 50 }, // Initially hidden and below the viewport
  visible: { opacity: 1, y: 0 },  // Fade-in and slide-up to normal position
};






// List of available images
const images = [
  '/images/carousel/pexels-element5-1051075.jpg',
  '/images/carousel/pexels-te-lensfix-380994-1371360.jpg',
  '/images/carousel/pexels-tima-miroshnichenko-7009867.jpg',
  '/images/carousel/pexels-adrian-agawin-1386430-2767767.jpg',
  '/images/carousel/pexels-connor-danylenko-534256-2612113.jpg',
  '/images/carousel/pexels-freestockpro-2144326.jpg',
  '/images/carousel/pexels-kampus-8170304.jpg',
  '/images/carousel/pexels-shvetsa-3943883.jpg',
];

// Sample data for 30 destinations
const destinations: Destination[] = Array.from({ length: 30 }, (_, index) => ({
  id: `${index + 1}`,
  name: `Destination ${index + 1}`,
  description: `This is a description of destination ${index + 1}. A beautiful place with amazing experiences and adventures.`,
  location: `City ${index + 1}`,
  country: `Country ${index + 1}`,
  images: [
    {
      url: images[index % images.length]||"/images/placeholder.webp", // Select images from the provided list
      altText: "string",
      width: 0,
      height: 0,
    },
  ],
  activities: [`Activity ${index + 1}`, `Activity ${index + 2}`, `Activity ${index + 3}`],
  rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
  reviewsCount: Math.floor(Math.random() * 1000), // Random reviews count between 0 and 1000
  featured: index % 2 === 0, // Featured destinations alternate every other item
  seo: {
    title: `SEO Title for Destination ${index + 1}`,
    description: `SEO description for destination ${index + 1}`,
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  luxurious: index % 3 === 0, // Randomly mark some destinations as luxurious
}));






export default async function DestinationsPage() {

  //const destinations = await getPages()

  return (
    <>
      <DestinationsHero />
      <div className="container mx-auto px-8 xl:px-5">
     
      <div className="mt-4">

    {/* Wrapping Headline with motion.div for animation */}
    <motion.div
            variants={slideInFadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01 }} // Trigger when 1% is in view
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              duration: 0.8,
            }}
          >
<Headline
          title="Explore Our Destinations"
          subtitle="Handpicked destinations for every traveler, from breathtaking beaches to majestic mountains."
          tagline="Unforgettable Journeys Await"
          classes={{
            container: "max-w-4xl mx-auto",
            title: "text-4xl font-bold text-gray-800 dark:text-white",
            subtitle: "mt-4 text-lg text-gray-600 dark:text-gray-400",
          }}
        />
 </motion.div>

  
</div>
        
<DestinationsPreview destinations={destinations} />

      
      </div>
    </>
  );
}
