import React from 'react';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import Introduction from '../components/Introduction';
import MissionStatement from '../components/MissionStatement';
import OurStory from '../components/OurStory';
import OurValues from '../components/OurValues';
import AboutUsCTA from '../components/AboutUsCTA';
import Footer from '../components/Footer';
// Other components like Footer, etc., will be imported here

const AboutUs = () => {
  return (
    <div>
      <Header />
      <SectionTitle />
      <Introduction />
      <MissionStatement />
      <OurStory />
      <OurValues />
      <AboutUsCTA />
      <Footer />
    </div>
  );
};

export default AboutUs;
