import { CarouselClient } from 'components/Carousel/Carousel';
import Features3 from 'components/widgets/Features3';
import OurAchievements from 'components/widgets/our-achievements';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AboutHero from './hero';


export const metadata: Metadata = {
  title: "SA Travelcations | Your Adventure Starts Here",
  description:
    "Discover SA Travelcations, your trusted partner in creating unforgettable travel experiences. From luxurious escapes to adventurous getaways, we tailor every journey to your needs.",
  keywords:
    "SA Travelcations, travel agency, adventure blog, luxury escapes, romantic getaways, family vacations, South Africa travel, travel planning, customized travel",
  authors: [],
  robots: "index, follow",
};



const slideInFadeIn = {
  hidden: { opacity: 0, y: '60%' }, // Start off invisible and below
  visible: { opacity: 1, y: '0%' }, // Become visible at actual position
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <div className="relative mx-auto py-5 sm:px-20">
        <motion.div
          className="mt-12 flex flex-col sm:mt-32 sm:flex-row sm:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }} // Trigger animation when 1% is in the viewport, only once
          variants={slideInFadeIn}
          transition={{
            type: 'spring',
            stiffness: 100, // Customize stiffness for smoothness
            damping: 25, // Prevent overshooting
            duration: 1, // Total duration of the animation
          }}
        >
          <div className="basis-1/3">
            <div className="relative h-[370px]">
              <Image
                alt=""
                className="object-cover"
                src="/images/pexels-vince-2265876.jpg"
                fill
              />
            </div>
            <motion.div
              className="border-blue-site relative border-y-4 bg-white/70 p-8 text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white sm:mt-[-300px] sm:w-60"
              variants={slideInFadeIn}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 25,
                duration: 1.2,
              }}
            >
              <h3 className="font-site text-2xl">Our Vision</h3>
              <p className="my-6 text-sm">
                To become the leading provider of personalized and memorable travel experiences,
                offering tailor-made packages that exceed customer expectations and inspire a love
                for exploration across South Africa and beyond.
              </p>
              <a href="/about" className="text-purple-site font-site py-6">
                Read More
              </a>
            </motion.div>
          </div>
          <div className="basis-2/3">
            <div className="relative h-[370px]">
              <Image
                alt=""
                className="object-cover"
                src="/images/pexels-vitor-milanez-939243811-20057005.jpg"
                fill
              />
            </div>
            <motion.div
              className="border-blue-site relative border-y-4 bg-white/70 p-8 text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white sm:ml-32 sm:mt-[-430px] sm:w-60"
              variants={slideInFadeIn}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 25,
                duration: 1.4,
              }}
            >
              <h3 className="font-site text-2xl">Our Mission</h3>
              <p className="my-6 text-sm">
                Our mission is to transform your travel dreams into reality, ensuring every detail
                is meticulously planned for a seamless and unforgettable journey.
              </p>
              <a href="/about" className="text-purple-site font-site py-6">
                Read More
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mb-12 flex flex-col sm:mt-32 sm:flex-row sm:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }} // Trigger animation when 1% is in the viewport, only once
          variants={slideInFadeIn}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            duration: 1,
          }}
        >
          <div className="basis-2/3">
            <div className="relative h-[370px] sm:h-[470px]">
              <Image
                alt=""
                className="object-cover"
                src="/images/pexels-pixabay-413960.jpg"
                fill
              />
            </div>
            <motion.div
              className="border-blue-site relative border-y-4 bg-white/70 p-8 text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white sm:ml-44 sm:mt-[-230px] sm:w-60"
              variants={slideInFadeIn}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 25,
                duration: 1.2,
              }}
            >
              <h3 className="font-site text-2xl">Recent News</h3>
              <p className="my-6 text-sm">
                Get caught up on recent news and our latest achievements in the world of traveling.
              </p>
              <a href="/blog" className="text-purple-site font-site py-6">
                Read More
              </a>
            </motion.div>
          </div>
          <div className="basis-1/3">
            <div className="relative h-[370px] sm:h-[470px]">
              <Image
                alt=""
                className="object-cover"
                src="/images/pexels-riciardus-307008.jpg"
                fill
              />
            </div>
            <motion.div
              className="border-blue-site relative border-y-4 bg-white/70 p-8 text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white sm:ml-32 sm:mt-[-530px] sm:w-60"
              variants={slideInFadeIn}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 25,
                duration: 1.4,
              }}
            >
              <h3 className="font-site text-2xl">Why Choose Us?</h3>
              <p className="my-6 text-sm">
                SATravelcations offers personalized travel experiences, tailored to your
                preferences. We ensure exceptional service and exclusive deals, creating seamless
                journeys that turn your travel dreams into lasting memories.
              </p>
              <a href="/why-choose-us" className="text-purple-site font-site py-6">
                Read More
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Other Components */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }} // Trigger animation when 1% is in the viewport, only once
          variants={slideInFadeIn}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            duration: 1,
          }}
        >
          <Features3 />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }} // Trigger animation when 1% is in the viewport, only once
          variants={slideInFadeIn}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            duration: 1,
          }}
        >
          <OurAchievements />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }} // Trigger animation when 1% is in the viewport, only once
          variants={slideInFadeIn}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            duration: 1,
          }}
        >
          <CarouselClient />
        </motion.div>
      </div>
    </>
  );
}
