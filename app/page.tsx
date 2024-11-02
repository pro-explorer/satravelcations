import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Hero from 'components/hero';
import Footer from 'components/layout/footer';

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
      <Footer />
    </>
  );
}
