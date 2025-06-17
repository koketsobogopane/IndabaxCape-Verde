import React from 'react';
import HeroSection from '../molecules/HeroSection';
import RegistrationForm from '../molecules/RegistrationForm';
import { CalendarEvent, Clock } from 'react-bootstrap-icons'; // For info section icons

// Placeholder image for Register hero
// Ensure this image exists at the specified path and fits the professional aesthetic
import RegisterHeroImage from '../../assets/Images/heroImage2.jpg'; 
import Navbar from '../molecules/Navbar';
import FooterSection from '../Organisms/FooterSection';
import ContactSection from '../Organisms/ContactSection';


const RegisterPageTemplate = () => {
    // Event details for display
    const indabaXEventDate = '2025-10-26T09:00:00+02:00'; // Match the date used in your Countdown
    const registrationDeadline = '2025-09-30'; // Example deadline
    const earlyBirdDeadline = '2025-07-31'; // Example early bird deadline

    return (
        // Changed bg-gray-900 to bg-brand-primary for the whole page background
        <div className="bg-brand-primary min-h-screen"> 
            <Navbar />
            {/* Hero Section for Registration */}
            <HeroSection
                image={RegisterHeroImage}
                title="Register for IndabaX Capo Verde 2025"
                descriptiveText="Secure your spot at the forefront of African AI. Complete the form below to join delegates, researchers, and innovators."
                // No countdown here, as it's the registration page.
            />

            <section className="py-16 text-white"> {/* text-white is good for this dark section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Information Section (Dates, Fees, etc.) */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Important Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                            {/* Key Dates Cards */}
                            <div className="bg-brand-secondary p-6 rounded-lg shadow-md flex items-center">
                                {/* Changed text-green-400 to text-brand-accent for icons */}
                                <CalendarEvent className="text-brand-accent text-3xl mr-4" />
                                <div>
                                    <h4 className="text-xl font-semibold mb-1">Event Dates</h4>
                                    {/* Changed text-gray-300 to text-neutral-medium */}
                                    <p className="text-neutral-medium">October 26-30, 2025</p>
                                </div>
                            </div>
                            <div className="bg-brand-secondary p-6 rounded-lg shadow-md flex items-center">
                                {/* Changed text-green-400 to text-brand-accent for icons */}
                                <Clock className="text-brand-accent text-3xl mr-4" />
                                <div>
                                    <h4 className="text-xl font-semibold mb-1">Early Bird Deadline</h4>
                                    {/* Changed text-gray-300 to text-neutral-medium */}
                                    <p className="text-neutral-medium">{earlyBirdDeadline}</p>
                                </div>
                            </div>
                            <div className="bg-brand-secondary p-6 rounded-lg shadow-md flex items-center">
                                {/* Changed text-green-400 to text-brand-accent for icons */}
                                <CalendarEvent className="text-brand-accent text-3xl mr-4" />
                                <div>
                                    <h4 className="text-xl font-semibold mb-1">Final Registration Closes</h4>
                                    {/* Changed text-gray-300 to text-neutral-medium */}
                                    <p className="text-neutral-medium">{registrationDeadline}</p>
                                </div>
                            </div>
                        </div>

                        {/* Registration Fees Section */}
                        <h3 className="text-2xl font-bold text-white mb-4">Registration Fees</h3>
                        <div className="flex flex-wrap justify-center gap-6 mb-12">
                            {/* Fee Cards */}
                            <div className="bg-brand-secondary p-6 rounded-lg shadow-md text-center flex-1 min-w-[200px] max-w-[300px]">
                                {/* Changed text-purple-400 to text-brand-accent for fee type */}
                                <p className="text-xl font-semibold text-brand-accent mb-2">Student</p>
                                <p className="text-4xl font-bold text-white mb-2">R 500</p>
                                {/* Changed text-gray-400 to text-neutral-medium */}
                                <p className="text-neutral-medium text-sm">Early Bird: R 350</p>
                            </div>
                            <div className="bg-brand-secondary p-6 rounded-lg shadow-md text-center flex-1 min-w-[200px] max-w-[300px]">
                                {/* Changed text-purple-400 to text-brand-accent for fee type */}
                                <p className="text-xl font-semibold text-brand-accent mb-2">Researcher</p>
                                <p className="text-4xl font-bold text-white mb-2">R 800</p>
                                {/* Changed text-gray-400 to text-neutral-medium */}
                                <p className="text-neutral-medium text-sm">Early Bird: R 600</p>
                            </div>
                            <div className="bg-brand-secondary p-6 rounded-lg shadow-md text-center flex-1 min-w-[200px] max-w-[300px]">
                                {/* Changed text-purple-400 to text-brand-accent for fee type */}
                                <p className="text-xl font-semibold text-brand-accent mb-2">Professional</p>
                                <p className="text-4xl font-bold text-white mb-2">R 1200</p>
                                {/* Changed text-gray-400 to text-neutral-medium */}
                                <p className="text-neutral-medium text-sm">Early Bird: R 900</p>
                            </div>
                        </div>

                        {/* Note about Fees */}
                        {/* Changed text-gray-400 to text-neutral-medium */}
                        <p className="text-neutral-medium text-sm italic">
                            All fees are in South African Rand (ZAR) and include access to all main conference sessions, workshops, and networking events. Accommodation and travel are not included.
                        </p>
                    </div>

                    {/* Registration Form Component */}
                    {/* Assuming RegistrationForm will be updated separately or already conforms */}
                    <RegistrationForm />

                    {/* Optional: Important notes or next steps */}
                    {/* Changed text-gray-400 to text-neutral-medium */}
                    <div className="text-center mt-12 text-neutral-medium text-sm">
                        <p>After submitting the form, you will be redirected to our secure payment portal.</p>
                        <p className="mt-2">For any questions, please visit our <a href="/faq" className="text-brand-accent hover:underline">FAQ section</a> or <a href="/contact" className="text-brand-accent hover:underline">Contact Us</a>.</p>
                    </div>
                </div>
                <ContactSection />
            </section>
            
            <FooterSection />
        </div>
    );
};

export default RegisterPageTemplate;