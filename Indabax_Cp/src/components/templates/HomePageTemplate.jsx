import React from 'react';
import ResponsiveBackgroundImage from '../molecules/ResponsiveBackgroundImage';
import heroImage from '../../assets/Images/heroImage.jpg';
import Navbar from '../molecules/Navbar';
import ButtonPrimary from '../atoms/ButtonPrimary';
import FooterSection from '../Organisms/FooterSection';
import SectionCard from '../molecules/SectionCard';
import OrganisersSection from '../Organisms/OrganiserSection';
import Card from '../molecules/Card';
import CommentDisplaySection from '../Organisms/CommentDisplaySection';
import ScheduleSection from '../Organisms/ScheduleSection';
import FAQSection from '../Organisms/FAQSection';
import {
  organisersSectionData,
  commentSectionData,
  dummyheroData,
  eventsData,
  indabaXEventDate,
  indabaXCaboVerdeFAQs,
  whyAttendData
} from '../../data/data';
import SpeakersSection from '../molecules/SpeakersSection';
import ContactSection from '../Organisms/ContactSection';
import WhyAttendSection from '../Organisms/WhyAttendSection';


function HomePageTemplate() {
  const Button = <ButtonPrimary buttonName="Learn More" href="/about" />;
  return (
    <>
      <Navbar />
      <ResponsiveBackgroundImage
        eventDate={indabaXEventDate}
        heroImage={heroImage}
        heroTitle={dummyheroData.heroTitle}
        heroDescription={dummyheroData.heroDescription}
        CallToAction={Button}
      />
      <SectionCard />
      <WhyAttendSection {...whyAttendData}/>  
      <SpeakersSection />
      <ScheduleSection />    
      <OrganisersSection
        title={organisersSectionData.title}
        description={organisersSectionData.description}
        organisers={organisersSectionData.organisers}
      />
      <CommentDisplaySection
        title={commentSectionData.title}
        description={commentSectionData.description}
        comments={commentSectionData.comments}
      />
      <FAQSection externalFAQs={indabaXCaboVerdeFAQs.slice(8)}/>
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default HomePageTemplate;
