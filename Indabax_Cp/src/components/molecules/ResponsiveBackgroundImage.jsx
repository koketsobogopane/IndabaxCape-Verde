import React from 'react';
import Bg from '../../assets/Images/heroImage.jpg';
import ButtonPrimary from '../atoms/ButtonPrimary';
import CountdownTimer from './CountdownTimer';

const ResponsiveBackgroundImage = () => {
  const ResponsiveHeroSection = ({
    image,
    title,
    descriptiveText,
    children,
  }) => {
    return (
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay for the image */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Abstract Shape (using a div with rotated and skewed styling) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 bg-brand-secondary
               transform skew-y-[-8deg] origin-bottom opacity-20"
        />

        {/* Text and Content Container */}
        <div className="relative z-10 text-center px-4 py-8 md:py-16">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 drop-shadow-lg">
            {descriptiveText}
          </p>
          {children}
          {<CountdownTimer targetDate={'2026-10-26T09:00:00+02:00'} />}
        </div>
      </section>
    );
  };

  const heroImage = Bg;
  return (
    <ResponsiveHeroSection
      image={heroImage}
      title="Shape Africa's AI Future"
      descriptiveText="-Empowering African AI. Join the IndabaX Cape Verde Conference to connect, learn, and shape the future of Artificial Intelligence on the continent."
    >
      <ButtonPrimary href="/about">Learn More</ButtonPrimary>
    </ResponsiveHeroSection>
  );
};

export default ResponsiveBackgroundImage;
