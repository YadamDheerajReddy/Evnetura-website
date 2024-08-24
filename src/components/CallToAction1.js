import React from 'react';
import './CallToAction1.css'; // Import the CSS file

const CallToAction1 = () => {
  return (
    <section className="cta-section py-16 bg-gradient-to-r from-accent to-highlight text-white">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-poppins font-bold mb-4">Can’t Find What You’re Looking For?</h2>
        <p className="text-xl mb-8">Try searching again or explore our featured events.</p>
        <a href="/events" className="cta-button bg-white text-accent font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out">
          Explore Events
        </a>
      </div>
    </section>
  );
};

export default CallToAction1;
