'use client';

import { DestinationGrid } from 'components/destination-griditem';
import Hero from './hero';
export default function DestinationsPage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-8 xl:px-5">
        <h1
          id="destinations-headline"
          className="text-brand-primary my-3 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug"
        >
          Travel Destinations
        </h1>

        <DestinationGrid />
      </div>
    </>
  );
}
