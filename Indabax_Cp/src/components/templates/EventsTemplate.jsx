import React from 'react';
import PastEventSection from '../Organisms/PastEventSection'; // Adjust path as needed
import { useParams } from 'react-router-dom';
import Navbar from '../molecules/Navbar';
import FooterSection from '../Organisms/FooterSection';
import { allEventData } from '../../data/data';

const EventsTemplate = () => {
    const { eventId } = useParams();


  return (
    <div>
        <Navbar />
      <PastEventSection {...allEventData[`${eventId}`]} id={eventId} />
      {/* Other content for your page */}
      <FooterSection />
    </div>
  );
};

export default EventsTemplate;