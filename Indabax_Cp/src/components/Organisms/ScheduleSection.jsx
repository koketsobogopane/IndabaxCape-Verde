import React from 'react';
<<<<<<< HEAD
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
=======
import { GeoAltFill, ClockFill } from 'react-bootstrap-icons';

const ScheduleSection = () => {
  const scheduleItems = [
    {
      date: '15 February 2024', // Assuming dates might be the same for many entries or change per entry
      name: 'Registration & Welcome Coffee', // Changed to reflect an agenda item
      location: 'Conference Foyer, Main Building',
      time: '9:00am - 10:00am',
      actionText: 'Check-in', // Action for this schedule item
      actionLink: '#registration',
    },
    {
      date: '15 February 2024',
      name: 'Opening Keynote: AI in Africa',
      location: 'Grand Auditorium',
      time: '10:00am - 11:00am',
      actionText: 'Join Session',
      actionLink: '#keynote',
    },
    {
      date: '15 February 2024',
      name: 'Parallel Session A: Deep Learning Research',
      location: 'Room 101',
      time: '11:00am - 12:30pm',
      actionText: 'View Details',
      actionLink: '#session-a',
    },
    {
      date: '15 February 2024',
      name: 'Lunch Break & Networking',
      location: 'Dining Hall',
      time: '12:30pm - 1:30pm',
      actionText: 'Explore Food',
      actionLink: '#lunch',
    },
    {
      date: '15 February 2024',
      name: 'Workshop: Applied Machine Learning',
      location: 'Lab Room 205',
      time: '1:30pm - 3:00pm',
      actionText: 'Register Now',
      actionLink: '#workshop',
    },
    {
      date: '16 February 2024', // Example of a new day
      name: 'Morning Coffee & Tech Demos',
      location: 'Exhibition Area',
      time: '9:00am - 9:30am',
      actionText: 'See Demos',
      actionLink: '#demos',
    },
    // Add more schedule items as needed
  ];

  return (
    <section className="bg-neutral-light text-text-body py-16 lg:py-24">
      {/* Changed background to neutral-light, and default text to text-body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-brand-accent text-sm uppercase tracking-wider mb-2">
            Event Schedule
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading">
            Comprehensive Agenda for the Conference
          </h2>{' '}
          {/* Heading uses text-heading */}
        </div>

        {/* Schedule List */}
        <div className="space-y-6">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row items-center justify-between
                         hover:shadow-lg transition-shadow duration-300"
              /* Card background is now white, with a subtle gray border */
            >
              {/* Date Column */}
              <div className="flex-shrink-0 text-center md:text-left mb-4 md:mb-0 md:w-32">
                <p className="text-4xl font-bold text-text-heading leading-none">
                  {item.date.split(' ')[0]}
                </p>{' '}
                {/* Text-heading for bold date */}
                <p className="text-lg text-text-body mt-1">
                  {item.date.substring(item.date.indexOf(' ') + 1)}
                </p>{' '}
                {/* Text-body for month/year */}
              </div>

              {/* Schedule Item Details Column */}
              <div className="flex-grow text-center md:text-left mb-4 md:mb-0 md:ml-8">
                <h3 className="text-2xl font-semibold text-text-heading mb-2">
                  {item.name}
                </h3>{' '}
                {/* Text-heading for session name */}
                <div className="flex items-center justify-center md:justify-start text-text-body text-sm space-x-4">
                  {' '}
                  {/* Text-body for details */}
                  <span className="flex items-center">
                    <GeoAltFill className="mr-1 text-brand-primary" />{' '}
                    {item.location} {/* Icon uses brand-primary */}
                  </span>
                  <span className="flex items-center">
                    <ClockFill className="mr-1 text-brand-primary" />{' '}
                    {item.time} {/* Icon uses brand-primary */}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
>>>>>>> 54a55a691565795f2dbb8235d7956d0610e2458a
