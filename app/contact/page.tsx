"use client";

import useWeb3Forms from "@web3forms/react";
import ContactForm from "components/widgets/contact-form";
import siteMetadata from "data/siteMetadata";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa"; // Importing icons from react-icons

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
  const [message, setMessage] = useState("");

  // Please update the Access Key in the Sanity CMS - Site Config Page
  const apiKey = "7d8db944-b7c1-4c30-b1d3-1f1f1c0cf9ab";

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
    <div className="container mx-auto px-6 py-2 lg:py-6">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          We'd Love to Hear From You
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Have questions or need assistance? Contact us and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Whether you have a question, feedback, or need support, we’re here to help. You can either
            fill out the contact form below, or reach out to us via email or phone.
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-center space-x-3">
              <FaMapPin className="w-6 h-6 text-blue-600" />
              <span className="text-gray-600 dark:text-gray-400">
                {siteMetadata.officeAddress}
              </span>
            </div>

            {/* Google Maps Link */}
            <div className="flex items-center space-x-3">
              <FaMapPin className="w-6 h-6 text-blue-600" />
              <a
                href="https://maps.app.goo.gl/mWkDkyAVBcNBc6v96"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Google Maps
              </a>
            </div>

            {/* Google Maps Iframe */}
            <div className="w-full mt-6">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed/v1/place?q=YOUR_PLACE_NAME&key=YOUR_GOOGLE_MAPS_API_KEY"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>

            {/* Email */}
            {siteMetadata?.email && (
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-6 h-6 text-green-600" />
                <a
                  href={`mailto:${siteMetadata.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {siteMetadata.email}
                </a>
              </div>
            )}

            {/* Phone */}
            {siteMetadata?.phone && (
              <div className="flex items-center space-x-3">
                <FaPhone className="w-6 h-6 text-red-600" />
                <a
                  href={`tel:${siteMetadata.phone}`}
                  className="text-blue-600 hover:underline"
                >
                  {siteMetadata.phone}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
