import { ThreeItemGrid } from 'components/grid/three-items';
import Hero from 'components/hero';
import Footer from 'components/layout/footer';
import ContactForm from 'components/widgets/contact-form';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { FaPlaneDeparture, FaRegClipboard, FaStar, FaSuitcaseRolling, FaThumbsUp, FaUserCheck } from 'react-icons/fa';

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
      <StatisticsSection/>
      <CarouselClient/>
      <ContactUs/>
      <Footer />
    </>
  );
}



const AboutUs = () => {
  return (
    <section className="relative py-16 ">
      {/* Content Overlay */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl ">
          About Us
        </h2>

        <p className="text-lg mb-8 sm:text-xl max-w-3xl mx-auto">
          Discover a world of luxurious travel experiences. At SATravelcations, we create tailor-made trips to the world's most beautiful destinations, ensuring every detail is just right.
        </p>

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
          <a 
            href="/about" 
            className="inline-block px-10 py-4 bg-primary-600 text-white rounded-full text-lg shadow-lg hover:bg-primary-700 transition duration-300"
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

const StatisticsSection = () => {
  return (
    <section className="py-16 ">
      {/* Content Container */}
      <div className="max-w-screen-xl mx-auto px-6 text-center ">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl">
            Our Achievements
          </h2>
          <p className="text-lg mb-8 sm:text-xl">
            We take pride in delivering exceptional travel experiences. Here’s what makes us stand out.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Happy Customers */}
          <div className="flex flex-col items-center justify-center p-6 bg-white bg-opacity-20 shadow-xl rounded-lg">
            <FaUserCheck className="text-6xl text-primary-600 mb-4" />
            <h3 className="text-3xl font-extrabold">5000+</h3>
            <p className="text-lg font-medium">Happy Travelers</p>
          </div>

          {/* Trips Taken */}
          <div className="flex flex-col items-center justify-center p-6 bg-white bg-opacity-20 shadow-xl rounded-lg">
            <FaPlaneDeparture className="text-6xl text-primary-600 mb-4" />
            <h3 className="text-3xl font-extrabold">1500+</h3>
            <p className="text-lg font-medium">Trips Taken</p>
          </div>

          {/* Positive Reviews */}
          <div className="flex flex-col items-center justify-center p-6 bg-white bg-opacity-20 shadow-xl rounded-lg">
            <FaThumbsUp className="text-6xl text-primary-600 mb-4" />
            <h3 className="text-3xl font-extrabold">2000+</h3>
            <p className="text-lg font-medium">5-Star Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};



const CarouselClient = () => {
  const texts = [
    '“SATravelcations made our honeymoon unforgettable! Every detail was perfectly planned, and we felt like VIPs throughout the trip.”',
    '“We had the most amazing family vacation thanks to SATravelcations. They took care of everything, allowing us to truly relax and enjoy our time together.”',
    '“Our luxury getaway was absolutely flawless. From the private tours to the exquisite accommodations, SATravelcations went above and beyond our expectations.”',
    '“I can’t thank SATravelcations enough for organizing our adventure in the bush. The safari experience was breathtaking, and every moment was pure magic.”',
    '“The personalized service from SATravelcations was second to none. We felt like the entire trip was tailored specifically to our desires.”',
    '“From booking to the final day of our trip, SATravelcations ensured that every detail was perfect. We’re already planning our next journey with them!”',
    '“I will never forget the romantic getaway SATravelcations organized for us. The private villa was beyond beautiful, and we felt like we were in paradise.”',
    '“Thank you, SATravelcations, for creating such an unforgettable experience! We’ve already recommended you to all our friends and family!”',
  ];

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

  return (
    <section className="py-16  ">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight mb-8 sm:text-5xl ">
          What Our Clients Say
        </h2>

        <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 text-white">
          <Carousel
            className="rounded-xl"
          >
            {texts.map((text, i) => (
              <div key={i} className="relative h-full">
                {/* Image using next/image component */}
                <Image
                  src={`${images[i]}`}
                  alt={`Client Review Image ${i + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 rounded-xl"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center bg-black bg-opacity-50 p-8 rounded-xl">
                  <h3 className="text-lg sm:text-4xl font-semibold max-w-xs sm:max-w-3xl text-center">
                    {text}
                  </h3>
                  <p className="text-center text-sm sm:text-lg">Client, SATravelcations</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};





