"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import Headline from "components/ui/headline";
import { motion } from "framer-motion";
import { ClientReview } from "lib/wix/types";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const testReviews: ClientReview[] = [
  {
    author: "Alice Johnson",
    rating: 5,
    message: "An unforgettable experience! Everything was perfectly planned and exceeded my expectations.",
    date: "2024-01-12",
  },
  {
    author: "Michael Brown",
    rating: 4,
    message: "Excellent service! The team went above and beyond to make our trip seamless.",
    date: "2024-01-14",
    response: "Thank you, Michael! We're glad you enjoyed your trip.",
  },
  {
    author: "Sophia Davis",
    rating: 5,
    message: "The destinations recommended were breathtaking. Can't wait to book with them again!",
    date: "2024-01-15",
  },
  {
    author: "Liam Wilson",
    rating: 4,
    message: "Superb customer service! Quick responses and very accommodating to our needs.",
    date: "2024-01-18",
    response: "Thank you, Liam! We’re happy to have met your expectations.",
  },
  {
    author: "Emily Garcia",
    rating: 5,
    message: "A dream vacation come true. Every detail was meticulously arranged.",
    date: "2024-01-20",
  },
  {
    author: "Noah Martinez",
    rating: 5,
    message: "Loved how they personalized our itinerary. It felt tailor-made just for us.",
    date: "2024-01-22",
  },
  {
    author: "Isabella Lee",
    rating: 4,
    message: "Highly recommend! They take care of everything, so you just enjoy the journey.",
    date: "2024-01-24",
    response: "Thank you for the recommendation, Isabella!",
  },
  {
    author: "James Harris",
    rating: 5,
    message: "Incredible value for money. The trip felt luxurious and worth every penny.",
    date: "2024-01-26",
  },
  {
    author: "Charlotte Moore",
    rating: 5,
    message: "Friendly staff who genuinely care about creating memorable experiences.",
    date: "2024-01-28",
  },
  {
    author: "William Clark",
    rating: 4,
    message: "Everything was smooth and stress-free from booking to the return trip.",
    date: "2024-01-30",
    response: "We’re thrilled to hear that, William! Thank you!",
  },
  {
    author: "Olivia Lewis",
    rating: 5,
    message: "We discovered hidden gems that we wouldn’t have found on our own. Amazing!",
    date: "2024-02-01",
  },
  {
    author: "Benjamin Walker",
    rating: 4,
    message: "The accommodations were top-notch, and the local tours were fantastic.",
    date: "2024-02-02",
    response: "So glad you enjoyed, Benjamin!",
  },
  {
    author: "Amelia Hall",
    rating: 5,
    message: "Prompt and professional service throughout. I felt completely at ease.",
    date: "2024-02-03",
  },
  {
    author: "Lucas Adams",
    rating: 5,
    message: "The food recommendations were spot-on. Loved every meal we tried!",
    date: "2024-02-05",
  },
  {
    author: "Mia Turner",
    rating: 5,
    message: "The team’s knowledge about the destinations was impressive and insightful.",
    date: "2024-02-06",
  },
  {
    author: "Ethan Perez",
    rating: 4,
    message: "Our family trip was unforgettable, thanks to their meticulous planning.",
    date: "2024-02-07",
    response: "Thank you, Ethan! We’re glad your family had a great time.",
  },
  {
    author: "Harper Ramirez",
    rating: 5,
    message: "Exceptional attention to detail. They thought of everything, even the small touches.",
    date: "2024-02-08",
  },
  {
    author: "Henry White",
    rating: 5,
    message: "I appreciate how eco-conscious their travel recommendations were.",
    date: "2024-02-09",
  },
  {
    author: "Ella King",
    rating: 5,
    message: "Truly a hassle-free experience. They took care of all the logistics for us.",
    date: "2024-02-10",
  },
  {
    author: "Jack Scott",
    rating: 5,
    message: "Best travel agency I’ve ever worked with! Already planning our next trip.",
    date: "2024-02-11",
  },
];




export function ClientReviewsCarousel() {
  
  const [clientReviews, setClientReviews] = useState<any[]>(testReviews);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch client reviews dynamically using an API call
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/getReviews');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const reviews = await response.json();
        setClientReviews(reviews);
      } catch (error) {
        setError('Error fetching reviews. Please try again later.');
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    {};
  }, []);

  // Handle scroll to specific index
  const scrollToIndex = (index: number) => {
    const container = carouselRef.current;
    if (container && container.children.length > 0) {
      const cardWidth = (container.children[0] as HTMLElement).clientWidth + 16;
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  // Scroll to the left
  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  // Scroll to the right
  const scrollRight = () => {
    if (currentIndex < clientReviews.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  // Render stars based on the rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        />
      );
    }
    return stars;
  };

  // If loading, show a loader; if error, show an error message
  if (loading) {
    return (
      <div className="text-center py-20">
        <p>Loading reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <Headline
          title="What Our Clients Say"
          subtitle="Hear from our happy clients about their unforgettable experiences with SATravelcations."
          classes={{
            container: "max-w-4xl mx-auto",
            title: "text-4xl font-bold text-gray-800 dark:text-white",
            subtitle: "mt-4 text-lg text-gray-600 dark:text-gray-400",
          }}
        />

        {/* Scrollable Area */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll scroll-smooth space-x-4 pb-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {clientReviews.length > 0 ? (
              clientReviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-80 shadow-lg rounded-lg p-6 flex-shrink-0 relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="font-semibold text-lg mr-2">{review.author}</div>
                    <div className="flex space-x-1 text-yellow-400">{renderStars(review.rating)}</div>
                  </div>
                  <p className="text-gray-700 mb-4">{review.message}</p>
                  <p className="text-sm text-gray-500 italic mb-4">{review.date}</p>
                  {review.response && (
                    <div className="bg-gray-100 p-4 rounded-lg mt-4 border-l-4 border-blue-500">
                      <p className="text-sm text-gray-600">Company Response: {review.response}</p>
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="text-center w-full py-6">
                <p>No reviews available.</p>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-primary-600 rounded-full p-3 shadow-lg hover:bg-primary-100 focus:outline-none"
            disabled={currentIndex === 0}
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-primary-600 rounded-full p-3 shadow-lg hover:bg-primary-100 focus:outline-none"
            disabled={currentIndex === clientReviews.length - 1}
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {clientReviews.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-primary-600" : "bg-gray-300"
              }`}
              onClick={() => scrollToIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
