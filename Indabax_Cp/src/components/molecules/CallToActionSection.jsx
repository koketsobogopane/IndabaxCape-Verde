import React from 'react';
import ButtonPrimary from '../atoms/ButtonPrimary'; // Assuming this component is themed or will be adapted

const CallToActionSection = () => {
    return (
        // Changed background from gradient to bg-brand-secondary for a solid brand color
        <section className="py-20 bg-brand-secondary text-white text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                    Join the Movement: Shape the Future of AI in Africa
                </h2>
                {/* Text is already white, opacity-90 is good */}
                <p className="text-lg text-white mb-10 opacity-90">
                    Whether you're a seasoned researcher, an aspiring student, or an organization eager to contribute, there's a place for you in the IndabaX community.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    {/* First Button: Solid White background with brand-primary text */}
                    <ButtonPrimary
                        href="/register"
                        // Changed text-purple-600 to text-brand-primary, hover to neutral-light
                        className=" text-brand-primary hover:bg-neutral-light"
                    >
                        Register for the Next IndabaX
                    </ButtonPrimary>
                    {/* Second Button: Transparent with white border and brand-primary text on hover */}
                    <ButtonPrimary
                        href="/contact"
                        // Changed hover:text-purple-600 to hover:text-brand-primary
                        className="bg-transparent border border-white hover:bg-white hover:text-brand-primary"
                    >
                        Become a Partner
                    </ButtonPrimary>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;