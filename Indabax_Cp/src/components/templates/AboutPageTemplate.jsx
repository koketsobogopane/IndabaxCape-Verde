import React from 'react';
import HeroSection from '../molecules/HeroSection';
import heroImage from '../../assets/Images/heroImage1.jpg';
import Navbar from '../molecules/Navbar';
import FooterSection from '../Organisms/FooterSection';
import AboutSection from '../Organisms/AboutSection';

function AboutPageTemplate() {
  const aboutSectionData = {
    title: 'IndabaX: Empowering African AI Communities',
    description: `

IndabaX is a dynamic initiative, born out of the Deep Learning Indaba's mission to **Strengthen African AI** and ensure African ownership in the AI revolution.  We're a continent-wide movement that empowers local communities to drive the conversation around Machine Learning and Artificial Intelligence.

Since its inception in 2018 as an expansion of the annual Deep Learning Indaba, IndabaX has grown from supporting 13 locally-organized events to a projected 47 in 2024.  These events, held across Africa, have gathered communities ranging from 50 to over 300 participants, significantly broadening the reach of African AI.  Even the challenges of the global pandemic in 2020 and 2021 didn't stop the program. IndabaX events successfully adapted to online and hybrid formats in 23 countries in 2021, and continued supporting 25 countries in 2022, and 36 in 2023.

Through these locally-organized Indabas, we're spreading knowledge, building capacity, and fostering collaboration in individual countries across Africa.  Join us as we learn, teach, research, and build the peer networks that will shape Africa's AI future.  The IndabaX Program is on an upward growth trajectory and we anticipate covering the entire African continent in the coming years.  This is *your* initiative, driving the AI conversation across our beautiful continent.`,
    cards: [
      {
        title: 'Our Mission',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C', // Placeholder image
        linkUrl: '/mission',
      },
      {
        title: 'Our Team',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C', // Placeholder image
        linkUrl: '/team',
      },
    ],
  };
  return (
    <>
      <Navbar />
      <HeroSection title="About Us" image={heroImage} />
      <AboutSection
        title={aboutSectionData.title}
        description={aboutSectionData.description}
        cards={aboutSectionData.cards}
      />
      <FooterSection />
    </>
  );
}

export default AboutPageTemplate;
