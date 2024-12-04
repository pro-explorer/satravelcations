import { motion } from 'framer-motion'; // Import framer-motion
import { Destination } from 'lib/wix/types'; // Assuming 'types' contains the Destination type
import Image from 'next/image';
import Link from 'next/link';

// DestinationPreview Component
const DestinationPreview = ({ destination }: { destination: Destination }) => {
  return (
    <motion.div
      className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transform transition-transform hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0, y: 50 }} // Start position with opacity 0 and 50px below
      whileInView={{ opacity: 1, y: 0 }} // End position with full opacity and no offset
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 25,
        duration: 0.8,
      }}
    >
      <Link href={`/destinations/${destination.id}`} passHref>
        <div className="relative aspect-[16/9]">
          <Image
            alt={destination.name}
            src={destination.images[0]?.url || '/images/placeholder.webp'}
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
  );
};

// DestinationsPreview Component
const DestinationsPreview = ({ destinations }: { destinations: Destination[] }) => {
  return (
    <div className="grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-3 my-8">
      {destinations.map((destination) => (
        <div key={destination.id}>
          <DestinationPreview destination={destination} />
        </div>
      ))}
    </div>
  );
};

// Exporting both components
export { DestinationPreview, DestinationsPreview };
