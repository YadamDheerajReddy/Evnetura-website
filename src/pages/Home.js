import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedEvents from '../components/FeaturedEvents';
import HowItWorks from '../components/HowItWorks';
import PopularCategories from '../components/PopularCategories';
import CallToAction from '../components/CallToAction';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedEvents />
      <HowItWorks />
      <PopularCategories />
      <CallToAction />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;
