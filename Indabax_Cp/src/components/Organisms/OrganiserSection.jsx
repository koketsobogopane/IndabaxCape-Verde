import React, { useState, useEffect, useRef } from 'react';
import Card from '../molecules/Card';
import { getImageURL } from '../../utils/image-utils';

const OrganisersSection = ({ title, description, organisers }) => { // Renamed 'organisers' to 'speakers' for clarity
    // Dummy data for demonstration if 'speakers' prop is not provided
    const dummySpeakers = [
        { id: 'patricia-wilkinson', name: 'Patricia Wilkinson', role: 'HR Consultant', imageUrl: getImageURL('patricia-wilkinson.png', 'speakers') },
        { id: 'kendra-cremin', name: 'Kendra Cremin', role: 'UI/UX Designer', imageUrl: getImageURL('kendra-cremin.png', 'speakers') },
        { id: 'dennis-jacobson', name: 'Dennis Jacobson', role: 'Finance Consultant', imageUrl: getImageURL('dennis-jacobson.png', 'speakers') },
        { id: 'patricia-wilkinson-2', name: 'Patricia Wilkinson', role: 'HR Consultant', imageUrl: getImageURL('patricia-wilkinson-2.png', 'speakers') },
        { id: 'john-doe', name: 'John Doe', role: 'Marketing Specialist', imageUrl: getImageURL('john-doe.png', 'speakers') },
        { id: 'jane-smith', name: 'Jane Smith', role: 'Software Engineer', imageUrl: getImageURL('jane-smith.png', 'speakers') },
    ];

    const displaySpeakers = organisers && organisers.length > 0 ? organisers : dummySpeakers;

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4); // Default for desktop
    const slideTrackRef = useRef(null); // Ref to access the slide container for scroll

    // Function to update slidesToShow based on screen width
    const updateSlidesToShow = () => {
        if (window.innerWidth < 768) {
            setSlidesToShow(1);
        } else if (window.innerWidth < 1024) {
            setSlidesToShow(2);
        } else if (window.innerWidth < 1280) {
            setSlidesToShow(3);
        } else {
            setSlidesToShow(4);
        }
    };

    // Effect to set initial slidesToShow and listen for resize
    useEffect(() => {
        updateSlidesToShow(); // Set initial value
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);


    // Custom navigation logic
    const nextSlide = () => {
        if (slideTrackRef.current) {
            const track = slideTrackRef.current;
            // Calculate actual width of a single slide item including its horizontal padding
            const slideItem = track.children[0];
            const slideWidth = slideItem ? slideItem.offsetWidth : 0;
            const scrollAmount = slideWidth; // Scroll by the width of one card

            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });

            setCurrentSlide((prev) => (prev + 1) % displaySpeakers.length);
        }
    };

    const prevSlide = () => {
        if (slideTrackRef.current) {
            const track = slideTrackRef.current;
            // Calculate actual width of a single slide item including its horizontal padding
            const slideItem = track.children[0];
            const slideWidth = slideItem ? slideItem.offsetWidth : 0;
            const scrollAmount = slideWidth; // Scroll by the width of one card

            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

            setCurrentSlide((prev) => (prev - 1 + displaySpeakers.length) % displaySpeakers.length);
        }
    };

    // Autoplay functionality
    useEffect(() => {
        const autoplayInterval = setInterval(() => {
            nextSlide();
        }, 3000); // Autoplay every 3 seconds

        return () => clearInterval(autoplayInterval); // Clear interval on component unmount
    }, [displaySpeakers.length, slidesToShow]); // Added slidesToShow as dependency for autoplay logic


    return (
        <section className="py-12 sm:py-20 bg-gray-100 text-gray-900 font-inter relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section: Tagline, Title, and Navigation Arrows */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    {/* Tagline and Title */}
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">
                            Event Organizers
                        </p>
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            {title || "Meet Our Speakers"}
                        </h1>
                    </div>

                    {/* Custom Navigation Arrows */}
                    <div className="flex space-x-4 hidden">
                        <button
                            className="p-3 bg-brand-accent hover:bg-brand-accent/80 rounded-full shadow-md transition-colors duration-300"
                            onClick={prevSlide}
                            aria-label="Previous Speaker"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        </button>
                        <button
                            className="p-3 bg-brand-accent hover:bg-brand-accent/80 rounded-full shadow-md transition-colors duration-300"
                            onClick={nextSlide}
                            aria-label="Next Speaker"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                {displaySpeakers.length > 0 ? (
                    <div className="relative mx-auto max-w-6xl ">
                        {/* Custom scrollable container for the carousel */}
                        <div
                            ref={slideTrackRef}
                            className="flex overflow-x-scroll justify-center snap-x snap-mandatory scroll-smooth" // Changed to overflow-x-scroll
                            style={{ WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }} // Cross-browser scrollbar hiding
                        >
                            {displaySpeakers.map((organisers) => (
                                <div
                                    key={organisers.id}
                                    className="flex-shrink-0 snap-start px-3" // Changed snap-center to snap-start
                                    style={{ width: `${100 / slidesToShow}%` }} // Dynamic width for responsive slides
                                >
                                    <Card
                                        imageUrl={organisers.imageUrl}
                                        title={organisers.name}
                                        description={organisers.role}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No speakers to display.</p>
                )}
            </div>
        </section>
    );
};

export default OrganisersSection;
