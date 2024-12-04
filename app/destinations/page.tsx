
import Destinations from "components/destinations";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Explore Destinations | SA Travelcations",
  description:
    "Discover breathtaking destinations with SA Travelcations. Explore our curated list of exotic locations, luxurious retreats, and adventurous getaways tailored to your dreams.",
  keywords:
    "SA Travelcations destinations, travel destinations, exotic locations, luxury retreats, adventurous getaways, South Africa travel, curated travel experiences, explore destinations",
  authors: [],
  robots: "index, follow",
};



export default async function DestinationsPage() {

  //const destinations = await getPages()

  return (
    <>
      <Destinations/>
    </>
  );
}
