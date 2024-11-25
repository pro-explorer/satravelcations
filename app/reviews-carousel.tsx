 "use client"
 
 import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaUserCircle } from 'react-icons/fa';

const reviews = [
  {
    text: "SATravelcations made our honeymoon unforgettable! Every detail was perfectly planned, and we felt like VIPs throughout the trip.",
    author: "Client, SATravelcations",
  },
  {
    text: "We had the most amazing family vacation thanks to SATravelcations. They took care of everything, allowing us to truly relax and enjoy our time together.",
    author: "Client, SATravelcations",
  },
  {
    text: "Our luxury getaway was absolutely flawless. From the private tours to the exquisite accommodations, SATravelcations went above and beyond our expectations.",
    author: "Client, SATravelcations",
  },
  {
    text: "I can’t thank SATravelcations enough for organizing our adventure in the bush. The safari experience was breathtaking, and every moment was pure magic.",
    author: "Client, SATravelcations",
  },
  {
    text: "The personalized service from SATravelcations was second to none. We felt like the entire trip was tailored specifically to our desires.",
    author: "Client, SATravelcations",
  },
];

const ReviewsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = carouselRef.current;
    if (container && container.children.length > 0) {
      const cardWidth = (container.children[0] as HTMLElement).clientWidth + 16; // Card width + margin
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < reviews.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  return (
    <section className="py-20 ">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold ">What Our Clients Say</h2>
          <p className="text-lg  mt-4 max-w-2xl mx-auto">
            Hear from our happy clients about their unforgettable experiences with SATravelcations.
          </p>
        </div>

        {/* Scrollable Area */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll scroll-smooth space-x-4 pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="flex-none w-80 shadow-lg rounded-lg p-6 flex-shrink-0 relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Review Text */}
                <p className=" text-base italic leading-relaxed mb-6 text-center">
                  "{review.text}"
                </p>

                {/* Star Ratings */}
                <div className="flex items-center justify-center space-x-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar key={starIndex} />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-center mt-4">
                  <FaUserCircle className=" text-3xl mr-3" />
                  <p className=" font-semibold">{review.author}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-primary-600 rounded-full  p-3 shadow-lg hover:bg-primary-100 focus:outline-none"
            disabled={currentIndex === 0}
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-primary-600 rounded-full p-3 shadow-lg hover:bg-primary-100 focus:outline-none"
            disabled={currentIndex === reviews.length - 1}
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
              onClick={() => scrollToIndex(index)}
            ></span>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ReviewsCarousel;
