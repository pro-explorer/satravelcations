'use client';
import Link from 'next/link';

const BlogHero = () => {
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
        <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-6xl">
          Travel Stories & Inspiration
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg sm:text-xl">
          Explore our blog for the latest travel tips, destination guides, and inspiring stories.
          Discover new places and experiences with SATravelcations.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            href="#blogs-headline"
            className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Explore Our Blog
          </Link>
          <Link
            href="/tag"
            className="rounded-lg border-2 border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-white hover:text-gray-900"
          >
            View Tags
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
