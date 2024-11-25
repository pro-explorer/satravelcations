"use client";


import useWeb3Forms from "@web3forms/react";
import Features from 'components/widgets/Features';
import Features2 from 'components/widgets/Features2';
import Features3 from 'components/widgets/Features3';
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function AboutPage() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey =  "7d8db944-b7c1-4c30-b1d3-1f1f1c0cf9ab";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "SATravelcations",
      subject: "New Contact Message from SATravelcations Website"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <div className= "container px-8 mx-auto xl:px-5">
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        About
      </h1>
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
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:right-0 sm:top-[190px]    bg-white/70  text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white     ">
            Dollars
            <br />
            Raised
          </span>
        </div>
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] sm:leading-[200px] text-purple-site">
            8K
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:top-[50px] sm:left-[130px]    bg-white/70  text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white     ">
            Happy 
            <br />
            Travelers 
          </span>
        </div>
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] sm:leading-[200px] text-purple-site">
            100%
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:top-[130px] sm:left-[150px]    bg-white/70  text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white     ">
          Satisfaction 
            <br />
            Rate
          </span>
        </div>
      </div>

    </div>
    </div>
  );
}
