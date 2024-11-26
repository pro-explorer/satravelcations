import Hero from 'app/hero';
import Footer from 'components/layout/footer';
import OurAchievements from 'components/widgets/our-achievements';
import AboutUs from './about';
import { ClientReviewsCarousel } from './client-reviews-carousel';
import ContactUs from './contact';
import FeaturedProducts from './featured-products';
import { BlogHighlightedPosts } from './highlighted-posts';
import { TopDestinations } from './top-destinations';

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
      <FeaturedProducts/>
      <AboutUs/>
      <TopDestinations/>
      <BlogHighlightedPosts/>
      <OurAchievements/>
      <ClientReviewsCarousel />
       <ContactUs/>
      <Footer />
    </>
  );
}
















