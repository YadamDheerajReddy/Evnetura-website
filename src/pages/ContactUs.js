import React from 'react';
import Header from '../components/Header';
import ContactSectionTitle from '../components/ContactSectionTitle';
import ContactInformation from '../components/ContactInformation';
import ContactForm from '../components/ContactForm';
import SocialMediaLinks from '../components/SocialMediaLinks';
import ContactUsCTA from '../components/ContactUsCTA';
import Footer from '../components/Footer';
// Other components like Footer, etc., will be imported here

const ContactUs = () => {
  return (
    <div>
      <Header />
      <ContactSectionTitle />
      <ContactInformation />
      <ContactForm />
      <SocialMediaLinks />
      <ContactUsCTA />
      <Footer />
    </div>
  );
};

export default ContactUs;
