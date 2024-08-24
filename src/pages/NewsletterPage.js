import React from 'react';
import Header from '../components/Header';
import NewsletterSectionTitle from '../components/NewsletterSectionTitle';
import NewsletterIntro from '../components/NewsletterIntro';
import SubscriptionForm from '../components/SubscriptionForm';
import SocialMediaLinksNL from '../components/SocialMediaLinksNL';
import AboutUsCTA from '../components/AboutUsCTA';
import Footer from '../components/Footer';
// Other components like Call to Action, Footer, etc., will be imported here

const NewsletterPage = () => {
  return (
    <div>
      <Header />
      <NewsletterSectionTitle />
      <NewsletterIntro />
      <SubscriptionForm />
      <SocialMediaLinksNL />
      <AboutUsCTA />
      <Footer />
      {/* Other sections like Call to Action, Footer, etc., will go here */}
    </div>
  );
};

export default NewsletterPage;
