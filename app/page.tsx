import { Carousel } from 'components/carousel';
import { CarouselClient } from 'components/Carousel/Carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Hero from 'components/hero';
import Footer from 'components/layout/footer';
import Features2 from 'components/widgets/Features2';

export const metadata = {
  description:
    'Explore South Africa with us. Tailor-made Travel Experiences for You. Experience the art of luxury travel with expertly curated experiences. Unwind in style, from lavish resorts to exclusive escapes!',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreeItemGrid />
      <Carousel />
      <AboutUs/>
     
      <section className=" py-16">
        <div className="mx-auto max-w-screen-xl px-6 text-center sm:px-16">
          <h2 className="mb-12 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Explore Our Top Destinations
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Destination Card 1 */}
            <div className="relative transform overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
              <img
                src="/images/destination1.jpg"
                alt="Cape Town"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 text-white">
                <h3 className="text-xl font-semibold">Cape Town</h3>
                <p className="text-sm">
                  Experience the beauty of the iconic Table Mountain, pristine beaches, and vibrant
                  culture.
                </p>
                <a
                  href="/destination/cape-town"
                  className="mt-4 inline-block rounded-full bg-primary-600 px-4 py-2 text-white transition duration-300 hover:bg-primary-700"
                >
                  View More
                </a>
              </div>
            </div>

            {/* Destination Card 2 */}
            <div className="relative transform overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
              <img
                src="/images/destination2.jpg"
                alt="Kruger National Park"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 text-white">
                <h3 className="text-xl font-semibold">Kruger National Park</h3>
                <p className="text-sm">
                  Embark on a safari adventure in one of the largest game reserves in South Africa.
                </p>
                <a
                  href="/destination/kruger-national-park"
                  className="mt-4 inline-block rounded-full bg-primary-600 px-4 py-2 text-white transition duration-300 hover:bg-primary-700"
                >
                  View More
                </a>
              </div>
            </div>

            {/* Destination Card 3 */}
            <div className="relative transform overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
              <img
                src="/images/destination3.jpg"
                alt="Johannesburg"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 text-white">
                <h3 className="text-xl font-semibold">Johannesburg</h3>
                <p className="text-sm">
                  A dynamic city that blends culture, history, and modernity with rich experiences.
                </p>
                <a
                  href="/destination/johannesburg"
                  className="mt-4 inline-block rounded-full bg-primary-600 px-4 py-2 text-white transition duration-300 hover:bg-primary-700"
                >
                  View More
                </a>
              </div>
            </div>

            {/* Destination Card 4 */}
            <div className="relative transform overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
              <img
                src="/images/destination4.jpg"
                alt="Durban"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 text-white">
                <h3 className="text-xl font-semibold">Durban</h3>
                <p className="text-sm">
                  Discover golden beaches, rich Zulu heritage, and endless sunshine in Durban.
                </p>
                <a
                  href="/destination/durban"
                  className="mt-4 inline-block rounded-full bg-primary-600 px-4 py-2 text-white transition duration-300 hover:bg-primary-700"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative mx-auto py-5 sm:px-20">
        <Features2 />

        <h2 className="font-site mb-10 text-center text-3xl sm:mb-20 sm:text-5xl">
          2035 in Numbers
        </h2>
        <div className="font-site flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="relative text-center sm:text-left">
            <span className="text-purple-site block text-4xl sm:text-[200px] sm:leading-[200px]">
              40K
            </span>
            <span className="border-purple-site block border-t-4 bg-white/70 text-xl text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white sm:absolute sm:right-0 sm:top-[190px] sm:inline-block sm:text-4xl">
              Dollars
              <br />
              Raised
            </span>
          </div>
          <div className="relative text-center sm:text-left">
            <span className="text-purple-site text-4xl sm:text-[200px] sm:leading-[200px]">8K</span>
            <span className="border-purple-site block border-t-4 bg-white/70 text-xl text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white sm:absolute sm:left-[130px] sm:top-[50px] sm:inline-block sm:text-4xl">
              Happy
              <br />
              Travelers
            </span>
          </div>
          <div className="relative text-center sm:text-left">
            <span className="text-purple-site text-4xl sm:text-[200px] sm:leading-[200px]">
              100%
            </span>
            <span className="border-purple-site block border-t-4 bg-white/70 text-xl text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white sm:absolute sm:left-[150px] sm:top-[130px] sm:inline-block sm:text-4xl">
              Satisfaction
              <br />
              Rate
            </span>
          </div>
        </div>

        <CarouselClient />
      </div>

      <Footer />
    </>
  );
}



const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50 relative">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video className="object-cover w-full h-full" autoPlay loop muted>
          <source src="/videos/about-us-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight mb-8 sm:text-5xl text-white">
          About SATravelcations
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side - Textual Content */}
          <div className="lg:w-1/2 space-y-4 text-left text-white">
            <h3 className="text-2xl font-semibold">Your Personalized Travel Experience</h3>
            <p className="text-lg">
              At SATravelcations, we believe that travel is more than just a destination; it's an experience.
              We specialize in crafting luxurious, personalized travel itineraries to match your unique tastes and preferences.
            </p>
            <p className="text-lg">
              From romantic getaways to adventurous expeditions, our expert travel planners ensure every detail is perfect for an unforgettable journey.
            </p>
            <div className="mt-8 flex justify-center gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-primary-600">100+ Destinations</h4>
                <p className="text-sm">Explore the world with us</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-primary-600">5-Star Experiences</h4>
                <p className="text-sm">Luxury and comfort are our promises</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-primary-600">24/7 Customer Support</h4>
                <p className="text-sm">We're here for you at every step</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2 hidden lg:block">
            {/* You could add another video or related image here if needed */}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a 
            href="/about" 
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-full text-lg hover:bg-primary-700 transition duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};


