import React from 'react';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import Navbar from '../components/molecules/Navbar';
import IconButton from '../components/atoms/IconButton';
import ResponsiveBackgroundImage from '../components/molecules/ResponsiveBackgroundImage';
import Card from '../components/molecules/Card';

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
      <div className="w-75 p-5"><Card /></div>
      
    </>
  );
}

export default DevPage;
