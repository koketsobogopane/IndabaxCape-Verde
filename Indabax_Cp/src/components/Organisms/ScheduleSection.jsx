import React, { useState } from 'react';
import ButtonSecondary from '../atoms/ButtonSecondary';
import { BoxArrowInUpRight } from 'react-bootstrap-icons';
import { getImageURL } from '../../utils/image-utils';
// Link is not explicitly imported from react-router-dom as CustomButtonPrimary handles <a> tags directly.

// Placeholder for ButtonPrimary. If you have a global ButtonPrimary component,
// ensure its styling matches this, or replace this with your actual imported component.
const CustomButtonPrimary = ({ children, className = '', href, ...props }) => {
    const baseClasses = `bg-brand-accent hover:bg-brand-accent/70 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 text-lg inline-block ${className}`;

    if (href) {
        // Render as an anchor tag for external/internal links
        return (
            <a href={href} className={baseClasses} {...props}>
                {children}
            </a>
        );
    }
    // Otherwise, render as a button
    return (
        <button
            className={baseClasses}
            type="button"
            {...props}
        >
            {children}
        </button>
    );
};

// Generic SVG Icon component to provide icons without external library dependencies
const GenericIcon = ({ size = 16, children, className = '' }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 16 16" // Common viewBox for 16x16 pixel icons
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {children}
    </svg>
);

const ScheduleSection = () => {
    // Detailed agenda items with image and speaker information, mirroring the image layout
    const fullAgenda = [
        {
            id: 1,
            day: 'Day One',
            date: 'May 25, 2024',
            time: '10.00 AM - 12.00 PM',
            location: '26/C Asana, New York',
            title: 'Business World Event Introduction',
            image: 'event_id_1.jpg', // Placeholder image
            speaker1: {
                name: 'Alex Roberton',
                role: 'UI/UX Designer',
                avatar: "https://placehold.co/50x50/F06292/FFFFFF?text=AR" // Placeholder avatar
            },
            speaker2: {
                name: 'Alexys Archer',
                role: 'WP Developer',
                avatar: "https://placehold.co/50x50/8BC34A/FFFFFF?text=AA" // Placeholder avatar
            },
        },
        {
            id: 2,
            day: 'Day Two',
            date: 'May 25, 2024',
            time: '10.00 AM - 12.00 PM',
            location: '26/C Asana, New York',
            title: 'Workshops Keynote so Elevate Craft',
            image: 'event_id_2.jpg',
            speaker1: {
                name: 'Alex Roberton',
                role: 'UI/UX Designer',
                avatar: "https://placehold.co/50x50/F06292/FFFFFF?text=AR"
            },
            speaker2: {
                name: 'Alexys Archer',
                role: 'WP Developer',
                avatar: "https://placehold.co/50x50/8BC34A/FFFFFF?text=AA"
            },
        },
        {
            id: 3,
            day: 'Day Three',
            date: 'May 25, 2024',
            time: '10.00 AM - 12.00 PM',
            location: '26/C Asana, New York',
            title: 'Sustainability the Future Business',
            image: 'event_id_3.jpg',
            speaker1: {
                name: 'Alex Roberton',
                role: 'UI/UX Designer',
                avatar: "https://placehold.co/50x50/F06292/FFFFFF?text=AR"
            },
            speaker2: {
                name: 'Alexys Archer',
                role: 'WP Developer',
                avatar: "https://placehold.co/50x50/8BC34A/FFFFFF?text=AA"
            },
        },
        // Add more events for Day One, Day Two, Day Three as needed to fill out the schedule
        {
            id: 4,
            day: 'Day One', // Example of another event on Day One
            date: 'May 25, 2024',
            time: '02.00 PM - 03.30 PM',
            location: 'Main Hall, New York',
            title: 'Advanced AI Architectures',
            image: 'event_id_3.jpg',
            speaker1: {
                name: 'Jane Doe',
                role: 'AI Researcher',
                avatar: "https://placehold.co/50x50/AFB42B/FFFFFF?text=JD"
            },
            speaker2: {
                name: 'John Smith',
                role: 'Lead Engineer',
                avatar: "https://placehold.co/50x50/D32F2F/FFFFFF?text=JS"
            },
        },
    ];

    // Extract unique days to create the pagination buttons
    const days = [...new Set(fullAgenda.map(event => event.day))];
    // State to manage which day's schedule is currently active/displayed
    const [activeDay, setActiveDay] = useState(days[0] || ''); // Default to the first day

    // Filter the events to display only those belonging to the active day
    const filteredEvents = fullAgenda.filter(event => event.day === activeDay);

    return (
        <section className="py-16 topography text-gray-800 font-inter"> {/* Changed background to light gray */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title and Subtitle */}
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">
                        EVENT SCHEDULE
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"> {/* Changed text to darker gray */}
                        Our Events Schedule Plan
                    </h2>
                </div>

                {/* Day Navigation / Pagination Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                    {days.map((day) => (
                        <button
                            key={day} // Unique key for each day button
                            onClick={() => setActiveDay(day)} // Update active day on click
                            className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300
                                        ${activeDay === day ? 'bg-brand-accent/20 text-brand-accent' : 'bg-transparent text-gray-600 hover:text-brand-accent'} {/* Adjusted colors for light background */}
                                        focus:outline-none focus:ring-2 focus:ring-brand-accent`}
                        >
                            {/* Calendar icon for the day button */}
                            <GenericIcon size={30} className="mb-1">
                                <path d="M12 11h1v1h-1v-1zm-1 0h1v1h-1v-1zm-2 0h1v1h-1v-1zm-5 0h1v1h-1v-1zm-2 0h1v1h-1v-1zM7 7h1v1h-1V7zm-2 0h1v1h-1V7zm-2 0h1v1h-1V7zm0 4h1v1h-1v-1zm2 0h1v1h-1v-1zm5-5h1v1h-1V7zm-2 0h1v1h-1V7zM8 5V3H6V2h2V0h1v2h2v1H9v2H8z"/>
                                <path d="M3 11a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H3zm11-7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4z"/>
                            </GenericIcon>
                            <span className="text-base font-semibold">{day}</span>
                            {/* Display the date associated with the first event of that day */}
                            <span className="text-xs">{fullAgenda.find(e => e.day === day)?.date || ''}</span>
                        </button>
                    ))}
                </div>

                {/* Event Cards Display */}
                <div className="grid grid-cols-1 gap-8">
                    {filteredEvents.map((event) => (
                        <div
                            key={event.id} // Unique key for each event card
                            className="relative bg-white rounded-lg shadow-xl overflow-hidden /* Changed background to white */
                                       flex flex-col md:flex-row transform transition-transform duration-300 hover:scale-[1.01]"
                        >
                            {/* Numbered Circle for Event ID */}
                            <div className="absolute -left-4 -top-4 sm:top-1/2 sm:-translate-y-1/2 md:top-auto md:bottom-auto
                                            w-16 h-16 sm:w-20 sm:h-20
                                            bg-brand-accent rounded-full flex items-center justify-center
                                            text-white text-2xl sm:text-3xl font-bold shadow-lg z-10
                                            md:-left-6"> {/* Adjusted positioning for medium screens */}
                                {String(event.id).padStart(2, '0')}
                            </div>

                            {/* Event Image Section */}
                            <div className="w-full md:w-1/2 flex items-center justify-center overflow-hidden">
                                <img
                                    src={getImageURL(event.image, 'Images')}
                                    alt={event.title}
                                    className="w-full h-64 md:h-full object-cover"
                                />
                            </div>

                            {/* Event Content Section */}
                            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between items-start text-left">
                                {/* Time and Location Info */}
                                <p className="text-gray-600 text-sm font-medium mb-2 flex items-center gap-2"> {/* Changed text to darker gray */}
                                    {/* Clock Icon SVG */}
                                    <GenericIcon size={16}>
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                        <path d="M8 12A4 4 0 1 1 8 4a4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                    </GenericIcon>
                                    {event.time} |
                                    {/* Location Icon SVG */}
                                    <GenericIcon size={16}>
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </GenericIcon>
                                    {event.location}
                                </p>

                                {/* Event Title */}
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"> {/* Changed text to darker gray */}
                                    {event.title}
                                </h3>

                                {/* Speaker Details */}
                                <div className="flex flex-col sm:flex-row gap-6 w-full mb-6">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={event.speaker1.avatar}
                                            alt={event.speaker1.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-300" /* Adjusted border color */
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-900">{event.speaker1.name}</p> {/* Changed text to darker gray */}
                                            <p className="text-sm text-gray-600">{event.speaker1.role}</p> {/* Changed text to darker gray */}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={event.speaker2.avatar}
                                            alt={event.speaker2.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-300" /* Adjusted border color */
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-900">{event.speaker2.name}</p> {/* Changed text to darker gray */}
                                            <p className="text-sm text-gray-600">{event.speaker2.role}</p> {/* Changed text to darker gray */}
                                        </div>
                                    </div>
                                </div>

                                {/* Purchase Ticket Button - styled to match the image's specific yellow/green button */}
                                <ButtonSecondary 
                                >
                                    PURCHASE TICKET NOW
                                </ButtonSecondary>
                            </div>
                        </div>
                    ))}
                </div>

                {/* "View Full Agenda" button */}
                <div className="mt-12 text-center">
                    <CustomButtonPrimary href="/agenda"> {/* Uses the CustomButtonPrimary for consistency */}
                        View Full Agenda
                    </CustomButtonPrimary>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
