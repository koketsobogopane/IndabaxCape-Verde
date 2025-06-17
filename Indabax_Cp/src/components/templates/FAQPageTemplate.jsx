import React from 'react';
import HeroSection from '../molecules/HeroSection';
import FAQSection from '../Organisms/FAQSection'; // Your existing FAQ section component
import CallToActionSection from '../molecules/CallToActionSection'; // Reusing from AboutPage

// Placeholder image for FAQ hero
import FAQHeroImage from '../../assets/Images/miniAboutUs.jpg'; // Path to a relevant background image for the FAQ page
import Navbar from '../molecules/Navbar';
import FooterSection from '../Organisms/FooterSection';

const FAQPageTemplate = () => {
    // Expanded FAQ data specific to IndabaX Cabo Verde
    const indabaXCaboVerdeFAQs = [
        {
            question: "What is Deep Learning IndabaX Cabo Verde?",
            answer: "Deep Learning IndabaX Cabo Verde is an annual regional event organized in conjunction with the Deep Learning Indaba. It aims to strengthen the African AI community by providing world-class deep learning education, fostering collaborations, and showcasing local research and applications, specifically for the community in Cabo Verde and surrounding Lusophone African countries."
        },
        {
            question: "Who can attend IndabaX Cabo Verde?",
            answer: "The event is open to students, researchers, academics, and professionals from various disciplines who are interested in Deep Learning and Artificial Intelligence. We encourage participation from all levels of experience, from beginners to experts, particularly those based in or with connections to Cabo Verde and the broader African continent."
        },
        {
            question: "When and where will IndabaX Cabo Verde 2025 take place?",
            answer: "IndabaX Cabo Verde 2025 is scheduled for [Specific Dates, e.g., November 15-17, 2025] at [Specific Venue, e.g., University of Cabo Verde, Praia]. Please check our official website for the most up-to-date information on dates and venue."
        },
        {
            question: "What topics will be covered in the program?",
            answer: "The program typically includes tutorials on deep learning fundamentals, advanced research talks, hands-on workshops, poster sessions for local research, and panel discussions on AI's impact in Africa. Topics range from computer vision and natural language processing to reinforcement learning and ethical AI development."
        },
        {
            question: "How do I register for IndabaX Cabo Verde?",
            answer: "Registration details will be announced on our website. Generally, it involves filling out an online form and completing payment (if applicable). Early bird registration discounts are often available. Please subscribe to our newsletter for direct notifications."
        },
        {
            question: "Are there any registration fees?",
            answer: "Registration fees vary by attendee type (e.g., student, academic, industry professional) and registration period (early bird vs. standard). We strive to keep fees affordable to ensure broad accessibility. Specific fee structures will be published on the registration page."
        },
        {
            question: "Are scholarships or financial aid available?",
            answer: "IndabaX Cabo Verde is committed to inclusivity. We often offer a limited number of scholarships or financial aid options to support participants, especially students, who might face financial barriers. Details on how to apply for such assistance will be provided on the registration page."
        },
        {
            question: "How can I submit my research or project?",
            answer: "We welcome submissions from the local and regional AI community. Guidelines for research paper, poster, or project submissions, along with deadlines, will be made available on the 'Call for Papers/Posters' section of our website closer to the event date. Keep an eye on our announcements!"
        },
        {
            question: "Can I volunteer for IndabaX Cabo Verde?",
            answer: "Yes, volunteers are crucial to the success of IndabaX! We will open applications for volunteers closer to the event. This is a great way to contribute to the community, gain experience, and network. Details on roles and application process will be announced."
        },
        {
            question: "What safety measures are in place for in-person attendance?",
            answer: "The health and safety of our attendees are paramount. We will adhere to all local health guidelines and may implement additional measures such as mask mandates, social distancing, enhanced sanitization, and vaccination requirements as necessary. Specific protocols will be communicated closer to the event."
        },
        {
            question: "Who are the key organizers of IndabaX Cabo Verde?",
            answer: "Deep Learning IndabaX Cabo Verde is organized by a dedicated committee of local AI enthusiasts, academics, and researchers, with support from the Deep Learning Indaba leadership. Our goal is to build a self-sustaining and thriving AI community in Cabo Verde."
        },
        {
            question: "How can I contact the organizers if my question isn't listed here?",
            answer: "If your question is not covered in this FAQ, please feel free to reach out to us through our contact page or by emailing [Your IndabaX Cabo Verde Email Address, e.g., info@indabaxcv.org]. We aim to respond within 48 hours."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section for FAQ Page */}
            <Navbar />
            <HeroSection
                image={FAQHeroImage} // Use a relevant background image
                title="Frequently Asked Questions"
                descriptiveText="Find answers to common questions about Deep Learning IndabaX Cabo Verde 2025, registration, program, and logistics."
                // No countdown here
            />

            {/* Main FAQ Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* The main heading for the FAQ section itself, can be more direct than the one in FAQSection */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            Your Questions, Answered
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            We've compiled a list of the most common inquiries about Deep Learning IndabaX Cabo Verde. If you can't find what you're looking for, don't hesitate to contact us.
                        </p>
                    </div>

                    {/* Render the FAQSection component with the full data */}
                    {/* Note: The FAQSection component itself will handle the left/right column layout as defined earlier */}
                    <FAQSection externalFAQs={indabaXCaboVerdeFAQs} />
                </div>
            </section>

            {/* Call to Action Section (Optional, but good for unresolved questions) */}
            <CallToActionSection />
            <FooterSection />
        </div>
    );
};

export default FAQPageTemplate;