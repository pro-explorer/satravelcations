'use client';

import { DestinationGrid } from 'components/destination-griditem';
import Headline from 'components/ui/headline';
import Hero from './hero';


export default async function DestinationsPage() {

  const destinations = []

  return (
    <>
      <Hero />
      <div className="container mx-auto px-8 xl:px-5">
     
<div  id="destinations-headline">
<Headline
          title="Explore Our Destinations"
          subtitle="Handpicked destinations for every traveler, from breathtaking beaches to majestic mountains."
          tagline="Unforgettable Journeys Await"
          classes={{
            container: "max-w-4xl mx-auto ",
          title: "text-5xl ",
          subtitle: "text-2xl ",
          }}
        />
  
</div>
        


        <DestinationGrid />
      </div>
    </>
  );
}
