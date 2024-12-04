"use client";

import ContactForm from "components/contact/contact-form";
import Headline from "components/ui/headline";
import siteMetadata from "data/siteMetadata";
import { motion } from "framer-motion"; // Importing framer-motion
import { FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa"; // Importing icons from react-icons

export default function Contact() {


  return (
    <div className="container mx-auto px-6 py-2 lg:py-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Headline
          title="We'd Love to Hear From You"
          subtitle="Have questions or need assistance? Contact us and we'll get back to you as soon as possible."
          classes={{
            container: "max-w-4xl mx-auto",
            title: "text-4xl font-bold text-gray-800 dark:text-white",
            subtitle: "mt-4 text-lg text-gray-600 dark:text-gray-400",
          }}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
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
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3">
                  <FaMapPin className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {siteMetadata.officeAddress}
                  </span>
                </div>
              </motion.div>

              {/* Google Maps Link */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
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
              </motion.div>

              {/* Google Maps Iframe */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-full mt-6">
                  <iframe
                    className="w-full h-64 rounded-lg"
                    src="https://www.google.com/maps/embed/v1/place?q=YOUR_PLACE_NAME&key=YOUR_GOOGLE_MAPS_API_KEY"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                  ></iframe>
                </div>
              </motion.div>

              {/* Email */}
              {siteMetadata?.email && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="w-6 h-6 text-green-600" />
                    <a
                      href={`mailto:${siteMetadata.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {siteMetadata.email}
                    </a>
                  </div>
                </motion.div>
              )}

              {/* Phone */}
              {siteMetadata?.phone && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <div className="flex items-center space-x-3">
                    <FaPhone className="w-6 h-6 text-red-600" />
                    <a
                      href={`tel:${siteMetadata.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {siteMetadata.phone}
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
