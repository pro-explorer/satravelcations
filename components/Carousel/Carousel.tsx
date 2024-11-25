'use client';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export const CarouselClient = () => {
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

  const images  = [
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
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-20 sm:mt-40">
      <Carousel>
        {texts.map((text, i) => (
          <div key={i} className="relative h-full">
            {/* Image using next/image component */}
            <Image 
              src={`${images[i]}`} 
              alt={`Carousel image ${i + 1}`} 
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col gap-14 items-center justify-center bg-black bg-opacity-50 text-white p-8">
              <h3 className="text-lg sm:text-4xl max-w-xs sm:max-w-3xl font-site text-center">
                {text}
              </h3>
              <p className="text-center">Client, SATravelcations</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
