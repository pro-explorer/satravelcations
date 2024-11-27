"use client";

import ContactForm from "components/widgets/contact-form";
import { motion } from "framer-motion";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="relative py-16 overflow-x-hidden">
      {/* Background Image for the entire section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-background.jpg"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        <motion.div
          className="lg:flex items-center justify-between gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side: Text */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left text-white relative z-10 px-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl">
                Get in Touch
              </h2>
              <p className="text-lg mb-8 sm:text-xl">
                Have questions or need assistance with your travel plans? Fill out the form below, and one of our travel specialists will be in touch with you shortly.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            className="lg:w-1/2 w-full bg-white bg-opacity-90 shadow-lg rounded-lg p-8 my-4"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
