import { Carousel } from 'components/carousel';
import { CarouselClient } from 'components/Carousel/Carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Hero from 'components/hero';
import Footer from 'components/layout/footer';
import Features from 'components/widgets/Features';
import Features2 from 'components/widgets/Features2';
import Features3 from 'components/widgets/Features3';

export const metadata = {
  description: 'Explore South Africa with us. Tailor-made Travel Experiences for You. Experience the art of luxury travel with expertly curated experiences. Unwind in style, from lavish resorts to exclusive escapes!',
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

      <div className="mx-auto relative sm:px-20 py-5">
      <Features/>
      <Features2/>
      <Features3/>

      <h2 className="text-3xl sm:text-5xl text-center mb-10 sm:mb-20 font-site">
        2035 in Numbers
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 sm:justify-between items-center font-site">
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] block sm:leading-[200px] text-purple-site">
            40K
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:right-0 sm:top-[190px]">
            Dollars
            <br />
            Raised
          </span>
        </div>
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] sm:leading-[200px] text-purple-site">
            8K
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:top-[50px] sm:left-[130px] bg-white">
            Happy 
            <br />
            Travelers 
          </span>
        </div>
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] sm:leading-[200px] text-purple-site">
            100%
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:top-[130px] sm:left-[150px] bg-white">
          Satisfaction 
            <br />
            Rate
          </span>
        </div>
      </div>

<CarouselClient/>
      
      </div>

      <Footer />
    </>
  );
}
