import React, { useState, useEffect } from 'react';
import {getImageURL} from '../../utils/image-utils'
import ButtonPrimary from '../atoms/ButtonPrimary';
import ButtonSecondary from '../atoms/ButtonSecondary';
import { GeoAlt } from 'react-bootstrap-icons';

const ResponsiveBackgroundImage = () => {
    // Define event-specific content as seen in the provided image
    const Bg = getImageURL('heroImage.jpg', 'Images')
    const eventTagline = "WE ARE COMING FOR";
    const eventTitle = 'INDABAX CAPE VERDE 2025';
    // The target date and location are explicitly shown in the countdown section of the image
    const targetDate = '2025-11-30T00:00:00'; 
    const eventLocationText = 'University of Santiago - Praia Campus, Tahiti';
    // Get the URL for the hero asset (e.g., the musician image)
    const heroAssetURL = getImageURL('heroAsset.png', 'Images');

    // Countdown Timer Logic (integrated directly into this component for simplicity)
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const Hexagon = ({ className, size = 100 }) => (
    <svg 
        className={className} 
        width={size} 
        height={size * (173.2 / 200)} // Maintain aspect ratio for a regular hexagon
        viewBox="0 0 200 173.2" // Viewbox for a hexagon with max width 200 and height 173.2
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Path data for a regular hexagon */}
        <path d="M 200 86.6 L 150 173.2 L 50 173.2 L 0 86.6 L 50 0 L 150 0 Z" />
    </svg>
);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isCounting, setIsCounting] = useState(true);

    // Effect to update the countdown every second
    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();
            // Stop the countdown when the target date is reached
            if (Object.keys(newTimeLeft).length === 0 && newTimeLeft.constructor === Object) {
                setIsCounting(false);
                clearInterval(timer);
            }
            setTimeLeft(newTimeLeft);
        }, 1000);

        // Cleanup the interval on component unmount to prevent memory leaks
        return () => clearInterval(timer);
    }, [targetDate]); // Re-run effect if targetDate changes

    // Generate the countdown timer components (Days, Hours, Minutes, Seconds)
    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval] && timeLeft[interval] !== 0) {
            return null; // Don't render if the value is zero or undefined
        }

        return (
            <div 
                key={interval} 
                className="flex flex-col items-center justify-center border-1 border-white/20  mx-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-md min-w-[70px] sm:min-w-[90px]"
            >
                {/* Display the time value, padded with a leading zero if necessary */}
                <span className="text-3xl sm:text-4xl font-extrabold text-white leading-none">
                    {String(timeLeft[interval]).padStart(2, '0')}
                </span>
                {/* Display the interval label (Days, Hours, etc.) */}
                <span className="text-xs sm:text-sm text-white font-medium uppercase mt-1">
                    {interval}
                </span>
            </div>
        );
    });

    return (
        <section
            className="relative min-h-screen flex flex-col justify-between bg-cover bg-fixed bg-center overflow-hidden" // Added overflow-hidden
            style={{ backgroundImage: `url(${Bg})` }}
        >
            {/* Dark overlay to ensure text readability on top of the background image */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Main Content Area: Flex container to align content to the left and image to the right */}
            {/* Uses px-4 for smaller screens, and md:px-8 for larger screens to control edge alignment */}
            <div className="relative z-10 flex flex-grow flex-col md:flex-row items-center sm:justify-between justify-end px-4 md:px-8 pt-8 md:pt-16 max-w-7xl mx-auto w-full">
                {/* Left section: Text and Buttons */}
                {/* Responsive width for text block and image */}
                <div className="flex flex-col items-start text-left w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
                    {/* Event Tagline */}
                    <p className="text-white text-base sm:text-lg uppercase tracking-widest mb-2 drop-shadow-lg font-inter">
                        {eventTagline}
                    </p>

                    {/* Main Event Title */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight font-inter">
                        {eventTitle}
                    </h1>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        {/* Register Button */}
                       <ButtonPrimary>
                        Register
                       </ButtonPrimary>
                        {/* Schedules Button: Re-added as per original design intention if needed */}
                        <ButtonSecondary
                        >
                            SCHEDULES
                        </ButtonSecondary>
                    </div>
                </div>

                {/* Right side: Hero Asset Image (e.g., musician) */}
                {/* Uses responsive width and centers the image within its allocated space */}
                <div className="w-full md:w-1/2 lg:w-3/5 flex justify-center items-center">

                    <Hexagon className="absolute z-0 top-1/4 left-[10%] transform -translate-x-1/2 -translate-y-1/2 text-brand-accent opacity-30 animate-pulse-slow" size={120} />
                    <Hexagon className="absolute z-0 bottom-1/4 right-[5%] transform translate-x-1/2 translate-y-1/2 text-brand-accent opacity-20 animate-pulse-medium" size={150} />
                    <Hexagon className="absolute z-0 top-[60%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 text-brand-accent opacity-15 animate-pulse-fast" size={80} />
                    <Hexagon className="absolute z-0 bottom-[5%] left-[40%] transform -translate-x-1/2 translate-y-1/2 text-brand-accent opacity-25 animate-pulse-slow" size={100} />
                    <Hexagon className="absolute z-0 top-[5%] right-[25%] transform -translate-x-1/2 -translate-y-1/2 text-brand-accent opacity-10 animate-pulse-medium" size={90} />
                    <Hexagon className="absolute z-0 top-[80%] right-[10%] transform -translate-x-1/2 -translate-y-1/2 text-brand-accent opacity-15 animate-pulse-fast" size={70} />
                    <Hexagon className="absolute z-0 bottom-[60%] left-[5%] transform -translate-x-1/2 translate-y-1/2 text-brand-accent opacity-20 animate-pulse-slow" size={110} />


                    <img
                        src={heroAssetURL}
                        alt="hero asset"
                        className="relative sm:top-15 w-full h-auto object-contain max-w-sm sm:max-w-md md:max-w-none" // Responsive image sizing
                        style={{ maxWidth: '800px' }} // Fallback for maximum explicit width
                    />
                     <Hexagon className="absolute z-0 top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-brand-accent opacity-25" size={80} />
                    <Hexagon className="absolute z-0 bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-brand-accent opacity-35" size={100} />
                     <Hexagon className="absolute z-0 top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-brand-accent opacity-25" size={80} />
                    <Hexagon className="absolute z-0 bottom-2/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-brand-accent opacity-35" size={100} />
                </div>
            </div>

            {/* Bottom Bar: Contains the Countdown Timer, Date, and Location */}
            {/* Full width, semi-transparent background, responsive padding */}
            <div className="relative z-10 bg-white/10 backdrop-blur-sm p-4  sm:px-8 sm:py-6 w-full max-w-[1260px] mx-auto sm:rounded-t-md ">
                {/* Inner container to align content with main hero section */}
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center w-full px-0 md:px-0"> {/* Removed px to avoid double padding */}
                    {/* Countdown Timer Display */}
                    <div className="flex items-center space-x-2 mb-4 sm:mb-0 justify-center w-full sm:w-auto">
                        {isCounting && timerComponents.length ? (
                            timerComponents
                        ) : (
                            <span className="text-xl sm:text-2xl font-bold text-white text-center">
                                The event has started!
                            </span>
                        )}
                    </div>
                    {/* Date and Location Text */}
                    <div className="text-center sm:text-right text-white w-full sm:w-auto">
                        <p className="text-xl sm:text-4xl font-semibold mb-1">30 January 2025</p>
                        <p className="text-sm sm:text-2xl flex items-center justify-center sm:justify-end gap-2 text-gray-300">
                            {/* Using a more explicit icon import for GeoAlt */}
                            <GeoAlt className='fill-brand-accent' />
                            {eventLocationText}
                        </p>
                    </div>
                </div>
            </div>

            
        </section>
    );
};

export default ResponsiveBackgroundImage;