'use client';
import Image from 'next/image';
import Link from 'next/link';

export const DestinationGrid = () => {
  const destinations = [
    { name: 'Cape Town', description: 'Experience the beauty of Table Mountain, pristine beaches, and vibrant city life.' },
    { name: 'Kruger National Park', description: 'Discover the Big Five and immerse yourself in Africa’s iconic wildlife.' },
    { name: 'Victoria Falls', description: 'Witness the breathtaking “Smoke That Thunders” on the border of Zimbabwe and Zambia.' },
    { name: 'Drakensberg Mountains', description: 'Escape to the majestic peaks and serene trails of the Drakensberg.' },
    { name: 'Durban Beach', description: 'Relax on the golden sands and enjoy the vibrant coastal vibes of Durban.' },
    { name: 'Stellenbosch Wine Country', description: 'Savor the finest wines and scenic vineyards of Stellenbosch.' },
    { name: 'Garden Route', description: 'Journey along the Garden Route, a haven of lush forests and serene beaches.' },
    { name: 'Johannesburg', description: 'Explore the bustling city life and rich history of Johannesburg.' },
  ];

  const imageSrcs = [
    '/images/carousel/pexels-element5-1051075.jpg',
    '/images/carousel/pexels-te-lensfix-380994-1371360.jpg',
    '/images/carousel/pexels-tima-miroshnichenko-7009867.jpg',
    '/images/carousel/pexels-adrian-agawin-1386430-2767767.jpg',
    '/images/carousel/pexels-connor-danylenko-534256-2612113.jpg',
    '/images/carousel/pexels-freestockpro-2144326.jpg',
    '/images/carousel/pexels-kampus-8170304.jpg',
    '/images/carousel/pexels-shvetsa-3943883.jpg',
  ];

  const getRandomImage = () => imageSrcs[Math.floor(Math.random() * imageSrcs.length)];

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {destinations.map((destination, index) => (
        <div
          key={index}
          className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105"
        >
          <div className="relative h-48 w-full">
            <Image
              src={`${getRandomImage()}`}
              alt={destination.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{destination.name}</h3>
            <p className="text-gray-600 mt-2 text-sm">{destination.description}</p>
            <Link
              href="/search"
              className="mt-4 inline-block w-full bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
