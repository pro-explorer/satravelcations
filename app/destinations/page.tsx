"use client";

import { DestinationGrid } from "components/destination-griditem";
export default function DestinationsPage() {

  return (
    <div className= "container px-8 mx-auto xl:px-5">
     
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
      Destinations
      </h1>


      
      <DestinationGrid/>
    </div>
  );
}
