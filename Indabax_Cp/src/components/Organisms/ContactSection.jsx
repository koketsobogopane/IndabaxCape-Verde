import React from 'react';
import { Phone, Envelope } from 'react-bootstrap-icons'; // Import icons

const ContactSection = () => {
    return (
        // Changed bg-gray-900 to bg-brand-primary for the section background
        <section className="py-16 bg-brand-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Contact Form and Info */}
                    {/* Changed bg-gray-800 to bg-brand-secondary for the info/form card */}
                    <div className="bg-brand-secondary p-8 rounded-lg shadow-xl">
                        {/* text-white for heading is already good */}
                        <h2 className="text-3xl font-bold mb-4 text-white">
                            Get in touch with us
                        </h2>
                        {/* Changed text-gray-400 to text-neutral-medium for descriptive text */}
                        <p className="text-neutral-medium mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </p>

                        {/* Phone and Email Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* Phone */}
                            <div className="flex items-start">
                                {/* Changed text-gray-400 to text-brand-accent for icons */}
                                <Phone className="text-brand-accent text-3xl mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    {/* text-white for heading is already good */}
                                    <h4 className="text-xl font-semibold mb-1">Phone</h4>
                                    {/* Changed text-gray-300 to text-neutral-medium for phone numbers */}
                                    <p className="text-neutral-medium">+01 23 276 254 2458</p>
                                    <p className="text-neutral-medium">+01 23 276 254 2458</p>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="flex items-start">
                                {/* Changed text-gray-400 to text-brand-accent for icons */}
                                <Envelope className="text-brand-accent text-3xl mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    {/* text-white for heading is already good */}
                                    <h4 className="text-xl font-semibold mb-1">Email</h4>
                                    {/* Changed text-gray-300 to text-neutral-medium for email addresses */}
                                    <p className="text-neutral-medium">yourmail.one@gmail.com</p>
                                    <p className="text-neutral-medium">yourmail.one@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="emailAddress" className="sr-only">Email address</label>
                                    <input
                                        type="email"
                                        id="emailAddress"
                                        placeholder="Email address"
                                        // Changed bg-gray-700, placeholder-gray-400, border-gray-600, focus:ring-gray-400
                                        className="w-full p-3 rounded-md bg-brand-primary text-white placeholder-text-subtle border border-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="fullName" className="sr-only">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        placeholder="Full Name"
                                        // Changed bg-gray-700, placeholder-gray-400, border-gray-600, focus:ring-gray-400
                                        className="w-full p-3 rounded-md bg-brand-primary text-white placeholder-text-subtle border border-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="yourMessage" className="sr-only">Your message</label>
                                <textarea
                                    id="yourMessage"
                                    rows="5"
                                    placeholder="Your message"
                                    // Changed bg-gray-700, placeholder-gray-400, border-gray-600, focus:ring-gray-400
                                    className="w-full p-3 rounded-md bg-brand-primary text-white placeholder-text-subtle border border-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                // Removed gradient, using solid brand-accent and its hover state (consistent with RegistrationForm)
                                className="w-full bg-brand-accent hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Google Maps Embed */}
                    {/* Changed bg-gray-800 to bg-brand-secondary for the map card */}
                    <div className="bg-brand-secondary rounded-lg shadow-xl overflow-hidden h-[400px] lg:h-full">
                        <iframe
                            // NOTE: The src for Google Maps embed is likely incorrect/placeholder.
                            // You'll need to replace "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.228514936357!2d28.02674395!3d-26.17700205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c609a3d4d4d%3A0xc3d3f9e9a4f6d3a!2sJohannesburg%20CBD%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1716217200000!5m2!1sen!2sza"
                            // with a proper Google Maps Embed API URL for your specific location.
                            // Example: https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Space+Needle,Seattle+WA
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.228514936357!2d28.02674395!3d-26.17700205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c609a3d4d4d%3A0xc3d3f9e9a4f6d3a!2sJohannesburg%20CBD%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1716217200000!5m2!1sen!2sza" 
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