import React from 'react';
import Bg from "../../assets/Images/heroImage.jpg"
import ButtonPrimary from '../atoms/ButtonPrimary';

const ResponsiveBackgroundImage = () => {

    const ResponsiveHeroSection = ({ image, title, descriptiveText, children }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            {/* Overlay for the image */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Abstract Shape (using a div with rotated and skewed styling) */}
            <div
                className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-r from-purple-500/20 to-blue-500/20
                           transform skew-y-[-8deg] origin-bottom opacity-70"
            />

            {/* Text and Content Container */}
            <div className="relative z-10 text-center px-4 py-8 md:py-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8 drop-shadow-lg">
                    {descriptiveText}
                </p>
                {children}
            </div>
        </section>
    );
};

    const heroImage = Bg;
    return (
      <ResponsiveHeroSection
          image={heroImage}
          title="Shape Africa's AI Future"
          descriptiveText="Empowering African AI. Join the IndabaX Cape Verde community to connect, learn, and shape the future of Artificial Intelligence on the continent."
        >
            <ButtonPrimary href="/about">
                Learn More
            </ButtonPrimary>
        </ResponsiveHeroSection>
    )
}

export default ResponsiveBackgroundImage;
