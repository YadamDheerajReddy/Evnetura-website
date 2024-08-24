import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUsCTA.css'; // Import the CSS file for animations

const ContactUsCTA = () => {
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    navigate('/newsletter'); // Navigate to the newsletter page
  };

  return (
    <section className="cta-section py-16 bg-gradient-to-r from-accent to-highlight text-white text-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold mb-4">Let’s Stay Connected</h2>
        <p className="text-xl mb-8">We’re just a message away.</p>
        <button
          onClick={handleSubscribeClick}
          className="cta-button bg-white text-accent font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          Subscribe to Newsletter
        </button>
      </div>
    </section>
  );
};

export default ContactUsCTA;
