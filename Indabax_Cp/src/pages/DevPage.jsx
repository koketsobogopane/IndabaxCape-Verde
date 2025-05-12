import React from 'react';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import Navbar from '../components/molecules/Navbar';
import IconButton from '../components/atoms/IconButton';
import ResponsiveBackgroundImage from '../components/molecules/ResponsiveBackgroundImage';

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
        buttonIcon={<i class="bi bi-list-nested" />}
      />
      <br />
      <br />
    </>
  );
}

export default DevPage;
