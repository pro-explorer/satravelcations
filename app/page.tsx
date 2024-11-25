import { Carousel } from 'components/carousel';
import { CarouselClient } from 'components/Carousel/Carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Hero from 'components/hero';
import Footer from 'components/layout/footer';
import ContactForm from 'components/widgets/contact-form';
import Features2 from 'components/widgets/Features2';
import Image from 'next/image';

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
    
     <TopDestinations/>
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
      <ContactUs/>
      <Footer />
    </>
  );
}



const AboutUs = () => {
  return (
    <section className="relative py-16 bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video className="object-cover w-full h-full opacity-70" autoPlay loop muted>
          <source src="/videos/about-us-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-16 text-center text-white">
        <h2 className="text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl">About SATravelcations</h2>
        
        <p className="text-lg mb-8 sm:text-xl">
          Discover a world of luxurious travel experiences. At SATravelcations, we create tailor-made trips to the world's most beautiful destinations, ensuring every detail is just right.
        </p>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4a6 6 0 1112 0A6 6 0 0110 4zm0 10a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Personalized Itineraries</h3>
              <p className="text-sm">Travel the way you want, with bespoke packages designed just for you.</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.933 6.467L1.5 7.898 9 15.398l7.5-7.5-1.433-1.431-6.067 6.067z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Expert Travel Planners</h3>
              <p className="text-sm">Our team of travel experts are here to ensure everything runs smoothly.</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12V6H8v6H4l8 8 8-8h-4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">5-Star Experiences</h3>
              <p className="text-sm">We hand-pick the finest resorts, hotels, and excursions for our clients.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
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



const TopDestinations = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight mb-8 sm:text-5xl">Explore Our Top Destinations</h2>
        <p className="text-lg mb-12 sm:text-xl">
          Discover some of the most breathtaking locations for your next getaway. Whether you're seeking luxury, adventure, or tranquility, these destinations are perfect for your dream vacation.
        </p>

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
          <a
            href="/destinations"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-full text-lg hover:bg-primary-700 transition duration-300"
          >
            Explore More Destinations
          </a>
        </div>
      </div>
    </section>
  );
};




const ContactUs = () => {
  return (
    <section className="relative py-16">
      {/* Background Image for the entire section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-background.jpg"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50" // Slightly reduced opacity for the background image
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        <div className="lg:flex items-center justify-between gap-12">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 text-center lg:text-left text-white relative z-10 px-4">
            {/* Text overlay with background for better contrast */}
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl">
                Get in Touch
              </h2>
              <p className="text-lg mb-8 sm:text-xl">
                Have questions or need assistance with your travel plans? Fill out the form below, and one of our travel specialists will be in touch with you shortly.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2 w-full bg-white bg-opacity-90 shadow-lg rounded-lg p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

