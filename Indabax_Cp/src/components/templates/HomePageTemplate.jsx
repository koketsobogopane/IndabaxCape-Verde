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
<<<<<<< HEAD
  whyAttendData
} from '../../data/data';
import SpeakersSection from '../molecules/SpeakersSection';
import ContactSection from '../Organisms/ContactSection';
import WhyAttendSection from '../Organisms/WhyAttendSection';

=======
} from '../../data/data';
import SpeakersSection from '../molecules/SpeakersSection';
import ContactSection from '../Organisms/ContactSection';
>>>>>>> 54a55a691565795f2dbb8235d7956d0610e2458a

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
<<<<<<< HEAD
      <WhyAttendSection {...whyAttendData}/>
      <SpeakersSection />
      <ScheduleSection />
      <SectionCard />   
=======
      <SectionCard />
      <SpeakersSection />
      <ScheduleSection />
>>>>>>> 54a55a691565795f2dbb8235d7956d0610e2458a
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
<<<<<<< HEAD
      <FAQSection externalFAQs={indabaXCaboVerdeFAQs.slice(8)}/>
=======
      <FAQSection externalFAQs={indabaXCaboVerdeFAQs.slice(8)} />
>>>>>>> 54a55a691565795f2dbb8235d7956d0610e2458a
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default HomePageTemplate;
