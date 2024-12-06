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
  title: "SA Travelcations | Your Gateway to Unforgettable Adventures",
  description:
    "Discover South Africa and beyond with SA Travelcations. From luxury escapes to adventurous getaways, we create tailor-made travel experiences just for you. Start your dream journey today!",
  keywords:
    "SA Travelcations, travel agency, South Africa travel, luxury travel, customized travel experiences, adventure getaways, romantic escapes, family vacations",
  openGraph: {
    type: 'website',
    title: "SA Travelcations | Your Gateway to Unforgettable Adventures",
    description:
      "Discover South Africa and beyond with SA Travelcations. From luxury escapes to adventurous getaways, we create tailor-made travel experiences just for you. Start your dream journey today!",
    url: "https://www.satravelcations.co.zw",
    images: [
      {
        url: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "A stunning view of South African landscapes",
      },
    ],
  },
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
















