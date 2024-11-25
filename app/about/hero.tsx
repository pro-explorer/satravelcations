'use client';
import Link from 'next/link';

const AboutHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop className="absolute left-0 top-0 h-full w-full object-cover">
        <source src="/videos/about-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-center text-white">
        <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl">
          Discover the SATravelcations Experience
        </h1>
        <p className="mx-auto mb-8 max-w-4xl text-lg sm:text-xl">
          SATravelcations is not just a travel agency. We’re your personal gateway to unforgettable
          journeys. Our tailored itineraries and exceptional service are designed to make every trip
          an extraordinary adventure.
        </p>

        {/* Call-to-Action Button */}
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
