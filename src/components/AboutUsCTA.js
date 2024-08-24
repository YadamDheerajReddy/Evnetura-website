import React from 'react';
import './AboutUsCTA.css'; // Import the CSS file for animations

const AboutUsCTA = () => {
  return (
    <section className="cta-section py-16 bg-gradient-to-r from-accent to-highlight text-white">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold mb-4">Join Us on Our Journey</h2>
        <p className="text-xl mb-8">
          Whether you're an event-goer or an organizer, Eventura is here to help you create unforgettable experiences.
        </p>
        <a href="/events" className="cta-button bg-white text-accent font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
          Explore Events
        </a>
      </div>
    </section>
  );
};

export default AboutUsCTA;
