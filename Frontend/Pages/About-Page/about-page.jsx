import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/navbar';
import SmallScreen from '../../Components/SmallScreen/small-screen';
import Footer from '../../Components/Footer/footer';
import Kickoff from '../../Components/Kickoff/kickoff';

const AboutPage = () => {
  const [mobileMenu, setMobileMenu] = useState(false); 

  return (
    <>
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} Session = "#about"/>
      <Kickoff />
      <Footer />
      <SmallScreen />
    </>
  );
};

export default AboutPage;
