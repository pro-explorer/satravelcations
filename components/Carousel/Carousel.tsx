'use client';
import { Carousel } from 'flowbite-react';

export const CarouselClient = () => {
  const texts = [
    '“SATravelcations made our honeymoon unforgettable! Every detail was perfectly planned, and the experience exceeded all our expectations.”',
    '“From luxurious escapes to adventurous expeditions, SATravelcations delivers the best experiences tailored to our dreams. Truly a once-in-a-lifetime trip.”',
    '“We trust SATravelcations for all our family vacations. The personalized service and attention to detail make every trip special and stress-free.”',
  ];

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-20 sm:mt-40">
      <Carousel>
        {texts.map((text, i) => (
          <div
            key={i}
            className="flex flex-col gap-14 h-full items-center justify-center bg-blue-600 text-white p-8"
          >
            <h3 className="text-lg sm:text-4xl max-w-xs sm:max-w-3xl font-site">
              {text}
            </h3>
            <p>Client, SATravelcations</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
