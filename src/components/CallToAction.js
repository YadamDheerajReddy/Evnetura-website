import React from 'react';
import './CallToAction.css'; // Import the CSS file

const CallToAction = () => {
  return (
    <section className="call-to-action py-16 text-white relative overflow-hidden">
      <div className="moving-gradient absolute inset-0 z-0"></div>
      <div className="container mx-auto text-center relative z-10 px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-poppins font-bold mb-4">Ready to Host an Event?</h2>
        <p className="text-xl mb-8">Join our community of event creators and make your event a success.</p>
        <a href="/create-event" className="bg-white text-accent font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
          Start Creating
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
