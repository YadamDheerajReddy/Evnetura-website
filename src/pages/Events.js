import React from 'react';
import Header from '../components/Header';
import FilterAndSorting from '../components/FilterAndSorting';
import EventListings from '../components/EventListings';
import FeaturedEvents1 from '../components/FeaturedEvents1';
// import CallToAction1 from '../components/CallToAction1';
import Footer from '../components/Footer';

const Events = () => {
  return (
    <div>
      <Header />
      <FilterAndSorting />
      <EventListings />
      <FeaturedEvents1 />
      {/* <CallToAction1 /> */}
      <Footer />
      {/* Other sections like Featured Events, Call to Action, etc., can go here */}
    </div>
  );
};

export default Events;
