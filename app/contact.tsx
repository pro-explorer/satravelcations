 "use client"
 
import ContactForm from 'components/widgets/contact-form';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <section className="relative py-16">
      {/* Background Image for the entire section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-background.jpg"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50" // Slightly reduced opacity for the background image
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        <div className="lg:flex items-center justify-between gap-12">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 text-center lg:text-left text-white relative z-10 px-4">
            {/* Text overlay with background for better contrast */}
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl">
                Get in Touch
              </h2>
              <p className="text-lg mb-8 sm:text-xl">
                Have questions or need assistance with your travel plans? Fill out the form below, and one of our travel specialists will be in touch with you shortly.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2 w-full bg-white bg-opacity-90 shadow-lg rounded-lg p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;