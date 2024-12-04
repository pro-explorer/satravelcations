
import About from "components/about";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SA Travelcations | Your Adventure Starts Here",
  description:
    "Discover SA Travelcations, your trusted partner in creating unforgettable travel experiences. From luxurious escapes to adventurous getaways, we tailor every journey to your needs.",
  keywords:
    "SA Travelcations, travel agency, adventure blog, luxury escapes, romantic getaways, family vacations, South Africa travel, travel planning, customized travel",
  authors: [],
  robots: "index, follow",
};

export default function AboutPage() {
  return (
    <>
   <About/>
    </>
  );
}
