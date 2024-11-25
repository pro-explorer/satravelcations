'use client';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export const CarouselClient = () => {
  const texts = [
    '“SATravelcations made our honeymoon unforgettable! Every detail was perfectly planned, and the experience exceeded all our expectations.”',
    '“From luxurious escapes to adventurous expeditions, SATravelcations delivers the best experiences tailored to our dreams. Truly a once-in-a-lifetime trip.”',
    '“We trust SATravelcations for all our family vacations. The personalized service and attention to detail make every trip special and stress-free.”',
  ];

  const images  = [
    '/images/carousel/pexels-element5-1051075.jpg', // Replace with actual image paths
    '/images/carousel/pexels-te-lensfix-380994-1371360.jpg',
    '/images/carousel/pexels-tima-miroshnichenko-7009867.jpg',
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
