import React from 'react';
import { Phone, Envelope } from 'react-bootstrap-icons'; // Import icons

const ContactSection = () => {
  return (
    // Changed main section background to neutral-light, and default text to text-body
    <section className="py-16 bg-neutral-light text-text-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Form and Info */}
          {/* Changed card background to white, added subtle shadow and border */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            {/* Changed heading text to text-text-heading for dark color on light background */}
            <h2 className="text-3xl font-bold mb-4 text-text-heading">
              Get in touch with us
            </h2>
            {/* Changed descriptive text to text-text-body */}
            <p className="text-text-body mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>

            {/* Phone and Email Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Phone */}
              <div className="flex items-start">
                {/* Icons remain brand-accent, as they should pop */}
                <Phone className="text-brand-accent text-3xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  {/* Heading text-text-heading */}
                  <h4 className="text-xl font-semibold mb-1 text-text-heading">
                    Phone
                  </h4>
                  {/* Phone numbers text-text-body */}
                  <p className="text-text-body">+01 23 276 254 2458</p>
                  <p className="text-text-body">+01 23 276 254 2458</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start">
                {/* Icons remain brand-accent */}
                <Envelope className="text-brand-accent text-3xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  {/* Heading text-text-heading */}
                  <h4 className="text-xl font-semibold mb-1 text-text-heading">
                    Email
                  </h4>
                  {/* Email addresses text-text-body */}
                  <p className="text-text-body">yourmail.one@gmail.com</p>
                  <p className="text-text-body">yourmail.one@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="emailAddress" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    placeholder="Email address"
                    // Input fields in light mode: white background, gray text, gray border, accent focus ring
                    className="w-full p-3 rounded-md bg-white text-text-heading placeholder-gray-500 border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Full Name"
                    // Same styling as email input
                    className="w-full p-3 rounded-md bg-white text-text-heading placeholder-gray-500 border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="yourMessage" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="yourMessage"
                  rows="5"
                  placeholder="Your message"
                  // Same styling as other inputs
                  className="w-full p-3 rounded-md bg-white text-text-heading placeholder-gray-500 border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                // Button retains brand-accent, text-white for strong contrast
                className="w-full bg-brand-accent hover:bg-brand-accent/60 text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Column: Google Maps Embed */}
          {/* Map card also changes to white background, subtle shadow and border */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden h-[400px] lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.1356725387445!2d-23.66538032462995!3d15.095849464759313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9358e9c0bcc8a8b%3A0x89914951ca3f5785!2sUniversidade%20de%20Santiago!5e0!3m2!1spt-PT!2sza!4v1748908489630!5m2!1spt-PT!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
