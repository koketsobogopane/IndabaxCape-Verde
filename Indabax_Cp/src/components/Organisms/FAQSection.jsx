import React from 'react';
import FAQItem from '../atoms/FaqItem';
import ButtonPrimary from '../atoms/ButtonPrimary';

// Change: Accept an externalFAQs prop
const FAQSection = ({ externalFAQs }) => {
    // Use externalFAQs if provided, otherwise use the internal default data
    // This allows FAQSection to be reusable either with its own data or data passed from a page
    const internalFaqs = [
        // Keep some default FAQs here if you want FAQSection to work standalone
        // However, for a dedicated FAQ page, externalFAQs will likely be comprehensive.
        // For now, I'll clear it since the FAQPage will supply all data.
        // Example:
        // {
        //     question: "What is IndabaX?",
        //     answer: "IndabaX is a local version of the Deep Learning Indaba, fostering AI growth..."
        // },
        // ... (your previous default FAQs if any)
    ];

    const faqsToRender = externalFAQs || internalFaqs; // Prioritize externalFAQs

    return (
        <section className="py-16 bg-white dark:bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* The grid layout from the original FAQSection */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Heading and Button */}
                    <div className="md:pr-8 text-left">
                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                            — FAQ
                        </p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            Still have questions? <br /> We're here to help.
                        </h2>
                        {/* The "View All" button makes less sense on a dedicated FAQ page.
                            Instead, we might direct them to Contact.
                            If you still want a "View All" here, it should link to /faq
                            But since this IS the FAQ page, let's change it to "Contact Us" or remove.
                            For now, I'll change it to "Contact Us" and you can adjust.
                        */}
                        <ButtonPrimary href="/Register">
                            Contact Us
                        </ButtonPrimary>
                    </div>

                    {/* Right Column: FAQ Items */}
                    <div>
                        {faqsToRender.length > 0 ? (
                            faqsToRender.map((faq, index) => (
                                <FAQItem
                                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))
                        ) : (
                            <p className="text-gray-600">No FAQs available at the moment. Please check back later.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;