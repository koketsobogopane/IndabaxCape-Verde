import React from 'react';
import Bg from '../../assets/Images/heroImage.jpg'; // Your hero background image
import ButtonPrimary from '../atoms/ButtonPrimary'; // Your primary button component
import CountdownTimer from './CountdownTimer'; // Your countdown timer component
import { ClockFill, GeoAltFill } from 'react-bootstrap-icons'; // Import icons for date/location

const ResponsiveBackgroundImage = () => {
  // Define event-specific content for easy modification
  const eventTagline = "Africa's Premier AI & Innovation Event";
  const eventTitle = 'IndabaX Cape Verde Conference';
  const eventDate = '26-28 October 2026'; // Example date
  const eventLocation = 'Praia, Cape Verde'; // Example location
  const eventShortPitch =
    "Empowering Africa's future through Artificial Intelligence."; // A concise and impactful sentence
  const targetDate = '2026-10-26T09:00:00+02:00'; // Make sure this matches your event's start date/time

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Overlay for the image - keeps text readable */}
      <div className="absolute inset-0 bg-black/60" />


      <div
        className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-brand-secondary /* Reduced height */
                   transform skew-y-[-6deg] origin-bottom opacity-15"
      />
      {/* Main Content Container - centered and responsive width */}
      <div className="relative z-10 text-center px-4 py-8 md:py-16 max-w-4xl mx-auto">
        {/* Event Tagline - positioned above the main title, slightly smaller */}
        <p className="text-brand-accent text-base sm:text-lg uppercase tracking-widest mb-4 drop-shadow-lg">
          {eventTagline}
        </p>

        {/* Main Event Title - **Dominant Element**, large and bold */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg leading-none">
          {eventTitle}
        </h1>

        {/* Event Date & Location - Grouped, prominent, with icons */}
        <div className="flex flex-col sm:flex-row justify-center items-center text-white mb-8 sm:mb-10 drop-shadow-lg">
          <p className="text-xl sm:text-3xl font-bold mr-0 sm:mr-6 mb-2 sm:mb-0">
            <ClockFill className="inline-block mr-3 text-brand-accent" />{' '}
            {eventDate}
          </p>
          <p className="text-xl sm:text-3xl font-bold">
            <GeoAltFill className="inline-block mr-3 text-brand-accent" />{' '}
            {eventLocation}
          </p>
        </div>

        {/* Short, Engaging Pitch - concise summary */}
        <p className="text-lg sm:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 drop-shadow-lg">
          {eventShortPitch}
        </p>

        {/* Countdown Timer - clearly visible, distinct block */}
        <div className="mb-12">
          {' '}
          {/* Increased margin below the countdown for more separation */}
          <CountdownTimer targetDate={targetDate} />
        </div>

        {/* Call to Action Button - remains strong and actionable */}
        <ButtonPrimary href="/register">
          {' '}
          {/* Ensure this links to your actual registration page */}
          Register Now
        </ButtonPrimary>
      </div>
    </section>
  );
};

export default ResponsiveBackgroundImage;
