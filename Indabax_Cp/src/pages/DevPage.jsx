import React from 'react';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import Navbar from '../components/molecules/Navbar';
import IconButton from '../components/atoms/IconButton';
import ResponsiveBackgroundImage from '../components/molecules/ResponsiveBackgroundImage';
import Card from '../components/molecules/Card';
import SecondaryCard from '../components/molecules/SecondaryCard';
import headshot from "../assets/Images/DummyHeadshot1.jpg"
import OrganisersSection from '../components/Organisms/OrganiserSection';
import Footer from '../components/Organisms/FooterSection';
import FooterSection from '../components/Organisms/FooterSection';
import CommentCard from '../components/molecules/commentCard';
import EventTile from '../components/molecules/EventTile';
import LinkCard from '../components/molecules/LinkCard';
import AboutSection from '../components/Organisms/AboutSection';

function DevPage() {
  return (
    <>
      <Navbar />
      <ResponsiveBackgroundImage />
      <br />
      <br />
      
      <br />
      <br />

      <h1>DevPage</h1>
      <br />
      <br />
      <ButtonPrimary
        buttonName={'Button'}
        buttonColor={'#006FEE'}
        textColor={'white'}
      />
      <br />
      <br />
      <IconButton
        buttonColor={'#006FEE'}
        buttonIcon={<i className="bi bi-list-nested" />}
      />
      <br />
      <br />
      <div className="w-75 p-5"><Card
       imageUrl={headshot}
       title = "Rishard Wilson"
       description= "Very importand person"
       additionalDescription={"maybe LinkedIn"}
      /></div>
      <br />
      <br />
      <br />
      <div className="w-full p-5">
        <SecondaryCard/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <OrganisersSection title={'Organizers'} description={"This is a simple description"}  />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <FooterSection />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="w-[25%]">
          <CommentCard />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="w-[25%]">
          <EventTile />
        </div>
        <br />
        <br />
        <br />
        <div className='w-[25%]'>
          <LinkCard card={{}}/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <AboutSection />
        <br />
        <br />
        <br />
      
    </>
  );
}

export default DevPage;
