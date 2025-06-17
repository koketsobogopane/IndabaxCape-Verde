import React from 'react';
import PastEventSection from '../Organisms/PastEventSection'; // Adjust path as needed
import { useParams } from 'react-router-dom';
import Navbar from '../molecules/Navbar';
import FooterSection from '../Organisms/FooterSection';
import { allEventData } from '../../data/data';
import HeroSection from '../molecules/HeroSection';
import { getImageURL } from '../../utils/image-utils';

const EventsTemplate = () => {
    const { eventId } = useParams();


  return (
    <div>
        <Navbar />
        <HeroSection image={getImageURL('heroImage2.jpg', 'Images')} title={`Welcome to the Highlights of IndabaX: ${eventId}`} />
      <PastEventSection {...allEventData[`${eventId}`]} id={eventId} />
      {/* Other content for your page */}
      <FooterSection />
    </div>
  );
};

export default EventsTemplate;