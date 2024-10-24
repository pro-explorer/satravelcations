export default function Home() {
  return (
    <div className="mt-1">
      <div className="container mx-auto flex h-96 bg-white">
        <div className="flex items-center px-8 text-center md:px-12 lg:w-1/2 lg:text-left">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Let's take a tour Cape town!
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Tailor-made Travel Experiences for You. Experience the art of luxury travel with
              expertly curated experiences. Unwind in style, from lavish resorts to exclusive
              escapes!
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <button className="mr-2 mt-2 rounded-xl bg-pink-500 px-5 py-3 text-sm text-white shadow-xl shadow-pink-400/40 hover:bg-pink-600 hover:text-white hover:shadow-xl hover:shadow-pink-300/80 md:mr-0 md:mt-0">
                View Packages
              </button>
              <button className="ml-2 mr-2 mt-2 rounded-xl bg-pink-500 px-5 py-3 text-sm text-white shadow-xl shadow-pink-400/40 hover:bg-pink-600 hover:text-white hover:shadow-xl hover:shadow-pink-300/80 md:mr-0 md:mt-0">
                Explore Blogs
              </button>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2"
          style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
          <div
            className="h-full object-cover"
            style={{
              backgroundImage: `url('https://www.digitalartsonline.co.uk/cmsdata/features/3641812/laptop_work_garden_lifestyle_2.jpg')`
            }}
          >
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
