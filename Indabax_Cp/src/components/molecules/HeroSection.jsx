import React from 'react';
import CountdownTimer from './CountdownTimer'; // Import the new CountdownTimer component

<<<<<<< HEAD
const HeroSection = ({ image, title, descriptiveText, eventDate, children }) => { // Added eventDate prop
    return (
        <section className="relative bg-cover bg-center min-h-[70vh] top-0 bg-no-repeat py-20 md:py-32" style={{ backgroundImage: `url(${image})` }}>
            {/* Overlay for better text readability */}
            {/* Changed from bg-black/40 to bg-brand-primary with opacity */}
            <div className="absolute inset-0 bg-brand-primary opacity-70" /> 
=======
const HeroSection = ({
  image,
  title,
  descriptiveText,
  eventDate,
  children,
}) => {
  // Added eventDate prop
  return (
    <section
      className="relative bg-cover bg-center min-h-[50vh] top-14 bg-no-repeat py-20 md:py-32"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for better text readability */}
      {/* Changed from bg-black/40 to bg-brand-primary with opacity */}
      <div className="absolute inset-0 bg-brand-primary opacity-70" />
>>>>>>> 54a55a691565795f2dbb8235d7956d0610e2458a

      {/* Blob Shape (now using solid brand colors, adjust visibility/opacity as desired) */}
      {/* Using brand-secondary with opacity for the blob for a subtle effect */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-secondary opacity-30 blur-xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 ${!descriptiveText ? 'md:text-7xl' : ''}`}
        >
          {title}
        </h1>
        {descriptiveText && (
          /* Changed text-gray-200 to text-white for better contrast on the darker overlay */
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-8">
            {descriptiveText}
          </p>
        )}

<<<<<<< HEAD
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 top-10 text-center">
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 ${!descriptiveText ? 'md:text-7xl' : ''}`}>
                    {title}
                </h1>
                {descriptiveText && (
                    /* Changed text-gray-200 to text-white for better contrast on the darker overlay */
                    <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-8"> 
                        {descriptiveText}
                    </p>
                )}
=======
        {/* Countdown Timer */}
        {eventDate && <CountdownTimer targetDate={eventDate} />}
>>>>>>> 54a55a691565795f2dbb8235d7956d0610e2458a

        {children}
      </div>
    </section>
  );
};

export default HeroSection;
