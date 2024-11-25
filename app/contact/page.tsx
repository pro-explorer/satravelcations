"use client";

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import useWeb3Forms from "@web3forms/react";
import ContactForm from "components/widgets/contact-form";
import siteMetadata from "data/siteMetadata";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function ContactPage() {
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
        Contact
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a here to help.</p>
      </div>

      <div className="grid my-10 md:grid-cols-2">
        <div className="my-10">
          <h2 className="text-2xl font-semibold dark:text-white">
            Contact SA Travelcations
          </h2>
          <p className="max-w-sm mt-5">
            Have something to say? We are here to help. Fill up the
            form or send email or call phone.
          </p>

          <div className="mt-5">
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
              <MapPinIcon className="w-4 h-4" />
              <span>{siteMetadata.officeAddress}</span>
            </div>
            {siteMetadata?.email && (
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <EnvelopeIcon className="w-4 h-4" />
                <a href={`mailto:${siteMetadata.email}`}>
                  {siteMetadata.email}
                </a>
              </div>
            )}
            {siteMetadata?.phone && (
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <PhoneIcon className="w-4 h-4" />
                <a href={`tel:${siteMetadata.phone}`}>{siteMetadata.phone}</a>
              </div>
            )}
          </div>
        </div>
        <ContactForm/>
      </div>
    </div>
  );
}
