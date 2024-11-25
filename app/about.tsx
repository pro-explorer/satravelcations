 "use client"
 
import Headline from 'components/ui/headline';
import Link from 'next/link';
import { FaArrowRight, FaRegClipboard, FaStar, FaSuitcaseRolling } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="relative py-16 ">
      {/* Content Overlay */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-16 text-center">
      

        <Headline
        title="About Us"
        subtitle="Discover a world of luxurious travel experiences. At SATravelcations, we create tailor-made trips to the world's most beautiful destinations, ensuring every detail is just right."
        classes={{
          container: "max-w-4xl mx-auto",
          title: "text-4xl font-bold text-gray-800 dark:text-white",
          subtitle: "mt-4 text-lg text-gray-600 dark:text-gray-400",
        }}
      />

        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Personalized Itineraries */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center">
              <FaSuitcaseRolling className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Personalized Itineraries</h3>
              <p className="text-sm text-gray-700">Travel the way you want, with bespoke packages designed just for you.</p>
            </div>
          </div>

          {/* Expert Travel Planners */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center">
              <FaRegClipboard className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Expert Travel Planners</h3>
              <p className="text-sm text-gray-700">Our team of travel experts are here to ensure everything runs smoothly.</p>
            </div>
          </div>

          {/* 5-Star Experiences */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center">
              <FaStar className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">5-Star Experiences</h3>
              <p className="text-sm text-gray-700">We hand-pick the finest resorts, hotels, and excursions for our clients.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}

        <div className="flex justify-center">


        <Link
            href="/about"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-full text-lg hover:bg-primary-700 transition duration-300"
          >
           Learn More About Us
            <FaArrowRight className="inline-block ml-2" />
          </Link>

         
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
