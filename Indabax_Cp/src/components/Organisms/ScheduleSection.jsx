import React from 'react';
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
