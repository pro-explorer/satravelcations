'use client';

import { CarouselClient } from 'components/Carousel/Carousel';
import Features3 from 'components/widgets/Features3';
import Image from 'next/image';
import AboutHero from './hero';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <div className="relative mx-auto py-5 sm:px-20">
        <div className="mt-12 flex flex-col sm:mt-32 sm:flex-row sm:gap-12">
          <div className="basis-1/3">
            <div className="relative h-[370px]">
              {/*
  
      <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_434,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
  
  */}

              <Image alt="" className="object-cover" src="/images/pexels-vince-2265876.jpg" fill />
            </div>
            <div className="border-blue-site relative border-y-4 bg-white/70 p-8 text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white sm:mt-[-300px] sm:w-60">
              <h3 className="font-site text-2xl">Our Vision</h3>
              <p className="my-6 text-sm">
                To become the leading provider of personalized and memorable travel experiences,
                offering tailor-made packages that exceed customer expectations and inspire a love
                for exploration across South Africa and beyond.
              </p>
              <a
                href="/about"
                className="text-purple-site font-site py-6"
                // data-testid={testIds.HOME_PAGE.OUR_INITIATIVES_CTA}
              >
                Read More
              </a>
            </div>
          </div>
          <div className="basis-2/3">
            <div className="relative h-[370px]">
              {/*
                 <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_615,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
               */}
              <Image
                alt=""
                className="object-cover"
                src="/images/pexels-vitor-milanez-939243811-20057005.jpg"
                fill
              />
            </div>
            <div className="border-blue-site relative border-y-4 bg-white/70 p-8 text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white sm:ml-32 sm:mt-[-430px] sm:w-60">
              <h3 className="font-site text-2xl">Our Mission</h3>
              <p className="my-6 text-sm">
                Our mission is to transform your travel dreams into reality, ensuring every detail
                is meticulously planned for a seamless and unforgettable journey.
              </p>
              <a href="/about" className="text-purple-site font-site py-6">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="mb-12 flex flex-col sm:mt-32 sm:flex-row sm:gap-12">
          <div className="basis-2/3">
            <div className="relative h-[370px] sm:h-[470px]">
              {/*
    <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_682,h_568,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
  */}

              <Image alt="" className="object-cover" src="/images/pexels-pixabay-413960.jpg" fill />
            </div>
            <div className="border-blue-site relative border-y-4 bg-white/70 p-8 text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white sm:ml-44 sm:mt-[-230px] sm:w-60">
              <h3 className="font-site text-2xl">Recent News</h3>
              <p className="my-6 text-sm">
                Get caught up on recent news and our latest achievements in the world of traveling.
              </p>
              <a href="/blog" className="text-purple-site font-site py-6">
                Read More
              </a>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="relative h-[370px] sm:h-[470px]">
              {/*
  
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_486,h_568,al_tr,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
  */}

              <Image
                alt=""
                className="object-cover"
                src="/images/pexels-riciardus-307008.jpg"
                fill
              />
            </div>
            <div className="border-blue-site relative border-y-4 bg-white/70 p-8 text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white sm:ml-32 sm:mt-[-530px] sm:w-60">
              <h3 className="font-site text-2xl">Why Choose Us?</h3>
              <p className="my-6 text-sm">
                SATravelcations offers personalized travel experiences, tailored to your
                preferences. We ensure exceptional service and exclusive deals, creating seamless
                journeys that turn your travel dreams into lasting memories.
              </p>
              <a href="/why-choose-us" className="text-purple-site font-site py-6">
                Read More
              </a>
            </div>
          </div>
        </div>
        <Features3/>
        <CarouselClient />
      </div>
    </>
  );
}
