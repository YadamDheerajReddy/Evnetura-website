import React from 'react';
import { FaSignInAlt, FaSearch, FaTicketAlt } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaSignInAlt className="text-4xl text-accent mb-4" />,
      title: 'Sign Up or Log In',
      description: 'Create an account or log in to start booking events.',
    },
    {
      id: 2,
      icon: <FaSearch className="text-4xl text-accent mb-4" />,
      title: 'Find Your Event',
      description: 'Browse through various events and choose your favorite.',
    },
    {
      id: 3,
      icon: <FaTicketAlt className="text-4xl text-accent mb-4" />,
      title: 'Book Your Ticket',
      description: 'Secure your spot by booking your ticket online.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-poppins font-bold mb-12 text-dark">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map(step => (
            <div key={step.id} className="bg-neutral p-8 rounded-xl shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out">
              <div className="flex flex-col items-center">
                {step.icon}
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
