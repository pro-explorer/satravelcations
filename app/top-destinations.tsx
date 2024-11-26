 "use client"
 
import Headline from 'components/ui/headline';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export async function  TopDestinations  () {

  const destinations = []

  return (
    <section className="py-16 ">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight mb-8 sm:text-5xl"></h2>
     
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Destination Item 1 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/images/about-hero.jpg"
              alt="Cape Town"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-2xl font-bold">Cape Town</h3>
              <p className="text-sm">Experience the beauty of Table Mountain and pristine beaches.</p>
            </div>
          </div>

          {/* Destination Item 2 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/images/about-hero.jpg"
              alt="Mauritius"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-2xl font-bold">Mauritius</h3>
              <p className="text-sm">Discover paradise with crystal-clear waters and stunning resorts.</p>
            </div>
          </div>

          {/* Destination Item 3 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/images/about-hero.jpg"
              alt="Santorini"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-2xl font-bold">Santorini</h3>
              <p className="text-sm">A dreamy island getaway with sunsets and iconic white-washed houses.</p>
            </div>
          </div>

          {/* Destination Item 4 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/images/about-hero.jpg"
              alt="Bora Bora"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-2xl font-bold">Bora Bora</h3>
              <p className="text-sm">Relax in the lap of luxury with overwater bungalows and turquoise lagoons.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">

        <Link
            href="/destinations"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-full text-lg hover:bg-primary-700 transition duration-300"
          >
           Explore More Destinations
            <FaArrowRight className="inline-block ml-2" />
          </Link>

        
        </div>
      </div>
    </section>
  );
};


