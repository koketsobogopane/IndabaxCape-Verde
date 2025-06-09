import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import ButtonPrimary from '../atoms/ButtonPrimary'; // Assuming your button component
import { CalendarDayFill, StarFill, MicFill } from 'react-bootstrap-icons'; // Icons for visual appeal

const ScheduleSection = () => {
    // Curated highlights for the summary view
    const agendaSummary = [
        {
            day: 'Day 1: October 26',
            icon: <CalendarDayFill size={30} className="text-brand-accent" />, // Day icon
            titleHighlight: 'Opening Keynote & AI Landscape', // Main highlight for the day
            otherHighlights: [
                'Ethical AI Panel Discussion',
                'Networking Reception',
            ],
        },
        {
            day: 'Day 2: October 27',
            icon: <StarFill size={30} className="text-brand-accent" />, // Stars icon for key day
            titleHighlight: 'Generative AI Workshop & Keynote',
            otherHighlights: [
                'Interactive Workshops (Parallel)',
                'Gala Dinner & Awards Ceremony',
            ],
        },
        {
            day: 'Day 3: October 28',
            icon: <MicFill size={30} className="text-brand-accent" />, // Microphone icon for closing
            titleHighlight: 'AI Policy & Community Roundtable',
            otherHighlights: [
                'Breakout Sessions',
                'Closing Remarks',
            ],
        },
    ];

    return (
        <section className="py-16 bg-neutral-light text-text-body">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">
                    PROGRAMME
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-heading mb-12">
                    Conference Highlights
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {agendaSummary.map((day, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left flex flex-col items-center">
                            {/* Icon for the day, centered */}
                            <div className="mb-4">{day.icon}</div>
                            
                            {/* Day title */}
                            <h3 className="text-2xl font-bold text-brand-primary mb-4 text-center">{day.day}</h3>
                            
                            {/* Main highlight for the day, visually distinct */}
                            <p className="text-lg font-semibold text-text-heading mb-3 px-2">
                                {day.titleHighlight}
                            </p>

                            {/* Other smaller highlights */}
                            <ul className="list-none space-y-2 text-text-body w-full px-2">
                                {day.otherHighlights.map((highlight, hIndex) => (
                                    <li key={hIndex} className="flex items-start text-sm sm:text-base">
                                        <span className="mr-2 text-brand-accent flex-shrink-0">•</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Quick Link to Full Agenda - prominent button */}
                <div className="mt-12">
                    <Link to="/agenda"> {/* IMPORTANT: You'll need to create a dedicated /agenda page */}
                        <ButtonPrimary>
                            View Full Agenda
                        </ButtonPrimary>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;