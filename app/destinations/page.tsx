'use client';

import { DestinationGrid } from 'components/destination-griditem';
import Headline from 'components/ui/headline';
import DestinationsHero from './hero';


export default async function DestinationsPage() {

  //const destinations = await getPages()

  return (
    <>
      <DestinationsHero />
      <div className="container mx-auto px-8 xl:px-5">
     
<div  id="destinations-headline">
<Headline
          title="Explore Our Destinations"
          subtitle="Handpicked destinations for every traveler, from breathtaking beaches to majestic mountains."
          tagline="Unforgettable Journeys Await"
          classes={{
            container: "max-w-4xl mx-auto",
            title: "text-4xl font-bold text-gray-800 dark:text-white",
            subtitle: "mt-4 text-lg text-gray-600 dark:text-gray-400",
          }}
        />
  
</div>
        


        <DestinationGrid />
      </div>
    </>
  );
}
